import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openId: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    if (this.state.openId === id) {
      this.setState({ openId: null });
    } else {
      this.setState({ openId: id });
    }

  }

  render() {
    const input = this.props.context;
    const listInput = input.map((entry, index) => {
      entry.id = index;
      return (
      <div key={entry.id} className='entry-container'>
        <div className="entry-header" onClick={() => this.handleClick(entry.id)}>{entry.header}</div>
          <div className={`entry-description clicked-${this.state.openId === entry.id ? 'true' : 'false'}`}>{entry.description}</div>
      </div>
      );
    });
    return (
      <div className='all-entries'>
        {listInput}
      </div>

    );
  }
}

export default Accordion;
