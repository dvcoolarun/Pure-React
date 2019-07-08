import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const PanelData = ({ data }) => (
    <div className="row">
      <div className="container">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <span className="card-title">Popular Genres</span>
            </div>
            <div className="card-body">
              {data.map(button_details => (
                  <button style={{margin: '4px'}}className="btn btn-secondary link-button" href="">{button_details}</button>
              ))}
            </div>
            </div>
          </div>
      </div>
      </div>
);

var data = ["Hello", "Random", "Zero", "Hello", "Random", "Zero", "Hello", "Random", "Zero", "Hello", "Random", "Zero", "Hello", "Random", "Zero","Hello", "Random", "Zero", "Hello", "Random", "Zero"];

ReactDOM.render(<PanelData data={data}/>, document.querySelector('#root'));
