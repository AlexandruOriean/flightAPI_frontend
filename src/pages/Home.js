import React from 'react';
import Masthead from '../components/Masthead';
import SearchFlights from '../components/SearchFlights';
import Recommendations from '../components/Recommendations';
import Modals from '../components/Modals';
import About from '../components/About';


class Home extends React.Component {
    render() {
        return(
            <div>
                <Masthead />
                <SearchFlights />
                <Recommendations />
                <Modals />
                <About />
            </div>
        )
    }
}

export default Home;