import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import LoginModal from './components/LoginModal'
import NavBar from './components/NavBar'
import About from './components/About'
import Statistics from './components/Statistics'
import SettingsReminders from './components/SettingsReminders'
import NotificationContainer from './components/NotificationContainer'

import { bindPage } from './demo'
import { calibrate } from './demo'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {withRouter} from 'react-router-dom';

// check if running in browser or in electron
const isElectron = (window && window.process && window.process.type) === "renderer";
console.log(isElectron);

// 
class App extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 
      value: 0,
      count: -1,
      isloaded: false,
      isstarted: false,
      isstopped: false,
      showVideo: false,
      aggregatedPoseScore: 0,
      currentPoseScore: 0,
      calibrated_noseDistance: 150,
      calibrated_shoulderDistance: 320,
      isLoggedIn: false, 
      attentionTimeseries: [],
      breakTimeseries: [],
      username: "",
      showNotificiation: false,
      notificationText: "hi",
      totalTreesPlanted: 0,
      workingTime: 0,
      breakTime: 0,
      lookingAtScreen: 0,
      lookingAway: 0,
      breakStarted: false,
      lookingAwayStarted: false,
      scoreHistory: [],
      settings: {
        maxWorkTime: 100,
        maxWorkTimeReminderInterval: 10,
        maxBreakTime: 10,
        maxScreenTime: 20,
        maxScreenTimeReminderInterval: 5,
        maxLookingAwayTime: 20
      }
    };
    this.startDetection = this.startDetection.bind(this);
    this.login = this.login.bind(this);
    this.openLoginModal = this.openLoginModal.bind(this);
    this.closeLoginModal = this.closeLoginModal.bind(this);
    this.logout = this.logout.bind(this);
    this.recalibrate = this.recalibrate.bind(this);
    this.incrementWorkingTime = this.incrementWorkingTime.bind(this);
    this.incrementScreenTime = this.incrementScreenTime.bind(this);
    this.incrementBreakTime = this.incrementBreakTime.bind(this);
    this.incrementLookAwayTime = this.incrementLookAwayTime.bind(this);
    this.handleSettingsChange = this.handleSettingsChange.bind(this);
  }
  
  startCounters(){
    // start counters
    this.incrementWorkingTime();
    this.incrementScreenTime();
  }

  incrementWorkingTime(){
    const new_workingTime = this.state.workingTime + 1;
    this.setState({workingTime: new_workingTime, breakTime: 0});
    if(new_workingTime > this.state.settings.maxWorkTime 
      && new_workingTime % this.state.settings.maxWorkTimeReminderInterval == 0){ /// show notification every 10 seconds
      this.showNotificiation("You should take a break!")
    }

    if(this.state.breakStarted){
      setTimeout(this.incrementBreakTime, 1000);
    }
    else{
      setTimeout(this.incrementWorkingTime, 1000);
    }
  }

  incrementBreakTime(){
    const new_breakTime = this.state.breakTime + 1;
    this.setState({breakTime: new_breakTime});
    if(new_breakTime == this.state.settings.maxBreakTime){ /// only show notification once
      // reset counter
      this.setState({workingTime: 0});
      this.showNotificiation("Break completed successfully!")
    }

    if(this.state.breakStarted){
      setTimeout(this.incrementBreakTime, 1000);
    }
    else{
      setTimeout(this.incrementWorkingTime, 1000);
    }
  }

  incrementScreenTime(){
    const new_lookingAtScreen = this.state.lookingAtScreen + 1;
    this.setState({lookingAtScreen: new_lookingAtScreen, lookingAway: 0});
    if(new_lookingAtScreen > this.state.settings.maxScreenTime
       && new_lookingAtScreen % this.state.settings.maxScreenTimeReminderInterval == 0){ /// show notification every 5 seconds
      this.showNotificiation("You should rest your eyes!")
    }

    if(this.state.lookingAwayStarted || this.state.breakStarted){
      setTimeout(this.incrementLookAwayTime, 1000);
    }
    else{
      setTimeout(this.incrementScreenTime, 1000);
    }
  }

  incrementLookAwayTime(){
    const new_lookingAway = this.state.lookingAway + 1;
    this.setState({lookingAway: new_lookingAway});
    if(new_lookingAway == this.state.settings.maxLookingAwayTime){ /// only show notification once
      // reset looking at screen counter
      this.setState({lookingAtScreen: 0});
      this.showNotificiation("Eye de-stressing completed successfully!")
    }

    /// being away from the screen also counts as resting your eyes
    if(this.state.lookingAwayStarted || this.state.breakStarted){
      setTimeout(this.incrementLookAwayTime, 1000);
    }
    else{
      setTimeout(this.incrementScreenTime, 1000);
    }
  }

  componentDidMount(){
    const token = localStorage.getItem("logintoken");
    console.log(token);
    if(token != null){
      const saved_username = localStorage.getItem("username");
      this.setState({isLoggedIn: true, username: saved_username});
    }

    const prev_aggregatedPoseScore = localStorage.getItem("aggregatedPoseScore");
    if(prev_aggregatedPoseScore != null){
      this.setState({aggregatedPoseScore: prev_aggregatedPoseScore});
    }

    const prev_totalTreesPlanted = localStorage.getItem("totalTreesPlanted");
    if(prev_totalTreesPlanted != null){
      this.setState({totalTreesPlanted: prev_totalTreesPlanted});
    }

    const prev_settings = localStorage.getItem("settings");
    if(prev_settings != null){
      this.setState({settings: JSON.parse(prev_settings)});
    }

    const prev_scoreHistory = localStorage.getItem("scoreHistory");
    if(prev_scoreHistory != null){
      this.setState({scoreHistory: prev_scoreHistory.split(",")});
    }
  }

  toggleStopped = () => {
    const newstate = !this.state.isstopped;
    this.setState({isstopped: newstate});
    console.log(`isstopped toggled to ${newstate}`);
  }

  toggleVideo = () => {
    const newstate = !this.state.showVideo;
    this.setState({showVideo: newstate});
    console.log(`showVideo toggled to ${newstate}`);
  }

  setCalibrationValue = (new_count) => {
    this.setState({count: new_count});
    console.log(new_count);
  }

  fixCalibration = (new_calibration) => {
    const {
      calibrated_noseDistance,
      calibrated_shoulderDistance
    } = new_calibration;
    this.setState({
      calibrated_noseDistance,
      calibrated_shoulderDistance
    });
    console.log(calibrated_noseDistance);
    console.log(calibrated_shoulderDistance);
  }

  startDetection(){
    this.setState({isstarted: true});
    const setValue = (new_value) => {
      const {
        isSlough,
        keypoints, 
        noAttention, 
        noseDistance,
        onBreak, 
        screenDistance,
        shoulderDistance
      } = new_value;
      if(screenDistance < 0.35){
        this.showNotificiation(`Too close to the screen! You are only ${screenDistance}cm away.`)
      }

      const new_currentPoseScore = noseDistance - (this.state.calibrated_noseDistance) + 25;
      const old_aggregatedPoseScore = isNaN(this.state.aggregatedPoseScore) ? 0 : this.state.aggregatedPoseScore;
      console.log(old_aggregatedPoseScore)
      const added_score = Math.max(0, new_currentPoseScore);
      console.log(added_score)
      let new_aggregatedPoseScore = old_aggregatedPoseScore + 0.05*added_score;
      console.log(new_aggregatedPoseScore)

      const new_attentionTimeseries = [...this.state.attentionTimeseries, noAttention];
      const new_breakTimeseries = [...this.state.breakTimeseries, onBreak];
      const new_scoreHistory = [...this.state.scoreHistory, new_currentPoseScore];

      function getSum(total, boolean) {
        const element = boolean ? 1 : -1;
        return total + element;
      }
      
      console.log(new_attentionTimeseries);
      // if no attention then this has to be positive
      if(new_attentionTimeseries.slice(-5).reduce(getSum, 0) > 0){
        this.setState({lookingAwayStarted: true});
        //alert("starting noAttention counter")
      }
      else{
        this.setState({lookingAwayStarted: false});
      }

      // if on break then this has to be very positive
      if(new_breakTimeseries.slice(-5).reduce(getSum, 0) > 0){
        this.setState({breakStarted: true});
        //alert("starting onBreak counter")
      }
      else{
        this.setState({breakStarted: false});
      }

      if(new_aggregatedPoseScore > 100){
        //alert("You planted a tree! keep going!")
        new_aggregatedPoseScore = 0;
        const new_totalTreesPlanted = parseInt(this.state.totalTreesPlanted) + 1;
        this.setState({totalTreesPlanted: new_totalTreesPlanted});
        localStorage.setItem("totalTreesPlanted", new_totalTreesPlanted);
        this.showNotificiation(`You planted a tree! Total: ${new_totalTreesPlanted}. Keep going!`)
      }

      this.setState({
        value: new_value,
        currentPoseScore: new_currentPoseScore,
        aggregatedPoseScore: new_aggregatedPoseScore,
        attentionTimeseries: new_attentionTimeseries,
        breakTimeseries: new_breakTimeseries,
        scoreHistory: new_scoreHistory
      });
      localStorage.setItem("scoreHistory", new_scoreHistory);
      localStorage.setItem("aggregatedPoseScore", new_aggregatedPoseScore);
      console.log(new_value);
    }
    const setIsLoaded = () => {
      this.setState({isloaded: true});
      console.log("model loaded");
    }
    const getStopped = () => {
      return this.state.isstopped;
    }
    bindPage(setValue, this.setCalibrationValue, this.fixCalibration, setIsLoaded, getStopped);
    this.startCounters();
  }

  recalibrate(){
    calibrate(this.setCalibrationValue, this.fixCalibration);
  }

  showNotificiation(text){
    this.setState({showNotificiation: false, notificationText: text});
    setTimeout(() => this.setState({showNotificiation: true}), 10);
  }

  closeLoginModal(){
    this.setState({showLogin: false, showSignup: false});
  }

  openLoginModal(){
    this.setState({showLogin: true});
  }

  register(username, password){
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    console.log("registered")
  }

  login(username, password){
    const saved_username = localStorage.getItem("username");
    const saved_password = localStorage.getItem("password");
    console.log(saved_username)
    console.log(saved_password)
    if(saved_username == username && saved_password == password){
      alert("login successful");
      this.setState({isLoggedIn: true, username});
      this.closeLoginModal();
      localStorage.setItem("logintoken", "123456abc");
    }
    else{
      alert("login unsuccessful");
    }
  }

  logout(){
    this.setState({isLoggedIn: false});
    localStorage.removeItem("logintoken");
  }

  handleSettingsChange(event){
    let new_settings = this.state.settings;
    new_settings[event.target.name] = event.target.value;
    console.log(new_settings);
    this.setState({settings: new_settings});
    localStorage.setItem("settings", JSON.stringify(new_settings));
  }

  render() {
    return (
      <div className="App">
          <Router>
            {this.state.showNotificiation ? 
              <NotificationContainer notificationText={this.state.notificationText} /> : ""
            }
            <NavBar 
              isLoggedIn={this.state.isLoggedIn} 
              username={this.state.username}
              openLoginModal={this.openLoginModal}
              logout={this.logout}
            />
            <RouteSwitch 
              {...this.state} 
              showVideo={this.state.showVideo} 
              startDetection={this.startDetection}
              toggleStopped={this.toggleStopped}
              toggleVideo={this.toggleVideo}
              recalibrate={this.recalibrate}
              handleSettingsChange={this.handleSettingsChange}
            />
           <VideoContainerRouter showVideo={this.state.showVideo} toggleVideo={this.toggleVideo} />
           <LoginModal 
            showLogin={this.state.showLogin} 
            showSignup={this.state.showSignup} 
            closeLoginModal={this.closeLoginModal}
            register={this.register}
            login={this.login}
            />
          </Router>
      </div>
    );
  }
}

