(this["webpackJsonpposeguard-app"]=this["webpackJsonpposeguard-app"]||[]).push([[0],{114:function(e,t){},115:function(e,t){},116:function(e,t){},118:function(e,t){},119:function(e,t){},120:function(e,t){},121:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),i=n(21),r=n.n(i),s=(n(92),n(56)),l=n(22),c=n(23),u=n(27),d=n(24),m=n(9),g=n(28),h=(n(93),n(94),n(95),n(68)),p=n.n(h),f=n(69),v=n.n(f),b=n(70),S=n.n(b),k=n(71),E=n.n(k),w=n(72),y=n.n(w),x=n(73),T=n.n(x),C=n(74),P=n.n(C),j=n(75),O=n.n(j),D=n(76),I=n.n(D),L=n(77),A=n.n(L);if("renderer"===(window&&window.process&&window.process.type));function N(e){var t,n=e.aggregatedPoseScore;return console.log(n<20),t=n<20?p.a:n<40?v.a:n<60?S.a:n<80?E.a:y.a,o.a.createElement("div",null,o.a.createElement("img",{src:t,style:{width:"350px",height:"400px",objectFit:"contain"}}))}function B(e){var t,n=e.currentPoseScore;return console.log(n<20),n<20?(t=T.a,document.querySelector('link[rel="icon"]').href="sunb1.ico"):n<40?(t=P.a,document.querySelector('link[rel="icon"]').href="sunb2.ico"):n<60?(t=O.a,document.querySelector('link[rel="icon"]').href="sunb3.ico"):n<80?(t=I.a,document.querySelector('link[rel="icon"]').href="sunb4.ico"):(t=A.a,document.querySelector('link[rel="icon"]').href="sunb5.ico"),o.a.createElement("div",null,o.a.createElement("img",{src:t,style:{width:"150px",height:"150px",position:"absolute",top:"0px",right:"0px",objectFit:"cover"}}))}var V=function(e){var t=e.aggregatedPoseScore,n=e.currentPoseScore;return o.a.createElement("div",{style:{border:"solid thin black",width:"600px",height:"400px",position:"relative"}},o.a.createElement("div",null,o.a.createElement(N,{aggregatedPoseScore:t})),o.a.createElement("div",null,o.a.createElement(B,{currentPoseScore:n})))};var M=function(e){e.isstarted,e.isstopped,e.isloaded,e.showVideo,e.count,e.startDetection,e.toggleStopped,e.toggleVideo;var t=e.value.noseDistance-e.calibrated_noseDistance+25;return o.a.createElement("div",{style:{border:"solid thin black",width:"250px"}},o.a.createElement("h5",null,"Current pose"),e.value&&1!=e.value.onBreak?o.a.createElement("div",{style:{textAlign:"left",padding:"10px"}},o.a.createElement("div",null,"Pose score: ",t.toFixed(2)),o.a.createElement("div",null,"Slouching? ",e.value.isSlough?"yes":"no"),o.a.createElement("div",null,"Attention? ",0==e.value.noAttention?"yes":"no"),o.a.createElement("div",null,"Distance to screen: ",e.value.screenDistance.toFixed(2)," "),o.a.createElement("div",null,"Working time: ",e.workingTime),o.a.createElement("div",null,"Looking at screen: ",e.lookingAtScreen),e.lookingAway>0?o.a.createElement("div",null,"Looking away time: ",e.lookingAway):""):"",e.value&&1==e.value.onBreak?o.a.createElement("div",null,o.a.createElement("div",null,"Taking a break"),e.breakTime>0?o.a.createElement("div",null,"Break time: ",e.breakTime):""):"")};var R=function(e){var t=e.isstarted,n=e.isstopped,a=e.isloaded,i=e.showVideo,r=e.count,s=e.startDetection,l=e.toggleStopped,c=e.toggleVideo,u=e.recalibrate;return o.a.createElement("div",{style:{border:"solid thin black",width:"250px"}},0==t?o.a.createElement("button",{onClick:s},"Start detection"):o.a.createElement("button",{onClick:l},0==n?"Stop":"Restart"," detection"),o.a.createElement("button",{onClick:c},"Show ",0==i?"video":"tree"),1==t?o.a.createElement("button",{onClick:u},"Recalibrate"):"",o.a.createElement("div",{id:"info"}),1==t?o.a.createElement("div",null,0==a?"Loading model..":0!=r?"Calibrating.. ".concat(r):"calibrated"):"")};var _=function(e){return console.log(e),o.a.createElement("div",{id:"home-container"},o.a.createElement("h2",null,"Home - Plant trees!"),o.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around"}},o.a.createElement("div",{style:{flexBasis:"30%"}},o.a.createElement("div",{style:{margin:"auto",width:"250px"}},o.a.createElement(R,e)),!0===e.isstarted?o.a.createElement("div",{style:{margin:"20px auto",width:"250px"}},o.a.createElement(M,e)):""),o.a.createElement("div",{style:{flexBasis:"70%"}},!1===e.showVideo?o.a.createElement(V,{aggregatedPoseScore:e.aggregatedPoseScore,currentPoseScore:e.currentPoseScore}):"")))},W=n(78),H=n(40),q=n(11),G=n(38);function F(e){var t=e.showSignup,n=e.handleChange;return o.a.createElement(q.a,null,o.a.createElement(q.a.Group,{controlId:"formBasicEmail"},o.a.createElement(q.a.Label,null,"Email address"),o.a.createElement(q.a.Control,{type:"email",name:"username",placeholder:"Enter email",onChange:n}),t?o.a.createElement(q.a.Text,{className:"text-muted"},"We'll never share your email with anyone else."):""),o.a.createElement(q.a.Group,{controlId:"formBasicPassword"},o.a.createElement(q.a.Label,null,"Password"),o.a.createElement(q.a.Control,{type:"password",name:"password",placeholder:"Password",onChange:n})),t?o.a.createElement(q.a.Group,{controlId:"formBasicCheckbox"},o.a.createElement(q.a.Check,{type:"checkbox",label:"I agree to the T&C"})):"")}var U=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={showSignup:!1},n.toggleSignup=n.toggleSignup.bind(Object(m.a)(n)),n.handleChange=n.handleChange.bind(Object(m.a)(n)),n}return Object(g.a)(t,e),Object(c.a)(t,[{key:"toggleSignup",value:function(){var e=this.state.showSignup;this.setState({showSignup:!e})}},{key:"handleChange",value:function(e){this.setState(Object(W.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this,t=this.props,n=t.showLogin,a=t.closeLoginModal,i=t.register,r=t.login,s=this.state.showSignup;return o.a.createElement(H.a,{show:n,onHide:a},o.a.createElement(H.a.Header,{closeButton:!0},o.a.createElement(H.a.Title,null,s?"Signup":"Login")),o.a.createElement(H.a.Body,null,o.a.createElement(F,Object.assign({},this.props,{showSignup:s,handleChange:this.handleChange}))),o.a.createElement(H.a.Footer,null,o.a.createElement(G.a,{variant:"secondary",onClick:a},"Close"),s?o.a.createElement(G.a,{variant:"primary",onClick:function(){i(e.state.username,e.state.password)}},"Register"):o.a.createElement(G.a,{variant:"primary",onClick:function(){r(e.state.username,e.state.password)}},"Login"),0==s?o.a.createElement("a",{href:"#",onClick:this.toggleSignup},"register"):o.a.createElement("a",{href:"#",onClick:this.toggleSignup},"login")))}}]),t}(o.a.Component),J=n(36),Y=n(57),K=n(41),z=n(29);var $=function(e){var t=e.isLoggedIn,n=e.username,a=e.openLoginModal,i=e.logout;return o.a.createElement(J.a,{bg:"light",expand:"lg"},o.a.createElement(J.a.Brand,null,o.a.createElement("img",{alt:"",src:"/logo.svg",width:"30",height:"30",className:"d-inline-block align-top"})," ","Poseguard"),o.a.createElement(J.a.Toggle,{"aria-controls":"basic-navbar-nav"}),o.a.createElement(J.a.Collapse,{id:"basic-navbar-nav"},o.a.createElement(Y.a,{className:"mr-auto"},o.a.createElement(Y.a.Link,null,o.a.createElement(z.b,{to:"/home"},"Home")),o.a.createElement(Y.a.Link,null,o.a.createElement(z.b,{to:"/about"},"About")),t?o.a.createElement(K.a,{title:"My Account",id:"basic-nav-dropdown"},o.a.createElement(K.a.Item,null,o.a.createElement(z.b,{to:"/settings/account"},"Account settings")),o.a.createElement(K.a.Item,null,o.a.createElement(z.b,{to:"/settings/reminders"},"Reminder Settings")),o.a.createElement(K.a.Item,null,o.a.createElement(z.b,{to:"/settings/ui"},"UI Settings")),o.a.createElement(K.a.Divider,null),o.a.createElement(K.a.Item,null,o.a.createElement(z.b,{to:"/statistics"},"Statistics"))):"")),o.a.createElement(J.a.Collapse,{className:"justify-content-end"},t?o.a.createElement(J.a.Text,null,"Signed in as: ",n," - ",o.a.createElement("a",{onClick:i},"Logout")):o.a.createElement(J.a.Text,null,o.a.createElement("a",{onClick:a},"Login"))))};var Q=function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"About"),o.a.createElement("div",null,"explanation of poseguard, how it works and so on"))},X=n(83),Z=n(84),ee=n.n(Z),te=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={copied:!1},n}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("h2",null,"Statistics"),o.a.createElement("div",null,"explanation of poseguard, how it works and so on"),o.a.createElement("div",null,"shows the statistics, some graphs about used how many times, for how long and the improvement of posture over time."),o.a.createElement(ee.a,{data:[{type:"line",y:this.props.scoreHistory}],layout:{width:500,height:300,title:"Score history graph"}}),o.a.createElement("div",null,"Export your score history"),o.a.createElement(X.CopyToClipboard,{text:JSON.stringify(this.props.scoreHistory),onCopy:function(){return e.setState({copied:!0})}},o.a.createElement("button",null,"Copy to clipboard with button"))," "," ",this.state.copied?o.a.createElement("span",{style:{color:"red"}},"Copied."):null,o.a.createElement("div",null,"Total trees planted: ",this.props.totalTreesPlanted),o.a.createElement("div",null,"Current progress: ",parseInt(this.props.aggregatedPoseScore),"/100"),o.a.createElement("button",{onClick:function(){return localStorage.removeItem("totalTreesPlanted")}},"Clear statistics"))}}]),t}(o.a.Component),ne=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={},n}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.settings,t=this.props.handleSettingsChange;return o.a.createElement("div",null,o.a.createElement("h2",null,"Reminder Settings"),o.a.createElement("div",null,"Settings about frequency of reminders (all in seconds)"),o.a.createElement("div",{style:{width:"300px",margin:"auto",marginTop:"50px",textAlign:"left"}},Object.keys(e).map((function(n){return o.a.createElement(q.a,null,o.a.createElement(q.a.Group,{controlId:"formBasicEmail"},o.a.createElement(q.a.Label,null,n),o.a.createElement(q.a.Control,{type:"number",name:n,placeholder:e[n],onChange:t})))}))))}}]),t}(o.a.Component),ae=n(85),oe=n.n(ae),ie=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={ignore:!0,title:""},setTimeout((function(){return n.handleButtonClick()}),10),n}return Object(g.a)(t,e),Object(c.a)(t,[{key:"handlePermissionGranted",value:function(){console.log("Permission Granted"),this.setState({ignore:!1})}},{key:"handlePermissionDenied",value:function(){console.log("Permission Denied"),this.setState({ignore:!0})}},{key:"handleNotSupported",value:function(){console.log("Web Notification not Supported"),this.setState({ignore:!0})}},{key:"handleNotificationOnClick",value:function(e,t){console.log(e,"Notification clicked tag:"+t)}},{key:"handleNotificationOnError",value:function(e,t){console.log(e,"Notification error tag:"+t)}},{key:"handleNotificationOnClose",value:function(e,t){console.log(e,"Notification closed tag:"+t)}},{key:"handleNotificationOnShow",value:function(e,t){this.playSound(),console.log(e,"Notification shown tag:"+t)}},{key:"playSound",value:function(e){document.getElementById("sound").play()}},{key:"handleButtonClick",value:function(){if(!this.state.ignore){var e=Date.now(),t="Poseguard "+e,n={tag:e,body:this.props.notificationText,icon:"http://mobilusoss.github.io/react-web-notification/example/Notifications_button_24.png",lang:"en",dir:"ltr",sound:"./sound.mp3"};this.setState({title:t,options:n})}}},{key:"handleButtonClick2",value:function(){this.props.swRegistration.getNotifications({}).then((function(e){console.log(e)}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(oe.a,{ignore:this.state.ignore&&""!==this.state.title,notSupported:this.handleNotSupported.bind(this),onPermissionGranted:this.handlePermissionGranted.bind(this),onPermissionDenied:this.handlePermissionDenied.bind(this),onShow:this.handleNotificationOnShow.bind(this),onClick:this.handleNotificationOnClick.bind(this),onClose:this.handleNotificationOnClose.bind(this),onError:this.handleNotificationOnError.bind(this),timeout:5e3,title:this.state.title,options:this.state.options,swRegistration:this.props.swRegistration}),o.a.createElement("audio",{id:"sound",preload:"auto"},o.a.createElement("source",{src:"./sound.mp3",type:"audio/mpeg"}),o.a.createElement("source",{src:"./sound.ogg",type:"audio/ogg"}),o.a.createElement("embed",{hidden:!0,autostart:"false",loop:!1,src:"./sound.mp3"})))}}]),t}(o.a.Component),re=n(12),se=n.n(re),le=n(39),ce=n(58);n(86);console.log(le);var ue="aqua",de=2;function me(){return/Android/i.test(navigator.userAgent)||/iPhone|iPad|iPod/i.test(navigator.userAgent)}function ge(e){return[e.y,e.x]}function he(e,t,n,a,o){e.beginPath(),e.arc(n,t,a,0,2*Math.PI),e.fillStyle=o,e.fill()}function pe(e,t,n,a,o){var i=Object(ce.a)(e,2),r=i[0],s=i[1],l=Object(ce.a)(t,2),c=l[0],u=l[1];o.beginPath(),o.moveTo(s*a,r*a),o.lineTo(u*a,c*a),o.lineWidth=de,o.strokeStyle=n,o.stroke()}function fe(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;le.getAdjacentKeyPoints(e,t).forEach((function(e){pe(ge(e[0].position),ge(e[1].position),ue,a,n)}))}function ve(e,t,n){for(var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,o=0;o<e.length;o++){var i=e[o];if(!(i.score<t)){var r=i.position;he(n,r.y*a,r.x*a,3,ue)}}}var be=n(117),Se="renderer"===(window&&window.process&&window.process.type);console.log(Se);var ke=600,Ee=500;function we(){var e,t,n;return se.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){a.next=2;break}throw new Error("Browser API navigator.mediaDevices.getUserMedia not available");case 2:return(e=document.getElementById("video")).width=ke,e.height=Ee,t=me(),a.next=8,se.a.awrap(navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"user",width:t?void 0:ke,height:t?void 0:Ee}}));case 8:return n=a.sent,e.srcObject=n,a.abrupt("return",new Promise((function(t){e.onloadedmetadata=function(){t(e)}})));case 11:case"end":return a.stop()}}))}function ye(){var e;return se.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,se.a.awrap(we());case 2:return(e=t.sent).play(),t.abrupt("return",e);case 5:case"end":return t.stop()}}))}var xe={algorithm:"multi-pose",input:{architecture:"ResNet50",outputStride:32,inputResolution:257,multiplier:1,quantBytes:2},singlePoseDetection:{minPoseConfidence:.1,minPartConfidence:.5},multiPoseDetection:{maxPoseDetections:5,minPoseConfidence:.15,minPartConfidence:.1,nmsRadius:30},output:{showVideo:!0,showSkeleton:!0,showPoints:!0,showBoundingBox:!1},net:null};function Te(e,t){xe.net=t,e.length>0&&(xe.camera=e[0].deviceId)}var Ce={},Pe=150,je=320;function Oe(e,t){var n=5,a=[];e(n);var o=setInterval((function(){a.push(Ce),e(n-=1),0==n&&(a=a.filter((function(e){return 0!==Object.keys(e).length})),Pe=a.map((function(e){return e.noseDistance})).reduce((function(e,t){return e+t}))/a.length,je=a.map((function(e){return e.shoulderDistance})).reduce((function(e,t){return e+t}))/a.length,t({calibrated_noseDistance:Pe,calibrated_shoulderDistance:je}),localStorage.setItem("calibrated_noseDistance",Pe),localStorage.setItem("calibrated_shoulderDistance",je),clearInterval(o))}),1e3)}var De=function(e,t,n,a,o,i){var r=document.getElementById("output"),s=r.getContext("2d"),l=!0;r.width=ke,r.height=Ee;var c=!1,u=function(){if(0==c){c=!0;var e=localStorage.getItem("calibrated_noseDistance"),t=localStorage.getItem("calibrated_shoulderDistance");e&&t?(o({calibrated_noseDistance:Pe=e,calibrated_shoulderDistance:je=t}),a(0)):Oe(a,o)}};!function t(){var a,o,r,c,d,m,g,h,p,f,v,b,S,k,E,w,y,x,T,C,P,j,O,D,I;return se.a.async((function(L){for(;;)switch(L.prev=L.next){case 0:if(u(),a=[],0!=i()){L.next=51;break}L.t0=xe.algorithm,L.next="single-pose"===L.t0?6:"multi-pose"===L.t0?7:46;break;case 6:return L.abrupt("break",46);case 7:return"renderer"===(window&&window.process&&window.process.type),c=e,L.next=11,se.a.awrap(xe.net.estimatePoses(c,{flipHorizontal:l,decodingMethod:"multi-person",maxDetections:xe.multiPoseDetection.maxPoseDetections,scoreThreshold:xe.multiPoseDetection.minPartConfidence,nmsRadius:xe.multiPoseDetection.nmsRadius}));case 11:if(d=L.sent,a=a.concat(d),m=!1,0!=a.length){L.next=20;break}return n({onBreak:m=!0}),L.abrupt("break",46);case 20:m=!1;case 21:return g=a[0],h=g.keypoints,v=function(e,t){return[(e[0]+t[0])/2,(e[1]+t[1])/2]},b=(f=function(e){return[e[0].position.x,e[0].position.y]})((p=function(e,t){return e.filter((function(e){return e.part==t}))})(h,"leftEye")),S=f(p(h,"rightEye")),be(b,S),k=f(p(h,"leftShoulder")),E=f(p(h,"rightShoulder")),w=be(k,E),y=v(k,E),x=f(p(h,"nose")),T=be(x,y),C=T<Pe-25,P=.5*je/w,j=p(h,"leftEar")[0].score,O=p(h,"rightEar")[0].score,D=j<.3||O<.3,Ce=function(){return{keypoints:h,shoulderDistance:w,screenDistance:P,noseDistance:T,isSlough:C,noAttention:D,onBreak:m}}(),n(Ce),o=+xe.multiPoseDetection.minPoseConfidence,r=+xe.multiPoseDetection.minPartConfidence,L.abrupt("break",46);case 46:s.clearRect(0,0,ke,Ee),xe.output.showVideo&&(s.save(),s.scale(-1,1),s.translate(-ke,0),s.drawImage(e,0,0,ke,Ee),s.restore()),a.forEach((function(e){var t=e.score,n=e.keypoints;t>=o&&(xe.output.showPoints&&ve(n,r,s),xe.output.showSkeleton&&fe(n,r,s))})),L.next=54;break;case 51:return I=function(e){return new Promise((function(t){return setTimeout(t,e)}))},L.next=54,se.a.awrap(I(1e3));case 54:setTimeout(t,1e3);case 55:case"end":return L.stop()}}))}()};var Ie=n(34),Le="renderer"===(window&&window.process&&window.process.type);console.log(Le);var Ae=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).toggleStopped=function(){var e=!n.state.isstopped;n.setState({isstopped:e}),console.log("isstopped toggled to ".concat(e))},n.toggleVideo=function(){var e=!n.state.showVideo;n.setState({showVideo:e}),console.log("showVideo toggled to ".concat(e))},n.setCalibrationValue=function(e){n.setState({count:e}),console.log(e)},n.fixCalibration=function(e){var t=e.calibrated_noseDistance,a=e.calibrated_shoulderDistance;n.setState({calibrated_noseDistance:t,calibrated_shoulderDistance:a}),console.log(t),console.log(a)},n.state={value:0,count:-1,isloaded:!1,isstarted:!1,isstopped:!1,showVideo:!1,aggregatedPoseScore:0,currentPoseScore:0,calibrated_noseDistance:150,calibrated_shoulderDistance:320,isLoggedIn:!1,attentionTimeseries:[],breakTimeseries:[],username:"",showNotificiation:!1,notificationText:"hi",totalTreesPlanted:0,workingTime:0,breakTime:0,lookingAtScreen:0,lookingAway:0,breakStarted:!1,lookingAwayStarted:!1,scoreHistory:[],settings:{maxWorkTime:100,maxWorkTimeReminderInterval:10,maxBreakTime:10,maxScreenTime:20,maxScreenTimeReminderInterval:5,maxLookingAwayTime:20}},n.startDetection=n.startDetection.bind(Object(m.a)(n)),n.login=n.login.bind(Object(m.a)(n)),n.openLoginModal=n.openLoginModal.bind(Object(m.a)(n)),n.closeLoginModal=n.closeLoginModal.bind(Object(m.a)(n)),n.logout=n.logout.bind(Object(m.a)(n)),n.recalibrate=n.recalibrate.bind(Object(m.a)(n)),n.incrementWorkingTime=n.incrementWorkingTime.bind(Object(m.a)(n)),n.incrementScreenTime=n.incrementScreenTime.bind(Object(m.a)(n)),n.incrementBreakTime=n.incrementBreakTime.bind(Object(m.a)(n)),n.incrementLookAwayTime=n.incrementLookAwayTime.bind(Object(m.a)(n)),n.handleSettingsChange=n.handleSettingsChange.bind(Object(m.a)(n)),n}return Object(g.a)(t,e),Object(c.a)(t,[{key:"startCounters",value:function(){this.incrementWorkingTime(),this.incrementScreenTime()}},{key:"incrementWorkingTime",value:function(){var e=this.state.workingTime+1;this.setState({workingTime:e,breakTime:0}),e>this.state.settings.maxWorkTime&&e%this.state.settings.maxWorkTimeReminderInterval==0&&this.showNotificiation("You should take a break!"),this.state.breakStarted?setTimeout(this.incrementBreakTime,1e3):setTimeout(this.incrementWorkingTime,1e3)}},{key:"incrementBreakTime",value:function(){var e=this.state.breakTime+1;this.setState({breakTime:e}),e==this.state.settings.maxBreakTime&&(this.setState({workingTime:0}),this.showNotificiation("Break completed successfully!")),this.state.breakStarted?setTimeout(this.incrementBreakTime,1e3):setTimeout(this.incrementWorkingTime,1e3)}},{key:"incrementScreenTime",value:function(){var e=this.state.lookingAtScreen+1;this.setState({lookingAtScreen:e,lookingAway:0}),e>this.state.settings.maxScreenTime&&e%this.state.settings.maxScreenTimeReminderInterval==0&&this.showNotificiation("You should rest your eyes!"),this.state.lookingAwayStarted||this.state.breakStarted?setTimeout(this.incrementLookAwayTime,1e3):setTimeout(this.incrementScreenTime,1e3)}},{key:"incrementLookAwayTime",value:function(){var e=this.state.lookingAway+1;this.setState({lookingAway:e}),e==this.state.settings.maxLookingAwayTime&&(this.setState({lookingAtScreen:0}),this.showNotificiation("Eye de-stressing completed successfully!")),this.state.lookingAwayStarted||this.state.breakStarted?setTimeout(this.incrementLookAwayTime,1e3):setTimeout(this.incrementScreenTime,1e3)}},{key:"componentDidMount",value:function(){var e=localStorage.getItem("logintoken");if(console.log(e),null!=e){var t=localStorage.getItem("username");this.setState({isLoggedIn:!0,username:t})}var n=localStorage.getItem("aggregatedPoseScore");null!=n&&this.setState({aggregatedPoseScore:n});var a=localStorage.getItem("totalTreesPlanted");null!=a&&this.setState({totalTreesPlanted:a});var o=localStorage.getItem("settings");null!=o&&this.setState({settings:JSON.parse(o)});var i=localStorage.getItem("scoreHistory");null!=i&&this.setState({scoreHistory:i.split(",")})}},{key:"startDetection",value:function(){var e=this;this.setState({isstarted:!0});!function(e,t,n,a,o){var i,r,s;se.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,se.a.awrap(le.load({imageScaleFactor:.2,architecture:xe.input.architecture,outputStride:xe.input.outputStride,inputResolution:xe.input.inputResolution,multiplier:xe.input.multiplier,quantBytes:xe.input.quantBytes,modelUrl:"./model-stride32.json"}));case 2:return i=l.sent,a(),l.prev=4,l.next=7,se.a.awrap(ye());case 7:r=l.sent,l.next=16;break;case 10:throw l.prev=10,l.t0=l.catch(4),(s=document.getElementById("info")).textContent="this browser does not support video capture,or this device does not have a camera",s.style.display="block",l.t0;case 16:Te([],i),De(r,i,e,t,n,o);case 18:case"end":return l.stop()}}),null,null,[[4,10]])}((function(t){t.isSlough,t.keypoints;var n=t.noAttention,a=t.noseDistance,o=t.onBreak,i=t.screenDistance;t.shoulderDistance;i<.35&&e.showNotificiation("Too close to the screen! You are only ".concat(i,"cm away."));var r=a-e.state.calibrated_noseDistance+25,l=isNaN(e.state.aggregatedPoseScore)?0:e.state.aggregatedPoseScore;console.log(l);var c=Math.max(0,r);console.log(c);var u=l+.05*c;console.log(u);var d=[].concat(Object(s.a)(e.state.attentionTimeseries),[n]),m=[].concat(Object(s.a)(e.state.breakTimeseries),[o]),g=[].concat(Object(s.a)(e.state.scoreHistory),[r]);function h(e,t){return e+(t?1:-1)}if(console.log(d),d.slice(-5).reduce(h,0)>0?e.setState({lookingAwayStarted:!0}):e.setState({lookingAwayStarted:!1}),m.slice(-5).reduce(h,0)>0?e.setState({breakStarted:!0}):e.setState({breakStarted:!1}),u>100){u=0;var p=parseInt(e.state.totalTreesPlanted)+1;e.setState({totalTreesPlanted:p}),localStorage.setItem("totalTreesPlanted",p),e.showNotificiation("You planted a tree! Total: ".concat(p,". Keep going!"))}e.setState({value:t,currentPoseScore:r,aggregatedPoseScore:u,attentionTimeseries:d,breakTimeseries:m,scoreHistory:g}),localStorage.setItem("scoreHistory",g),localStorage.setItem("aggregatedPoseScore",u),console.log(t)}),this.setCalibrationValue,this.fixCalibration,(function(){e.setState({isloaded:!0}),console.log("model loaded")}),(function(){return e.state.isstopped})),this.startCounters()}},{key:"recalibrate",value:function(){Oe(this.setCalibrationValue,this.fixCalibration)}},{key:"showNotificiation",value:function(e){var t=this;this.setState({showNotificiation:!1,notificationText:e}),setTimeout((function(){return t.setState({showNotificiation:!0})}),10)}},{key:"closeLoginModal",value:function(){this.setState({showLogin:!1,showSignup:!1})}},{key:"openLoginModal",value:function(){this.setState({showLogin:!0})}},{key:"register",value:function(e,t){localStorage.setItem("username",e),localStorage.setItem("password",t),console.log("registered")}},{key:"login",value:function(e,t){var n=localStorage.getItem("username"),a=localStorage.getItem("password");console.log(n),console.log(a),n==e&&a==t?(alert("login successful"),this.setState({isLoggedIn:!0,username:e}),this.closeLoginModal(),localStorage.setItem("logintoken","123456abc")):alert("login unsuccessful")}},{key:"logout",value:function(){this.setState({isLoggedIn:!1}),localStorage.removeItem("logintoken")}},{key:"handleSettingsChange",value:function(e){var t=this.state.settings;t[e.target.name]=e.target.value,console.log(t),this.setState({settings:t}),localStorage.setItem("settings",JSON.stringify(t))}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(z.a,null,this.state.showNotificiation?o.a.createElement(ie,{notificationText:this.state.notificationText}):"",o.a.createElement($,{isLoggedIn:this.state.isLoggedIn,username:this.state.username,openLoginModal:this.openLoginModal,logout:this.logout}),o.a.createElement(Me,Object.assign({},this.state,{showVideo:this.state.showVideo,startDetection:this.startDetection,toggleStopped:this.toggleStopped,toggleVideo:this.toggleVideo,recalibrate:this.recalibrate,handleSettingsChange:this.handleSettingsChange})),o.a.createElement(Ne,{showVideo:this.state.showVideo,toggleVideo:this.toggleVideo}),o.a.createElement(U,{showLogin:this.state.showLogin,showSignup:this.state.showSignup,closeLoginModal:this.closeLoginModal,register:this.register,login:this.login})))}}]),t}(o.a.Component);var Ne=Object(Ie.f)((function(e){var t="/home"===e.location.pathname||"/"===e.location.pathname;return o.a.createElement("div",{style:{display:e.showVideo&&t?"block":"none"}},o.a.createElement("div",{id:"videocontainer",style:{display:"none"}},o.a.createElement("video",{id:"video"})),o.a.createElement("canvas",{id:"output",style:{width:"600px",height:"400px",border:"solid thin black",position:"absolute",top:"100px",left:"30%"}}))}));function Be(){return o.a.createElement("div",null,o.a.createElement("h2",null,"Account settings"),o.a.createElement("div",null,"Settings about (personalised) ads, emails, changing password etc."))}function Ve(){return o.a.createElement("div",null,o.a.createElement("h2",null,"UI Settings"),o.a.createElement("div",null,"background color and so on"))}function Me(e){return o.a.createElement(Ie.c,null,o.a.createElement(Ie.a,{path:"/home"},o.a.createElement(_,e)),o.a.createElement(Ie.a,{path:"/about"},o.a.createElement(Q,null)),o.a.createElement(Ie.a,{path:"/settings/account"},o.a.createElement(Be,null)),o.a.createElement(Ie.a,{path:"/settings/reminders"},o.a.createElement(ne,e)),o.a.createElement(Ie.a,{path:"/settings/ui"},o.a.createElement(Ve,null)),o.a.createElement(Ie.a,{path:"/statistics"},o.a.createElement(te,e)),o.a.createElement(Ie.a,{path:"/"},o.a.createElement(_,e)))}var Re=Ae;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(Re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},68:function(e,t,n){e.exports=n.p+"static/media/treeb1.5794a328.jpg"},69:function(e,t,n){e.exports=n.p+"static/media/treeb2.bafe4094.jpg"},70:function(e,t,n){e.exports=n.p+"static/media/treeb3.8de84b4e.jpg"},71:function(e,t,n){e.exports=n.p+"static/media/treeb4.d719421b.jpg"},72:function(e,t,n){e.exports=n.p+"static/media/treeb5.3ce43456.jpg"},73:function(e,t,n){e.exports=n.p+"static/media/sunb1.6a268ada.jpg"},74:function(e,t,n){e.exports=n.p+"static/media/sunb2.cd817fb7.jpg"},75:function(e,t,n){e.exports=n.p+"static/media/sunb3.8e17353c.jpg"},76:function(e,t,n){e.exports=n.p+"static/media/sunb4.ee5f47e8.jpg"},77:function(e,t,n){e.exports=n.p+"static/media/sunb5.8f0b8502.jpg"},87:function(e,t,n){e.exports=n(121)},92:function(e,t,n){},93:function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},94:function(e,t,n){}},[[87,1,2]]]);
//# sourceMappingURL=main.590536a3.chunk.js.map