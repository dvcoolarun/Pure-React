import moment from 'moment';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Add the { tweet } prop, destructured 

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

/* The gravatar hash, passed in as hash
   using ES6 destructuring, Is incorporated into
   the URL and passed to the image tag as before.
*/

function Avatar({ hash }) {
    var url = 'https://www.gravatar.com/avatar/${hash}';
    return (
        <img 
            src={url}
            className="avatar"
            alt="avatar"/>
    );
}

function NameWithHandle({ author }) {
    const { name, handle } = author;
    return (
        <span className="name-with-handle">
          <span className="name">{name}</span>
          <span className="handle">@{handle}</span>
        </span>
    );
}

function Message({ text }) {
    return (
        <div className="message">
          {text}
        </div>
    );
}

/* For single statement there is no need
   of return and the braces.

   For two statements or more, it need surrounding
   braces, which then causes it to need a return.
*/

const Time = ({ time }) => {
    const timeString = moment(time).fromNow();

    return(
        <span className="time">
          {timeString}
        </span>
    );
};

const ReplyButton = () => (
    <i className="fa fa-reply reply-button"></i>
);

/* Remember if JSX expression inside single braces
   evaluates to null or false, nothing is rendered
   at all.
*/

/*

function getRetweetCount(count) {
    if(count > 0) {
        return (
            <span className="retweet-count">
              {count}
            </span>
        );
    } else {
        return null;
    }
}

const RetweetButton = ({ count }) => (
    <span className ="retweet-button">
      <i className="fa fa-retweet"/>
      {getRetweetCount(count)}
    </span>
);
*/

/* It is worth noting that getRetweetcount
  function would be writen as component insted */

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
}

const RetweetButton = ({ count }) => (
    <span className="retweet-button">
      <i className="fa fa-retweet"/>
      <Count count={count}/>
    </span>
);

/*
const LikeButton = ({ count }) => (
    <span className="like-button">
      <i className="fa fa-heart"/>
    {count > 0 &&
     <span className="like-count">
       {count}
     </span>}
    </span>
);
*/

/* Another Option With the: Ternary operator
  Which always output a <span> with class like
  "like-count", but here the contents might be empty.
*/

const LikeButton = ({ count }) => (
    <span className="like-button">
      <i className="fa fa-heart"/>
      <span className="like-count">
        {count ? count : null}
      </span>
    </span>
)

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-buttons"/>
);

// ...
var testTweet = [
    {
        message: "Something about cats.",
        gravatar: "xyz",
        author: {
            handle: "catperson",
            name: "IAMA Cat Person"
        },
        likes: 2,
        retweets: 2,
        timestamp: "2019-7-1 11:24:37"
    },
];

ReactDOM.render(<TweetList tweets={testTweet}/>, 
    document.querySelector('#root'));
