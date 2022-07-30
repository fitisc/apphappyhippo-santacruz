import { productsTypes } from "../types/products.types";

const { SELECT_PRODUCT, FILTERED_PRODUCTS } = productsTypes;

export const selectProduct = (id) => ({
    type: SELECT_PRODUCT,
    categoryId: id,
});

export const filteredProducts = (id) => ({
    type: FILTERED_PRODUCTS,
    categoryId: id,
});