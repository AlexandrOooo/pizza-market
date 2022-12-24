import "./App.css";
import React from "react";
import Header from "./component/Header/Header";
import Categories from "./component/Categories/Categories";
import Sort from "./component/Sort/Sort";
import PIzzaList from "./component/Pizza/PIzzaList";
import Pizzas from "./assets/pizzas.json";

function App() {
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
          <PIzzaList pizza={Pizzas} />
        </div>
      </div>
    </div>
  );
}

export default App;
