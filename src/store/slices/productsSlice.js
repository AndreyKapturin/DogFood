import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from './../../api/api';
import { filterMyFavProduct } from '../../utilities/utilities';

const initialState = {
    productsStore: [],
    myFavProducts: [],
};

export const getAllProducts = createAsyncThunk(
    'products/getAllProducts',
    async (data, { getState }) => {
        const { user } = getState();
        const { products } = await api.getProducts();
        return { products, user };
    }
);

export const searсhProducts = createAsyncThunk('products/searсhProducts', async (search) => {
    const products = await api.searchProducts(search);
    return products;
});

export const changeLike = createAsyncThunk('products/changeLike', async (data, { getState }) => {
    const { user } = getState();
    const product = await api.swithLike(...data);
    return { product, user };
});

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        filterProduct(state, { payload }) {
            state.productsStore = payload;
        },
        updateProducts(state, { payload }) {
            state.productsStore = state.productsStore.map((product) =>
                product._id === payload.product._id ? payload.product : product
            );
            state.myFavProducts = filterMyFavProduct(state.productsStore, payload.user.user._id);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.fulfilled, (state, { payload }) => {
            state.productsStore = payload.products;
            state.myFavProducts = filterMyFavProduct(payload.products, payload.user.user._id);
        });

        builder.addCase(searсhProducts.fulfilled, (state, { payload }) => {
            state.productsStore = payload;
        });

        builder.addCase(changeLike.fulfilled, (state, { payload }) => {
            state.productsStore = state.productsStore.map((product) =>
                product._id === payload.product._id ? payload.product : product
            );
            state.myFavProducts = filterMyFavProduct(state.productsStore, payload.user.user._id);
        });
    },
});

export const { filterProduct, updateProducts } = productsSlice.actions;
export default productsSlice.reducer;
