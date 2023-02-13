import React, { useEffect } from "react";
import Categories from "../component/Categories/Categories";
import Pagination from "../component/Pagination";
import PizzaList from "../component/Pizza/PIzzaList";
import Sort from "../component/Sort/Sort";
import { useSelector, useDispatch } from "react-redux";
import { fetchPizzas } from "../redux/slice/pizzaSlice";
import HomeEmpty from "../component/HomeEmpty";

function Home() {
    const dispatch = useDispatch();
    const { categoryId, sort, currentPage, searchValue } = useSelector(
        (state) => state.filter
    );
    const { status } = useSelector((state) => state.pizza);
    useEffect(() => {
        const sortParam = sort.sortProperty;

        dispatch(
            fetchPizzas({ categoryId, sortParam, searchValue, currentPage })
        );
        window.scrollTo(0, 0);
    }, [categoryId, sort.sortProperty, searchValue, currentPage]);

    return (
        <div className="container">
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            {status === "error" ? (
                <HomeEmpty />
            ) : (
                <>
                    <h2 className="content__title">Все пиццы</h2>
                    <PizzaList />
                    <Pagination />
                </>
            )}
        </div>
    );
}

export default Home;
