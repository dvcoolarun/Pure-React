import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/* Adding PropTypes to Tweet Component */

function Tweet({ tweet }) {
    return (
        <div className="tweet">
          <Avatar hash={tweet.gravatar}/>
            <div className="content">
              <NameWithHandle author={tweet.author}/><Time time={tweet.timestamp}/>
                <Message text={tweet.message}/>
                <div className="buttons">
                    <ReplyButton/>
                     <RetweetButton count={tweet.retweets}/>
                     <LikeButton count={tweet.likes}/>
                    <MoreOptionsButton/>
                </div>
            </div>
        </div>
    );
}

Tweet.propTypes = {
    Tweet : PropTypes.shape({
        message: PropTypes.string.isRequired,
        gravatar: PropTypes.string.isRequired,
        likes: PropTypes.number,
        retweets: PropTypes.number,
        timestamp: PropTypes.string.isRequired
    })
};

function Avatar({ hash }) {
    const url = 'https://www.gravatar.com/avatar/${hash}';
    return (
        <img 
            src={url}
            className="avatar"
            alt="avatar"/>
    );
}

Avatar.propTypes = {
    hash : PropTypes.string.isRequired
};

function NameWithHandle({ author }) {
    const { name, handle } = author;
    return (
        <span className="name-with-handle">
          <span className="name">{name}</span>
          <span className="handle">@{handle}</span>
        </span>
    );
}

NameWithHandle.propTypes = {
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        handle: PropTypes.string.isRequired
    }).isRequired
};

function Message({ text }) {
    return (
        <div className="message">
          {text}
        </div>
    );
}

Message.propTypes = {
    count: PropTypes.string
};

const Time = ({ time }) => {
    const timeString = moment(time).fromNow();

    return(
        <span className="time">
          {timeString}
        </span>
    );
};

Time.propTypes = {
    count: PropTypes.string
};

const ReplyButton = () => (
    <i className="fa fa-reply reply-button"></i>
);

function Count({ count }) {
    if(count > 0) {
        return (
            <span className="retweet-count">
              {count}
            </span>
        );
    } else {
        return null;
    }
};

const RetweetButton = ({ count }) => (
    <span className="retweet-button">
      <i className="fa fa-retweet"/>
      <Count count={count}/>
    </span>
);

RetweetButton.propTypes = {
    count: PropTypes.number
};

const LikeButton = ({ count }) => (
    <span className="like-button">
      <i className="fa fa-heart"/>
      <span className="like-count">
        {count ? count : null}
      </span>
    </span>
);

LikeButton.propTypes = {
    count: PropTypes.number
};

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-buttons"/>
);

// ...
var testTweet = {
    message: "Something about cats.",
    gravatar: "xyz",
    author: {
        handle: "catperson",
        name: "IAMA Cat Person"
    },
    likes: 2,
    retweets: 2,
    timestamp: "2019-7-1 11:24:37"
};

ReactDOM.render(<Tweet tweet={testTweet}/>, 
    document.querySelector('#root'));


/* Working on the PropTypes */

function Comment({ author, message, likes}) {
    return (
	<div>
	  <div className='author'>{ author }</div>
	  <div className='message'>{ message }</div>
	  <div className='likes'>
	    {likes > 0 ? likes: 'No'} likes
	  </div>
	</div>
    );
}

Comment.propTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    likes: PropTypes.number
};

// ReactDOM.render(<Comment author={42}/>,
//     document.querySelector('#root')
// );

/* Working with Custom Validators */

function CustomValidator(props, propName, componentName) {
    // here propName === "myCustomProp"
    if (props[propName].length !== 3) {
        return new Error(
            'Invalid prop `' + propName + '` supplied to' +
                ' `' + componentName + '`. Length is not 3.' 
        );
    }

};

const CustomTest = ({ myCustomProp }) => (
    <span>{myCustomProp}</span>
);

CustomTest.propTypes = {
    myCustomProp: CustomValidator
};

// ReactDOM.render(
//     <CustomTest myCustomProp='not_abc'/>,
//     document.getElementById('root')
// );
