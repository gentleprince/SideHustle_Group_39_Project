import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  // Footer,
  // Home,
  // About,
  // Contact
  Products
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      {/* <Route path="/about" element={<About />} /> */}
      <Route path="/products" element={<Products />} />
      {/* <Route path="/contact" element={<Contact />}></Route> */}
    </Routes>
    {/* <Footer /> */}
  </Router>,

  document.getElementById("root")
);
