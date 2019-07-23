import React from 'react';
import PropTypes from 'prop-types';
 
const InputBox = ({handleKeyPress}) => (
    <div className="inputbox">
      <input type="text" onKeyDown={handleKeyPress}/>
    </div>
);

InputBox.propTypes = {
    handleKeyPress: PropTypes.func.isRequired
};

export default InputBox;
