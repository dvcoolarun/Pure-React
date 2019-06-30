import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Tweet() {
    return (
        <div className="tweet">
            <Avatar/>
            <div className="content">
                <NameWithHandle/>
                <Message/>
            </div>
        </div>
    );
}

ReactDOM.render(<Tweet/>, 
    document.querySelector('#root'));

function Avatar() {
    return (
        <img 
            src="https://www.gravatar.com/avatar/nothing"
            className="avatar"
            alt="avatar"
            />
    );
}

function Message() {
    return (
        <div className="message">
            This is less than 140 characters.
        </div>
    );
}

function NameWithHandle() {
    return (
        <span className="name-with-handle">
            <span className="name">Your Name</span>
            <span className="handle">@yourhandle</span>
        </span>
    );
}

const Time = () => (
    <span className="time">3h ago</span>
);

const ReplyButton = () => (
    <span className="fa fa-reply reply-button"></span>
);

const RetweenButton = () => (
    <i className="fa fa-retweet retween-button"/>
);

const LikeButton = () => (
    <i className="fa fa-heart like-button"/>
);

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-buttons"/>
);

/*
// It can be written as anonymous function and
// stored in a (constant) variable:

function LikeButton() {
    return (
        <i className="fa fa-heart like-button"/>
    );
}

const LikeButton = function() {
    return (
        <i className="fa fa-heart like-button"/>
    );
}

// The anonymouse function can be
// turned into an arrow function:

const LikeButton = () => {
    return (
       <i className="fa fa-heart like-button"/>
    );
}

// It can be simplified by removing
// the braces and the 'return':

const LikeButton = () => (
    <i className="fa fa-heart like-button"/>
)

// And if it's really simple
// You can even write it on one line:

const Hi = () => <span>Hi</span>;
*/
