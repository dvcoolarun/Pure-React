import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

const MessageList = ({ messageList }) => (
    <div className="messageList">
      {messageList.map(item =>
                       <Message
                         key={item.id}
                         name={item.name}
                         date={item.date}
                         message={item.message}
                       />
                      )}
    </div>
);

MessageList.propTypes = {
    messageList: PropTypes.array.isRequired
};

export default MessageList;
