import Layout from "../components/Layout";
import { Form } from "react-bootstrap";

export default function CreateItem() {
  return (
    <>
      <Layout>
        <div className="container d-flex mt-5 justify-content-center">
          <h5 className="w-50 text-start mb-4">
            Create new item
          </h5>
        </div>
        <div className="container d-flex justify-content-center">
          <Form className="col-md-6 col-12">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                <b>Name</b>
              </Form.Label>
              <Form.Control type="name" placeholder="Item Name" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
              style={{
                marginTop: "20px",
              }}
            >
              <Form.Label>
                <b>Description</b>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Description of your item"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.Select1">
              <Form.Label>
                <b>Price</b>
              </Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Enter Price</option>
                <option value="1"></option>
                <option value="2"></option>
                <option value="3"></option>
              </Form.Select>
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
      </Layout>
    </>
  );
}
