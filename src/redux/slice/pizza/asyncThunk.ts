import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchPizza, PizzaSliceType } from "./types";

export const fetchPizzas = createAsyncThunk<PizzaSliceType[], fetchPizza>(
    "pizza/fetchPizzas",
    async ({ categoryId, currentPage, searchValue, sortParam }) => {
        const { data } = await axios.get(
            "http://localhost:3001/items?" +
                `${categoryId > 0 ? `category=${categoryId}` : ""}` +
                `&_sort=${sortParam}&_order=desc` +
                `&q=${searchValue}&_page=${currentPage}&_limit=4`
        );
        return data;
    }
);
