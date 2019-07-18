import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ comment }) => (
    <span className="comment">
      {comment} Comments
    </span>
);

Comment.propTypes = {
    comment: PropTypes.number.isRequired
};

export default Comment;

