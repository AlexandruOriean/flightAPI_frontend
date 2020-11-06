import React, {Component} from 'react';
import '../styles/navbar.css'

class Navbar extends React.Component {
    render() {
        return (
            <div>
                {/* <!-- Navbar --> */}
                <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark static-top">
                    <div class="container">
                            <a className="navbar-brand" href="/" style={{fontSize: '27px'}}>
                                <img src="img/navbar_icon.png" width={50} height={50} alt="" />logos.ro
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarResponsive">
                                <ul className="navbar-nav ml-auto text-uppercase">
                                    <li className="nav-item">
                                    <a className="nav-link" href="/#search">Search flights</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="/#portfolio">Recommendations</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="/#about">about</a>
                                    </li>
                                </ul>
                            </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar

