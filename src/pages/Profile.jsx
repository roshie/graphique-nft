import React from "react";
import { Button, Form } from "react-bootstrap";
import HotBids from "../components/HotBids";
import { ReactComponent as Down } from "../assets/images/down-arrow.svg";

export default function Profile(props, { theme }) {
  return (
    <div>
      <div
        className="card h-25 w-100 border-0"
        style={{
          backgroundColor: props.theme.banner,
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
        <div className="d-flex mx-5 px-5 justify-content-center align-items-center">
          <div className="align-items-start w-75 py-4 my-3 d-none d-md-block">
            <input
              type="text"
              className="my-auto p-2 ms-2 w-100 align-items-start p3-regular rounded-1"
              placeholder="Search Item Here"
              style={{
                borderRadius: `0.7rem !important`,
                backgroundColor: props.theme.footer,
                border: `1px solid ${props.theme.formBorder}`,
              }}
            />
          </div>
          <div className="w-25 mx-4 p-3 align-items-end d-none d-md-block">
            <Form.Group
              className="mb-3 py-3 my-5 p-4"
              controlId="exampleForm.Select1"
            >
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control p3-regular"
                  placeholder="Recently Listed"
                  aria-label="Text input with dropdown button"
                  style={{
                    backgroundColor: props.theme.form,
                    borderTop: `1px solid ${props.theme.formBorder}`,
                    borderBottom: `1px solid ${props.theme.formBorder}`,
                    borderLeft: `1px solid ${props.theme.formBorder}`,
                    borderTopLeftRadius: "10px",
                    borderBottomLeftRadius: "10px",
                    borderRight: `0px solid ${props.theme.formBorder}`,
                  }}
                />
                <button
                  class="btn-outline-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    backgroundColor: props.theme.form,
                    borderTop: `1px solid ${props.theme.formBorder}`,
                    borderBottom: `1px solid ${props.theme.formBorder}`,
                    borderRight: `1px solid ${props.theme.formBorder}`,
                    borderTopRightRadius: "10px",
                    borderBottomRightRadius: "10px",
                    borderLeft: `0px solid ${props.theme.formBorder}`,
                  }}
                >
                  {" "}
                  <Down style={{ stroke: props.theme.paragraph }} />
                </button>
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
          <h1
            className="mt-3 mx-2 px-2 mb-4 text-left py-1 justify-content-center"
            style={{ fontSize: "22px", fontWeight: "600" }}
          >
            Items
          </h1>
        </div>
        <div className="my-3">
          <HotBids theme={props.theme} />
        </div>
        <div className="align-items-center justfiy-content-center py-2 d-flex flex-column  mb-4">
          <Button
            variant="outline-primary"
            className="gradient mx-2 w-25 d-none d-md-block"
            href="/"
          >
            Load More
          </Button>
          <Button
            variant="outline-primary d-sm-none"
            className="gradient mx-2 w-100"
            href="/"
          >
            Load More
          </Button>
        </div>
      </div>
    </div>
  );
}
