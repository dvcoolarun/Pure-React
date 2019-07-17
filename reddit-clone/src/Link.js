import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ link }) => (
    <a href={link} className="post-link">{link}</a>
);

export default Link;
