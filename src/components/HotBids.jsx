import React from "react";
import { ReactComponent as Heart } from "../assets/images/heart.svg";
import { ReactComponent as HeartFill } from "../assets/images/heart-filled.svg";
import data from "../nftdata.json";
import { Link } from "react-router-dom";

export default function HotBids(props) {
  return (
    <div className="container">
      <div className="row">
        {data &&
          data.map((list, index) => {
            return (
              <div key={`${list}-${index}`} className="col-6 col-md-3 mb-4">
                <Link to={`/item/${index + 1}`}>
                  <div
                    className="card shadow rounded-2"
                    style={{ backgroundColor: props.theme.card }}
                  >
                    <img
                      src={list.image_url}
                      className="img-fluid rounded-2 mx-md-3 ht-25 mx-2 mt-md-3 mt-2"
                      alt={list.name}
                    />
                    <div className="card-body">
                      <h6
                        className="card-text fw-bold"
                        style={{
                          color: props.theme.text,
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                        }}
                      >
                        {list.name}
                      </h6>
                      <div className="d-flex align-items-center justify-content-between">
                        <p
                          className="card-text m-0"
                          style={{ color: props.theme.text, fontSize: "14px" }}
                        >
                          <span className="fw-bold"> {list.price}</span>
                          &nbsp;ETH
                        </p>
                        <div>
                          {list.liked === true ? (
                            <HeartFill
                              style={{ fill: `${props.theme.text} !important` }}
                            />
                          ) : (
                            <Heart
                              style={{
                                fill: `${props.theme.text} !important`,
                              }}
                            />
                          )}
                          <span
                            style={{
                              color: props.theme.text,
                              fontSize: "14px",
                            }}
                          >
                            &nbsp;{list.likes}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
