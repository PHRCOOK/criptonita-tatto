import React from "react";
import Home from "../src/components/home/home.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import Footer from "./components/footer/footer.jsx";
import "./index.scss";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
