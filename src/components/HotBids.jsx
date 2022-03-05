import React from "react";
import heart from "../assets/images/heart.svg";
import heartFill from "../assets/images/heart-filled.svg";

const data = [
  {
    name: "Abstract Smoke Red Blue",
    price: 1.25,
    likes: 92,
    liked: true,
    image_url:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Mountain Landscape",
    price: 0.2,
    likes: 25,
    liked: false,
    image_url:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    name: "Paint Color on Wall",
    price: 0.55,
    likes: 55,
    liked: true,
    image_url:
      "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1010&q=80",
  },
  {
    name: "Abstract Patern",
    price: 0.87,
    likes: 82,
    liked: true,
    image_url:
      "https://images.unsplash.com/photo-1549490349-8643362247b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  },
  {
    name: "White Line Grafiti",
    price: 0.09,
    likes: 22,
    liked: false,
    image_url:
      "https://www.concrete-online.co.uk/wp-content/uploads/2020/11/content-pixie-woMD-vhzOHI-unsplash-scaled.jpg",
  },
  {
    name: "Abstract Triangle",
    price: 0.9,
    likes: 71,
    liked: true,
    image_url:
      "https://images.unsplash.com/photo-1524169358666-79f22534bc6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    name: "Lake Landscape",
    price: 0.52,
    likes: 63,
    liked: true,
    image_url:
      "https://images.unsplash.com/photo-1413752362258-7af2a667b590?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80",
  },
  {
    name: "Blue Red Art",
    price: 0.85,
    likes: 66,
    liked: true,
    image_url:
      "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  },
];

export default function HotBids() {
  return (
    <div className="container">
      <div className="row">
        {data &&
          data.map((list, index) => {
            return (
              <div key={`${list}-${index}`} className="col-6 col-md-3 mb-4">
                <div className="card shadow rounded-2">
                  <img
                    src={list.image_url}
                    className="img-fluid rounded-2 mx-md-3 ht-25 mx-2 mt-md-3 mt-2"
                    alt={list.name}
                  />
                  <div className="card-body">
                    <p
                      className="card-text fw-bold text-dark"
                      style={{
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                      }}
                    >
                      {list.name}
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="card-text m-0 text-dark">
                        <span className="fw-bold"> {list.price}</span>&nbsp;ETH
                      </p>
                      <div>
                        <img
                          src={list.liked === true ? heartFill : heart}
                          className="img-fluid"
                          width="18"
                          height="auto"
                          alt={list.name}
                        />
                        <span className="text-dark">&nbsp;{list.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
