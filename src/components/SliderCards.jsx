import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { TiTick } from "react-icons/ti";

const data = [
  {
    name: "Mia Ayana",
    price: 5.25,
    image_url:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Rian Leon",
    price: 4.932,
    image_url:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Lady Young",
    price: 4.62,
    image_url:
      "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1010&q=80",
  },
  {
    name: "Black Glass",
    price: 4.125,
    image_url:
      "https://images.unsplash.com/photo-1549490349-8643362247b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  },
  {
    name: "Budhiman",
    price: 3.921,
    image_url:
      "https://www.concrete-online.co.uk/wp-content/uploads/2020/11/content-pixie-woMD-vhzOHI-unsplash-scaled.jpg",
  },
];

export default function SliderCards(theme) {
  return (
    <>
      <div className="container">
        <Carousel indicators={false}>
          <Carousel.Item>
            <div className="row">
              <div className="col-12">
                <div className="row">
                  {data &&
                    data.map((list, index) => {
                      return (
                        <div
                          className="d-flex justify-content-center align-items-center card col-xs-2 col-md-4 mx-2"
                          key={index}
                          style={{
                            backgroundColor: theme.theme.card,
                            width: "12rem",
                            height: "12rem",
                            borderRadius: "1rem",
                          }}
                        >
                          <div className="numberCircle p1-bold">
                            {index + 1}
                          </div>
                          <img
                            src={list.image_url}
                            alt="person1"
                            className="rounded-circle mt-4"
                            style={{ width: "5rem", height: "5rem" }}
                          />
                          <div className="status-circle">
                            <TiTick
                              className="symbol"
                              style={{ color: theme.theme.text }}
                              size="1rem"
                            />
                          </div>
                          <div className="card-body">
                            <h5
                              className="p1-bold"
                              style={{ color: theme.theme.text }}
                            >
                              {list.name}
                            </h5>
                            <p
                              className="text-center"
                              style={{ color: theme.theme.text }}
                            >
                              <span className="p1-bold">{list.price}</span>{" "}
                              <span className="p1-regular">ETH</span>
                            </p>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}
