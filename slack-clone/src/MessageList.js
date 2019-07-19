import React from 'react';
import InputBox from './InputBox';
import PropTypes from 'prop-types';

const MessageList = ({ messageList }) => (
    <div className="content">
      {messageList.map(item =>
                       <message
                         name={item.name}
                         date={item.date}
                         message={item.message}
                       />
                      )}
    </div>
);
