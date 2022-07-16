import React from 'react';

class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.handleClickOn = this.handleClickOn.bind(this);
    this.handleClickOff = this.handleClickOff.bind(this);
  }

  handleClickOn() {
    this.setState({ clicked: !this.state.clicked });
  }

  handleClickOff() {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    const tabs = ['Profile', 'Settings'];
    const tabsList = tabs.map(list => {
      return (
        <li key={list} onClick={this.handleClickOff}>{list}</li>
      );
    });
    let nav = 'no-nav';
    if (this.state.clicked) {
      nav = 'nav';
    }
    return (
      <div>
        <div className={`nav-container ${nav}`}>
          <h1 onClick={this.handleClickOff}>Home</h1>
          <ul>{tabsList}</ul>
        </div>
        <div>
          <div className={`shadow-${this.state.clicked}`} onClick={this.handleClickOff}>
          </div>
          <i className="fa-solid fa-bars fa-3x" onClick={this.handleClickOn}></i>
        </div>
      </div>
    );
  }
}

export default Drawer;
