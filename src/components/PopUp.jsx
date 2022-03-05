import {ArrowLeft} from '../../../assets/images/arrow-left.svg';

export function PopUp(props) {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <img src={ArrowLeft} alt=""/>
            <img
              src={"https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
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
