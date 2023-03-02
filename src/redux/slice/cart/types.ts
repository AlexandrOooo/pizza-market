export type CartItemProps = {
    id: number;
    imageUrl: string;
    title: string;
    price: number;
    type: string;
    size: number;
    count: number;
};

export interface CartSliceState {
    totalPrice: number;
    items: CartItemProps[];
}
