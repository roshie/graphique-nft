import React from "react";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div className="container-fluid">{children}</div>
    </>
  );
}
