/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
import * as posenet from '@tensorflow-models/posenet';
import * as tf from '@tensorflow/tfjs-node';
import dat from 'dat.gui';
import Stats from 'stats.js';

import {drawBoundingBox, drawKeypoints, drawSkeleton, isMobile, toggleLoadingUI, tryResNetButtonName, tryResNetButtonText, updateTryResNetButtonDatGuiCss} from './demo_util';

const videoWidth = 600;
const videoHeight = 500;
const stats = new Stats();

/**
 * Loads a the camera to be used in the demo
 *
 */
async function setupCamera() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    throw new Error(
        'Browser API navigator.mediaDevices.getUserMedia not available');
  }

  const video = document.getElementById('video');
  video.width = videoWidth;
  video.height = videoHeight;

  const mobile = isMobile();
  const stream = await navigator.mediaDevices.getUserMedia({
    'audio': false,
    'video': {
      facingMode: 'user',
      width: mobile ? undefined : videoWidth,
      height: mobile ? undefined : videoHeight,
    },
  });
  video.srcObject = stream;

  return new Promise((resolve) => {
    video.onloadedmetadata = () => {
      resolve(video);
    };
  });
}

async function loadVideo() {

  const video = await setupCamera();
  video.play();

  return video;
}

const defaultQuantBytes = 2;

const defaultResNetMultiplier = 1.0;
const defaultResNetStride = 32;
const defaultResNetInputResolution = 257;

const guiState = {
  algorithm: 'multi-pose',
  input: {
    architecture: 'ResNet50',
    outputStride: defaultResNetStride,
    inputResolution: defaultResNetInputResolution,
    multiplier: defaultResNetMultiplier,
    quantBytes: defaultQuantBytes,
  },
  singlePoseDetection: {
    minPoseConfidence: 0.1,
    minPartConfidence: 0.5,
  },
  multiPoseDetection: {
    maxPoseDetections: 5,
    minPoseConfidence: 0.15,
    minPartConfidence: 0.1,
    nmsRadius: 30.0,
  },
  output: {
    showVideo: true,
    showSkeleton: true,
    showPoints: true,
    showBoundingBox: false,
  },
  net: null,
};

/**
 * Sets up dat.gui controller on the top-right of the window
 */
function setupGui(cameras, net) {
  guiState.net = net;

  if (cameras.length > 0) {
    guiState.camera = cameras[0].deviceId;
  }

  const gui = new dat.GUI({width: 0});

  let architectureController = null;
  guiState[tryResNetButtonName] = function() {
    architectureController.setValue('ResNet50')
  };
  gui.add(guiState, tryResNetButtonName).name(tryResNetButtonText);
  updateTryResNetButtonDatGuiCss();

  // The input parameters have the most effect on accuracy and speed of the
  // network
  let input = gui.addFolder('Input');
  guiState.architecture = guiState.input.architecture;

  input.open();
  // Pose confidence: the overall confidence in the estimation of a person's
  // pose (i.e. a person detected in a frame)
  // Min part confidence: the confidence that a particular estimated keypoint
  // position is accurate (i.e. the elbow's position)

  let output = gui.addFolder('Output');
  output.add(guiState.output, 'showVideo');
  output.add(guiState.output, 'showSkeleton');
  output.add(guiState.output, 'showPoints');
  output.add(guiState.output, 'showBoundingBox');
  output.open();


}

/**
 * Sets up a frames per second panel on the top-left of the window
 */

 function setupFPS() {
  stats.showPanel(0);  // 0: fps, 1: ms, 2: mb, 3+: custom
  document.getElementById('main').appendChild(stats.dom);
}

/**
 * Feeds an image to posenet to estimate poses - this is where the magic
 * happens. This function loops with a requestAnimationFrame method.
 */

