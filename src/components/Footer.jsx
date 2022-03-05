import React from "react";
import Img from "../assets/images/logo-full.svg";

export default function Footer() {
  return (
    <div className="container fixed-bottom">
      <footer>
        <div className="row">
          <div className="col-12 col-md px-4">
            <img src={Img} alt="logo" />
            <p style={{ fontSize: "16px", fontWeight: "600" }}>
              Get the latest updates
            </p>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">
                  Email Me!
                </button>
              </div>
            </div>
          </div>
          <div className="col-6 col-md px-4">
            <h3>Features</h3>
            <ul>
              <li>Explore</li>
              <li>How it works</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="col-6 col-md px-4">
            <h3>Support</h3>
            <ul>
              <li>Help center</li>
              <li>Terms of service</li>
              <li>Legal</li>
              <li>Privacy policy</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
