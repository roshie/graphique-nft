import { colors } from "../theme";
import { Tab, Nav, Row, Button } from "react-bootstrap";
import CheckOutModal from "../components/CheckOutModal";
import { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../nftdata.json";

function HeartFill({ color }) {
  return (
    <svg
      width="24"
      height="14"
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="m-auto"
    >
      <path
        d="M22.0961 2.4021C20.8537 1.05463 19.149 0.3125 17.2956 0.3125C15.9102 0.3125 14.6415 0.750488 13.5245 1.6142C12.9609 2.05017 12.4503 2.58356 12 3.20612C11.5499 2.58374 11.0391 2.05017 10.4753 1.6142C9.35852 0.750488 8.08978 0.3125 6.70441 0.3125C4.85101 0.3125 3.14612 1.05463 1.90375 2.4021C0.676208 3.73383 0 5.55316 0 7.52521C0 9.55493 0.756409 11.4129 2.38037 13.3725C3.83313 15.1254 5.92108 16.9048 8.33899 18.9653C9.16461 19.6689 10.1005 20.4666 11.0722 21.3162C11.3289 21.541 11.6583 21.6648 12 21.6648C12.3415 21.6648 12.6711 21.541 12.9274 21.3165C13.8992 20.4667 14.8356 19.6688 15.6616 18.9647C18.0791 16.9046 20.1671 15.1254 21.6198 13.3723C23.2438 11.4129 24 9.55493 24 7.52502C24 5.55316 23.3238 3.73383 22.0961 2.4021Z"
        fill={color}
      />
    </svg>
  );
}

function Heart({ color }) {
  return (
    <svg
      width="24"
      height="14"
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="m-auto"
    >
      <path
        d="M12 21.6648C11.6583 21.6648 11.3289 21.541 11.0722 21.3161C10.1026 20.4683 9.16789 19.6717 8.34318 18.9689L8.33897 18.9652C5.92107 16.9048 3.83312 15.1253 2.38037 13.3725C0.756407 11.4129 0 9.55491 0 7.52519C0 5.55315 0.676207 3.73382 1.90393 2.4021C3.1463 1.05462 4.851 0.3125 6.70458 0.3125C8.08995 0.3125 9.35869 0.750487 10.4754 1.61419C11.039 2.05017 11.5499 2.58374 12 3.20611C12.4502 2.58374 12.9609 2.05017 13.5247 1.61419C14.6415 0.750487 15.9102 0.3125 17.2956 0.3125C19.149 0.3125 20.8538 1.05462 22.0962 2.4021C23.3239 3.73382 24 5.55315 24 7.52519C24 9.55491 23.2437 11.4129 21.6198 13.3723C20.167 15.1253 18.0793 16.9046 15.6617 18.9649C14.8355 19.6687 13.8993 20.4667 12.9276 21.3165C12.6711 21.541 12.3415 21.6648 12 21.6648ZM6.70458 1.71838C5.24834 1.71838 3.91058 2.29956 2.93737 3.35497C1.9497 4.42632 1.4057 5.90728 1.4057 7.52519C1.4057 9.23228 2.04016 10.759 3.4627 12.4754C4.83764 14.1346 6.88274 15.8773 9.25065 17.8954L9.25505 17.899C10.0829 18.6045 11.0213 19.4043 11.998 20.2583C12.9805 19.4027 13.9204 18.6016 14.7499 17.895C17.1176 15.877 19.1625 14.1346 20.5374 12.4754C21.9598 10.759 22.5943 9.23228 22.5943 7.52519C22.5943 5.90728 22.0503 4.42632 21.0626 3.35497C20.0896 2.29956 18.7516 1.71838 17.2956 1.71838C16.2288 1.71838 15.2494 2.05749 14.3846 2.72619C13.6139 3.32238 13.077 4.07604 12.7622 4.60338C12.6004 4.87456 12.3155 5.03643 12 5.03643C11.6845 5.03643 11.3996 4.87456 11.2377 4.60338C10.9231 4.07604 10.3863 3.32238 9.6154 2.72619C8.75059 2.05749 7.77116 1.71838 6.70458 1.71838Z"
        fill={color}
      />
    </svg>
  );
}

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
              {like ? (
                <HeartFill color={props.theme.text} />
              ) : (
                <Heart color={props.theme.text} />
              )}
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
