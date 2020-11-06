import React, {component} from 'react';
import '../styles/searchSection.css'

class SearchFlights extends React.Component {
    render() {
        return(
            <div>
                {/* <!-- Search Flights Section --> */}
                <section class="page-section bg-dark text-white mb-0" id="search">
                    <div class="container">
                        {/* <!-- Search Flights Heading --> */}
                        <h2 class="page-section-heading text-center text-uppercase text-white mb-5">Search for a flight!</h2>
                        {/* <!-- Search Section Content --> */}
                        <div class="row mb-3">
                            <div class="col-lg-4 ml-auto text-center">
                                <p>From</p> 
                                <input class="form-control" type="text" placeholder="Search" aria-label="Search"/>
                            </div>
                            <div class="col-lg-4 mr-auto text-center">
                                <p>To</p> 
                                <input class="form-control" type="text" placeholder="Search" aria-label="Search"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4 ml-auto text-center">
                                <p>Departure date</p>
                                <input class="form-control" type="date" value="2020-10-09" id="example-date-input"/>
                            </div>
                            <div class="col-lg-4 mr-auto text-center">
                                <p>Arrival date</p>
                                <input class="form-control" type="date" value="2020-10-09" id="example-date-input"/>
                            </div>
                        </div>
                        {/* <!-- Search button --> */}
                        <div class="text-center mt-4">
                            <button type="button" class="btn btn-info">Search</button>
                        </div>   
                    </div> 
                </section>
            </div>
        )

       
    }

    
}

export default SearchFlights;