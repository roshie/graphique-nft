import React from "react";
import logo from "../assets/images/logo.svg";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { RiDiscordFill } from "react-icons/ri";
import { Button } from "react-bootstrap";

export default function Footer({ theme }) {
  return (
    <div className="container">
      <footer style={{ borderTop: ` 1px solid ${theme.theme.border}` }}>
        <div className="row mt-5">
          <div className="col-12 col-md px-4">
            <div className="d-flex">
            <img src={logo} alt="logo" />
            <p
              className="my-auto"
              style={{
                fontFamily: "Gotham",
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "16px",
                lineHeight: "18px",
              }}
            >
              Graphique NFT
            </p>
            </div>
            <p
              className="p1-bold my-3"
            >
              Get the latest updates
            </p>
            <div className="d-flex mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Your Email"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                style={{
                  borderRadius: "10px",
                  border: `1px solid ${theme.theme.formBorder}`,
                  backgroundColor: theme.theme.footer,
                }}
              />

              <Button
                className="m-0"
                variant="primary"
              >
                Email Me!
              </Button>
            </div>
          </div>
          <div className="col-6 col-md px-4">
            <h3>Graphique NFT</h3>
            <ul className="list-unstyled">
              <li className="para-1 mt-4">Explore</li>
              <li className="para-1 my-2">How it works</li>
              <li className="para-1">Contact us</li>
            </ul>
          </div>
          <div className="col-6 col-md px-4">
            <h3>Support</h3>
            <ul className="list-unstyled">
              <li className="para-1 mt-4">Help center</li>
              <li className="para-1 mt-2">Terms of service</li>
              <li className="para-1 my-2">Legal</li>
              <li className="para-1 mb-3">Privacy policy</li>
            </ul>
          </div>
          <div className="dropdown-divider"></div>
          <div className="row ms-1">
            <div className="col-md-6 col-12">
              <p className="p1-bold text-start">
                Graphique, NITT. All Rights Reserved
              </p>
            </div>
            <div className="col-md-6 col-12 d-flex justify-content-center">
              <BsInstagram className="social-icons"/>
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
