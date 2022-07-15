import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { button: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ button: !this.state.button });
  }

  render() {
    let status = 'off';
    if (this.state.button) {
      status = 'on';
    }

    return (
      <button onClick={this.handleClick} className={status}>
        <span className={`switch switch-${status}`}></span>
      </button>
    );
  }
}

export default ToggleSwitch;
