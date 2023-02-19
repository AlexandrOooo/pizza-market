import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export type PizzaSliceType = {
    id: number;
    imageUrl: string;
    title: string;
    types: number[];
    sizes: number[];
    price: number;
    category: number;
    rating: number;
};

type fetchPizza = {
    categoryId: number;
    currentPage: number;
    searchValue: string;
    sortParam: string;
};

interface PizzaSliceState {
    items: PizzaSliceType[];
    status: "loading" | "success" | "error";
}

const initialState: PizzaSliceState = {
    items: [],
    status: "loading",
};

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

const pizzaSlice = createSlice({
    name: "pizza",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = "success";
        });
        builder.addCase(fetchPizzas.rejected, (state) => {
            state.items = [];
            state.status = "error";
        });
        builder.addCase(fetchPizzas.pending, (state) => {
            state.items = [];
            state.status = "loading";
        });
    },
});

export default pizzaSlice.reducer;
