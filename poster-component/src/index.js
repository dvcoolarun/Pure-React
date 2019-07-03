import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

function Poster({ data }) {
    const { img, title, text } = data;
    return (
        <div>
          <img alt="React" src={img}/>
          <h1>{title}</h1>
          <h5>{text}</h5>
        </div>
    );
}

Poster.propTypes = {
    data: PropTypes.shape({
        img: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired
};

const data = {
    img: "http://spyrestudios.com/wp-content/uploads/React.js_logo.svg_.png",
    title: "React",
    text: "The best thing since jQuery, probably"
};

ReactDOM.render(<Poster data={data}/>,
                document.querySelector('#root'));
