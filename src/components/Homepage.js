import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";
import "../style/homepage.css";
export default function Homepage({ data }) {
  return (
    <div className="homepage">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}
