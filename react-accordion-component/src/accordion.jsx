import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    if (this.state[id] === undefined) {
      this.setState({ [id]: true });
    } else {
      this.setState({ [id]: !this.state[id] });
    }

  }

  render() {
    const input = this.props.context;
    const listInput = input.map((entry, index) => {
      entry.id = index;
      return (
      <div key={entry.header} className='entry-container'>
        <div className="entry-header" onClick={() => this.handleClick(entry.id)}>{entry.header}</div>
          <div className={`entry-description clicked-${this.state[entry.id]}`}>{entry.description}</div>
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
