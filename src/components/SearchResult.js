import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/searchResult.css';
import { Link } from 'react-router-dom';

function SearchResult(props) {


  const [flightDetails, setFlightDetails] = useState([]);
  

  useEffect(() => {
      
      const from = window.location.href.split("/").reverse()[2];
      const to = window.location.href.split("/").reverse()[1];
      const date = window.location.href.split("/").reverse()[0];
        
      const config = {
        method: "get",
        url: `http://localhost:8080/api/v1/flights/${from}/${to}/${date}`,
      };

      axios(config)
        .then((response) => {
          console.log(response.data);
          setFlightDetails(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },[]);

    if (flightDetails === undefined) {
      return <h3>Loading...</h3>;
    }


  console.log(flightDetails);
    return(
      <div style={{height:'800px', marginTop:'80px', position:'relative'}}>
          <div className="text-black" style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', width:'900px'}}>
          <h2>Results:</h2>

          <table>
            <thead>
            <tr>
              <th>From</th>
              <th>To</th>
              <th>Price</th>
              <th>Departure Date</th>
              <th>Departure Time</th>
              <th>Arrival Time</th>
              <th>Buy</th>
            </tr>
            </thead>
            <tbody>
            {flightDetails.map((flight, index) => (

              <tr key={flight.id}>
                <td>{flight.departureAirport.city.cityName}</td>
                <td>{flight.arrivalAirport.city.cityName}</td>
                <td>{flight.price}</td>
                <td>{flight.departureDate}</td>
                <td>{flight.departureTime}</td>
                <td>{flight.arrivalTime}</td>
                <td>
                  <Link to={`/checkout/${flight.flight_id}`}>
                    <button type="button" className="btn btn-primary">
                        Buy
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
          </div>
      </div>
    )
 }

export default SearchResult;
