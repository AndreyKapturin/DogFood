import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import productsSlice from './slices/productsSlice';
import productSlice from './slices/productSlice';
import reviewsSlice from './slices/reviewsSlice';

const store = configureStore({
    reducer: {
        user: userSlice,
        products: productsSlice,
        product: productSlice,
        reviews: reviewsSlice,
    },
});

export default store;