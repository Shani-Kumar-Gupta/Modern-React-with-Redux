// 1) Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import MyApp, { myData, MyMessage } from './App.js';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);
console.log(myData, MyMessage);

// 4) Create a component
// function App() {
//   return <h1>Hi There!</h1>;
// }

// 5) Show the component on the screen
root.render(<MyApp />);
