import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ item, handleUpVote, handleDownVote, scoreList }) => {
    return (
        <span className="counter">
          <span className="up-arrow" onClick={() => handleUpVote}><i></i></span>
          <span className="count">{item.score}</span>
          <span className="down-arrow" onClick={() => handleDownVote}><i></i></span>
        </span>
    );
};

export default Counter;
