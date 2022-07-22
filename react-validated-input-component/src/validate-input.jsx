import React from 'react';

class Validate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '', stage: 0 };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePasswordChange(event) {
    const inputPassword = event.target;
    this.setState({ password: inputPassword.value });

    if (inputPassword.value.length === 0) {
      this.setState({ stage: 0 });
    } else if (inputPassword.value.length < 8) {
      this.setState({ stage: 1 });
    } else {
      this.setState({ stage: 2 });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    let color = 'red';
    let message = '';
    let symbol = 'x';
    if (this.state.stage === 0) {
      message = 'A password is required';
    }
    if (this.state.stage === 1) {
      message = 'Your password is too short';
    }

    if (this.state.stage === 2) {
      symbol = 'check';
      color = 'green';
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='password'>Password</label>
        <div>
          <input type="password" id='password' value={this.state.password} onChange={this.handlePasswordChange}></input>
          <i className={`fa-solid fa-${symbol} ${color}`}></i>
        </div>
        <p className="text">{message}</p>

      </form>
    );
  }
}

export default Validate;
