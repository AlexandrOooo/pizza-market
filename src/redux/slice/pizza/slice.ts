import { createSlice } from "@reduxjs/toolkit";
import { fetchPizzas } from "./asyncThunk";
import { PizzaSliceState } from "./types";

const initialState: PizzaSliceState = {
    items: [],
    status: "loading",
};

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
