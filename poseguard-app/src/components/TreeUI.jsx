import React from 'react';
import tree1 from '../images/treeb1.jpg' /* seems to be an issue with Es6 import of images in electron */
import tree2 from '../images/treeb2.jpg'
import tree3 from '../images/treeb3.jpg'
import tree4 from '../images/treeb4.jpg'
import tree5 from '../images/treeb5.jpg'
import sun1 from '../images/sunb1.jpg'
import sun2 from '../images/sunb2.jpg'
import sun3 from '../images/sunb3.jpg'
import sun4 from '../images/sunb4.jpg'
import sun5 from '../images/sunb5.jpg'

function TreeUI (props) {
    const {
      aggregatedPoseScore, 
      currentPoseScore
    } = props;
    return (
      <div style={{border: "solid thin black", width: "600px", height: "400px", position: "relative"}}>
        <div>
          <TreeComponent aggregatedPoseScore={aggregatedPoseScore} />
        </div>
        <div>
          <SunComponent currentPoseScore={currentPoseScore} />
        </div>
      </div>
    )
  }
  
function TreeComponent (props) {
    const {aggregatedPoseScore} = props;
    let img_src;
    console.log(aggregatedPoseScore < 20)
    if (aggregatedPoseScore < 20){
        img_src = tree1; // "tiny tree";
    } else if (aggregatedPoseScore < 40){
        img_src = tree2; // "small tree";
    } else if (aggregatedPoseScore < 60){
        img_src = tree3; //"big tree";
    } else if (aggregatedPoseScore < 80){
        img_src = tree4; // "huge tree";
    } else {
        img_src = tree5; //"You planted a tree!";
    }
    return (
        <div>
            <img src={img_src} style={{
                width: "350px", 
                height: "400px",
                objectFit: "contain"
            }}/>
        </div>
    )
}

function SunComponent (props) {
    const {currentPoseScore} = props;
    let img_src;
    console.log(currentPoseScore < 20)
    if (currentPoseScore < 20){
        img_src = sun1; // "tiny sun";
        document.querySelector('link[rel="icon"]').href="sunb1.ico"
    } else if (currentPoseScore < 40){
        img_src = sun2; // "small sun";
        document.querySelector('link[rel="icon"]').href="sunb2.ico"
    } else if (currentPoseScore < 60){
        img_src = sun3; // "big sun";
        document.querySelector('link[rel="icon"]').href="sunb3.ico"
    } else if (currentPoseScore < 80){
        img_src = sun4; // "huge sun";
        document.querySelector('link[rel="icon"]').href="sunb4.ico"
    } else {
        img_src = sun5; // "Giant sun!";
        document.querySelector('link[rel="icon"]').href="sunb5.ico"
    }
    return <div>
        <img src={img_src} 
            style={{
                width: "150px", 
                height: "150px", 
                position: "absolute",
                top: "0px",
                right: "0px",
                objectFit: "cover"
            }}/> 
        </div>
}

export default TreeUI;