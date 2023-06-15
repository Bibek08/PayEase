import React from "react";
import payment from "./images/payment.jpg";
import admin from "./images/admin.png";
import Sidebar from "./Sidebar";

function Dashboard() {
  return (
    <div>
      <div className="conatiner">
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <div className="col-md-10">
              <h1>Welcome to Dashboard</h1>
            </div>
            <div className="col-md-2">
              <p id="admin-name">
                Bibek Thapa <img src={admin} alt="admin logo" id="admin" />
              </p>
            </div>

            <p>
              We are here to inform you that, using our system PayEase, you can
              easily your payment through online which you feel trouble and
              burdensum.
            </p>
            <div>
              <img src={payment} alt="" className="dash-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
