import React from 'react';

import ChooseImage from './components/ChooseImage';
import EnterName from './components/EnterName';
import AgainButton from './components/AgainButton';
import Timer from './components/Timer';

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
    time: ''
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

  playAgain = () => {

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
      images: randomArrayFirst
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
        />

        <EnterName 
        playerName = {this.state.playerName}
        handleChange = {this.handleChange}
        />

        <AgainButton
        playAgain = {this.playAgain}
        />

        <Timer/>
      </main>
    )
  }
}

export default App;

