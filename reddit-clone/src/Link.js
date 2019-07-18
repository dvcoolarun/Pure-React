import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ link }) => (
    <a href={link} className="post-link">{link}</a>
);

Link.propTypes = {
    link: PropTypes.string.isRequired
};

export default Link;
