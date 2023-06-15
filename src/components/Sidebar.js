import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="bg-white sidebar p-2">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div>
              <Link to="/" role="button" className="logo">
                <h1>PayEase</h1>
              </Link>
            </div>
            <hr className="text-black" />
            <div className="list-group list-group-flush">
              <a className="list-group-item list-group-item-action my-2 ">
                <i className="bi bi-speedometer fs-5 me-3" />
                <span className="fs-5">Dashboard</span>
              </a>

              <a className="list-group-item list-group-item-action my-2 ">
                <i className="bi bi-people fs-5 me-3" />
                <span className="fs-5">Students</span>
              </a>

              <a className="list-group-item list-group-item-action my-2 ">
                <i className="bi bi-person fs-5 me-3" />
                <span className="fs-5">Accountant</span>
              </a>
              <a className="list-group-item list-group-item-action my-2">
                <i className="bi bi-bell fs-5 me-3" />
                <span className="fs-5">Notification</span>
              </a>
              <a className="list-group-item list-group-item-action my-2">
                <i className="bi bi-power fs-5 me-3" />
                <span className="fs-5">Logout</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
