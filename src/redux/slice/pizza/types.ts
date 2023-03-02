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

export type fetchPizza = {
    categoryId: number;
    currentPage: number;
    searchValue: string;
    sortParam: string;
};

export interface PizzaSliceState {
    items: PizzaSliceType[];
    status: "loading" | "success" | "error";
}
