import React from 'react';
import PropTypes from 'prop-types';
import RedditListItem from './RedditListItem';

const RedditList = ({ items, handleUpVote, handleDownVote, scoreList }) => (
    <div className="reddit-list">
      {items.map(item =>
                 <RedditListItem item={item}
                                 index={items.indexOf(item)}
                                 key={item.data.id}
                                 handleUpVote={() => handleUpVote(items.indexOf(item))}
                                 handleDownVote={() => handleDownVote(items.indexOf(item))}
                                 scoreList={scoreList}/>
                 )}
    </div>
);

RedditList.propTypes = {
    items: PropTypes.array.isRequired,
    handleUpVote: PropTypes.func.isRequired,
    handleDownVote: PropTypes.func.isRequired,
    scoreList: PropTypes.array.isRequired
};

export default RedditList;
