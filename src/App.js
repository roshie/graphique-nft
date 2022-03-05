import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Item from "./pages/Item";
import CreateItem from "./pages/CreateItem";
import "./assets/css/index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="/create-item" element={<CreateItem />} />
      </Routes>
    </BrowserRouter>
  );
}
