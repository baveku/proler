import { createSlice } from '@reduxjs/toolkit';
import { productAdapter } from './adapter';

const productsSlice = createSlice({
    name: 'products',
    initialState: productAdapter.getInitialState(),
    reducers: {
        productAdded: productAdapter.addOne,
        productUpdate: productAdapter.updateOne,
    },
});

export { productsSlice };
