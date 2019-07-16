import moment from 'moment';
import React from 'react';
import {items} from './static-data';
import './App.css';

class App extends React.Component {
    state = {
        score: []
    };

    handleUpVote = (item) => {
        const update_score = [...this.state.score];
        update_score[item.id] = update_score[item.id] + 1;
        
        this.setState({
            score: update_score
        });
    };

    handleDownVote = (item) => {
        const update_score = [...this.state.score];
        update_score[item.id] = update_score[item.id] - 1;
        
        this.setState({
            score: update_score
        });
    };
    
    renderCount() {
        let ScoreList = this.items.map(item => {
            this.setState({
                score: [...this.state.score, item.score]
            });
        });
    };
    
    render() {
        return(
            <RedditList items={items}
                        handleUpVote={this.handleUpVote}
                        handleDownVote={this.handleDownVote}
                        />
        );
    }
};

const RedditList = ({ items, handleUpVote, handleDownVote }) => (
    <div classsName="reddit-list">
      <div>
        {items.map(item =>
                  <RedditListItem key={item.id} item={item}/>
                 )};
      </div>
    </div>
);

const RedditListItem = ({ item }) => (
    <div className="reddit-item">
      <Counter handleUpVote={handleUpVote} handleDownVote={handleDownVote} />
      {/* <Image image={item.preview["images"].source["url"]}/> */}
      <Title title={item.title}/>
      <Link link={item.author_url}/>
      <Time time={item.created}/>
      <User user={item.name}/>
      <Comment comment={item.num_comments}/>
      <StaticItems/>
    </div>
);

const Counter = ({ handleUpVote, handleDownVote, item }) => {
    return (
        <span className="counter">
          <span className="up-arrow" onClick={() => handleUpVote}><i></i></span>
          <span className="count">{item.score}</span>
          <span className="down-arrow" onClick={() => handleDownVote}><i></i></span>
        </span>
    );
};

const Image = ({ image_url }) => (
    <img alt="avatar" src={image_url} className="avatar"/>
);

const Title = ({ title }) => (
    <span className="title">
      {title}
    </span>
);

const Link = ({ link }) => (
    <a href={link} className="post-link">{link}</a>
);

const Time = ({ time }) => {
    const timeString = moment(time).fromNow();
    return(
        <span className="time">
          {timeString}
        </span>
    );
};

const User = ({ user }) => (
    <span className="username">
      {user}
    </span>
);

const Comment = ({ comment }) => (
    <span className="comment">
      {comment}
    </span>
);

const StaticItems = ({ }) => (
    <div className="static-items">
      <span className="static-item">
        Share
      </span>
      <span className="static-item">
        Save
      </span>
      <span className="static-item">
        Hide
      </span>
      <span className="static-item">
        Report
      </span>
    </div>
);
