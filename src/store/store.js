import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import productsSlice from './slices/productsSlice';
import productSlice from './slices/productSlice';
import reviewsSlice from './slices/reviewsSlice';
import notificationsSlice from './slices/notificationSlice';
import cartSlice from './slices/cartSlice';

const store = configureStore({
    reducer: {
        user: userSlice,
        products: productsSlice,
        product: productSlice,
        reviews: reviewsSlice,
        notification: notificationsSlice,
        cart: cartSlice,
    },
});

export default store;