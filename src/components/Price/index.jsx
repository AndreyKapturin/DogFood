import React from 'react';
import './style.scss';

const Price = ({ cartItem }) => {
    const { product, totalProductPrice, totalProductPriceWithDiscount } = cartItem;
    return (
        <div className='price'>
            {!!product.discount && (
                <span className='price__withoutDiscount'>{totalProductPrice} ₽</span>
            )}
            {!!product.discount ? (
                <span className='price__current red'>{totalProductPriceWithDiscount} ₽</span>
            ) : (
                <span className='price__current black'>{totalProductPrice} ₽</span>
            )}
        </div>
    );
};

export default Price;
