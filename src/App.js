import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./component/Header/Header";
import Home from "./pages/Home";
import NotFounded from "./pages/NotFounded";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFounded />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
