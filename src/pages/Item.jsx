import heart from "../assets/images/heart.svg";
import heartFill from "../assets/images/heart-filled.svg";
import { colors } from "../theme";
import { Tab, Nav, Row, Button } from "react-bootstrap";
import CheckOutModal from "../components/CheckOutModal";
import { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../nftdata.json";

export default function Item(props) {
  const [openModal, setOpenModal] = useState(false);
  const [like, setLike] = useState(true);
  const { id } = useParams();
  const loremIpsum =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore omnis ipsam corporis sequi illum qui officiis assumenda, architecto beatae laboriosam dolores voluptatem culpa hic dicta expedita aspernatur fugit, itaque corrupti!";

  var nftObj = {
    id: 1,
    name: "Abstact Smoke Red Blue",
    price: 1.25,
    likes: 92,
    liked: true,
    image_url:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  };

  data.forEach((d) => {
    if (d.id === Number(id)) {
      nftObj = d;
    }
  });

  return (
    <div className="d-flex justify-content-center flex-column flex-md-row border-ItemRow px-0 px-md-5">
      <div className="col-12 col-md-6 col-lg-7 p-1 p-md-3 p-lg-5 my-auto">
        <div
          className="rounded-2 mx-auto img-fluid"
          style={{
            height: "500px",
            maxWidth: "500px",
            maxHeight: "500px",
            backgroundImage: `url(${nftObj.image_url})`,
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      <div className="col-12 col-md-6 col-lg-5 border-Description p-1 p-md-3 p-lg-5 d-flex flex-column">
        <div className="d-flex justify-content-between my-2 my-md-0">
          <div className="col-8">
            <h1>{nftObj.name}</h1>
          </div>
          <div className="col-4 d-flex justify-content-end">
            <div
              className="rounded-pill border px-2 py-1 my-auto d-flex"
              style={{ borderColor: `${colors.grey2}` }}
              onClick={() => setLike(!like)}
            >
              <img
                src={like ? heartFill : heart}
                alt=""
                className="img-fluid"
                width="18"
                height="auto"
                style={{ color: "white" }}
              />
              <span className="mx-1 p2-regular">{nftObj.likes}</span>
            </div>
          </div>
        </div>
        <p className="p2-regular">
          From <span className="p2-bold"> {nftObj.price} ETH </span> · 20 of 25
          available
        </p>
        <div className="p3-regular mt-3">Creator</div>
        <div className="d-flex my-3">
          <img
            src={
              "https://media.discordapp.net/attachments/949602490486226957/949604788566372392/unknown.png"
            }
            alt=""
            className="rounded-circle me-2"
            height="54"
          />
          <div className="p2-bold my-auto">Mia Ayana</div>
        </div>
        <div className="mt-2">
          <Tab.Container defaultActiveKey="first">
            <div
              className="d-flex"
              style={{ borderBottom: `1px solid ${props.theme.border}` }}
            >
              <Nav variant="tabs">
                <Nav.Item>
                  <Nav.Link className="p1-regular" eventKey="first">
                    Details
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="p1-regular" eventKey="second">
                    Offer
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="p1-regular" eventKey="third">
                    History
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <Row>
              <Tab.Content>
                <Tab.Pane
                  eventKey="first"
                  className="my-4 p1-regular"
                  style={{ color: props.theme.paragraph }}
                >
                  {loremIpsum}
                </Tab.Pane>
                <Tab.Pane
                  eventKey="second"
                  className="my-4 p1-regular"
                  style={{ color: props.theme.paragraph }}
                >
                  {loremIpsum}
                </Tab.Pane>
                <Tab.Pane
                  eventKey="third"
                  className="my-4 p1-regular"
                  style={{ color: props.theme.paragraph }}
                >
                  {loremIpsum}
                </Tab.Pane>
              </Tab.Content>
            </Row>
          </Tab.Container>
        </div>
        <div className="d-flex my-3">
          <Button
            variant="primary"
            onClick={() => {
              setOpenModal(true);
            }}
            className="p2-regular p-0"
            style={{ width: "40%" }}
          >
            Buy for {nftObj.price} ETH
          </Button>
          <Button
            variant="outline-primary"
            className="mx-2 p2-regular p-0 mb-2"
            onClick={() => {
              setOpenModal(true);
            }}
            style={{ width: "40%" }}
          >
            Make Offer
          </Button>
        </div>
      </div>
      <CheckOutModal
        show={openModal}
        setShow={setOpenModal}
        theme={props.theme}
        nftObj={nftObj}
      />
    </div>
  );
}
