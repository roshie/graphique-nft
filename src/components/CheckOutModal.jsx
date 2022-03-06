import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import PaymentSuccessful from "../components/PaymentSuccessful";

export default function CheckOutModal(props) {
  const { nftObj } = props;

  const handleClose = () => {
    props.setShow(false);
  };

  const [openModal, setOpenModal] = useState(false);

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
          <Modal.Title className="fw-bold">Check Out</Modal.Title>
        </Modal.Header>
        <Modal.Body
          className="p-4"
          style={{
            backgroundColor: props.theme.body,
          }}
        >
          <div className="d-flex mb-3 fw-bold justify-content-between">
            <p>Item</p>
            <p>SubTotal</p>
          </div>
          <div className="d-flex justify-content-between mb-4 ">
            <img
              src={nftObj.image_url}
              className="img-fluid w-25"
              alt="Abstract"
            />
            <div
              className="flex-column d-none d-md-block my-3"
              style={{ marginLeft: "-75px" }}
            >
              <p
                style={{ color: props.theme.text, fontSize: "14px" }}
                className="fw-bold m-0"
              >
                Mia Ayana
              </p>
              <p
                style={{ color: props.theme.text, fontSize: "14px" }}
                className="m-0"
              >
                {nftObj.name}
              </p>
            </div>
            <div className="flex-column d-md-none my-3">
              <p
                style={{ color: props.theme.text, fontSize: "14px" }}
                className="fw-bold m-0"
              >
                Mia Ayana
              </p>
              <p
                style={{ color: props.theme.text, fontSize: "14px" }}
                className="m-0"
              >
                {nftObj.name}
              </p>
            </div>
            <p style={{ color: props.theme.text }}>
              {nftObj.price}&nbsp; <span className="fw-bold">ETH</span>
            </p>
          </div>
          <div className="d-flex fw-bold justify-content-between">
            <p>Total</p>
            <p>{nftObj.price}</p>
          </div>
        </Modal.Body>

        <Modal.Footer
          className="d-flex justify-content-center rounded-2-bottom py-4"
          style={{
            backgroundColor: props.theme.body,
            border: `1px solid ${props.theme.border}`,
          }}
        >
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              setOpenModal(true);
            }}
          >
            Checkout
          </Button>
          <Button
            variant="outline-primary"
            onClick={() => props.setShow(false)}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <PaymentSuccessful
        show={openModal}
        setShow={setOpenModal}
        theme={props.theme}
        nftObj={nftObj}
      />
    </>
  );
}
