import "../assets/css/Home.css";
import SliderCards from "../components/SliderCards";
import HotBids from "../components/HotBids";
import { Button } from "react-bootstrap";
import { useEffect } from "react";

export default function Home(props) {
  useEffect(() => {
    console.log(window.location.pathname);

    // return () => {
    //   second
    // }
  });

  return (
    <>
      <div className="d-flex justify-content-center my-4 ">
        <div className="card card-banner p-4">
          <div className="card-body card-text p-lg-5 fs-1 fw-bold">
            Discover, collect, and sell extraordinary NFTs
          </div>
        </div>
      </div>
      <div className="my-3">{/* <Check  theme={props.theme} /> */}</div>
      <div className="align-items-left mx-5 px-5 py-2">
        <h1
          className="mt-3 mx-2 px-2 mb-4 text-left py-1"
          style={{ fontSize: "22px", fontWeight: "600" }}
        >
          Top Sellers
        </h1>
        <SliderCards theme={props.theme} />
      </div>

      <div className="align-items-left mx-5 px-5">
        <h1
          className="mt-3 mx-2 px-2 mb-4 text-left py-1"
          style={{ fontSize: "22px", fontWeight: "600" }}
        >
          Hot Bids
        </h1>
      </div>
      <div className="my-3">
        <HotBids theme={props.theme} />
      </div>
      <div className="align-items-center justfiy-content-center py-2 d-flex flex-column  mb-4">
        <Button
          variant="outline-primary"
          className="gradient mx-2 w-25 d-none d-md-block"
          href="/"
        >
          Load More
        </Button>
        <Button
          variant="outline-primary d-sm-none"
          className="gradient mx-2 w-100"
          href="/"
        >
          Load More
        </Button>
      </div>
    </>
  );
}
