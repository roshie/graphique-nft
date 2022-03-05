import "../assets/css/Home.css";
import SliderCards from "../components/SliderCards";
import HotBids from "../components/HotBids";
import Check from "../components/CheckOutModal";
import { Button } from "react-bootstrap";

export default function Home(props) {
  return (
    <>
      <div className="d-flex justify-content-center my-4 ">
        <div className="card card-banner p-4">
          <div className="card-body card-text p-lg-5 fs-1 fw-bold">
            Discover, collect, and sell extraordinary NFTs
          </div>
        </div>
      </div>
      <div className="my-3">
        <p className="h1 px-4">Top Sellers</p>
        <Check theme={props.theme} />
      </div>
      <div className="my-3">
        <p className="h1 px-4">Top Sellers</p>
        <SliderCards theme={props.theme} />
      </div>
      <div className="my-3">
        <p className="h1 px-4">Hot Bids</p>
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
