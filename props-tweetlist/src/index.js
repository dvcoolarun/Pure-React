import moment from 'moment';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Add the { tweet } prop, destructured
const TweetList = ({ tweets }) => (
        <div className="tweet-list">
          <div>
            {tweets.map(tweet =>
               <TweetListItem key={tweet.id} tweet={tweet}/>
            )}
          </div>
        </div>
);

const TweetListItem = ({ tweet }) => (
    <div className="tweet">
      <Avatar hash={tweet.gravatar}/>
        <div className="content">
          <NameWithHandle author={tweet.author}/>
          <Time tweet={tweet.timestamp}/>
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

const Avatar = ({ hash }) => {
    const url = 'https://www.gravatar.com/avatar/${hash}';
    return (
        <img alt="avatar" src={url} className="avatar"/>
    );
}

const NameWithHandle = ({ author }) => {
    const { name, handle } = author;
    return (
        <span className="name-with-handle">
          <span className="name">{name}</span>
          <span className="handle">@{handle}</span>
        </span>
    );
}

const Message = ({ text }) => {
    return (
        <div className="message">
          {text}
        </div>
    );
}

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
        id: "123",
        gravatar: "xyz",
        author: {
            handle: "catperson",
            name: "IAMA Cat Person"
        },
        likes: 2,
        retweets: 2,
        timestamp: "2019-7-1 11:24:37"
    },
    {
        message: "Something about cats.",
        id: "456",
        gravatar: "xyz",
        author: {
            handle: "catperson",
            name: "IAMA Cat Person"
        },
        likes: 2,
        retweets: 2,
        timestamp: "2019-7-1 11:24:37"
    },
    {
        message: "Something about cats.",
        id: "789",
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
