import React from 'react';
import ReactDOM from 'react-dom';
import PropType from 'prop-types';
import CardListItem from './CardListItem';
import './index.css';

const CardList = ({ cards }) => (
    <div className="card-list">
      <div className="row">
        {cards.map(card => (
           <CardListItem key={card.id} card={card}/>
        ))}
      </div>
    </div>
);

CardList.propType = {
    cards: PropType.array.isRequired
};

var testData = [
    {
        id: 1,
        title: "Phone Features",
        todos: [
            {
                "id": 0,
                "title": "Subwoofer"
            },
            {
                "id": 1,
                "title": "Non-porus, washable"
            },
            {
                "id": 2,
                "title": "Wings"
            },
            {
                "id": 3,
                "title": "Beveled Bezel"
            },
            {
                "id": 4,
                "title": "Bezeled Bevel"
            },
            {
                "id": 5,
                "title": "Seedless"
            }
        ]
    },
    {
        id: 2,
        title: "Phone Features",
        todos: [ 
            {
                id: 0,
                title: 'This was a triumph'
            },
            {
                id: 1,
                title: "I'm making a note here"
            },
            {
                id: 2,
                title: 'HUGE SUCCESS'
            },
            {
                id: 3,
                title: "It's hard to overstate my satisfaction"
            }
        ]
    },
    {
        id: 3,
        title: "Phone Features",
        todos: [
            {
                "id": 0,
                "title": "Subwoofer"
            },
            {
                "id": 1,
                "title": "Non-porus, washable"
            },
            {
                "id": 2,
                "title": "Wings"
            },
            {
                "id": 3,
                "title": "Beveled Bezel"
            },
            {
                "id": 4,
                "title": "Bezeled Bevel"
            },
            {
                "id": 5,
                "title": "Seedless"
            }
        ]
    },
    {
        id: 3,
        title: "Phone Features",
        todos: [
            {
                "id": 0,
                "title": "Subwoofer"
            },
            {
                "id": 1,
                "title": "Non-porus, washable"
            },
            {
                "id": 2,
                "title": "Wings"
            },
            {
                "id": 3,
                "title": "Beveled Bezel"
            },
            {
                "id": 4,
                "title": "Bezeled Bevel"
            },
            {
                "id": 5,
                "title": "Seedless"
            }
        ]
    },
    {
        id: 3,
        title: "Phone Features",
        todos: [
            {
                "id": 0,
                "title": "Subwoofer"
            },
            {
                "id": 1,
                "title": "Non-porus, washable"
            },
            {
                "id": 2,
                "title": "Wings"
            },
            {
                "id": 3,
                "title": "Beveled Bezel"
            },
            {
                "id": 4,
                "title": "Bezeled Bevel"
            },
            {
                "id": 5,
                "title": "Seedless"
            }
        ]
    },
];
                        
ReactDOM.render(<CardList cards={testData}/>, document.querySelector('#root'));
