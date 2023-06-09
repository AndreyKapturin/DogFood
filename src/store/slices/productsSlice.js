import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from './../../api/api';
import { filterMyFavProduct, getRating, isLoading, mapProducts } from '../../utilities/utilities';
import { addNotification } from './notificationSlice';
import { updateCart } from './cartSlice';

const initialState = {
    products: [],
    myFavProducts: [],
    searchQuery: null,
    loading: true,
    viewedProducts: [],
};

export const getAllProducts = createAsyncThunk(
    'products/getAllProducts',
    async (data, { getState, dispatch, rejectWithValue, fulfillWithValue }) => {
        const { user } = getState();
        try {
            const { products } = await api.getProducts();
            dispatch(updateCart(products));
            return fulfillWithValue({ products, user });
        } catch (error) {
            dispatch(addNotification({ type: 'error', message: error }));
            return rejectWithValue(error);
        }
    }
);

export const searсhProducts = createAsyncThunk(
    'products/searсhProducts',
    async (search, { dispatch, rejectWithValue, fulfillWithValue }) => {
        try {
            const products = await api.searchProducts(search);
            return fulfillWithValue(products);
        } catch (error) {
            dispatch(addNotification({ type: 'error', message: error }));
            return rejectWithValue(error);
        }
    }
);

export const changeLike = createAsyncThunk(
    'products/changeLike',
    async (data, { getState, rejectWithValue, fulfillWithValue, dispatch }) => {
        const { user } = getState();
        try {
            const product = await api.swithLike(...data);
            return fulfillWithValue({ product, user });
        } catch (error) {
            dispatch(addNotification({ type: 'error', message: error }));
            return rejectWithValue(error);
        }
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        searchProductsQuery(state, { payload }) {
            state.searchQuery = payload;
        },
        sortProduct(state, { payload }) {
            switch (payload) {
                case 'popular':
                    state.products = state.products.sort((a, b) => b.likes.length - a.likes.length);
                    break;
                case 'new':
                    state.products = state.products.sort(
                        (a, b) => new Date(b.created_at) - new Date(a.created_at)
                    );
                    break;
                case 'cheap':
                    state.products = state.products.sort(
                        (a, b) =>
                            a.price -
                            (a.price * a.discount) / 100 -
                            (b.price - (b.price * b.discount) / 100)
                    );
                    break;
                case 'costly':
                    state.products = state.products.sort(
                        (a, b) =>
                            b.price -
                            (b.price * b.discount) / 100 -
                            (a.price - (a.price * a.discount) / 100)
                    );
                    break;
                case 'topRate':
                    state.products = state.products.sort(
                        (a, b) => getRating(b.reviews) - getRating(a.reviews)
                    );
                    break;
                case 'reviews':
                    state.products = state.products.sort(
                        (a, b) => b.reviews.length - a.reviews.length
                    );
                    break;
                case 'sale':
                    state.products = state.products.sort((a, b) => b.discount - a.discount);
                    break;
                default:
                    return state.products;
            }
        },
        updateProducts(state, { payload }) {
            state.products = mapProducts(state.products, payload.product);
            state.viewedProducts = mapProducts(state.viewedProducts, payload.product);
            state.myFavProducts = filterMyFavProduct(state.products, payload.user.user._id);
        },
        addViewedProduct(state, { payload }) {
            if (state.viewedProducts.find((el) => el._id === payload._id)) {
                return;
            }
            if (state.viewedProducts.length >= 8) {
                state.viewedProducts.shift();
                state.viewedProducts.push(payload);
            } else {
                state.viewedProducts.push(payload);
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.fulfilled, (state, { payload }) => {
            state.products = payload.products;
            state.myFavProducts = filterMyFavProduct(payload.products, payload.user.user._id);
            state.loading = false;
        });

        builder.addCase(searсhProducts.fulfilled, (state, { payload }) => {
            state.products = payload;
            state.loading = false;
        });

        builder.addCase(changeLike.fulfilled, (state, { payload }) => {
            state.products = mapProducts(state.products, payload.product);
            state.viewedProducts = mapProducts(state.viewedProducts, payload.product);
            state.myFavProducts = filterMyFavProduct(state.products, payload.user.user._id);
            state.loading = false;
        });

        builder.addMatcher(
            (action) => isLoading(action, 'products/'),
            (state) => {
                state.loading = true;
            }
        );
    },
});
export const { sortProduct, searchProductsQuery, filterProduct, updateProducts, addViewedProduct } =
    productsSlice.actions;
export default productsSlice.reducer;
