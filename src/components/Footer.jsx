import React from "react";
import logoLight from "../assets/images/logo-light.svg";
import logoDark from "../assets/images/logo-dark.svg";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { RiDiscordFill } from "react-icons/ri";

export default function Footer() {
  return (
    <div className="container">
      <footer>
        <div className="row">
          <div className="col-12 col-md px-4">
            <img src={logoLight} alt="logo" />
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
          <div className="dropdown-divider"></div>
          <div className="row">
            <div className="col-md-6 col-12">
              <p style={{ fontWeight: "600" }}>
                Graphique, NITT. All Rights Reserved
              </p>
            </div>
            <div className="col-md-6 col-12">
              <BsInstagram className="social-icons" />
              <BsTwitter className="social-icons" />
              <FaTelegramPlane className="social-icons" />
              <RiDiscordFill className="social-icons" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
