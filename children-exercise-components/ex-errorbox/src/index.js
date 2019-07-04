import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

function ErrorBox({ children }) {
    return (
        <button>
          <i className="target-icon"/>
           {children}
        </button>
    );
}

ErrorBox.propTypes = {
    children: PropTypes.string.isRequired
};

function FirstChildOnly({ children }){
    let items = React.Children.toArray(children);    
    return (
        <span className="">{items[0]}</span>
    );
}

function LastChildOnly({ children }) {
    let items = React.Children.toArray(children);   
    return (
        <span className="">{items.pop()}</span>
    );
}

function Head({ children }) {
    return (
        <span>{children[0]}</span>
    );
}

function Tail({ children }) {
    let items = React.Children.toArray(children);
    return (
        <span>{items.pop()}</span>
    );
}

var data = [1, 2, 3];

// ReactDOM.render(<ErrorBox children={"End of the world"}/>, document.querySelector('#root')); 
// ReactDOM.render(<FirstChildOnly children={data}/>, document.querySelector('#root'));
// ReactDOM.render(<LastChildOnly children={data}/>, document.querySelector('#root'));
// ReactDOM.render(<Head children={data}/>, document.querySelector('#root'));
ReactDOM.render(<Tail children={data}/>, document.querySelector('#root'));
