import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../api/api';
import { updateProducts } from './productsSlice';

const initialState = {
    product: {},
};

export const getOneProduct = createAsyncThunk(
    'product/getOneProduct',
    async (id, { rejectWithValue, fulfillWithValue }) => {
        try {
            const product = await api.getProductsByID(id);
            return fulfillWithValue(product);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const changeLikeOnProductPage = createAsyncThunk(
    'product/changeLikeOnProductPage',
    async (data, { getState, dispatch, rejectWithValue, fulfillWithValue }) => {
        const { user } = getState();
        try {
            const product = await api.swithLike(...data);
            dispatch(updateProducts({ product, user }));
            return fulfillWithValue({ user, product });
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

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
