import React from 'react';
import ReactDOM from 'react-dom';
import PropType from 'prop-types';

const CardTitle = ({ title }) => (
    <div>
      <h5 className="title">{title}</h5>
      <span className="icon"><i/></span>
    </div>
);

CardTitle.propType = {
    title: PropType.string.isRequired
};

export default CardTitle;
