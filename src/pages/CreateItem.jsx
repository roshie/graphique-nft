import { Form } from "react-bootstrap";
import Image from "../assets/images/image.svg";

export default function CreateItem(props) {
  return (
    <>
      <div className="container d-flex mt-5 justify-content-center">
        <h5 className="w-50 text-start mb-4 d-none d-md-block">
          <b>Create new Item</b>
        </h5>
      </div>
      <div className="container d-flex justify-content-center">
        <Form className="col-md-6 col-12">
          <Form.Label>
            <b>Upload File</b>
          </Form.Label>
          {/* <Card className="h-50" style={{border: "dashed "}}></Card> */}
          <div
            className="d-flex justify-content-center"
            style={{ position: "relative", backgroundColor: props.theme.form }}
          >
            <div className="d-flex row justify-content-center align-items-center">
              <h6 className="text-center mt-2">
                JPG, PNG, GIF, SVG, WEBM, MP3, MP4. Max 100mb.
              </h6>
              <img
                src={Image}
                className="img-fluid m-3 w-25"
                style={{ backgroundColor: props.theme.image }}
                alt=" "
              />
              <p className="text-center">
                {" "}
                Drag and Drop File <br />
                or browse media on your device
              </p>
            </div>

            <div
              style={{
                border: "dashed 2px",
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              }}
            ></div>
          </div>
          <Form.Group
            className="mb-3 mt-3"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>
              <b>Name</b>
            </Form.Label>
            <Form.Control
              type="name"
              placeholder="Item Name"
              style={{
                backgroundColor: props.theme.form,
                border: `1px solid ${props.theme.formBorder}`,
              }}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 mt-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>
              <b>Description</b>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Description of your item"
              style={{
                backgroundColor: props.theme.form,
                border: `1px solid ${props.theme.formBorder}`,
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.Select1">
            <Form.Label>
              <b>Price</b>
            </Form.Label>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Price"
                aria-label="Text input with dropdown button"
                style={{
                  backgroundColor: props.theme.form,
                  border: `1px solid ${props.theme.formBorder}`,
                }}
              />
              <button
                class="btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  backgroundColor: props.theme.form,
                  border: `1px solid ${props.theme.formBorder}`,
                }}
              >
                eth
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
          <div className="row justify-content-end my-auto">
            <button className="btn text-light w-25 my-3">Create Item</button>
          </div>
        </Form>
      </div>
    </>
  );
}
