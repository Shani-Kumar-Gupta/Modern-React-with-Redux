import React from 'react';
import faker from 'faker';
// Configurable Component using Props System
const CommentDetails = () => {
    return (
        <>
            <div className="comment">
                <a href="/" className="avatar">
                    <img src={faker.image.avatar()} alt="avatar"></img>
                </a>
                <div className="content">
                    <a href="/" className="author">Sam</a>
                    <div className="metadata">
                        <span className="date">Today @6PM</span>
                    </div>
                    <div className="text">Nice blog post!!</div>
                </div>
            </div>
        </>
    )
}

export default CommentDetails;