import { useEffect } from "react";
import Categories from "../component/Categories/Categories";
import Pagination from "../component/Pagination";
import PizzaList from "../component/Pizza/PIzzaList";
import Sort from "../component/Sort/Sort";
import { useSelector } from "react-redux";
import { fetchPizzas } from "../redux/slice/pizzaSlice";
import HomeEmpty from "../component/HomeEmpty";
import { RootState } from "../redux/store";
import { useAppDispatch } from "../redux/store";

function Home() {
    const dispatch = useAppDispatch();
    const { categoryId, sort, currentPage, searchValue } = useSelector(
        (state: RootState) => state.filter
    );
    const { status } = useSelector((state: RootState) => state.pizza);
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
