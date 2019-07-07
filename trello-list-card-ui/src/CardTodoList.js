import React from 'react';
import ReactDOM from 'react-dom';
import PropType from 'prop-types';
import TodoListItem from './TodoListItem';

const CardTodoList = ({ todos }) => (
    <div className="task-list">
      <div>
        {todos.map(todo => (
            <TodoListItem key={todo.id} title={todo.title}/>
        ))}
      </div>
    </div>
);

CardTodoList.propType = {
    tasks: PropType.array.isRequired
};

export default CardTodoList;
