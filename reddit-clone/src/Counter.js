import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ index, handleUpVote, handleDownVote, scoreList }) => {
    return (
        <div className="counter">
          <span className="up-arrow" onClick={() => handleUpVote(index)}> +1 </span>
          {scoreList.length > 0?
           <span className="count">{scoreList[index]}</span>
           :null}
          <span className="down-arrow" onClick={() => handleDownVote(index)}> -1 </span>
        </div>
    );
};

Counter.propTypes = {
    index: PropTypes.number.isRequired,
    handleUpVote: PropTypes.func.isRequired,
    handleDownVote: PropTypes.func.isRequired,
    scoreList: PropTypes.array.isRequired
};

export default Counter;
