import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselImage: 0,
      stopTimer: 0,
      state0: 'solid',
      state1: 'regular',
      state2: 'regular',
      state3: 'regular',
      state4: 'regular',
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
        [`state${previous}`]: 'regular',
        [`state${newNumber}`]: 'solid'
      });
    }, 3000);
    this.setState({ stopTimer: stopNumber });
  }

  goTo(event) {
    let where = '';
    this.setState({
      state0: 'regular',
      state1: 'regular',
      state2: 'regular',
      state3: 'regular',
      state4: 'regular'
    });
    if (event.target.className.includes('index0')) {
      this.setState({ state0: 'solid' });
      where = 0;
    } else if (event.target.className.includes('index1')) {
      this.setState({ state1: 'solid' });
      where = 1;
    } else if (event.target.className.includes('index2')) {
      this.setState({ state2: 'solid' });
      where = 2;
    } else if (event.target.className.includes('index3')) {
      this.setState({ state3: 'solid' });
      where = 3;
    } else if (event.target.className.includes('index4')) {
      this.setState({ state4: 'solid' });
      where = 4;
    }
    this.setState({ carouselImage: where });
  }

  hover(event) {
    if (event.target.className.includes('index0')) {
      this.setState({ state0: 'solid' });
    } else if (event.target.className.includes('index1')) {
      this.setState({ state1: 'solid' });
    } else if (event.target.className.includes('index2')) {
      this.setState({ state2: 'solid' });
    } else if (event.target.className.includes('index3')) {
      this.setState({ state3: 'solid' });
    } else if (event.target.className.includes('index4')) {
      this.setState({ state4: 'solid' });
    }
    this.setState({ hover: true });
  }

  leaveHover(event) {
    if (event.target.className.includes('index0')) {
      if (this.state.carouselImage === 0) {
        this.setState({ state0: 'solid' });
      } else {
        if (this.state.state0 === 'solid') {
          this.setState({ state0: 'regular' });
        } else {
          this.setState({ state0: 'solid' });
        }
      }
    } else if (event.target.className.includes('index1')) {
      if (this.state.carouselImage === 1) {
        this.setState({ state1: 'solid' });
      } else {
        if (this.state.state1 === 'solid') {
          this.setState({ state1: 'regular' });
        } else {
          this.setState({ state1: 'solid' });
        }
      }
    } else if (event.target.className.includes('index2')) {
      if (this.state.carouselImage === 2) {
        this.setState({ state2: 'solid' });
      } else {
        if (this.state.state2 === 'solid') {
          this.setState({ state2: 'regular' });
        } else {
          this.setState({ state2: 'solid' });
        }
      }
    } else if (event.target.className.includes('index3')) {
      if (this.state.carouselImage === 3) {
        this.setState({ state3: 'solid' });
      } else {
        if (this.state.state3 === 'solid') {
          this.setState({ state3: 'regular' });
        } else {
          this.setState({ state3: 'solid' });
        }
      }
    } else if (event.target.className.includes('index4')) {
      if (this.state.carouselImage === 4) {
        this.setState({ state4: 'solid' });
      } else {
        if (this.state.state4 === 'solid') {
          this.setState({ state4: 'regular' });
        } else {
          this.setState({ state4: 'solid' });
        }
      }
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
      [`state${last}`]: 'solid',
      [`state${current}`]: 'regular'
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
      [`state${next}`]: 'solid',
      [`state${current}`]: 'regular'
    });
  }

  render() {
    // console.log('states', this.state);
    return (
      <div className='carousel-container' onLoad={this.timer}>
        <div className='left-container'>
          <i className="fa-solid fa-arrow-left fa-4x" onClick={this.goLeft}></i>
        </div>
        <div className='image-container'>
          <img src={this.props.images[this.state.carouselImage]}></img>
          <div className='circle-holder'>
            <i className={`fa-${this.state.state0} fa-circle fa-2x index0`} onClick={this.goTo} onMouseEnter={this.hover} onMouseLeave={this.leaveHover}></i>
            <i className={`fa-${this.state.state1} fa-circle fa-2x index1`} onClick={this.goTo} onMouseEnter={this.hover} onMouseLeave={this.leaveHover}></i>
            <i className={`fa-${this.state.state2} fa-circle fa-2x index2`} onClick={this.goTo} onMouseEnter={this.hover} onMouseLeave={this.leaveHover}></i>
            <i className={`fa-${this.state.state3} fa-circle fa-2x index3`} onClick={this.goTo} onMouseEnter={this.hover} onMouseLeave={this.leaveHover}></i>
            <i className={`fa-${this.state.state4} fa-circle fa-2x index4`} onClick={this.goTo} onMouseEnter={this.hover} onMouseLeave={this.leaveHover}></i>
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
