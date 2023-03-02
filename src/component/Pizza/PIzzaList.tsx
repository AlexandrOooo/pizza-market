import PizzaItem from "./PizzaItem";
import Skeleton from "./Skeleton";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

function PizzaList() {
    const { status, items } = useSelector((state: RootState) => state.pizza);

    return (
        <div className="content__items">
            {status === "loading"
                ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
                : items.map((item, i) => <PizzaItem key={i} {...item} />)}
        </div>
    );
}

export default PizzaList;
