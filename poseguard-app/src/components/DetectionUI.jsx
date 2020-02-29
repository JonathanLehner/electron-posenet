import React from 'react';

function DetectionUI(props){
    const {
      isstarted, 
      isstopped, 
      isloaded, 
      showVideo, 
      count, 
      startDetection, 
      toggleStopped, 
      toggleVideo,
      recalibrate
    } = props;
    return (
      <div style={{border: "solid thin black", width: "250px"}}>
        {isstarted == false ? 
          <button onClick={startDetection}>Start detection</button>
        : 
        <button onClick={toggleStopped}>
          {isstopped == false ? "Stop" : "Restart"} detection
        </button>
        }
        <button onClick={toggleVideo}>
          Show {showVideo == false ? "video" : "tree"}
        </button>
        {isstarted == true ?
          <button onClick={recalibrate}>
            Recalibrate
          </button> : ""}
        <div id="info"></div>
        {isstarted == true ?
          <div>
            {isloaded == false ? "Loading model.." : 
            count != 0 ?`Calibrating.. ${count}` :
            "calibrated"
            }
          </div> : ""
        }
      </div> 
    )
  }

export default DetectionUI;