import React from 'react';
import '../styles/masthead.css'

class Masthead extends React.Component {
    render() {
        return(
            <div>
                {/* <!-- Masthead --> */}
                <header className="masthead text-white text-center">
                    <div className="container d-flex align-items-center flex-column">
                        {/* masthead avatar */}
                        <img className="masthead-avatar mb-5" src="img/masthead_icon.png" alt="" />
                        {/* masthead heading */}
                        <h1 className="masthead-heading text-uppercase mb-0">Travel with us!</h1>
                        {/* icon divider */}
                        <hr className="my-3" />
                        <div className="divider-custom divider-light">
                            <div className="divider-custom-line" />
                            <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                            <div className="divider-custom-line" />
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Masthead;