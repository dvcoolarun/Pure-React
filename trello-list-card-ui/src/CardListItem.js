import React from 'react';
import ReactDOM from 'react-dom';
import PropType from 'prop-types';
import CardTitle from './CardTitle';
import CardTodoList from './CardTodoList';

const CardListItem = ({ card }) => (
    <div className="card-list-item">
       <CardTitle title={card.title}/>
       <CardTodoList todos={card.todos}/>
    </div>        
);

CardListItem.propType = {
    card: PropType.object.isRequired
};

export default CardListItem;
