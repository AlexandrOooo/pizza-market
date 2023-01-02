import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./component/Header/Header";
import Categories from "./component/Categories/Categories";
import Sort from "./component/Sort/Sort";
import PizzaList from "./component/Pizza/PizzaList";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3001/items")
      .then((res) => res.json())
      .then((res) => {
        setItems(res);
        setIsLoading(false);
      });
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
          <PizzaList isLoading={isLoading} pizza={items} />
        </div>
      </div>
    </div>
  );
}

export default App;
