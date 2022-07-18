import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

const carouselImages = [
  '../images/carracosta.png',
  '../images/empoleon.png',
  '../images/gengar.png',
  '../images/metagross.png',
  '../images/sceptile.png'
];

root.render(<Carousel images={carouselImages}/>);
