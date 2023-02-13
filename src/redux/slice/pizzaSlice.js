import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    status: "",
};

export const fetchPizzas = createAsyncThunk(
    "pizza/fetchPizzas",
    async ({ categoryId, currentPage, searchValue, sort }) => {
        const { data } = await axios.get(
            "http://localhost:3001/items?" +
                `${categoryId > 0 ? `category=${categoryId}` : ""}` +
                `&_sort=${sort}&_order=desc` +
                `&q=${searchValue}&_page=${currentPage}&_limit=4`
        );
        return data;
    }
);

const pizzaSlice = createSlice({
    name: "pizza",
    initialState,
    reducers: [],
    extraReducers: {
        [fetchPizzas.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = "success";
        },
        [fetchPizzas.rejected]: (state) => {
            state.items = [];
            state.status = "error";
        },
        [fetchPizzas.pending]: (state) => {
            state.items = [];
            state.status = "loading";
        },
    },
});

export default pizzaSlice.reducer;
