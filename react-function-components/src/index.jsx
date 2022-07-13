import React from 'react';
import ReactDOM from 'react-dom';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

function CustomButton(props) {
  return <button>Click Me!</button>;
}

root.render(<CustomButton />);
