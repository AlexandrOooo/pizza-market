import { CartItemProps } from "../redux/slice/cart/types";

export const calcTotalPrice = (items: CartItemProps[]) => {
    return items.reduce((acc, item) => item.count * item.price + acc, 0);
};
