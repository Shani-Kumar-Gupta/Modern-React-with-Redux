// Module System: Import and Export
import React from 'react';

// Equivalent JavaScript after transpiles from Babel
// function App() {
//   return React.createElement(
//     'div',
//     null,
//     React.createElement('h1', null, 'Hello world'),
//     React.createElement('p', null, 'Shani Kumar Gupta')
//   );
// }

// function App() {
//   let message = 'Bye There!!';
//   const name = 'Shani Kumar Gupta';
//   let age = 25;
//   if (Math.random() > 0.5) {
//     message = 'Hii There!!';
//   }
//   return (
//     <>
//       <h1>{message}</h1>
//       <p>Time: {new Date().toLocaleDateString()}</p>
//       <p>Time: {new Date().toLocaleTimeString()}</p>
//       <p>Hi, My name is {name + ' and my age is ' + age}</p>
//       <input maxLength={5} minLength={2} />
//       {/* <meter /> */}
//       <textarea autoFocus />
//     </>
//   );
// }

function Demo() {
  return (
    <>
      <h1>Hi! Demo App</h1>
    </>
  );
}

export const MyMessage = 'Hi! React';
const myData = 5;

export { myData }; // Named Export
export default Demo; // Default Export
