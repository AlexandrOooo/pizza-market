import React, { useState } from "react";

function Categories() {
  const [activePizza, setACtivePizza] = useState(0);

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const selectPizza = (index) => {
    setACtivePizza(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            onClick={() => selectPizza(index)}
            key={index}
            className={activePizza === index ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
