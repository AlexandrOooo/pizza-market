import React from "react";
import PizzaItem from "./PizzaItem";
import Skeleton from "./Skeleton";
import { useSelector } from "react-redux";

function PizzaList() {
    const { status, items } = useSelector((state) => state.pizza);

    return (
        <div className="content__items">
            {status === "loading"
                ? [...new Array(4)].map((_, index) => (
                      <Skeleton className="pizza-block" key={index} />
                  ))
                : items.map((item, i) => <PizzaItem key={i} {...item} />)}
        </div>
    );
}

export default PizzaList;
