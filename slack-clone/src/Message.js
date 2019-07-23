import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ name, date, message }) => (
    <div className="messageItem">
      <span className="name">{name}</span>
      <span className="date">{date}</span>
      <span className="message">{message}</span>
    </div>
);

Message.propTypes = {
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
};

export default Message;
