import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/checkout.css'; 
import _ from 'lodash';

import moment  from 'moment';

import emailjs from 'emailjs-com'
import Paypal from '../components/Paypal'



export default function Checkout() {
   
    
    const [flightDetails, setFlightDetails] = useState([]);
    const [checkout,setCheckout] = useState(false)

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_tbnsrfi', 'template_k1bs4l7', e.target, 'user_cBe210TphQeP0LWBnD0JK')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        
    }
  

  useEffect(() => {
      const id = window.location.href.split("/").reverse()[0];
    
        
      const config = {
        method: "get",
        url: `http://localhost:8080/api/v1/flights/${id}`,
      };

      axios(config)
        .then((response) => {
            setFlightDetails([response.data]);
        })
        .catch((error) => {
          console.log(error);
        });
  }, []);
    
    if (flightDetails === undefined) {
        <h4>Loading....</h4>
    }

   
    return (
        
            
        <div className="container" style={{ marginTop: '100px', marginBottom: '60px' }}>
            <form className="needs-validation" noValidate></form>
                <div className="row">
                <div className="col-md-4 order-md-2 mb-4">
                    <h4 className="d-flex justify-content-between align-items-center mb-3"> 
                    <span className="text-muted">Your Ticket</span>
                    </h4>
                    {_.toArray(flightDetails).map((flight, i) => (
                        <ul className="list-group mb-3" key={i}>
                                <li className="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                <h6 className="my-0">{flight.departureAirport.city.cityName} - {flight.arrivalAirport.city.cityName} </h6>
                                    <small className="text-muted">{moment(flight.departureDate).format("MMM. DD")}, <strong>{flight.departureTime}</strong> - {moment(flight.departureDate).format("MMM. DD")}, <strong>{flight.arrivalTime}</strong> </small>
                                    <small className="text-muted">Operated by <strong>{ flight.airline.name}</strong></small>   
                                </div>
                                <span className="text-muted">${ flight.price }</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Total (USD)</span>
                                <strong>${ flight.price }</strong>
                                </li>
                            </ul>
                    ))}
                
                </div>
                <div className="col-md-8 order-md-1">
                    <h4 className="mb-3">Passenger Details</h4>
                    <form onSubmit={sendEmail} className="needs-validation" noValidate>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                        <label htmlFor="firstName" >First name</label>
                        <input type="text" className="form-control" id="firstName" name="firstName" placeholder = "first name"/>
                        <div className="invalid-feedback">
                            Valid first name is required.
                        </div>
                        </div>
                        <div className="col-md-6 mb-3">
                        <label htmlFor="lastName" >Last name</label>
                        <input type="text" className="form-control" id="lastName"  name="lastName" placeholder = "last name"  required/>
                        <div className="invalid-feedback">
                            Valid last name is required.
                        </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" >Email</label>
                        <input type="email" className="form-control" id="email" name="mail" placeholder="you@example.com" />
                        <div className="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address">Address</label>
                        <input type="text" className="form-control" id="address" placeholder="1234 Main St" name ="address" required />
                        <div className="invalid-feedback">
                        Please enter your shipping address.
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5 mb-3">
                        <label htmlFor="country">Country</label>
                        <select className="custom-select d-block w-100" id="country" required>
                            <option value>Choose...</option>
                            <option>United States</option>
                        </select>
                        <div className="invalid-feedback">
                            Please select a valid country.
                        </div>
                        </div>
                        <div className="col-md-4 mb-3">
                        <label htmlFor="state">State</label>
                        <select className="custom-select d-block w-100" id="state" required>
                            <option value>Choose...</option>
                            <option>California</option>
                        </select>
                        <div className="invalid-feedback">
                            Please provide a valid state.
                        </div>
                        </div>
                        <div className="col-md-3 mb-3">
                        <label htmlFor="zip">Zip</label>
                        <input type="text" className="form-control" id="zip" placeholder required />
                        <div className="invalid-feedback">
                            Zip code required.
                        </div>
                        </div>
                    </div>
                    <hr className="mb-4" />
                    <h4 className="mb-3">Payment</h4>
                    <div className="d-block my-3">
                        <div className="custom-control custom-radio">
                        <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" defaultChecked required />
                        <label className="custom-control-label" htmlFor="credit">Credit card</label>
                        </div>
                        <div className="custom-control custom-radio">
                        <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required />
                        <label className="custom-control-label" htmlFor="debit">Debit card</label>
                            </div>
                            {checkout ? (
                                <Paypal />
                            ) : (
                                    
                                    <button onClick={() => {
                                        setCheckout(true);
                                    }}>Checkout</button>
                                )}
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                        <label htmlFor="cc-name">Name on card</label>
                        <input type="text" className="form-control" id="cc-name" placeholder required />
                        <small className="text-muted">Full name as displayed on card</small>
                        <div className="invalid-feedback">
                            Name on card is required
                        </div>
                        </div>
                        <div className="col-md-6 mb-3">
                        <label htmlFor="cc-number">Credit card number</label>
                        <input type="text" className="form-control" id="cc-number" placeholder required />
                        <div className="invalid-feedback">
                            Credit card number is required
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 mb-3">
                        <label htmlFor="cc-expiration">Expiration</label>
                        <input type="text" className="form-control" id="cc-expiration" placeholder required />
                        <div className="invalid-feedback">
                            Expiration date required
                        </div>
                        </div>
                        <div className="col-md-3 mb-3">
                        <label htmlFor="cc-cvv">CVV</label>
                        <input type="text" className="form-control" id="cc-cvv" placeholder required />
                        <div className="invalid-feedback">
                            Security code required
                        </div>
                        </div>
                    </div>
                    <hr className="mb-4" />
                   
                        <button className="btn btn-primary btn-lg btn-block" type="submit" >Buy Now!</button>
                   
                    </form>
                </div>
                </div>
            </div>
        )
}
