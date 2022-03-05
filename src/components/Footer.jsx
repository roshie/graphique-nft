import React from "react";
import Img from "../assets/images/logo-full.svg";
import Vector1 from "../assets/images/Vector-1.svg";
import Vector2 from "../assets/images/Vector-2.svg";
import Vector3 from "../assets/images/Vector-3.svg";
import Vector from "../assets/images/Vector.svg";

export default function Footer() {
  return (
    <div className="container fixed-bottom">
      <footer>
        <div className="row">
          <div className="col-12 col-md px-4">
            <img src={Img} alt="logo" />
            <p
              className="mt-3 mb-4"
              style={{ fontSize: "16px", fontWeight: "600" }}
            >
              Get the latest updates
            </p>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Your Email"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">
                  Email Me!
                </button>
              </div>{" "}
            </div>
          </div>
          <div className="col-6 col-md px-4">
            <h3>Features</h3>
            <ul className="list-unstyled">
              <li className="para-1">Explore</li>
              <li className="para-1">How it works</li>
              <li className="para-1">Contact us</li>
            </ul>
          </div>
          <div className="col-6 col-md px-4">
            <h3>Support</h3>
            <ul className="list-unstyled">
              <li className="para-1">Help center</li>
              <li className="para-1">Terms of service</li>
              <li className="para-1">Legal</li>
              <li className="para-1">Privacy policy</li>
            </ul>
          </div>
          <div class="dropdown-divider"></div>
          <div>
            <p style={{ fontWeight: "600" }}>
              Graphique, NITT. All Rights Reserved
            </p>
            <div>
              <img
                src={Vector}
                alt="vector"
                style={{
                  width: "50px",
                  height: "50px",
                }}
              />
              <img src={Vector1} alt="vector-1" />
              <img src={Vector2} alt="vector-2" />
              <img src={Vector3} alt="vector-3" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
