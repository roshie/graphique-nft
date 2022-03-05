import "../assets/css/Home.css";
import SliderCards from "../components/SliderCards";
import person1 from "../assets/images/slide1.png";

export default function Home() {
  return (
    <>
      <div className="d-flex justify-content-center my-4 flex-column">
        <div className="card card-banner p-4">
          <div className="card-body card-text p-lg-5 fs-1 fw-bold">
            Discover, collect, and sell extraordinary NFTs
          </div>
        </div>
        <div className="my-3">
          <div class="card" style={{ backgroundColor: "black3" }}>
            <img
              src="https://images.unsplash.com/photo-1546567850-8a49d669d37a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"
              alt="person1"
              className="rounded-circle"
            />
            <div class="card-body">This is some text within a card body.</div>
          </div>
        </div>
      </div>
    </>
  );
}
