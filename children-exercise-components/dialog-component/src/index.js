import React from 'react';
import ReactDOM from 'react-dom';

const Title = ({ children }) => (
    <div>{children}</div>
);

const Body = ({ children }) => (
    <div>{children}</div>
);

const Footer = ({ children }) => (
    <div>{children}</div>
);

function Dialog ({ children }) {
    const { title, body, footer } = children;
    return (
        <div className="dialog">
          <Title>{title}</Title>
          <Body>{body}</Body>
          <Footer>{footer}</Footer>
        </div>
    );
}

function CustomValidator(props, propName, componentName) {
    const valid_types = ['title', 'body', 'footer'];
    const child_types = Object.keys(props[propName]);
    let index;

    for(index = 0; index < child_types.length; index++) {
        if(child_types[index] !== valid_types[index]) {
            return new Error('Not valid `type` provided');
        }
    };
}

Dialog.propTypes = {
    children: CustomValidator 
};

var testData = {
    title: "This is Important",
    body: "Here is some important text or error or something.",
    footer: "close"
};

ReactDOM.render(<Dialog children={testData}/>,
                document.querySelector('#root'));
