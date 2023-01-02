import React from "react";
import PizzaItem from "./PizzaItem";
import Skeleton from "./Skeleton";

function PizzaList({ pizza, isLoading }) {
  return (
    <div className="content__items">
      {isLoading
        ? [...new Array(8)].map((_, index) => (
            <Skeleton className="pizza-block" key={index} />
          ))
        : pizza.map((item, i) => <PizzaItem key={i} {...item} />)}
    </div>
  );
}

export default PizzaList;
