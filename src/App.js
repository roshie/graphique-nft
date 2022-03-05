import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Item from "./pages/Item";
import CreateItem from "./pages/CreateItem";
import "./assets/css/index.css";

export default function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home theme={props.themeProp} />} />
        <Route path="/profile" element={<Profile theme={props.themeProp} />} />
        <Route path="/item/:id" element={<Item theme={props.themeProp} />} />
        <Route
          path="/create-item"
          element={<CreateItem theme={props.themeProp} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
