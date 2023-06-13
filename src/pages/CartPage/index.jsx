import React from 'react';
import './style.scss';
import BackBtn from '../../components/BackBtn';
import Cart from '../../components/Cart';
import { useSelector } from 'react-redux';
import { getEnding } from '../../utilities/utilities';
import NotFound from '../../components/NotFound';

const CartPage = () => {
    const { productsInCart } = useSelector((s) => s.cart);
    return (
        <div className='cartPage'>
            <BackBtn />
            <div>
                <h1 className='searchResult'>
                    {`${productsInCart.reduce((acc, el) => acc + el.count, 0)} товар${getEnding(
                        productsInCart.reduce((acc, el) => acc + el.count, 0)
                    )} в корзине`}
                </h1>
            </div>
            {!!productsInCart.length ? (
                <Cart productsInCart={productsInCart} />
            ) : (
                <NotFound
                    text={'В корзине нет товаров'}
                    buttonText={'За покупками'}
                    buttonPath='/catalog'
                />
            )}
        </div>
    );
};

export default CartPage;
