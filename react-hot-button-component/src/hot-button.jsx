import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    let btnClass = '';
    if (this.state.counter >= 18) {
      btnClass = 'btn-lvl-7';
    } else if (this.state.counter >= 15) {
      btnClass = 'btn-lvl-6';
    } else if (this.state.counter >= 12) {
      btnClass = 'btn-lvl-5';
    } else if (this.state.counter >= 9) {
      btnClass = 'btn-lvl-4';
    } else if (this.state.counter >= 6) {
      btnClass = 'btn-lvl-3';
    } else if (this.state.counter >= 3) {
      btnClass = 'btn-lvl-2';
    } else {
      btnClass = 'btn-lvl-1';
    }
    return <button onClick={this.handleClick} className={btnClass}>Hot Button</button>;
  }
}

export default HotButton;
