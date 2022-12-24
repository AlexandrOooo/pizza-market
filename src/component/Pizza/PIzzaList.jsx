import React from "react";
import PizzaItem from "./PizzaItem";

function PIzzaList({ pizza }) {
  return (
    <div className="content__items">
      {pizza.map((item) => (
        <PizzaItem {...item} />
      ))}
    </div>
  );
}

export default PIzzaList;
