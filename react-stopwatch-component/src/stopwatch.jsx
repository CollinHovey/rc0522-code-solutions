import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { on: false, interval: '', counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.on) {
      clearInterval(this.state.interval);
      this.setState({ on: false });
    } else {
      const stopInterval = setInterval(() => {
        this.setState({ counter: this.state.counter + 1 });
      }, 1000);
      this.setState({ on: true, interval: stopInterval });
    }
  }

  render() {
    let icon = 'fa-play';
    if (this.state.on) {
      icon = 'fa-pause';
    }
    return (
      <div className='container'>
        <h1 className="watch">{this.state.counter}</h1>
        <i onClick={this.handleClick} className={`fa-solid ${icon} fa-4x`}></i>
      </div>
    );
  }
}

export default Stopwatch;
