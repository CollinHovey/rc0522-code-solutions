import React from 'react';
import ReactDOM from 'react-dom/client';
import Drawer from './app-drawer';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<Drawer />);
