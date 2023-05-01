// 1) Import React and ReactDOM from libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// 4) Import component
import App from './App';

// 2) Get reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of the element
const root = ReactDOM.createRoot(el);

// 5) Render component into the DOM
root.render(<App />);