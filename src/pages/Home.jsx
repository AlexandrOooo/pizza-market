import React, { useState, useEffect } from "react";
import Categories from "../component/Categories/Categories";
import Pagination from "../component/Pagination";
import PizzaList from "../component/Pizza/PizzaList";
import Sort from "../component/Sort/Sort";
import { useSelector } from "react-redux";
import axios from "axios";

function Home({ searchValue }) {
    const { categoryId, sort } = useSelector((state) => state.filter);
    const sortValue = sort.propertyValue;
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get(
                "http://localhost:3001/items?" +
                    `${categoryId > 0 ? `category=${categoryId}` : ""}` +
                    `&_sort=${sortValue}&_order=desc` +
                    `&q=${searchValue}&_page=${currentPage}&_limit=4`
            )
            .then((res) => {
                setItems(res.data);
                setIsLoading(false);
            });
        window.scrollTo(0, 0);
    }, [categoryId, sortValue, searchValue, currentPage]);
    return (
        <div className="container">
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <PizzaList isLoading={isLoading} pizza={items} />
            <Pagination onChangePage={setCurrentPage} />
        </div>
    );
}

export default Home;
