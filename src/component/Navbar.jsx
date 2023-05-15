import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    // let {mode}=this.props;
    return (
      <div>
        <nav className={`navbar navbar-expand-lg bg-secondary navbar-dark`}>
          <div className="container-fluid">
            <Link className="navbar-brand text-light" to="/NewsWorld">
              News
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item">
                  <Link
                    className="nav-link active text-light"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>


                <li class="nav-item dropdown bg-secondary">
          <Link class="nav-link dropdown-toggle " to="/india" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            India
          </Link>
          <ul className="dropdown-menu bg-secondary">
            <li><Link className="dropdown-item text-light" to="/indiasports">Sports</Link></li>
            <li><Link className="dropdown-item text-light" to="/indiabusiness">Business</Link></li>
            <li><Link className="dropdown-item text-light" to="/indiapolitics">Politics</Link></li>
            <li><Link className="dropdown-item text-light" to="/indiaentertainment">Entertainment</Link></li>
            {/* <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li> */}
          </ul>
        </li>


        <li class="nav-item dropdown bg-secondary">
          <Link class="nav-link dropdown-toggle" to="/usa" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            USA
          </Link>
          <ul className="dropdown-menu bg-secondary">
            <li><Link className="dropdown-item text-light" to="/usasports">Sports</Link></li>
            <li><Link className="dropdown-item text-light" to="/usabusiness">Business</Link></li>
            <li><Link className="dropdown-item text-light" to="/usapolitics">Politics</Link></li>
            <li><Link className="dropdown-item text-light" to="/usaentertainment">Entertainment</Link></li>
            {/* <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li> */}
          </ul>
        </li>
        <li class="nav-item dropdown bg-secondary">
          <Link class="nav-link dropdown-toggle" to="/contact" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Contact
          </Link>
          <ul className="dropdown-menu bg-secondary">
            <li><Link className="dropdown-item text-light" to="/login">Login</Link></li>
            <li><Link className="dropdown-item text-light" to="/signup">Sign Up</Link></li>
            {/* <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li> */}
          </ul>
        </li>
              </ul>
             
            </div>
            {/* <div className="form-check form-switch">
              <input
                className="form-check-input"
                onClick={this.EnableMode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className={`form-check-label text-${mode === "dark" ? "light" : "dark"
                  }`}
                htmlFor="flexSwitchCheckDefault"
              >
                Enable {mode === "dark" ? "Light" : "Dark"}mode
              </label>
            </div> */}
          </div>
        </nav>
      </div>
    );
  }
}