function VideoContainer (props) {
  const athome = props.location.pathname === "/home" || props.location.pathname === "/" || props.location.pathname === "/build/index.html";
  console.log(props.location);
  return (
    <div style={{display : (props.showVideo && athome)  ? "block" : "none"}} >
      <div id="videocontainer" style={{display: "none"}}>
        <video id="video"></video>
      </div>
      <canvas id="output" style={{width: "600px", height: "400px", border: "solid thin black", position: "absolute", top: "100px", left: "30%"}} />          
    </div>
  )
}
const VideoContainerRouter = withRouter(VideoContainer);


function SettingsAccount() {
  return (
    <div>
      <h2>Account settings</h2>
      <div>Settings about (personalised) ads, emails, changing password etc.</div>
    </div>
  );
}

function SettingsUI() {
  return (
    <div>
      <h2>UI Settings</h2>
      <div>background color and so on</div>
    </div>
  );
}

function RouteSwitch(props) {
  return (
    <Switch>
      <Route path="/home">
        <Home {...props} />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/settings/account">
        <SettingsAccount />
      </Route>
      <Route path="/settings/reminders">
        <SettingsReminders {...props} />
      </Route>
      <Route path="/settings/ui">
        <SettingsUI />
      </Route>
      <Route path="/statistics">
        <Statistics {...props} />
      </Route>
      <Route path="/">
        <Home {...props} />
      </Route>
    </Switch>
  )
}

export default App;
