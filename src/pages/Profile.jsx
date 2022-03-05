import React from "react";
import { Button, Box } from "react-bootstrap";
import HotBids from "../components/HotBids";

export default function Profile(props) {
  return (
    <div>
      <div
        className="card h-25 w-100"
        style={{
          background: "#24252D",
        }}
      >
        <img
          className="img-fluid w-100"
          width="100px"
          height="20px"
          style={{
            backgroundSize: "cover",
          }}
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2444&q=80"
        />
        <img
          style={{ marginTop: "-5rem", borderRadius: "50%" }}
          className="mx-auto border border-black"
          width="130px"
          src="https://media.discordapp.net/attachments/949602490486226957/949604788566372392/unknown.png"
        />
      </div>
      <div className="py-2 d-flex flex-column align-items-center mb-4">
        <p
          className="mt-3 mb-4"
          style={{ fontSize: "18px", fontWeight: "600" }}
        >
          Mia Ayana
        </p>
        <div className="py-2 d-flex justify-content-between align-items-center">
          <div class="input-group mb-3 p-2 py-2 d-flex alin-items-start">
            <div> </div>
            <div>
              {" "}
              <input
                type="text"
                className="my-auto w-100 p-1 rounded-1 align-items-start"
                placeHolder="Search Item Here"
                style={{
                  border: "1px solid #E3E1E3",
                }}
              />
            </div>
          </div>
          <div
            class="input-group mb-3 p-2 py-2 align-items-end dropdown d-flex"
            sx={{ display: "flex", alignItems: "flex-end" }}
          >
            <input
              type="text"
              class="form-control py-1 w-75"
              placeholder="Recently Entered"
              aria-label="Text input with dropdown button"
            />
            <button
              class="btn-outline-secondary dropdown-toggle py-1 "
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            />
          </div>
        </div>
        <div className="my-3">
          <HotBids theme={props.theme} />
        </div>
        <Button variant="outline-primary" className="btn outline w-25" href="/">
          Load More
        </Button>
      </div>
    </div>
  );
}
