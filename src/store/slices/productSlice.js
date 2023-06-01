import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../api/api';
import { updateProducts } from './productsSlice';

const initialState = {
    product: {},
};

export const getOneProduct = createAsyncThunk('product/getOneProduct', async (id) => {
    const product = await api.getProductsByID(id);
    return product;
});

export const changeLikeOnProductPage = createAsyncThunk('product/changeLikeOnProductPage', async (data, {getState, dispatch}) => {
    const {user} = getState();
    const product = await api.swithLike(...data);
    dispatch(updateProducts({product, user}))
    return {user, product}
})

const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getOneProduct.fulfilled, (state, { payload }) => {
            state.product = payload;
        });
        
        builder.addCase(changeLikeOnProductPage.fulfilled, (state, { payload }) => {
            state.product = payload.product;
        });
    },
});

export default productSlice.reducer;