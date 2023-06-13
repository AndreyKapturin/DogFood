import React from 'react';
import './style.scss';

const Price = ({ discount, price }) => {
    return (
        <div className='price'>
            {!!discount && <span className='price__withoutDiscount'>{price} ₽</span>}
            {!!discount ? (
                <span className='price__current red'>{price - (price * discount) / 100} ₽</span>
            ) : (
                <span className='price__current black'>{price - (price * discount) / 100} ₽</span>
            )}
        </div>
    );
};

export default Price;
