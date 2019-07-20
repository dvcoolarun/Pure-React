import React from 'react';
import Message from './Message';

const Message = ({ name, date, message }) => (
    <div className="message">
      <span className="name">{name}</span>
      <span className="date">{date}</span>
      <span className="message">{message}</span>
    </div>
);
