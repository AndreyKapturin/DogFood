import React from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import { addProductInCart, removeProductFromCart } from '../../store/slices/cartSlice';

const Counter = ({ product, count }) => {
    const dispatch = useDispatch();
    const handleAddCart = () => {
        dispatch(addProductInCart(product));
    };
    const handleRemoveCart = () => {
        dispatch(removeProductFromCart(product));
    };
    return (
        <div className='counter'>
            <button className='counter__button' onClick={handleRemoveCart}>
                -
            </button>
            <span>{count}</span>
            <button className='counter__button' onClick={handleAddCart} disabled={count >= product.stock}>
                +
            </button>
        </div>
    );
};

export default Counter;
