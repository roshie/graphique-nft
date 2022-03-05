import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children , theme}) {
  return (
    <>
      <NavBar theme={theme}/>
      <div className="container-fluid">{children}</div>
      <Footer theme={theme}/>
    </>
  );
}
