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
    if (this.state.button) {
      return <button onClick={this.handleClick} className='on'><span className='switch switch-on'></span></button>;
    } else {
      return <button onClick={this.handleClick} className='off'><span className='switch switch-off'></span></button>;
    }
  }
}

export default ToggleSwitch;
