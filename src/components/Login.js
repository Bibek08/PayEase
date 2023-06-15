import React from "react";
import { Link } from "react-router-dom";
import Imagefront from "./images/Imagefront.jpg";
import "./style.css";

function Login() {
  return (
    <div className="login-template d-flex justify-content-center align-items-center">
      <div className="container p-5">
        <div className="row">
          <div className="col-md-6 rowpad">
            <div className="image-container">
              <img src={Imagefront} alt="front img" className="front-img" />
            </div>
          </div>
          <div className="col-md-6 rowpad">
            <div className="form-container p-1 rounded-end bg-white  ">
              <form>
                <h3 className="text-center mb-5 text-black">Login Here</h3>
                <div className="mb-4 text-black">
                  <label htmlFor="email">Username</label>
                  <input
                    type="text"
                    placeholder="Enter Username"
                    className="form-control text-black mb-4"
                  />
                </div>
                <div className="mb-5 text-black">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="form-control mb-5"
                  />
                </div>

                <div className="d-grid logo-link">
                  <Link
                    to="/Sidebar"
                    className=" text-white btn btn-primary border border-emphasis"
                    role="button"
                  >
                    Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
