import React from "react";
class Countdown extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <>
        <div className="timer relative">
          <h2>Countdown</h2>
          <div>
            <h5>00:00:00:00</h5>
          </div>
          <button className="btn">Start</button>
          <button className="btn">Stop</button>
          <button className="btn">Reset</button>
          <span className="cross" onClick={this.props.closeCountdown}>
            X
          </span>
        </div>
      </>
    );
  }
}
export default Countdown;
