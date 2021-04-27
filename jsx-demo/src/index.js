// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
    const buttonText = 'Click Me!';
    return (
        <div className="mainContainer">
            <h1>Hii There!!!</h1>
            <label htmlFor="name">Enter your Name: </label>
            <input id="name" type="text"/>
            <button type="submit" style={{backgroundColor: "blue", color: "white"}}>{buttonText}</button>
        </div>
    )
}

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)