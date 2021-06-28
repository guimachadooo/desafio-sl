import React from "react";
import gif from "../assets/img/loading.gif";

import Navbar from "./Navbar";
import Footer from "./Footer";

import "../pages/style.css";

export default function Loader(){

  return (
    <div className="container">

      <Navbar />

      <div style={{marginTop: "200px"}}>
        <span>
          <img src={gif} alt="loading" style={{width: "50px"}} />
        </span>
      </div>

      <div className="space" />

      <Footer />
    </div>
  )
}