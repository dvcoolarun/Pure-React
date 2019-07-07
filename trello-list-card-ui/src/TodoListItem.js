import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const TodoListItem = ({ title }) => (
    <div className="todo_title">
      <h5 className>{title}</h5>
    </div>
);

TodoListItem.propTypes = {
    title: PropTypes.string.isRequired
};

export default TodoListItem;




