import React, { useState, useEffect } from "react";
import "../styles/searchSection.css";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function SearchFlights() {
  const [data, setData] = useState();
  const { errors, handleSubmit } = useForm({});
    
  const onSubmit = (flights) => {
    axios
      .get("http://localhost:8080/api/v1/flights", flights)
      .then((res) => {
        console.log(flights);
        setTimeout(() => {
          History.push("/");
        }, 200);
      })
      .catch((err) => console.log(err));
    
    return <SearchFlights />
  };

  // useEffect(() => {
  //     async function fetchData() {
  //       let response = await fetch(
  //         "http://localhost:8080/api/v1/flights"
  //       );
  //       let data = await response.json();
  //       console.log(data);
  //       if (response.ok) {
  //         setData(data);
  //       } else {
  //         console.log("fara flights");
  //       }
  //     }
  //     fetchData();
  //   }, [data]);

  return (
    <div>
      {/* <!-- Search Flights Section --> */}
      <section className="page-section bg-dark text-white mb-0" id="search">
        <div className="container">
          {/* <!-- Search Flights Heading --> */}
          <h2 className="page-section-heading text-center text-uppercase text-white mb-5">
            Search for a flight!
          </h2>
          {/* <!-- Search Section Content --> */}
          <div className="row mb-3">
            <div className="col-lg-4 ml-auto text-center">
              <p>From</p>
              <input
                className="form-control"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
            <div className="col-lg-4 mr-auto text-center">
              <p>To</p>
              <input
                className="form-control"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 ml-auto text-center">
              <p>Departure date</p>
              <input
                className="form-control"
                type="date"
                defaultValue="zzz"
                id="example-date-input"
              />
            </div>
            <div className="col-lg-4 mr-auto text-center">
              <p>Arrival date</p>
              <input
                className="form-control"
                type="date"
                defaultValue="defaultValue"
                id="example-date-input"
              />
            </div>
          </div>
          {/* <!-- Search button --> */}
          <div className="text-center mt-4">
            <button
              type="button"
              className="btn btn-info"
              onClick={handleSubmit(onSubmit)}
            >
              Search
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
