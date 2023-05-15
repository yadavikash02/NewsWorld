import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <>
  {/* Hello world */}
  <header>
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n      #intro {\n        background-image: url(https://mdbootstrap.com/img/new/fluid/city/008.jpg);\n        height: 100vh;\n      }\n\n      /* Height for devices larger than 576px */\n      @media (min-width: 992px) {\n        #intro {\n          margin-top: -58.59px;\n        }\n      }\n\n      .navbar .nav-link {\n        color: #fff !important;\n      }\n    "
      }}
    />
    {/* Navbar */}
    <nav
      className="navbar navbar-expand-lg navbar-dark d-none d-lg-block"
      style={{ zIndex: 2000 }}
    >
    </nav>
    {/* Navbar */}
    {/* Background image */}
    <div id="intro" className="bg-image shadow-2-strong">
      <div
        className="mask d-flex align-items-center h-100"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-md-8">
              <form className="bg-white  rounded-5 shadow-5-strong p-5">
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form1Example1"
                    className="form-control"
                  />
                  <label type="email" className="form-label text-dark" htmlFor="form1Example1" placeholder="email">
                    Email address
                  </label>
                </div>
                {/* Password input */}
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form1Example2"
                    className="form-control"
                  />
                  <label type="password" className="form-label text-dark" htmlFor="form1Example2">
                    Password
                  </label>
                </div>
                {/* 2 column grid layout for inline styling */}
                <div className="row mb-4">
                  <div className="col d-flex justify-content-center">
                    {/* Checkbox */}
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="form1Example3"
                        defaultChecked=""
                      />
                      <label
                        className="form-check-label text-dark"
                        htmlFor="form1Example3"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div className="col text-center">
                    {/* Simple link */}
                    <a href="#!">Forgot password?</a>
                  </div>
                </div>
                {/* Submit button */}
                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Background image */}
  </header>
</>

    )
  }
}
