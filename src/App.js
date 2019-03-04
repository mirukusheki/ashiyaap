import React, {Component} from "react";
import logo               from "./img/yes.svg";
import suara              from "./img/ashiap.mp3";
import About              from './component/About';
import Background         from './component/Background';
import Foreground         from './component/Foreground';
import Video              from './component/Video';
import "./App.css";

class App extends Component {
  state = {
    timesClicked: 0
  };

  playMusic = () => {
    const audio = new Audio(suara);
    audio.play();
    this.setState({
      timesClicked: this.state.timesClicked + 1
    });
  };

  clickedCaption = () => {
    let clicked = this.state.timesClicked;
    let clickString = (value) => "Atta di klik sebanyak " + value + "kali."

    // if clicked is idling set idling statement
    // if clicked just have 1 length, "sekali"
    // sisanya ya itu
    if (clicked === 0) return(
      <div>Klik biar Atta ngomong "Ashiap"</div>
    )
    else if (clicked === 1) return(
      <div>{ clickString("se") }</div>
    )
    else return(
      <div>{ clickString(`${clicked} `) }</div>
    )
  }

  render() {
    return (
      <div className="App" onClick={e => this.playMusic()}>
        <Foreground/>
        <Video/>
        <Background/>
        <div className="content">
          <header className="App-header">
            <h1 style={{margin: '0'}}>ASHIYAAP.exe</h1>
            <div>
              <embed src={logo} className="App-logo" style={{height: '17em'}}/>
            </div>
            <div style={{marginTop: '1em'}}>
              { this.clickedCaption() }
            </div>
          </header>
          <About/>
        </div>
        <div className="version">- Version 1.0.12</div>
      </div>
    );
  }
}

export default App;
