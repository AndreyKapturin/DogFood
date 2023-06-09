import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../api/api';
import { addViewedProduct, updateProducts } from './productsSlice';
import { isLoading } from '../../utilities/utilities';
import { addNotification } from './notificationSlice';

const initialState = {
    product: {},
    loading: false,
};

export const getOneProduct = createAsyncThunk(
    'product/getOneProduct',
    async (id, { dispatch, rejectWithValue, fulfillWithValue }) => {
        try {
            const product = await api.getProductsByID(id);
            dispatch(addViewedProduct(product));
            return fulfillWithValue(product);
        } catch (error) {
            dispatch(addNotification({ type: 'error', message: error }));
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
            dispatch(addNotification({ type: 'error', message: error }));
            return rejectWithValue(error);
        }
    }
);

const productSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getOneProduct.fulfilled, (state, { payload }) => {
            state.product = payload;
            state.loading = false;
        });

        builder.addCase(changeLikeOnProductPage.fulfilled, (state, { payload }) => {
            state.product = payload.product;
        });

        builder.addMatcher(
            (action) => isLoading(action, 'product/'),
            (state, { type }) => {
                state.loading = true;
            }
        );
    },
});

export default productSlice.reducer;
