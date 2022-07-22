import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselImage: 0,
      stopTimer: 0,
      hover: false
    };
    this.timer = this.timer.bind(this);
    this.goTo = this.goTo.bind(this);
    this.goLeft = this.goLeft.bind(this);
    this.goRight = this.goRight.bind(this);
    this.hover = this.hover.bind(this);
    this.leaveHover = this.leaveHover.bind(this);
  }

  timer() {
    const input = this.props.images;
    for (let x = 0; x < input.length; x++) {
      if (this.state.carouselImage === x) {
        this.setState({ [`${x}`]: 'solid' });
      } else {
        this.setState({ [`${x}`]: 'regular' });
      }
    }
    clearInterval(this.state.stopTimer);
    const stopNumber = setInterval(() => {
      const previous = this.state.carouselImage;
      let newNumber = this.state.carouselImage;
      if (this.state.carouselImage === 4) {
        newNumber = 0;
        this.setState({ carouselImage: 0 });
      } else {
        newNumber += 1;
        this.setState({ carouselImage: this.state.carouselImage + 1 });
      }
      this.setState({
        [`${previous}`]: 'regular',
        [`${newNumber}`]: 'solid'
      });
    }, 3000);
    this.setState({ stopTimer: stopNumber });
  }

  goTo(id) {
    this.setState({
      carouselImage: id,
      [`${this.state.carouselImage}`]: 'regular',
      [`${id}`]: 'solid'
    });
  }

  hover(id) {
    this.setState({
      hover: true,
      [`${id}`]: 'solid'
    });
  }

  leaveHover(id) {
    if (id !== this.state.carouselImage) {
      this.setState({ [`${id}`]: 'regular' });
    }
    this.setState({ hover: false });
  }

  goLeft() {
    const current = this.state.carouselImage;
    let last = this.state.carouselImage - 1;
    if (last === -1) {
      last = 4;
    }
    this.setState({
      carouselImage: last,
      [`${last}`]: 'solid',
      [`${current}`]: 'regular'
    });
  }

  goRight() {
    const current = this.state.carouselImage;
    let next = this.state.carouselImage + 1;
    if (next === 5) {
      next = 0;
    }
    this.setState({
      carouselImage: next,
      [`${next}`]: 'solid',
      [`${current}`]: 'regular'
    });
  }

  render() {
    const input = this.props.images;
    const allInputs = input.map((image, index) => {
      const circleId = index;
      return <i key={index} className={`fa-${this.state[index]} fa-circle fa-2x index${index}`} onClick={() => this.goTo(circleId)} onMouseEnter={() => this.hover(circleId)} onMouseLeave={() => this.leaveHover(circleId)}></i>;
    });
    return (
      <div className='carousel-container' onLoad={this.timer}>
        <div className='left-container'>
          <i className="fa-solid fa-arrow-left fa-4x" onClick={this.goLeft}></i>
        </div>
        <div className='image-container'>
          <img src={this.props.images[this.state.carouselImage]}></img>
          <div className='circle-holder'>
            {allInputs}
          </div>
        </div>
        <div className='right-container'>
          <i className="fa-solid fa-arrow-right fa-4x" onClick={this.goRight}></i>
        </div>
      </div>
    );
  }
}

export default Carousel;
