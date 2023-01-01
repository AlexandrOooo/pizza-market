import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./component/Header/Header";
import Categories from "./component/Categories/Categories";
import Sort from "./component/Sort/Sort";
import PIzzaList from "./component/Pizza/PIzzaList";

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((res) => res.json())
      .then((res) => setItems(res));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <PIzzaList pizza={items} />
        </div>
      </div>
    </div>
  );
}

export default App;
