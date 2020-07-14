import React from 'react';
import { Player } from 'video-react';
import './App.css';
import "../node_modules/video-react/dist/video-react.css";
import logo from './logo1.jpeg'
import poster from "./poster.jpg"

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      video: {
        "4k": "https://storage.googleapis.com/codefantasy/3.js_Final_Take_4k_Quality.mp4",
        "1080p": "https://s3.ap-south-1.amazonaws.com/cfthree.js/3.js_Final_Take_1080p_Quality.mp4",
        "720p": "https://storage.googleapis.com/codefantasy/720p_FinalTake.mp4",
        "480p": "https://storage.googleapis.com/codefantasy/480p_FinalTake.mp4"
      },
      src: "https://s3.ap-south-1.amazonaws.com/cfthree.js/3.js_Final_Take_1080p_Quality.mp4"
    }
  }

  chooseVideo(newVideo) {
    this.setState({
      src: this.state.video[newVideo]
    });
  }

  handleClick(e) {
    var text = e.target.value;
    this.chooseVideo(text);
  }
  render() {
    return (
      <div className="app">
        <div className="bg"></div>
        <div className="navbar">
          <img src={logo} alt="logo" />
        </div>
        <div className="wel">
          Welcome to<br />
          <span className="cf">Code Fantasy</span>
        </div>
        <div className="video">
          <form onClick={this.handleClick}>
            <input type="radio" name="src" value="4k" /> 4k
        <input type="radio" name="src" value="1080p" defaultChecked="true" /> 1080p
        <input type="radio" name="src" value="720p" /> 720p
        <input type="radio" name="src" value="480p" /> 480p
      </form>
          <Player className="videoItem"
            playsInline
            poster={poster}
            preload="metadata"
            fluid="100%"
            aspectRatio="auto"
            src={this.state.src}
          />
        </div>
        <div className="welE">
          .<br />.<br />.<br /><br />
          <span style={{ fontFamily: "Georgia", fontSize: "30px" }}>Link to all the Websites in this Video:</span>
          <ul>
            <li><a href="https://renaultespace.littleworkshop.fr/" target="_blank" rel="noopener noreferrer">Model Car by Renault<span role="img" aria-label="link">&#128279;</span></a></li>
            <li><a href="https://www.operanorth.co.uk/turn-of-the-screw-immersive-trailer/#about" target="_blank" rel="noopener noreferrer">Opera North Website<span role="img" aria-label="link">&#128279;</span></a></li>
            <li><a href="https://lusion.co/" target="_blank" rel="noopener noreferrer">Lusion Graphic Website<span role="img" aria-label="link">&#128279;</span></a></li>
            <li><a href="http://letsplay.ouigo.com/" target="_blank" rel="noopener noreferrer">3D Pin Ball Game Website<span role="img" aria-label="link">&#128279;</span></a></li>
            <li><a href="https://dotbigbang.com/social" target="_blank" rel="noopener noreferrer">DotBigBang 3D Game Website<span role="img" aria-label="link">&#128279;</span></a></li>
            <li><a href="https://www.acsl.co.jp/special.php" target="_blank" rel="noopener noreferrer">3D Drone Website<span role="img" aria-label="link">&#128279;</span></a></li>
            <li><a href="http://vr.ff.com/us/" target="_blank" rel="noopener noreferrer">Working 3D Model Car<span role="img" aria-label="link">&#128279;</span></a></li>
            <li><a href="http://stars.chromeexperiments.com/" target="_blank" rel="noopener noreferrer">Milky Way Galaxy 3D Model<span role="img" aria-label="link">&#128279;</span></a></li>
            <li><a href="https://phoboslab.org/wipeout/" target="_blank" rel="noopener noreferrer">Live Action Camera Race 3D Website<span role="img" aria-label="link">&#128279;</span></a></li>
            <li><a href="https://go.pioneer.com/cornrevolution#" target="_blank" rel="noopener noreferrer">Stunning Pioneer Website<span role="img" aria-label="link">&#128279;</span></a></li>
          </ul>
          .<br />.<br />
        .<br />.<br />.<br />.<br />.<br />
          .<br />.<br />.<br />.<br />.<br /><br />
          More Stuff Coming Soon Stay Tuned to our YouTube Channel Code Fantasy
        </div>
        <div className=" ybutton">
          <div className="g-ytsubscribe" data-channelid="UCZBQmiQkWzTViRlb6p1IxOw" data-layout="full" data-theme="dark" data-count="hidden"></div>
        </div>
        <div className="welE">
          Website Under Construction...


        </div>
      </div>
    )
  }
}

export default App;
