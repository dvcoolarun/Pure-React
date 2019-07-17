import React from 'react';
import PropTypes from 'prop-types';
import RedditListItem from './RedditListItem';

const RedditList = ({ items, handleUpVote, handleDownVote, scoreList }) => (
    <div className="reddit-list">
      <div>
        {items.map(item =>
                   <RedditListItem item={item} key={item.id} handleUpVote={handleUpVote} handleDownVote={handleDownVote} scoreList={scoreList}/>
                 )}
      </div>
    </div>
);

export default RedditList;
