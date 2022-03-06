import React from "react";
import heart from "../assets/images/heart.svg";
import heartFill from "../assets/images/heart-filled.svg";
import data from "../nftdata.json";
import { Link } from "react-router-dom";

export default function HotBids(props) {
  return (
    <div className="container">
      <div className="row">
        {data &&
          data.map((list, index) => {
            return (
              <div
                key={`${list}-${index}`}
                className="col-6 col-md-3 p-1 p-md-2"
              >
                <Link
                  to={`/item/${index + 1}`}
                  className="text-decoration-none"
                >
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
                        className="card-text p2-bold"
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
                          className="card-text m-0 p3-regular"
                          style={{ color: props.theme.text }}
                        >
                          <span className="p3-bold"> {list.price}</span>
                          &nbsp;ETH
                        </p>
                        <div>
                          <img
                            src={list.liked === true ? heartFill : heart}
                            className="img-fluid"
                            width="16"
                            height="auto"
                            alt={list.name}
                          />
                          <span
                            className="p3-regular"
                            style={{
                              color: props.theme.text,
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
