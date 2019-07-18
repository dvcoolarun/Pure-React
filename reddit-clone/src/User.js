import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => (
    <span className="username">
      &nbsp;by&nbsp;{user}
    </span>
);

User.propTypes = {
    user: PropTypes.string.isRequired
};

export default User;
