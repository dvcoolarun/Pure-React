import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ image_url }) => (
    <img alt="avatar" src={image_url} className="avatar"/>
);

export default Image;
