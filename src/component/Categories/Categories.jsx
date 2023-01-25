import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../../redux/slice/filterSlice";
function Categories() {
    const categories = [
        "Все",
        "Мясные",
        "Вегетарианская",
        "Гриль",
        "Острые",
        "Закрытые",
    ];
    const dispatch = useDispatch();
    const categoryId = useSelector((state) => state.filter.categoryId);
    return (
        <div className="categories">
            <ul>
                {categories.map((category, index) => (
                    <li
                        onClick={() => dispatch(setCategoryId(index))}
                        key={index}
                        className={categoryId === index ? "active" : ""}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Categories;
