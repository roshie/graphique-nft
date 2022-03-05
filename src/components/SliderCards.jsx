import React from "react";
import person1 from "../assets/images/slide1.png";

export default function SliderCards() {
  return (
    <>
      <div class="card">
        <img
          src="https://images.unsplash.com/photo-1546567850-8a49d669d37a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"
          alt="person1"
          className="rounded-circle"
        />
        <div class="card-body">This is some text within a card body.</div>
      </div>
    </>
  );
}
