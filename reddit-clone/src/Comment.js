import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ comment }) => (
    <span className="comment">
      {comment}
    </span>
);

export default Comment;
