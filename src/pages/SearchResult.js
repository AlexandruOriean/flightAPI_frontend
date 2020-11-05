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
          <div className="text-black" style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)'}}>
          <h2>HTML Table</h2>

          <table>
            <tr>
              <th>Leaving</th>
              <th>Arriving</th>
              <th>Price</th>
              <th>Airport</th>
              <th>Buy</th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Ernst Handel</td>
              <td>Roland Mendel</td>
              <td>Austria</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Island Trading</td>
              <td>Helen Bennett</td>
              <td>UK</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Laughing Bacchus Winecellars</td>
              <td>Yoshi Tannamuri</td>
              <td>Canada</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Magazzini Alimentari Riuniti</td>
              <td>Giovanni Rovelli</td>
              <td>Italy</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
          </table>
          </div>
      </div>
    )
 }

export default SearchResult;
