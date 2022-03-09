import React from "react";
import Stopwatch from "./Stopwatch";
import Countdown from "./Countdown";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      showStopwatch: false,
      showCountdown: false,
    };
  }
  handleStopWatch = () => {
    this.setState({
      showStopwatch: !this.state.showStopwatch,
    });
  };
  handleCoundown = () => {
    this.setState({
      showCountdown: !this.state.showCountdown,
    });
  };

  render() {
    return (
      <>
        <div className="section">
          <span>
            <i class="fa fa-rocket"></i>
          </span>
          <h1>Timers</h1>
          <span>
            <i class="fa fa-rocket"></i>
          </span>

          <div>
            <button
              className={this.state.showStopwatch ? "btn hidden" : "btn"}
              onClick={this.handleStopWatch}
            >
              Show Stopwatch
            </button>
            <button
              className={this.state.showCountdown ? "btn hidden" : "btn"}
              onClick={this.handleCoundown}
            >
              Show Countdown
            </button>
          </div>
          <div className="display">
            {this.state.showStopwatch === true ? (
              <Stopwatch closeStopWatch={this.handleStopWatch} />
            ) : (
              ""
            )}
          </div>
          <div className="display">
            {this.state.showCountdown === true ? (
              <Countdown closeCountdown={this.handleCoundown} />
            ) : (
              ""
            )}
          </div>
        </div>
      </>
    );
  }
}

export default App;