function detectPoseInRealTime(video, net) {
  console.log('detectPoseInRealTime');
  const canvas = document.getElementById('output');
  const ctx = canvas.getContext('2d');
  
  // since images are being fed from a webcam, we want to feed in the
  // original image and then just flip the keypoints' x coordinates. If instead
  // we flip the image, then correcting left-right keypoint pairs requires a
  // permutation on all the keypoints.
  const flipPoseHorizontal = true;

  canvas.width = videoWidth;
  canvas.height = videoHeight;


  // calibration
  let detections = {};
  let calibrationCounter = 5;
  let isCalibrated = false;
  let calibration_values = []
  let calibrated_noseDistance = 150;
  let calibrated_shoulderDistance = 320;

  const calibrate = () => {
    if(isCalibrated == false){
      isCalibrated = true;
      const interval = setInterval(()=>{
        console.log(`calibrate: ${calibrationCounter}`);
        calibration_values.push(detections)

        calibrationCounter-=1;
        if(calibrationCounter == 0){
          console.log(calibration_values);
          calibration_values = calibration_values.filter((x)=>{return Object.keys(x).length !== 0})
          calibrated_noseDistance = calibration_values.map((x)=>{return x['noseDistance']}).reduce((a, b)=>{return a + b;})/calibration_values.length;
          calibrated_shoulderDistance = calibration_values.map((x)=>{return x['shoulderDistance']}).reduce((a, b)=>{return a + b;})/calibration_values.length;

          console.log(calibrated_noseDistance);
          console.log(calibrated_shoulderDistance);

          clearInterval(interval);
        }
      }, 1000);
    }
  }

  //document.querySelector('#eye_distance').innerHTML = JSON.stringify(eyeDistance);

  async function poseDetectionFrame() {
    // console.log('poseDetectionFrame');
    calibrate(); // depends on global variable calibrationCounter
  

    // Begin monitoring code for frames per second
    stats.begin();

    let poses = [];
    let minPoseConfidence;
    let minPartConfidence;
    switch (guiState.algorithm) {
      case 'single-pose':
        break;
      case 'multi-pose':

        // console.log('case multi-pose');
        // https://js.tensorflow.org/api/1.0.0/#browser.fromPixels
        // in node it must be canvas
        const input = tf.browser.fromPixels(canvas);

        let allPoses = await guiState.net.estimatePoses(input, {
          flipHorizontal: false, // false for node, otherwise flipPoseHorizontal
          decodingMethod: 'multi-person',
          maxDetections: guiState.multiPoseDetection.maxPoseDetections,
          scoreThreshold: guiState.multiPoseDetection.minPartConfidence,
          nmsRadius: guiState.multiPoseDetection.nmsRadius,
        });

        poses = poses.concat(allPoses);

        
        /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
        
        const eucli = require('eucli');

        let onBreak = false;
        // do calculations with keypoint values
        if (poses.length == 0) {
          onBreak = true;
          // console.log(onBreak);
          document.querySelector('#on_break').innerHTML = JSON.stringify(onBreak);  
          break;
        } else {
          onBreak = false;
          // console.log(onBreak);
          document.querySelector('#on_break').innerHTML = JSON.stringify(onBreak);  
        }

        const mainPose = poses[0]; // assuming the pose with highest confidence comes first
        // console.log(mainPose);
        document.querySelector('#current_poses').innerHTML = JSON.stringify(mainPose['score']);

        const keypoints = mainPose['keypoints'];
        function getDetection(keypoints, name) {
          return keypoints.filter(function(x) {
            return x['part'] == name;
          });
        }
        
        function getPosition(detection) {
          return [detection[0]['position']['x'], detection[0]['position']['y']];
        }

        function getMiddlePoint(a, b) {
          return [(a[0]+b[0])/2, (a[1]+b[1])/2];
        }

        const leftEyePosition = getPosition(getDetection(keypoints, 'leftEye'));
        const rightEyePosition = getPosition(getDetection(keypoints, 'rightEye'));
        const eyeDistance = eucli(leftEyePosition, rightEyePosition);
        // console.log(eyeDistance);
        document.querySelector('#eye_distance').innerHTML = JSON.stringify(eyeDistance);

        const leftShoulderPosition = getPosition(getDetection(keypoints, 'leftShoulder'));
        const rightShoulderPosition = getPosition(getDetection(keypoints, 'rightShoulder'));
  
        const shoulderDistance = eucli(leftShoulderPosition, rightShoulderPosition);
        // console.log(shoulderDistance);
        document.querySelector('#shoulder_distance').innerHTML = JSON.stringify(shoulderDistance);

        const shoulderMiddlePoint = getMiddlePoint(leftShoulderPosition, rightShoulderPosition);
        const nosePosition = getPosition(getDetection(keypoints, 'nose'));
        const noseDistance = eucli(nosePosition, shoulderMiddlePoint);
        // console.log(noseDistance);
        document.querySelector('#nose_distance').innerHTML = JSON.stringify(noseDistance);
        const isSlough = noseDistance < (calibrated_noseDistance - 25); // 150 or calibration distance - 20
        document.querySelector('#is_sloughing').innerHTML = JSON.stringify(isSlough);

        const screenDistance = (0.5 * calibrated_shoulderDistance)/shoulderDistance; // 320 or calibration distance
        // console.log(screenDistance);
        document.querySelector('#screen_distance').innerHTML = JSON.stringify(screenDistance);
        
        const leftEarScore = getDetection(keypoints, 'leftEar')[0]['score'];
        const rightEarScore = getDetection(keypoints, 'rightEar')[0]['score'];
        // console.log('attention evaluation');
        // console.log(leftEarScore);
        // console.log(leftEarScore < 0.3);
        // console.log(rightEarScore);
        // console.log(rightEarScore < 0.3);
        const noAttention = (leftEarScore < 0.3) || (rightEarScore < 0.3); // could also use minPartConfidence
        // console.log(noAttention);
        document.querySelector('#no_attention').innerHTML = JSON.stringify(noAttention);
        
        function updateDetection() {
          return {
            keypoints, // not necessary
            shoulderDistance, // not necessary
            screenDistance,  
            noseDistance,  // not necessary
            isSlough,
            noAttention, 
            onBreak,
          }
        }
        detections = updateDetection()
        // console.log(detections);
       
        /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
        
        
        minPoseConfidence = +guiState.multiPoseDetection.minPoseConfidence;
        minPartConfidence = +guiState.multiPoseDetection.minPartConfidence;
        break;
    }

    ctx.clearRect(0, 0, videoWidth, videoHeight);

    if (guiState.output.showVideo) {
      ctx.save();
      ctx.scale(-1, 1);
      ctx.translate(-videoWidth, 0);
      ctx.drawImage(video, 0, 0, videoWidth, videoHeight);
      ctx.restore();
    }

    // For each pose (i.e. person) detected in an image, loop through the poses
    // and draw the resulting skeleton and keypoints if over certain confidence
    // scores
    poses.forEach(({score, keypoints}) => {
      if (score >= minPoseConfidence) {
        if (guiState.output.showPoints) {
          drawKeypoints(keypoints, minPartConfidence, ctx);
        }
        if (guiState.output.showSkeleton) {
          drawSkeleton(keypoints, minPartConfidence, ctx);
        }
      }
    });

    // End monitoring code for frames per second
    stats.end();

    requestAnimationFrame(poseDetectionFrame);
  }

  poseDetectionFrame();
}

/**
 * Kicks off the demo by loading the posenet model, finding and loading
 * available camera devices, and setting off the detectPoseInRealTime function.
 */
export async function bindPage() {
  console.log('bindPage');
  toggleLoadingUI(true);
  const net = await posenet.load({
    architecture: guiState.input.architecture,
    outputStride: guiState.input.outputStride,
    inputResolution: guiState.input.inputResolution,
    multiplier: guiState.input.multiplier,
    quantBytes: guiState.input.quantBytes,
    modelUrl: './model-stride32.json',
  });
  console.log('posenet loaded');
  toggleLoadingUI(false);

  let video;

  try {
    video = await loadVideo();
  } catch (e) {
    let info = document.getElementById('info');
    info.textContent = 'this browser does not support video capture,' +
        'or this device does not have a camera';
    info.style.display = 'block';
    throw e;
  }

  setupGui([], net);
  setupFPS();
  detectPoseInRealTime(video, net);
}

navigator.getUserMedia = navigator.getUserMedia ||
    navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
// kick off the demo
bindPage();
console.log('demo');