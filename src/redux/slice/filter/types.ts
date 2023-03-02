export type SortType = {
    name: string;
    sortProperty: string;
};

export interface FilterSliceState {
    categoryId: number;
    currentPage: number;
    sort: SortType;
    searchValue: string;
}
