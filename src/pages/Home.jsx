import React, { useState, useEffect } from "react";
import Categories from "../component/Categories/Categories";
import PizzaList from "../component/Pizza/PizzaList";
import Sort from "../component/Sort/Sort";

function Home() {
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
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <PizzaList isLoading={isLoading} pizza={items} />
    </>
  );
}

export default Home;
