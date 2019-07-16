import React from 'react';
import {data} from './static-data';
import './App.css';

class App extends React.Component {
    state = {
        upVotes: [],
        downVotes: []
    };
}

const redditList = ({ data }) => (
    <div classsName="reddit-list">
      <div>
        {data.map(item =>
                  <RedditListItem key={item.id} item={item}/>
                 )};
      </div>
    </div>
);

const RedditListItem = ({ item }) => (
    <div className="reddit-item">
      <Counter upVote={} downVote={}/>
      <Image image={}/>
      <Title title={}/>
      <Link link={}/>
      <Time time={}/>
      <User user={}/>
      <Comment comment={}/>
      <StaticItems/>
    </div>
);

this.handleUpVote = (item) => {
    this.setState({
        upVotes: [...this.state.upVotes, (this.state.upVotes[item.id] + 1)]
    });
};

this.handleDownVote = (item) => {
    this.setState({
        downVotes: [...this.state.downVotes, (this.state.downVotes[item.id] + 1)]
    });
};

const Counter = ({ upVote, downVote }) => (
    
);

const Image = ({ image }) => (
    
);

const Title = ({ title }) => (

);

const Link = ({ link }) => (

);

const Time = ({ time }) => (
    
);

const User = ({ user }) => (

);

const Comment = ({ comment }) => (
    
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
