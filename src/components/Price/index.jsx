import React from 'react';
import './style.scss';

const Price = ({ discount, price, oldPrice }) => {
    return (
        <div className='price'>
            {discount ? (
                <>
                    <span className='price__withoutDiscount'>
                        {oldPrice?.toLocaleString('ru-RU')} ₽
                    </span>
                    <span className='price__current red'>{price?.toLocaleString('ru-RU')} ₽</span>
                </>
            ) : (
                <span className='price__current black'>{oldPrice?.toLocaleString('ru-RU')} ₽</span>
            )}
        </div>
    );
};

export default Price;
