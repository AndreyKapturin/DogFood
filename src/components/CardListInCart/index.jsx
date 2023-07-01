import React from 'react';
import './style.scss';
import ProductInCart from '../ProductInCart';

const CardListInCart = ({ productsInCart }) => {
    return (
        <>
            <div className='cardListInCart'>
                {productsInCart.map((cartItem, i) => (
                    <ProductInCart key={`${cartItem.product._id}${i}`} cartItem={cartItem} />
                ))}
            </div>
        </>
    );
};

export default CardListInCart;
