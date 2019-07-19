import React from 'react';
import PropTypes from 'prop-types';

const People = ({ peopleList }) => (
    <div className="people-list">
      {peopleList.map(people =>
                      <span>{people}</span>
                     )}
    </div>
);
