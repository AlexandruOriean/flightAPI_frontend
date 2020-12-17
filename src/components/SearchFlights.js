import React, {Component} from "react";
import "../styles/searchSection.css";


class SearchFlights extends Component{

  constructor(props) {
    super(props);
    this.state = {
      departure: null,
      arrival: null,
      date: null,
      results: []
    }
  }



  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.departure)
    console.log(this.state.arrival)
    console.log((this.state.date))
    let url = `http://localhost:3000/flights/${this.state.departure}/${this.state.arrival}/${this.state.date}`
    window.location.href = url;
    console.log(url);
  }

  handleInputChange = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }
    


  render () {
    
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
                  name="departure"
                  placeholder="Departure"
                  aria-label="Search"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="col-lg-4 mr-auto text-center">
                <p>To</p>
                
                <input
                  className="form-control"
                  type="text"
                  name="arrival"
                  placeholder="Destination"
                  aria-label="Search"
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 ml-auto mr-auto text-center">
                <p>Departure date</p>
                <input
                  className="form-control"
                  type="date"
                  name="date"
                  id="example-date-input"
                  onChange={this.handleInputChange}
                />
              </div>
              {/* <div className="col-lg-4 mr-auto text-center">
                <p>Arrival date</p>
                <input
                  className="form-control"
                  type="date"
                  defaultValue="defaultValue"
                  id="example-date-input"
                />
              </div> */}
            </div>
            {/* <!-- Search button --> */}
            <div className="text-center mt-4">
              <button
                type="button"
                className="btn btn-info"
                onClick={this.handleSubmit}
              >
                Search
              </button>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default SearchFlights;