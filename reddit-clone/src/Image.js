import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ image_url }) => (
    <div className="image">
      <img alt="avatar" src={image_url} className="avatar"/>
    </div>
);

Image.propTypes = {
    image_url: PropTypes.string.isRequired
};

export default Image;
