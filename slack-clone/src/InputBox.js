import React from 'react';
import PropTypes from 'prop-types';
 
const InputBox = () => (
    <div>
      <input type="text" onKeyPress={handleKeyPress}/>
    </div>
);

export default InputBox;
