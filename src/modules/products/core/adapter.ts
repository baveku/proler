import { createEntityAdapter } from '@reduxjs/toolkit';
import { Product } from './type';

export const productAdapter = createEntityAdapter<Product>({
    selectId: (product) => product.id,
    sortComparer: (lhs, rhs) => lhs.title.localeCompare(rhs.title),
});
