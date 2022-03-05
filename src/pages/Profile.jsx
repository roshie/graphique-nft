import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import HotBids from "../components/HotBids";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

export default function Profile(props, { theme }) {
  return (
    <div>
      <div
        className="card h-25 w-100 border-0"
        style={{
          // background: "#24252D",
          backgroundColor: props.theme.card,
        }}
      >
        <img
          className="img-fluid1 w-100"
          width="100%"
          style={{
            backgroundSize: "cover",
          }}
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2444&q=80"
          alt=" "
        />
        <img
          style={{ marginTop: "-5rem", borderRadius: "50%" }}
          className="mx-auto border-0 border-black"
          width="130px"
          src="https://media.discordapp.net/attachments/949602490486226957/949604788566372392/unknown.png"
          alt=" "
        />
      </div>
      <div className="py-2 d-flex flex-column mb-4">
        <div className="align-items-center py-2 d-flex flex-column  mb-4">
          <p
            className="mt-3 mb-4"
            style={{ fontSize: "18px", fontWeight: "600" }}
          >
            Mia Ayana
          </p>
        </div>
        <div className="align-items-left d-flex mx-5 px-3 justify-content-between">
          <div className="align-items-start w-100 py-4 my-3 d-none d-md-block">
            {" "}
            <input
              type="text"
              className="my-auto p-2 my-2 w-100 rounded-1 align-items-start"
              placeHolder="Search Item Here"
              style={{
                // border: `1px solid ${theme.theme.formBorder}`,
                backgroundColor: props.theme.form,
                border: "none",
              }}
            />
          </div>
          <div className="w-25 mx-3 align-items-end d-none d-md-block">
            <Form.Group
              className="mb-3 py-3 my-4"
              controlId="exampleForm.Select1"
            >
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Recently Listed"
                  aria-label="Text input with dropdown button"
                  style={{ backgroundColor: props.theme.form, border: "none" }}
                />
                <button
                  class="btn-outline-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ backgroundColor: props.theme.form, border: "none" }}
                />
                <ul class="dropdown-menu dropdown-menu-end">
                  <li>Test</li>
                  <li>Test</li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                </ul>
              </div>
            </Form.Group>
          </div>
        </div>
        <div className="align-items-left mx-5 px-5">
          <p
            className="mt-3 mx-2 px-2 mb-4 text-left py-1"
            style={{ fontSize: "22px", fontWeight: "600" }}
          >
            Items
          </p>
        </div>
        <div className="my-3">
          <HotBids theme={props.theme} />
        </div>
        <div className="align-items-center justfiy-content-center py-2 d-flex flex-column  mb-4">
          <Button
            variant="outline-light"
            className="gradient mx-2 w-25"
            href="/"
          >
            Load More
          </Button>
        </div>
      </div>
    </div>
  );
}
