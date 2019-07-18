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

const RedditListItem = ({ item, index, handleUpVote, handleDownVote, scoreList }) => (
    <div className="reddit-item">
      <Counter item={item} index={index} handleUpVote={() => handleUpVote(index)} handleDownVote={() => handleDownVote(index)} scoreList={scoreList} />
      {/* <Image url={item.data.preview.images[0].source.url}/> */}
      <div className="content">
        <Title title={item.data.title}/>
        <div className="time-user-detail">
          <Time time={item.data.created_utc}/>
          <User user={item.data.author}/>
        </div>
        <div className="detail-line">
          <Comment comment={item.data.num_comments}/>
          <StaticItems/>
        </div>
      </div>
    </div>
);

RedditListItem.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handleUpVote: PropTypes.func.isRequired,
    handleDownVote: PropTypes.func.isRequired,
    scoreList: PropTypes.array.isRequired
};
export default RedditListItem;
