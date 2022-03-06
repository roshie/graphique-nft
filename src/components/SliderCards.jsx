import React from "react";
import Carousel from "react-elastic-carousel";
import { TiTick } from "react-icons/ti";
import person2 from "../assets/images/bulbul.png";
import lady from "../assets/images/lady.png";
import Rian from "../assets/images/Rian.png";
import mia from "../assets/images/mia.png";
import budiman from "../assets/images/budiman.png";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

const data = [
  {
    name: "Mia Ayana",
    price: 5.25,
    image_url: mia,
  },
  {
    name: "Rian Leon",
    price: 4.932,
    image_url: Rian,
  },
  {
    name: "Lady Young",
    price: 4.62,
    image_url: lady,
  },
  {
    name: "Black Glass",
    price: 4.125,
    image_url: person2,
  },
  {
    name: "Budhiman",
    price: 3.921,
    image_url: budiman,
  },
];

const breakPoints = [
  { width: 1, itemsToShow: 2 },
  { width: 550, itemsToShow: 3 },
  { width: 961, itemsToShow: 3 },
  { width: 768, itemsToShow: 4 },
  { width: 1000, itemsToShow: 5 },
];

export default function SliderCards(theme) {
  return (
    <>
      <div className="container">
        <Carousel
          pagination={false}
          nextIcon={
            <BsArrowRightCircle
              className="symbol"
              style={{ color: theme.theme.text }}
              size="1rem"
            />
          }
          breakPoints={breakPoints}
          itemsToScroll={1}
          prevIcon={
            <BsArrowLeftCircle
              className="symbol"
              style={{ color: theme.theme.text }}
              size="1rem"
            />
          }
          itemsToShow={5}
        >
          {data &&
            data.map((list, index) => {
              return (
                <div
                  key={`${index}-${list.name}`}
                  style={{
                    backgroundColor: theme.theme.card,
                    width: "12rem",
                    height: "12rem",
                    borderRadius: "1rem",
                  }}
                  className="d-flex justify-content-center align-items-center card col-xs-2 col-md-4 mx-2"
                >
                  <div className="numberCircle p1-bold">{index + 1}</div>
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
                    <h5 className="p1-bold" style={{ color: theme.theme.text }}>
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
          {data &&
            data.map((list, index) => {
              return (
                <div
                  key={`${index}-${list.name}`}
                  style={{
                    backgroundColor: theme.theme.card,
                    width: "12rem",
                    height: "12rem",
                    borderRadius: "1rem",
                  }}
                  className="d-flex justify-content-center align-items-center card col-xs-2 col-md-4 mx-2"
                >
                  <div className="numberCircle p1-bold">{index + 1}</div>
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
                    <h5 className="p1-bold" style={{ color: theme.theme.text }}>
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
        </Carousel>
      </div>
    </>
  );
}
