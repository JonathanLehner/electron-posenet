import React from 'react';
import TreeUI from './TreeUI'
import DetectionOverview from './DetectionOverview'
import DetectionUI from './DetectionUI'

function Home(props) {
    console.log(props);
    return (
      <div id="home-container">
        <h2>Home - Plant trees!</h2>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
          <div style={{flexBasis: "30%"}}>
            <div style={{margin: "auto", width: "250px"}}>
              <DetectionUI 
                {...props}
              />
            </div>
            { (props.isstarted === true) ? 
              <div style={{margin: "20px auto", width: "250px"}}>
                <DetectionOverview 
                  {...props}
                /> 
              </div> 
              : ""
            } 
          </div>
          <div style={{flexBasis: "70%"}}>
          {props.showVideo === false ?
            <TreeUI 
              aggregatedPoseScore={props.aggregatedPoseScore}
              currentPoseScore={props.currentPoseScore}
            /> : ""}
          </div>
        </div>
      </div>
    )
  }

export default Home;
  