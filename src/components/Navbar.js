import React, { useState, useEffect } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = window.sessionStorage.getItem("login");
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    window.sessionStorage.removeItem("login");
  };

  return (
    <div>
      {/* <!-- Navbar --> */}
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark static-top">
        <div className="container">
          <a className="navbar-brand" href="/" style={{ fontSize: "27px" }}>
            <p>
            logos.ro
            </p>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto text-uppercase">
              <li className="nav-item">
                <a className="nav-link" href="/#search">
                  Search flights
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#portfolio">
                  Recommendations
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#about">
                  about
                </a>
              </li>

              {currentUser ? (
                <div className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="">{currentUser}</Link>
                  </li>
                  <li className="nav-item">
                    <a href="/login" className="nav-link" onClick={logOut}>
                      LogOut
                    </a>
                  </li>
                </div>
              ) : (
                <div className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to={"/login"} className="nav-link">
                      Login
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to={"/register"} className="nav-link">
                      Sign Up
                    </Link>
                  </li>
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
