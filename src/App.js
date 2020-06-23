import React from 'react';

import ChooseImage from './components/ChooseImage';
import EnterName from './components/EnterName';
import AgainButton from './components/AgainButton';

import First from './images/1.jpg';
import Second from './images/2.jpg';
import Third from './images/3.jpg';
import Fourth from './images/4.jpg';
import Fiveth from './images/5.jpg';
import Sixth from './images/6.jpg';
import Seventh from './images/7.jpg';
import Eighth from './images/8.jpg';

import './App.css';



class App extends React.Component {
  state = {
    images: [
      {
        url: First,
        name: 'one'
      },
      {
        url: Second,
        name: 'two'
      },
      {
        url: Third,
        name: 'three'
      },
      {
        url: Fourth,
        name: 'four'
      },
      {
        url: Fiveth,
        name: 'five'
      },
      {
        url: Sixth,
        name: 'six'
      },
      {
        url: Seventh,
        name: 'seven'
      },
      {
        url: Eighth,
        name: 'eight'
      },
    ],
    randomFirst: [],
    randomSecond: [],
    playerName:'',
    time:0,
    minutes:0,
    timerOn:true,
    timerId: Number
  }

  componentDidMount() {
    let exapmpleArray = [];
    let randomArrayFirst = [];
    let randomArraySecond = [];

    for (let i = 0; i < this.state.images.length;) {
      let randomNumber = Math.floor(Math.random() * this.state.images.length);
      const randomElement = this.state.images.splice(randomNumber, 1);
      randomArrayFirst.push(randomElement[0]);
    }

    exapmpleArray = randomArrayFirst.slice();

    for (let i = 0; i < exapmpleArray.length;) {
      let randomNumber = Math.floor(Math.random() * exapmpleArray.length);
      const randomElement = exapmpleArray.splice(randomNumber, 1);
      randomArraySecond.push(randomElement[0]);
    }

    this.setState({
      randomFirst: randomArrayFirst,
      randomSecond: randomArraySecond,
      images: randomArrayFirst
    })
  }



  playTime = () => {
    let time = 0;
      this.state.timerId = setInterval(() => {
        time++;
        this.setState({
          time
        })
      }, 1000);
  }

  stopTimer = () => {
    clearInterval(this.state.timerId);
  }


  playAgain = () => {

    this.playTime();
    document.querySelector('div.timerContainer p.timer').classList.add('activeTime');
    document.querySelector('div.againContainer').classList.remove('activeAgain');
    document.querySelectorAll('div.square').forEach(div => {
      div.id = 'disactive';
    })

    let exapmpleArray = [];
    let randomArrayFirst = [];
    let randomArraySecond = [];

    

    for (let i = 0; i < this.state.images.length;) {
      let randomNumber = Math.floor(Math.random() * this.state.images.length);
      const randomElement = this.state.images.splice(randomNumber, 1);
      randomArrayFirst.push(randomElement[0]);
    }

    exapmpleArray = randomArrayFirst.slice();

    for (let i = 0; i < exapmpleArray.length;) {
      let randomNumber = Math.floor(Math.random() * exapmpleArray.length);
      const randomElement = exapmpleArray.splice(randomNumber, 1);
      randomArraySecond.push(randomElement[0]);
    }

    this.setState({
      randomFirst: randomArrayFirst,
      randomSecond: randomArraySecond,
      images: randomArrayFirst,
      time:0
    })
  }

handleChange = (e) => {
        this.setState({
          playerName: e.target.value
        })
  }


  render() {
    return (
      <main>
        <p className="name">{this.state.playerName}</p>

        <ChooseImage
          randomFirst={this.state.randomFirst}
          randomSecond={this.state.randomSecond}
          stopTimer = {this.stopTimer}
        />

        <EnterName 
        playerName = {this.state.playerName}
        handleChange = {this.handleChange}
        playTime = {this.playTime}
        />

        <AgainButton
        playAgain = {this.playAgain}
        time = {this.state.time}
        />

        <div className = 'timerContainer'>
          <p className="timer">Time: {this.state.time < 10 ? `0${this.state.time}`:this.state.time} .s</p>
        </div>
      </main>
    )
  }
}

export default App;

