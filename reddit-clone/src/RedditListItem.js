import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Image from './Image';
import Title from './Title';
import Link from './Link';
import Time from './Time';
import User from './User';
import Comment from './Comment';
import StaticItems from './StaticItems';

const RedditListItem = ({ item, handleUpVote, handleDownVote, scoreList }) => (
    <div className="reddit-item">
      <Counter item={item} handleUpVote={handleUpVote} handleDownVote={handleDownVote} scoreList={scoreList} />
      <Title title={item.title}/>
      <Link link={item.author_url}/>
      <Time time={item.created}/>
      <User user={item.name}/>
      <Comment comment={item.num_comments}/>
      <StaticItems/>
    </div>
);

export default RedditListItem;
