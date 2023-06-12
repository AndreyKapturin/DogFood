import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import productsSlice from './slices/productsSlice';
import productSlice from './slices/productSlice';
import reviewsSlice from './slices/reviewsSlice';
import notificationsSlice from './slices/notificationSlice';

const store = configureStore({
    reducer: {
        user: userSlice,
        products: productsSlice,
        product: productSlice,
        reviews: reviewsSlice,
        notification: notificationsSlice,
    },
});

export default store;