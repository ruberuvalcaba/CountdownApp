import React, { Component } from 'react';
import Countdown from './Components/Countdown.js';

class App extends Component {
  state = {
    time: {},
    timeline: {
      days: 1,
      hours: 23,
      minutes: 27,
      seconds: 47,
    },
    totalSeconds: 0,
  };
  timer = 0;

  getSeconds = () => {
    const { timeline } = this.state;
    const daysToSecs = Math.floor(timeline.days * 86400);
    const hoursToSecs = Math.floor(timeline.hours * 3600);
    const minutesToSecs = Math.floor(timeline.minutes * 60);

    return daysToSecs + hoursToSecs + minutesToSecs + timeline.seconds;
  };

  updateTime = totalSeconds => {
    const days = Math.floor(totalSeconds / (24 * 60 * 60));

    const divisorHours = totalSeconds % (24 * 60 * 60);
    const hours = Math.floor(divisorHours / (60 * 60));

    const divisorMinutes = totalSeconds % (60 * 60);
    const minutes = Math.floor(divisorMinutes / 60);

    const divisorSeconds = divisorMinutes % 60;
    const seconds = Math.ceil(divisorSeconds);

    const time = {
      days,
      hours,
      minutes,
      seconds,
    };
    this.setState({
      time,
      totalSeconds,
    });
  };

  countdownTimer = () => {
    const seconds = this.state.totalSeconds - 1;
    this.updateTime(seconds);
    if (seconds === 0) {
      clearInterval(this.timer);
    }
  };
  componentDidMount() {
    this.setState(
      {
        totalSeconds: this.getSeconds(),
      },
      () => this.updateTime(this.state.totalSeconds)
    );

    if (this.timer === 0) {
      this.timer = setInterval(this.countdownTimer, 1000);
    }
  }

  render() {
    const { time } = this.state;
    return (
      <Countdown time={time} />
    );
  }
}

export default App;