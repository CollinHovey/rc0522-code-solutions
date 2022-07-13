import React from 'react';
import ReactDOM from 'react-dom/client';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

function CustomButton(props) {
  return <button>{props.text}</button>;
}

const element = (
  <div>
    <CustomButton text="I" />
    <CustomButton text="know" />
    <CustomButton text="React!" />
  </div>
);

root.render(element);
