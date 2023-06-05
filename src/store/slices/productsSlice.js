import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from './../../api/api';
import { filterMyFavProduct, getRating, isError, isLoading, mapProducts } from '../../utilities/utilities';

const initialState = {
    products: [],
    myFavProducts: [],
    searchQuery: '',
    isLoading: false,
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
        searchProductsQuery(state, { payload }) {
            state.searchQuery = payload;
        },
        sortProduct(state, { payload }) {
            switch (payload) {
                case 'popular':
                    state.products = state.products.sort((a, b) => b.likes.length - a.likes.length);
                    break;
                case 'new':
                    state.products = state.products.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                    break;
                case 'cheap':
                    state.products = state.products.sort((a, b) => a.price - (a.price * a.discount) / 100 - (b.price - (b.price * b.discount) / 100))
                    break;
                case 'costly':
                    state.products = state.products.sort((a, b) => b.price - (b.price * b.discount) / 100 - (a.price - (a.price * a.discount) / 100));
                    break;
                case 'topRate':
                    state.products = state.products.sort((a, b) => getRating(b.reviews) - getRating(a.reviews));
                    break;
                case 'reviews':
                    state.products = state.products.sort((a, b) => b.reviews.length - a.reviews.length);
                    break;
                case 'sale':
                    state.products = state.products.sort((a, b) => b.discount - a.discount);
                    break;
                default:
                    return state.products
            }
        },
        updateProducts(state, { payload }) {
            state.products = mapProducts(state.products, payload.product)
            state.myFavProducts = filterMyFavProduct(state.products, payload.user.user._id);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.fulfilled, (state, { payload }) => {
            state.products = payload.products;
            state.myFavProducts = filterMyFavProduct(payload.products, payload.user.user._id);
            state.isLoading = false;
        });

        builder.addCase(searсhProducts.fulfilled, (state, { payload }) => {
            state.products = payload;
            state.isLoading = false;
        });

        builder.addCase(changeLike.fulfilled, (state, { payload }) => {
            state.products = mapProducts(state.products, payload.product);
            state.myFavProducts = filterMyFavProduct(state.products, payload.user.user._id);
            state.isLoading = false;
        });

        builder.addMatcher(isLoading, (state) => {
            state.isLoading = true;
        })
        
        builder.addMatcher(isError, (state, action) => {
            state.isError = action.payload;
            state.isLoading = false;
        })
    },
});

export const { sortProduct, searchProductsQuery, filterProduct, updateProducts } =
    productsSlice.actions;
export default productsSlice.reducer;
