import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./component/Header/Header";
import Home from "./pages/Home";
import NotFounded from "./pages/NotFounded";
import Cart from "./pages/Cart";

function App() {
    const [searchValue, setSearchValue] = useState("");
    return (
        <div className="wrapper">
            <Header searchValue={searchValue} setSearchValue={setSearchValue} />
            <div className="content">
                <div className="container">
                    <Routes>
                        <Route
                            path="/"
                            element={<Home searchValue={searchValue} />}
                        />
                        <Route path="*" element={<NotFounded />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
