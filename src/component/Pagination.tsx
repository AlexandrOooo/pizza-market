import React from "react";
import ReactPaginate from "react-paginate";
import { setCurrentPage } from "../redux/slice/filterSlice";
import { useDispatch } from "react-redux";

const Pagination: React.FC = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <ReactPaginate
                className="pagination"
                breakLabel="..."
                nextLabel=">"
                onPageChange={(e) => dispatch(setCurrentPage(+e.selected + 1))}
                pageRangeDisplayed={5}
                pageCount={3}
                previousLabel="<"
            />
        </div>
    );
};

export default Pagination;
