import moment from 'moment';
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

const Container = ({ posts_data }) => (
    <div className="main-container">
      <Header/>
      <PostsList posts_data={testData}/>
    </div>
);

const Header = () => (
    <div class="header">
      <ul>
        <li>
          <span>Hacker News</span>
        </li>
        <li>
          <a href="#">new</a>|
        </li>
        <li>
          <a href="#">threads</a>|
        </li>
        <li>
          <a href="#">past</a>|
        </li>
        <li>
          <a href="#">comments</a>|
        </li>
        <li>
          <a href="#">ask</a>|
        </li>
        <li>
          <a href="#">show</a>|
        </li>
        <li>
          <a href="#">jobs</a>|
        </li>
        <li>
          <a href="#">submit</a>|
        </li>
      </ul>
    </div>
);

const PostsList = ({ posts_data }) => (
    <div className="posts-list"> 
      {posts_data.map((post, index) => (
          <PostListItem key={post.id} index={index} post={post}/>
      ))}
    </div>
);

const PostListItem = ({ post, index }) => (
    <div className="post-list-item">
      <Title title={post.title} url={post.url} index={index}/>
      <div className="post-data-line">
        <Score score={post.score}/>
        <User user={post.by}/>
        <Time user={post.time}/>
        <HideButton/>
        <PostComment comment={post.descendants}/>
      </div>
    </div>
);

const TopIcon = () => (
    <span><i className="far fa-triangle"></i></span>
);

const Title = ({ title, url, index }) => (
    <div className="title">
      <span>
        <span className="index"> {index+1}. </span>
        <a href={url}>{title}</a>
      </span>
    </div>
);

const Score = ({ score }) => (
    <span className="post-score">
      {score} Point By
    </span>
);

const User = ({ user }) => (
    <span className="user-name"> {user}</span>
);

const Time = ({ time }) => {
    const timeString = moment(time).fromNow();
    return(
        <span className="time">
          {timeString}
        </span>
    );
};

const HideButton = () => (
    <span className="hide-flag"> |  hide</span>
);

const PostComment = ({ comment }) => (
        <span className="comments"> | {comment} comments</span>
);

var testData = [
    {
        "by" : "dhouston",
        "descendants" : 71,
        "id" : 8863,
        "score" : 111,
        "time" : 1175714200,
        "title" : "My YC app: Dropbox - Throw away your USB drive",
        "type" : "story",
        "url" : "httap://www.getdropbox.com/u/2/screencast.html"
    },
        {
        "by" : "dhouston",
        "descendants" : 71,
        "id" : 8863,
        "score" : 111,
        "time" : 1175714200,
        "title" : "My YC app: Dropbox - Throw away your USB drive",
        "type" : "story",
        "url" : "httap://www.getdropbox.com/u/2/screencast.html"
        },
        {
        "by" : "dhouston",
        "descendants" : 71,
        "id" : 8863,
        "score" : 111,
        "time" : 1175714200,
        "title" : "My YC app: Dropbox - Throw away your USB drive",
        "type" : "story",
        "url" : "httap://www.getdropbox.com/u/2/screencast.html"
        },
        {
        "by" : "dhouston",
        "descendants" : 71,
        "id" : 8863,
        "score" : 111,
        "time" : 1175714200,
        "title" : "My YC app: Dropbox - Throw away your USB drive",
        "type" : "story",
        "url" : "httap://www.getdropbox.com/u/2/screencast.html"
        },
        {
        "by" : "dhouston",
        "descendants" : 71,
        "id" : 8863,
        "score" : 111,
        "time" : 1175714200,
        "title" : "My YC app: Dropbox - Throw away your USB drive",
        "type" : "story",
        "url" : "httap://www.getdropbox.com/u/2/screencast.html"
        },
];

ReactDOM.render(<Container posts_data={testData}/>, document.querySelector('#root'));
