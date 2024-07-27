import React from "react";
import logo from "../../../public/image/logo.jpg";
import Navbar from "../navbar/index.jsx";
import Footer from "../footer/index.jsx";
import "./home.scss";

export default function Home() {
  return (
    <div>
      <Navbar />
      <img src={logo} alt="Criptonita Tattoo" className="logo2-image" />
      <Footer />
    </div>
  );
}
