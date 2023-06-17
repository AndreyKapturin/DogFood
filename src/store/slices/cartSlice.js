import { createSlice } from '@reduxjs/toolkit';
import { getMatches } from '../../utilities/utilities';

const initialState = {
    productsInCart: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductInCart(state, { payload }) {
            const thisProductInCart = state.productsInCart.find((e) => {
                return e.product._id === payload._id;
            });
            if (!!thisProductInCart) {
                const offStock = thisProductInCart.count + 1 > payload.stock;
                if (!offStock) {
                    thisProductInCart.count += 1;
                }
            } else if (!!payload.stock) {
                state.productsInCart.push({
                    product: payload,
                    count: 1,
                });
            }
            localStorage.setItem('DoogFoodCart_AK', JSON.stringify(state.productsInCart));
        },
        removeProductFromCart(state, { payload }) {
            const thisProductInCart = state.productsInCart.find((e) => {
                return e.product._id === payload._id;
            });
            if (!!thisProductInCart) {
                const notZero = thisProductInCart.count - 1 > 0;
                if (notZero) {
                    thisProductInCart.count -= 1;
                } else {
                    state.productsInCart = state.productsInCart.filter((e) => {
                        return e.product._id !== payload._id;
                    });
                }
            }
            localStorage.setItem('DoogFoodCart_AK', JSON.stringify(state.productsInCart));
        },
        deleteProductFromCart(state, { payload }) {
            state.productsInCart = state.productsInCart.filter((e) => {
                return e.product._id !== payload.product._id;
            });
            localStorage.setItem('DoogFoodCart_AK', JSON.stringify(state.productsInCart));
        },
        updateCart(state, { payload }) {
            const cartFromLocalStorage = JSON.parse(localStorage.getItem('DoogFoodCart_AK'));
            if (cartFromLocalStorage && cartFromLocalStorage.length) {
                state.productsInCart = getMatches(payload, cartFromLocalStorage);
            }
        },
    },
});

export const { addProductInCart, removeProductFromCart, deleteProductFromCart, updateCart } =
    cartSlice.actions;
export default cartSlice.reducer;
