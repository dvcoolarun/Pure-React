import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import Item from './Item';

function CartPage({ activeTab, onTabChange, items, onAddOne, onRemoveOne, cartLength, cartTotal }) {
    return (
        <div>
          <Nav activeTab={activeTab} onTabChange={onTabChange}>
            <li className="App-nav-item">
              <a>
                ({cartLength}&nbsp;items &nbsp; ${cartTotal})
              </a>
            </li>
          </Nav>
          <ul className="CartPage-items">
            {items.map(item =>
                       <li key={item.id} className="CartPage-item">
                         <Item item={item}>
                           <div className="CartItem-controls">
                             <button className="CartItem-removeOne" onClick={() => onRemoveOne(item)}>&ndash;</button>
                             <span className="CartItem-count">{item.count}</span>
                             <button className="CartItem-addOne" onClick={() => onAddOne(item)}>+</button>
                           </div>
                         </Item>
                       </li>
                      )}
          </ul>
          {items.length == 0 &&
           <h1>No items in the cart.</h1>
          }
          {items.length > 0 &&
           <span>Total &nbsp; ${cartTotal}</span>
          }
        </div>  
    );
}

CartPage.propTypes = {
    items: PropTypes.array.isRequired,
    onAddOne: PropTypes.func.isRequired,
    onRemoveOne: PropTypes.func.isRequired
};

export default CartPage;

