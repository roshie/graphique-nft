import heart from "../assets/images/heart.svg";
import heartFill from "../assets/images/heart-filled.svg";
import { colors } from "../theme";
import { Tab, Nav, Row, Col } from "react-bootstrap";

export default function Item(props) {
  const loremIpsum =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore omnis ipsam corporis sequi illum qui officiis assumenda, architecto beatae laboriosam dolores voluptatem culpa hic dicta expedita aspernatur fugit, itaque corrupti!";
  return (
    <div className="d-flex justify-content-center flex-column flex-md-row border-ItemRow px-0 px-md-5">
      <div className="col-12 col-md-7 p-1 p-md-5">
        <div
          style={{
            // maxWidth: "500px",
            maxHeight: "500px",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "130%",
              objectFit: "cover",
              borderRadius: "18px",
            }}
            src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=8"
            alt=""
            className="img-fluid"
          />
        </div>
      </div>
      <div className="col-12 col-md-5 border-Description p-1 p-md-5 d-flex flex-column">
        <div className="d-flex justify-content-between my-2 my-md-0">
          <div className="col-8">
            <h1>Abstract Smoke Red Blue</h1>
          </div>
          <div className="col-4 d-flex justify-content-end">
            <div
              className="rounded-pill border px-2 py-1 my-auto d-flex"
              style={{ borderColor: `${colors.grey2}` }}
            >
              <img
                src={heartFill}
                alt=""
                className="img-fluid"
                width="18"
                height="auto"
                style={{ color: "white" }}
              />
              <span className="mx-1 p2-regular">92</span>
            </div>
          </div>
        </div>
        <p className="p2-regular">
          From <span className="p2-bold"> 4.5 ETH </span> · 20 of 25 available
        </p>
        <div className="p3-regular mt-3">Creator</div>
        <div className="d-flex">
          <img
            src={
              "https://media.discordapp.net/attachments/949602490486226957/949604788566372392/unknown.png"
            }
            alt=""
            className="rounded-circle mt-2 me-2"
            height="54"
          />
          <div className="p2-bold my-auto">Mia Ayana</div>
        </div>
        <div>
          <Tab.Container defaultActiveKey="first">
            <div className="d-flex">
              <Nav>
                <Nav.Item>
                  <Nav.Link className="item" eventKey="first">
                    Tab 1
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="item" eventKey="second">
                    Tab 2
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <Row>
              <Tab.Content>
                <Tab.Pane eventKey="first">{loremIpsum}</Tab.Pane>
                <Tab.Pane eventKey="second">{loremIpsum}</Tab.Pane>
              </Tab.Content>
            </Row>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
}
