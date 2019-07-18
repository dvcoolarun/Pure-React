import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title }) => (
    <span className="title">
      {title}
    </span>
);

Title.propTypes = {
    title: PropTypes.string.isRequired
};

export default Title;
