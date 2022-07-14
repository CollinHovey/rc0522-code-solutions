import React from 'react';
import ReactDOM from 'react-dom/client';
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    if (this.state.isClicked) {
      return <button onClick={this.handleClick}>{this.props.clicked}</button>;
    }
    return <button onClick={this.handleClick}>{this.props.start}</button>;
  }

}

const element = (
  <div>
    <CustomButton start="Click Me!" clicked="Thanks" />
  </div>
);

root.render(element);
