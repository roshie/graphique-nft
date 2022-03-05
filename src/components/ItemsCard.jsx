export function Items(props) {
  return (
    <>
      <div className="card on-hover-scale m-2 card-product">
        <div className="card-body text-center">
          <img
            src={"https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
            style={{
              width: "862.98px",
              height: "575px",
              top: "176px",
              left: "33.51px",
              position: "absolute",
            }}
            className="card-img-top mb-2 radius-20"
            alt="Thumbnail"
          />
        </div>
      </div>
    </>
  );
}
