import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import Item from './Item';
import './ItemPage.css';

function ItemPage({ activeTab, onTabChange, items, onAddToCart }) {
    return (
        <div>
          <Nav activeTab={activeTab} onTabChange={onTabChange}>
          </Nav>
          <ul className="ItemPage-items">
            {items.map(item =>
                       <li key={item.id} className="Itempage-item">
                         <Item item={item} onAddToCart={() => onAddToCart(item)}>
                           <button className="Item-addToCart" onClick={() => onAddToCart(item)}>
                             Add To Cart
                           </button>
                         </Item>
                       </li>
                      )}
          </ul>
        </div>
    );
}

ItemPage.propTypes = {
    items: PropTypes.array.isRequired
};

export default ItemPage;
