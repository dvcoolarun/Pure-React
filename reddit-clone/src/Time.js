import moment from 'moment';
import React from 'react';
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
    time: PropTypes.number.isRequired
};

export default Time;
