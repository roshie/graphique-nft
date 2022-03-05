import React from "react";

export default function PaymentSuccessful(props) {
  return (
    <>
      <div className="d-flex justify-content-center my-4 ">
        <div className="p-4">
          <div className="align-items-center text-center">
            <div className=" fs-1 h1 fw-bold">Payment Successful</div>
            <hr></hr>
          </div>
          <div className="align-items-center text-center justify-content-center">
            <div className="avatar">
              <img
                src={
                  "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                }
                className="align-items-center ml-5 justify-content-center py-1"
                alt=""
                style={{
                  width: "100px",
                  height: "100px",
                  position: "absolute",
                  marginLeft: "-50px",
                }}
              />
            </div>
            <div className="py-5">
              <p className="my-5 py-4">
                You successfully purchased <strong>Abstact Smoke</strong>{" "}
                <br></br>
                <strong>Red Blue</strong> from
                <strong> Mia Ayana</strong>
              </p>
              <hr></hr>
              <h2>Share </h2>
              <div className="py-3 justify-content-center align-items-center">
                <BsInstagram
                  className="social-icons"
                  style={{ height: "30px", width: "30px" }}
                />
                <BsTwitter
                  className="social-icons"
                  style={{ height: "30px", width: "30px" }}
                />
                <FaTelegramPlane
                  className="social-icons"
                  style={{ height: "30px", width: "30px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}
