import Layout from "../components/Layout";
import { Card, Form } from "react-bootstrap";

export default function CreateItem() {
  return (
    <>
        <div className="container d-flex mt-5 justify-content-center">
          <h5 className="w-50 text-start mb-4">Create new item</h5>
        </div>
        <div className="container d-flex justify-content-center">
          <Form className="col-md-6 col-12">
            {/* <Card className="h-50">
            </Card> */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                <b>Name</b>
              </Form.Label>
              <Form.Control type="name" placeholder="Item Name" />
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
                />
                <button
                  class="btn btn-outline-light dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  eth
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Separated link
                    </a>
                  </li>
                </ul>
              </div>
            </Form.Group>
          </Form>
          <button
            className="btn"
            style={{
              display: "flex",
              flexdirection: "row",
              justifycontent: "center",
              alignitems: "center",
              padding: "9px 30px",
              position: "absolute",
              width: "145px",
              height: "45px",
              left: "880px",
              top: "1276px",
            }}
          >
            Create item
          </button>
        </div>
    </>
  );
}
