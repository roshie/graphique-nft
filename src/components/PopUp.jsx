export function PopUp(props) {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <i className="fa fa-arrow-left"></i>
            <img
              src={"lucas-benjamin-wQLAGv4_OYs-unsplash.jpg"}
              className="card-img-top"
              alt=""
              style={{
                position: "static",
                width: "211px",
                height: "206px",
                left: "77px",
                top: "0px",
              }}
            />
          </div>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when.{" "}
        </p>
        <div className="social">
          <i className="fa fa-twitter"></i>
          <i className="fa fa-linkedin"></i>
          <i className="fa fa-whatsapp"></i>
        </div>
      </div>
    </>
  );
}
