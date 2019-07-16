import React from 'react';
import Nav from './Nav';
import ItemPage from './ItemPage';
import CartPage from './CartPage';
import {items} from './static-data';
import './App.css';

class App extends React.PureComponent {
    state = {
        activeTab: 0,
        cart: [],
        total: []
    };

    handleChange = (index) => {
        this.setState({
            activeTab: index
        });
    };

    handleAddToCart = (item) => {
        this.setState({
            // ES6 Spread Operator ...this.state.cart
            // Give us the original array or object
            cart: [...this.state.cart, item.id]
        });
    };

    handleRemoveOne = (item) => {
        let index = this.state.cart.indexOf(item.id);
        this.setState({
            cart: [
                // left half of array, upto index not including index
                ...this.state.cart.slice(0, index),
                ...this.state.cart.slice(index + 1)
            ]
        });
    }     
    
    renderCart() {
        // Count how many of each item is in the cart
        let itemCounts = this.state.cart.reduce((itemCounts, itemId) => {
            itemCounts[itemId] = itemCounts[itemId] || 0;
            itemCounts[itemId]++;
            return itemCounts;
        }, {});
        
        // Create an array of items
        // Object.keys returns an array of the keys in an object.
        let cartItems = Object.keys(itemCounts).map(itemId => {            
            var item = items.find(item =>
               item.id === parseInt(itemId, 10)
            );            
 
            return {
                ...item,
                count: itemCounts[itemId]
            };
        });

        let items_price = [];
        cartItems.map(item => {
            items_price.push(item.count*item.price);
            return items_price;
        });

        let cartTotal = items_price.reduce((prev, cur) => {
            return prev + cur;
        }, 0);
          
        return (
            <CartPage
              activeTab={this.state.activeTab}
              onTabChange={this.handleChange}
              items={cartItems}
              cartLength={this.state.cart.length}
              cartTotal={cartTotal}
              onAddOne={this.handleAddToCart}
              onRemoveOne={this.handleRemoveOne}
            />
        );
    }
// ...
    
    renderContent() {
        switch(this.state.activeTab) {
        default:
        case 0:
            let {activeTab} = this.state;
            return (
                <ItemPage activeTab={activeTab} onTabChange={this.handleChange} items={items} onAddToCart={this.handleAddToCart}/>
            );
        case 1:
            return this.renderCart();
        }
    }

    render() { 
        return (
            <div className="App">
              <main className="App-content">
                {this.renderContent()}
              </main>
            </div>
        );
    }
}

export default App;
