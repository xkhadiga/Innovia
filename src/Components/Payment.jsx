import React from "react";
import PPal from '../assets/paypal-svgrepo-com.svg'
import mastercard from '../assets/mastercard-svgrepo-com.svg'
import visa from '../assets/visa-svgrepo-com.svg'

function Payment() {
  return (
    <div className="modal">
      <form className="form">
        <div className="credit-card-info--form">
          <div className="input_container">
            <label className="input_label" htmlFor="password_field1">
              Cardholder full name
            </label>
            <input
              placeholder="Enter your full name"
              title="Inpit title"
              name="input-name"
              type="text"
              className="input_field"
              id="password_field1"
            />
          </div>
          <div className="input_container">
            <label className="input_label" htmlFor="password_field2">
              Card Number
            </label>
            <input
              placeholder="0000 0000 0000 0000"
              title="Inpit title"
              name="input-name"
              type="number"
              className="input_field"
              id="password_field2"
            />
          </div>
          <div className="input_container">
            <label className="input_label" htmlFor="password_field3">
              Expiry Date / CVV
            </label>
            <div className="split">
              <input
                placeholder="01/23"
                title="Expiry Date"
                name="input-name"
                type="text"
                className="input_field"
                id="password_field3"
              />
              <input
                placeholder="CVV"
                title="CVV"
                name="cvv"
                type="number"
                className="input_field"
                id="password_field"
              />
            </div>
          </div>
          <button className="card-btn p-3 rounded-full">Checkout</button>
          <div className="separator">
            <hr className="line" />
            <p>or pay using e-wallet</p>
            <hr className="line" />
          </div>
          <div className="payment--options">
            <button type="button" name="paypal">
            <img src={PPal} alt="Paypal" width="50" />
            </button>
            <button type="button" name="apple-pay">
            <img src={mastercard} alt="mastercard" width="50" />
            </button>
            <button type="button" name="google-pay">
            <img src={visa} alt="mastercard" width="50" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Payment;
