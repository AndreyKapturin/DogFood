import React from 'react';
import './style.scss';
import BackBtn from '../../components/BackBtn';
import Cart from '../../components/Cart';

const CartPage = () => {
    return (
        <div className='cartPage'>
            <BackBtn />
            <div>компонент Количество товаров в корзине</div>
            <Cart />
        </div>
    );
};

export default CartPage;
