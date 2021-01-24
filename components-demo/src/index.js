import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetails from './components/CommentDetails';

const App = () => {
    return (
        <div className="ui container comments">
            {/* Component Nesting */}
            
            <CommentDetails />
            <CommentDetails />
            <CommentDetails />
            
            {/* <div className="comment">
                <a href="/" className="avatar">
                    <img src={faker.image.avatar()} alt="avatar"></img>
                </a>
                <div className="content">
                    <a href="/" className="author">Ishita</a>
                    <div className="metadata">
                        <span className="date">Today @11AM</span>
                    </div>
                    <div className="text">Nice post!!</div>
                </div>
            </div> */}
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));