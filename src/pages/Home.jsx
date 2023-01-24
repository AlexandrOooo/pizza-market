import React, { useState, useEffect } from "react";
import Categories from "../component/Categories/Categories";
import Pagination from "../component/Pagination";
import PizzaList from "../component/Pizza/PizzaList";
import Sort from "../component/Sort/Sort";

function Home({ searchValue }) {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [categoriesSort, setCategoriesSort] = useState(0);
    const [selectedSort, setSelectedSort] = useState({
        name: "популярности",
        propertyValue: "rating",
    });
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setIsLoading(true);
        fetch(
            "http://localhost:3001/items?" +
                `${categoriesSort > 0 ? `category=${categoriesSort}` : ""}` +
                `&_sort=${selectedSort.propertyValue}&_order=desc` +
                `&q=${searchValue}&_page=${currentPage}&_limit=4`
        )
            .then((res) => res.json())
            .then((res) => {
                setItems(res);
                setIsLoading(false);
            });
        window.scrollTo(0, 0);
    }, [categoriesSort, selectedSort, searchValue, currentPage]);
    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    value={categoriesSort}
                    onChangeCategories={(id) => setCategoriesSort(id)}
                />
                <Sort
                    value={selectedSort}
                    onChangeSort={(id) => setSelectedSort(id)}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <PizzaList isLoading={isLoading} pizza={items} />
            <Pagination onChangePage={setCurrentPage} />
        </div>
    );
}

export default Home;
