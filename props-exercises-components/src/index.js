import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

function AddressLabel({ details }) {
    const { name, address } = details;
    return (
        <span className="person-details">
          <span className="name">&nbsp;{name}<br/></span>
          <span className="address">&nbsp;{address}</span>
        </span>
    );
}

AddressLabel.propTypes = {
    person: PropTypes.shape({
        name: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
    })
};

var testAddress = {
    name: 'Full Name',
    address: '123 Fake St. Boston, MA 02118',
};

ReactDOM.render(<AddressLabel details={testAddress}/>,
                document.querySelector('#root'));


function Envelope({ labels }) {
    const { toPerson, fromPerson } = labels;
    return (
        <div className="row" style={{width:'50%', border: '1px solid', margin: '10%', marginRight: 'auto', marginLeft: 'auto'}}>
          <div className="toPerson" style={{float:'left', padding: '10px'}}>
            <AddressLabel details={toPerson}/>
          </div>
          <span className="stamp" style={{float: 'right', border: '1px solid', padding: '20px'}}>STAMP</span>
          <div className="fromPerson" style={{marginRight: 'auto', marginLeft: 'auto', width: '30%', margin: '20%'}}>
            <AddressLabel details={fromPerson}/>
          </div>
       </div>
    );
}

Envelope.propTypes = {
    labels : PropTypes.shape({
        toPerson: PropTypes.shape({
            name: PropTypes.string.isRequired,
            address: PropTypes.string.isRequired,
        }),
        fromPerson: PropTypes.shape({
            name: PropTypes.string.isRequired,
            address: PropTypes.string.isRequired,
        })
    })
};

const labels = {
    toPerson: {
        name: "Hello 1",
        address: "Random 123"
    },
    fromPerson: {
        name: "Hello 2",
        address: "Random 321"
    }
};

ReactDOM.render(<Envelope labels={labels}/>, document.querySelector('#root')); 
