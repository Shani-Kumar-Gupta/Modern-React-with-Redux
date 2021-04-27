import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetails from './components/CommentDetails';
import faker from 'faker';
import ApprovalCard from './components/ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            {/* Component Nesting */}

            <ApprovalCard>
                <div>
                    <h2>Warning!!</h2>
                    Hiii! Are you sure you want to do it?? 
                </div>
            </ApprovalCard>
            
            <CommentDetails 
                author="Sam" 
                timeAgo="Today @ 6:00PM" 
                content="very nice :)" 
                avatar={faker.image.avatar()}
                />
            <CommentDetails 
                author="Alex" 
                timeAgo="Today @ 6:40PM" 
                content="(: Excellent :)"
                avatar={faker.image.avatar()} 
                />
            <CommentDetails 
                author="Tan" 
                timeAgo="Yesterday @ 3:30AM" 
                content="very good :)" 
                avatar={faker.image.avatar()}
                />
            
            <ApprovalCard>
                <CommentDetails 
                    author="Tan" 
                    timeAgo="Yesterday @ 3:30AM" 
                    content="very good :)" 
                    avatar={faker.image.avatar()}
                    />
            </ApprovalCard>
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