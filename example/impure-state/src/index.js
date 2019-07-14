import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class ItemList extends React.PureComponent {
    static propTypes = {
        items : PropTypes.array.isRequired
    }
    
    render() {
        return (
            <ul>
              {this.props.items.map(item =>
	                            <li key={item.id}> {item.value} </li>
                                   )}
            </ul>
        );
    }
}

class App extends React.Component {
    // Initialize items to an empty array
    state = {
        items: []
    }

    // Intialize a counter that will increment
    // for each item ID
    nextItemId = 0;

    makeItem() {
        // create a new id
        // assign a random value to it.

        return {
            id: this.nextItemId++,
            value: Math.random()
        };
    };

    addItemImmutably = () => {
        this.setState({
            items: [
                ...this.state.items, this.makeItem()
            ]
        });
    };

    addItemMutably = () => {
        this.set.items.push(this.makeItem());
        this.setState({ items: this.state.items });
    };
    
    render() {
        return (
            <div>
              <button onClick={this.addItemImmutably} >
                Add item immutably (good)
              </button>
              &nbsp;
              <button onClick={this.addItemMutably} >
                Add item mutably (bad)
              </button>
              <ItemList items={this.state.items} />
            </div>
        );
    }
};

ReactDOM.render(<App />, document.getElementById('root'));
