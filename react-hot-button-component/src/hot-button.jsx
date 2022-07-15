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
    if (this.state.counter >= 18) {
      return <button onClick={this.handleClick} className="btn-lvl-7">Hot Button</button>;
    } else if (this.state.counter >= 15) {
      return <button onClick={this.handleClick} className="btn-lvl-6">Hot Button</button>;
    } else if (this.state.counter >= 12) {
      return <button onClick={this.handleClick} className="btn-lvl-5">Hot Button</button>;
    } else if (this.state.counter >= 9) {
      return <button onClick={this.handleClick} className="btn-lvl-4">Hot Button</button>;
    } else if (this.state.counter >= 6) {
      return <button onClick={this.handleClick} className="btn-lvl-3">Hot Button</button>;
    } else if (this.state.counter >= 3) {
      return <button onClick={this.handleClick} className="btn-lvl-2">Hot Button</button>;
    } else {
      return <button onClick={this.handleClick} className="btn-lvl-1">Hot Button</button>;
    }
  }
}

export default HotButton;
