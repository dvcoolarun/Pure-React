import moment from 'moment';
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Time = ({ time }) => {
    const timeString = moment(time).fromNow();
    
    return(
        <span className="time">
          {timeString}
        </span>
    );
};

Time.propTypes = {
    count: PropTypes.string.isRequired
};

export default Time;
