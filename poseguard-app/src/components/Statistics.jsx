import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Plot from 'react-plotly.js';
class Statistics extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { copied: false };
  }
  
  render(){
    return (
      <div>
        <h2>Statistics</h2>
        <div>explanation of poseguard, how it works and so on</div>
        <div>shows the statistics, some graphs about used how many times, 
        for how long and the improvement of posture over time.
      </div>
      <Plot
        data={[
          {type: 'line', y: this.props.scoreHistory},
        ]}
        layout={ {width: 500, height: 300, title: 'Score history graph'} }
      />
      <div>Export your score history</div>
      <CopyToClipboard text={JSON.stringify(this.props.scoreHistory)}
          onCopy={() => this.setState({copied: true})}>
          <button>Copy to clipboard with button</button>
      </CopyToClipboard>
      {' '} {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
      <div>Total trees planted: {this.props.totalTreesPlanted}</div>
      <div>Current progress: {parseInt(this.props.aggregatedPoseScore)}/100</div>
      <button 
        onClick={() => 
          localStorage.removeItem("totalTreesPlanted")
        }>Clear statistics</button>
      </div>
    );
  }
}

export default Statistics;