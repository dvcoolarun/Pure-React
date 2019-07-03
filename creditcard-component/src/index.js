import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

function CreditCard({ cardInfo }) {
    const { person_name, expiration_date, card_number, bank_name } = cardInfo;
    return (
        <div className="credit-card">
          <span className="person-name">{person_name}</span>
          <span className="expiration-date">{expiration_date}</span>
          <span className="card-number">{card_number}</span>
          <span className="bank-name">{bank_name}</span>
        </div>
    );
}

CreditCard.propTypes = {
    cardInfo: PropTypes.shape({
        person_name: PropTypes.string.isRequired,
        expiration_date: PropTypes.string.isRequired,
        card_number: PropTypes.string.isRequired,
        bank_name: PropTypes.string.isRequired
    })
};

const cardInfo = {
    person_name: "XYZ",
    expiration_date: "08/19",
    card_number: "1234567891234",
    bank_name: "Big Bank"
};

ReactDOM.render(<CreditCard cardInfo={cardInfo}/>, document.querySelector('#root'));
