import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCartFromLS } from "../../../utils/getCartFromLS";

import { CartItemProps, CartSliceState } from "./types";

const { totalPrice, items } = getCartFromLS();

const initialState: CartSliceState = {
    totalPrice,
    items,
};
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<CartItemProps>) {
            const findItem = state.items.find(
                (obj) => obj.id === action.payload.id
            );

            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({ ...action.payload, count: 1 });
            }

            state.totalPrice = state.items.reduce(
                (acc, item) => item.count * item.price + acc,
                0
            );
        },
        minusItem(state, action: PayloadAction<number>) {
            const countTemp = state.items.find(
                (item) => item.id === action.payload
            );

            if (countTemp && countTemp.count - 1 >= 0) {
                countTemp.count--;

                state.totalPrice = state.items.reduce(
                    (acc, item) => item.count * item.price + acc,
                    0
                );
            }
        },
        removeItem(state, action: PayloadAction<number>) {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );
            state.totalPrice = state.items.reduce(
                (acc, item) => item.count * item.price + acc,
                0
            );
        },
        clearCart(state) {
            state.items = [];
            state.totalPrice = 0;
        },
    },
});
export const { addItem, removeItem, clearCart, minusItem } = cartSlice.actions;
export default cartSlice.reducer;
