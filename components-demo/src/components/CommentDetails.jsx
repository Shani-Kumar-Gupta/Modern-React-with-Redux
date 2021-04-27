import React from 'react';
// Configurable Component using Props System
const CommentDetails = (props) => {
    return (
        <>
            <div className="comment">
                <a href="/" className="avatar">
                    <img src={props.avatar} alt="avatar"></img>
                </a>
                <div className="content">
                    <a href="/" className="author">{props.author}</a>
                    <div className="metadata">
                        <span className="date">{props.timeAgo}</span>
                    </div>
                    <div className="text">{props.content}</div>
                </div>
            </div>
        </>
    )
}

export default CommentDetails;