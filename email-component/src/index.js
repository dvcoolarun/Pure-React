import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function EmailComponent({ email }) {
    const { sender, subject, date, message } = email;
    return (
        <div className="email">
          <div className="content">
            <div className="inline-data-line">
              <input name="" type="checkbox" value=""/>
              <span className="sender">{sender}</span>
              <span className="subject">{subject}</span>
              <span className="date">{date}</span>
            </div>
            <span className="message">{message}</span>
          </div>
        </div>
    );
}

EmailComponent.propTypes = {
    email: PropTypes.shape({
        sender: PropTypes.string.isRequired,
        subject: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired
    }).isRequired
};

var email = {
    sender: 'React Newsletter',
    subject: 'React Newsletter-Issue 36',
    date: 'Jul 15',
    message: 'React Newsletter Issue 36 - July 15 2016 Read this issue on the web http://reactjsnewletter.com/issues/36?sid=3QGDBC###Comme'
};

ReactDOM.render(<EmailComponent email={email}/>,
                document.querySelector('#root'));
