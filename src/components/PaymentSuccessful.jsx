import React from "react";
import Modal from "react-bootstrap/Modal";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

export default function PaymentSuccessful(props) {
  const { nftObj } = props;

  const handleClose = () => {
    props.setShow(false);
  };
  return (
    <>
      <Modal show={props.show} onHide={handleClose} centered>
        <Modal.Header
          style={{
            backgroundColor: props.theme.body,
            border: `1px solid ${props.theme.border}`,
          }}
          className="d-flex justify-content-center rounded-2-top py-4"
        >
          <Modal.Title className="h2">Payment Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body
          className="p-4"
          style={{
            backgroundColor: props.theme.body,
          }}
        >
          <div className="align-items-center text-center justify-content-center">
            <div className="avatar d-flex align-items-center justify-content-center">
              <img
                src={nftObj.image_url}
                className="d-flex align-items-center justify-content-center py-1"
                alt=""
                style={{
                  width: "60%",
                  height: "100%",
                }}
              />
            </div>
            <div className="py-1 mx-5">
              <p
                className="my-1 py-1 mt-4 p1-regular"
                style={{ color: props.theme.text }}
              >
                You successfully purchased <strong>{nftObj.name}</strong> from
                <strong> Mia Ayana</strong>
              </p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer
          className="rounded-2-bottom"
          style={{
            backgroundColor: props.theme.body,
            border: `1px solid ${props.theme.border}`,
          }}
        >
          <div className="mx-auto text-center">
            <h2 className="h3">Share </h2>
            <div className="py-2 justify-content-center align-items-center">
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
        </Modal.Footer>
      </Modal>
    </>
  );
}
