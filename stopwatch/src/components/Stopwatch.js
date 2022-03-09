import React from "react";
class Stopwatch extends React.Component {
  constructor(props) {
    super();
    [this.milliseconds, this.seconds, this.minutes, this.hours]= [0, 0, 0, 0];
    this.state ={
        timerRef : "00 : 00 : 00 : 000 "
    }
    
    this.int = null;
  }

  startTimer = () => {
    if (this.int !== null) {
        clearInterval(this.int);
    }
    this.int = setInterval(this.displayTimer, 10);
  };

  stopTimer = () => {
    clearInterval(this.int);
  };

  resetTimer = () => {
    clearInterval(this.int);
    [this.milliseconds, this.seconds, this.minutes, this.hours] = [0, 0, 0, 0];
    this.setState({
        timerRef :  "00 : 00 : 00 : 000 "
    })
  };

  displayTimer = () => {
    this.milliseconds += 10;
    if (this.milliseconds == 1000) {
      this.milliseconds = 0;
      this.seconds++;
      if (this.seconds == 60) {
        this.seconds = 0;
        this.minutes++;
        if (this.minutes == 60) {
          this.minutes = 0;
          this.hours++;
        }
      }
    }

    let h = this.hours < 10 ? "0" + this.hours : this.hours;
    let m = this.minutes < 10 ? "0" + this.minutes : this.minutes;
    let s = this.seconds < 10 ? "0" + this.seconds : this.seconds;
    let ms =
      this.milliseconds < 10
        ? "00" + this.milliseconds
        : this.milliseconds < 100
        ? "0" + this.milliseconds
        : this.milliseconds;

        this.setState({
            timerRef :  ` ${h} : ${m} : ${s} : ${ms}`
        })
  };

  render() {
    return (
      <>
        <div className="timer relative">
          <h2>Stopwatch</h2>
          <div>
            <h5 className="timerDisplay">{this.state.timerRef}</h5>
          </div>
          <button className="btn" onClick={this.startTimer}>Start</button>
          <button className="btn" onClick={this.stopTimer}>Stop</button>
          <button className="btn" onClick={this.resetTimer}>Reset</button>

          <span className="cross" onClick={this.props.closeStopWatch}>
            X
          </span>
        </div>
      </>
    );
  }
}
export default Stopwatch;
