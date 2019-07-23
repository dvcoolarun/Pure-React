import React from 'react';
import PropTypes from 'prop-types';

const People = ({ peopleList, handleSelection }) => (
    <div className="people-list">
      &nbsp;
      <span>People</span>
      {peopleList.map(name =>
                      <span key={name} onClick={() => handleSelection("people.".concat(name))}>
                        {name}
                      </span>
                     )}
    </div>
);

People.propTypes = {
    peopleList: PropTypes.array.isRequired,
    handleSelection: PropTypes.func.isRequired
};

export default People;
