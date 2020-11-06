import React from 'react';
import '../styles/searchSection.css'

class SearchFlights extends React.Component {
    render() {
        return(
            <div>
                {/* <!-- Search Flights Section --> */}
                <section className="page-section bg-dark text-white mb-0" id="search">
                    <div className="container">
                        {/* <!-- Search Flights Heading --> */}
                        <h2 className="page-section-heading text-center text-uppercase text-white mb-5">Search for a flight!</h2>
                        {/* <!-- Search Section Content --> */}
                        <div className="row mb-3">
                            <div className="col-lg-4 ml-auto text-center">
                                <p>From</p> 
                                <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
                            </div>
                            <div className="col-lg-4 mr-auto text-center">
                                <p>To</p> 
                                <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 ml-auto text-center">
                                <p>Departure date</p>
                                <input className="form-control" type="date" defaultValue="zzz" id="example-date-input"/>
                            </div>
                            <div className="col-lg-4 mr-auto text-center">
                                <p>Arrival date</p>
                                <input className="form-control" type="date" defaultValue="defaultValue" id="example-date-input"/>
                            </div>
                        </div>
                        {/* <!-- Search button --> */}
                        <div className="text-center mt-4">
                            <button type="button" className="btn btn-info">Search</button>
                        </div>   
                    </div> 
                </section>
            </div>
        )

       
    }

    
}

export default SearchFlights;