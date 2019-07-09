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
    const items = React.Children.toArray(children);
    return (
        <span className="">{items[0]}</span>
    );
}

function LastChildOnly({ children }) {
    const items = React.Children.toArray(children);
    return (
        <span className="">{items.pop()}</span>
    );
}

function Head({ children }) {
    
}

function Tail({ children }) {
    
}

// ReactDOM.render(<ErrorBox>{"End of the world"}</ErrorBox>, document.getElementById('root'));

// ReactDOM.render(<FirstChildOnly>{[1, 2, 3]}</FirstChildOnly>, document.getElementById('root'));
// ReactDOM.render(<LastChildOnly>{[1, 3, 2]}</LastChildOnly>, document.getElementById('root'));
// ReactDOM.render(<Tail children={data}/>, document.querySelector('#root'));
