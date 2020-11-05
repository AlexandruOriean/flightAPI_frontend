import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/searchResult.css';

function SearchResult() {
     
    const [flightDetails, setFlightDetails] = useState([]);

    useEffect(() => {
      console.log(window.location.href);
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



    return(
      <div style={{height:'800px', marginTop:'80px', position:'relative'}}>
          <div className="text-black" style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', width:'900px'}}>
          <h2>Results:</h2>

          <table>
            <tr>
              <th>From</th>
              <th>To</th>
              <th>Price</th>
              <th>Date</th>
              <th>Buy</th>
            </tr>
            <tr>
              <td>Berlin</td>
              <td>Bucharest</td>
              <td>$350</td>
              <td>12.11.2020 - 14:00</td>
              <td><button type="button" class="btn btn-primary">Buy</button></td>
            </tr>
            <tr>
              <td>Bucharest</td>
              <td>Timisoara</td>
              <td>$350</td>
              <td>12.11.2020 - 14:00</td>
              <td><button type="button" class="btn btn-primary">Buy</button></td>
            </tr>
            <tr>
              <td>Barcelona</td>
              <td>London</td>
              <td>$350</td>
              <td>12.11.2020 - 14:00</td>
              <td><button type="button" class="btn btn-primary">Buy</button></td>
            </tr>
            <tr>
              <td>Berlin</td>
              <td>Prague</td>
              <td>$350</td>
              <td>12.11.2020 - 14:00</td>
              <td><button type="button" class="btn btn-primary">Buy</button></td>
            </tr>
            <tr>
              <td>Vienna</td>
              <td>New York</td>
              <td>$350</td>
              <td>12.11.2020 - 14:00</td>
              <td><button type="button" class="btn btn-primary">Buy</button></td>
            </tr>
            <tr>
              <td>Shanghai</td>
              <td>Liverpool</td>
              <td>$350</td>
              <td>12.11.2020 - 14:00</td>
              <td><button type="button" class="btn btn-primary">Buy</button></td>
            </tr>
          </table>
          </div>
      </div>
    )
 }

export default SearchResult;
