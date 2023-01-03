import React, { useState } from "react";

function Categories({ value, onChangeCategories }) {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const selectPizza = (index) => {
    onChangeCategories(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            onClick={() => selectPizza(index)}
            key={index}
            className={value === index ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
