import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
    <div className="ui container comments">
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar"></img>
            </a>
            <div className="content">
                <a href="/" className="author">Sam</a>
                <div className="metadata">
                    <span className="date">Today @6PM</span>
                </div>
                <div className="text">Nice blog post!!</div>
            </div>
        </div>
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar"></img>
            </a>
            <div className="content">
                <a href="/" className="author">Shani</a>
                <div className="metadata">
                    <span className="date">Today @11PM</span>
                </div>
                <div className="text">Nice post!!</div>
            </div>
        </div>
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar"></img>
            </a>
            <div className="content">
                <a href="/" className="author">Ishita</a>
                <div className="metadata">
                    <span className="date">Today @11AM</span>
                </div>
                <div className="text">Nice post!!</div>
            </div>
        </div>
    </div>);
}

ReactDOM.render(<App />, document.querySelector('#root'));