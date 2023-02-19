import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../../redux/slice/filterSlice";
import { RootState } from "../../redux/store";
const Categories: React.FC = () => {
    const categories = [
        "Все",
        "Мясные",
        "Вегетарианская",
        "Гриль",
        "Острые",
        "Закрытые",
    ];
    const dispatch = useDispatch();
    const categoryId = useSelector(
        (state: RootState) => state.filter.categoryId
    );
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
};

export default Categories;
