import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

const Board = ({ data }) => (
    <div className="main-container">
      <Header data={data}/>
      <div className="card-list">
        {data.cards.map(card => (
          <CardListItem card={card}/>
        ))}
      </div>
    </div>  
);

const Header = ({ data }) => (
    <div className="header">
      <div className="logo-container">
        <img alt="" src={data.logo_img}/>
        <h1>Aviation Explorer</h1>
      </div>
      <div className="data-points-container">
        <ul>
          <li>{data.boards}<p>Boards</p></li>
          <li>{data.pins}<p>Pins</p></li>
          <li>{data.likes}<p>Likes</p></li>
          <li>{data.followers}<p>Followers</p></li>
          <li>{data.following}<p>Following</p></li>
        </ul>
      </div>
    </div>
);

const CardListItem = ({ card }) => (
    <div className="card-info">
      <div className="description">
        <h3>
          {card.description}
        </h3>
      </div>
      <img className="main-img" alt="" src={card.main_img}/>
      <div className="sub-img">
        {card.thumb_img.map(thumb_img => (
            <img alt="" src={thumb_img}/>
        ))}        
      </div>
      <div className="follow-button">
        <button>Follow</button>
      </div>
    </div>
);

var data = {
        'name': "Aviation Explorer",
        'logo_img': require('./img/top.jpg'),
        'boards': 37,
        'pins': '8.9k',
        'likes': 186,
        'followers': '8.9k',
        'following': '1.8k',
        'cards' : [
            {
                description: 'DIY - Tips Tricks Ideas Repair',
                main_img: require('./img/787.jpg'),
                thumb_img: [require('./img/sub1.jpg'), require('./img/sub2.jpg')]
            },
            {
                description: 'AVIATION',
                main_img: require('./img/787.jpg'),
                thumb_img: [require('./img/sub1.jpg'), require('./img/sub2.jpg')]
            },
            {
                description: 'Exceptional Aviation',
                main_img: require('./img/787.jpg'),
                thumb_img: [require('./img/sub1.jpg'), require('./img/sub2.jpg')]
            },
            {
                description: 'Exceptional Aviation',
                main_img: require('./img/787.jpg'),
                thumb_img: [require('./img/sub1.jpg'), require('./img/sub2.jpg')]
            },
            {
                description: 'Exceptional Aviation',
                main_img: require('./img/787.jpg'),
                thumb_img: [require('./img/sub1.jpg'), require('./img/sub2.jpg')]
            }
        ]
};

ReactDOM.render(<Board data={data}/>, document.querySelector('#root'));
