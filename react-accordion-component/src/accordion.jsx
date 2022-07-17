import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      htmlClicked: false,
      cssClicked: false,
      javascriptClicked: false
    };
    this.handleClickHTML = this.handleClickHTML.bind(this);
    this.handleClickCSS = this.handleClickCSS.bind(this);
    this.handleClickJavaScript = this.handleClickJavaScript.bind(this);
  }

  handleClickHTML(event) {
    this.setState({ htmlClicked: !this.state.htmlClicked });
  }

  handleClickCSS(event) {
    this.setState({ cssClicked: !this.state.cssClicked });
  }

  handleClickJavaScript(event) {
    this.setState({ javascriptClicked: !this.state.javascriptClicked });
  }

  render() {
    const input = this.props.context;
    // const listInput = input.map(entry => {
    //   if (entry.header === 'HTML') {
    //     console.log(entry);
    //   }
    //   // const handleName = `handleClick${entry.header}`();
    //   return (
    //   <div key={entry.header} className='entry-container'>
    //     <li className='entry-header' onClick={this.handleClickHTML}>{entry.header}</li>
    //     <li className='entry-description'>{entry.description}</li>
    //   </div>
    //   );
    // });
    return (
      // <ul className='all-entries'>{listInput}</ul>
      <ul className='all-entries'>
        <div key={input[0].header} className='entry-container'>
          <li className='entry-header' onClick={this.handleClickHTML}>{input[0].header}</li>
          <li className={`entry-description clicked-${this.state.htmlClicked}`}>{input[0].description}</li>
        </div>
        <div key={input[1].header} className='entry-container'>
          <li className='entry-header' onClick={this.handleClickCSS}>{input[1].header}</li>
          <li className={`entry-description clicked-${this.state.cssClicked}`}>{input[1].description}</li>
        </div>
        <div key={input[2].header} className='entry-container'>
          <li className='entry-header' onClick={this.handleClickJavaScript}>{input[2].header}</li>
          <li className={`entry-description clicked-${this.state.javascriptClicked}`}>{input[2].description}</li>
        </div>
      </ul>

    );
  }
}

export default Accordion;
