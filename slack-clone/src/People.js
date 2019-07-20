import React from 'react';
import PropTypes from 'prop-types';

const People = ({ peopleList, handleSelction}) => (
    <div className="people-list">
      {peopleList.map(name =>
                      <span onClick={() => handleSelction(people.concat({name}))}>
                        {name}
                      </span>
                     )}
    </div>
);
