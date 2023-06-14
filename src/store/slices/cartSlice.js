import { createSlice } from '@reduxjs/toolkit';
import { getProductDiscount, getProductPrice } from '../../utilities/utilities';

const initialState = {
    productsInCart: [],
    orderPrice: 0,
    orderPriceWithDiscount: 0,
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
                    thisProductInCart.totalProductPrice += payload.price;
                    thisProductInCart.totalProductDiscount += getProductDiscount(payload);
                    thisProductInCart.totalProductPriceWithDiscount += getProductPrice(payload);
                    state.orderPrice += payload.price;
                    state.orderPriceWithDiscount += getProductPrice(payload);
                }
            } else if (payload.stock) {
                state.productsInCart.push({
                    product: payload,
                    count: 1,
                    totalProductPrice: payload.price,
                    totalProductDiscount: getProductDiscount(payload),
                    totalProductPriceWithDiscount: getProductPrice(payload),
                });
                state.orderPrice += payload.price;
                state.orderPriceWithDiscount += getProductPrice(payload);
            }
            localStorage.setItem('DoogFoodCart_AK', JSON.stringify(state));
        },
        removeProductFromCart(state, { payload }) {
            const thisProductInCart = state.productsInCart.find((e) => {
                return e.product._id === payload._id;
            });
            if (!!thisProductInCart) {
                const notZero = thisProductInCart.count - 1 > 0;
                if (notZero) {
                    thisProductInCart.count -= 1;
                    thisProductInCart.totalProductPrice -= payload.price;
                    thisProductInCart.totalProductDiscount -= getProductDiscount(payload);
                    thisProductInCart.totalProductPriceWithDiscount -= getProductPrice(payload);
                    state.orderPrice -= payload.price;
                    state.orderPriceWithDiscount -= getProductPrice(payload);
                } else {
                    state.productsInCart = state.productsInCart.filter((e) => {
                        return e.product._id !== payload._id;
                    });
                    state.orderPrice -= payload.price;
                    state.orderPriceWithDiscount -= getProductPrice(payload);
                }
            }
            localStorage.setItem('DoogFoodCart_AK', JSON.stringify(state));
        },
        deleteProductFromCart(state, { payload }) {
            state.productsInCart = state.productsInCart.filter((e) => {
                return e.product._id !== payload.product._id;
            });
            state.orderPrice -= payload.totalProductPrice;
            state.orderPriceWithDiscount -= payload.totalProductPriceWithDiscount;
            localStorage.setItem('DoogFoodCart_AK', JSON.stringify(state));
        },
        updateState(state) {
            const cardFromLocalStorage = JSON.parse(localStorage.getItem('DoogFoodCart_AK'));
            if (cardFromLocalStorage) {
                state.productsInCart = cardFromLocalStorage.productsInCart;
                state.orderPrice = cardFromLocalStorage.orderPrice;
                state.orderPriceWithDiscount = cardFromLocalStorage.orderPriceWithDiscount;
            }
        },
    },
});

export const { addProductInCart, removeProductFromCart, deleteProductFromCart, updateState } =
    cartSlice.actions;
export default cartSlice.reducer;
