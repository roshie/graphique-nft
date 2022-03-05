import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div className="container-fluid">{children}</div>
      <Footer />
    </>
  );
}
