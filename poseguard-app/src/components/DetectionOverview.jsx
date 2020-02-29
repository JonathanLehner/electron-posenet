import React from 'react';

function DetectionOverview(props){
    const {
      isstarted, 
      isstopped, 
      isloaded, 
      showVideo, 
      count, 
      startDetection, 
      toggleStopped, 
      toggleVideo
    } = props;
    const noseDistance = props.value.noseDistance;
    const pose_score = noseDistance - (props.calibrated_noseDistance) + 25;
    return (
      <div style={{border: "solid thin black", width: "250px"}}>
        <h5>Current pose</h5>
        { (props.value && props.value.onBreak != true) ?
        <div style={{textAlign: "left", padding: "10px"}}>
          <div>Pose score: {pose_score.toFixed(2)}</div>
          <div>Slouching? {props.value.isSlough ? "yes" : "no"}</div>
          <div>Attention? {(props.value.noAttention == false) ? "yes" : "no"}</div> 
          <div>Distance to screen: {props.value.screenDistance.toFixed(2)} </div>
          <div>Working time: {props.workingTime}</div>
          <div>Looking at screen: {props.lookingAtScreen}</div>
          {props.lookingAway > 0 ? 
            <div>Looking away time: {props.lookingAway}</div> : ""}
        </div>
        : ""}
        { (props.value && props.value.onBreak == true) ? 
        <div>
          <div>Taking a break</div>
          {props.breakTime > 0 ? 
            <div>Break time: {props.breakTime}</div> : ""} 
        </div>
        : ""}
          
      </div>
    )
  }
//noseDistance < (calibrated_noseDistance - 25)
export default DetectionOverview;

