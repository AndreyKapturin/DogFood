import React from 'react';
import './style.scss';
import ProductInCart from '../ProductInCart';

const CardListInCart = ({ cards }) => {
    return (
        <>
            <div className='cardListInCart'>
                {cards.map((product, i) => (
                    <ProductInCart key={`${product._id}${i}`} product={product} />
                ))}
            </div>
        </>
    );
};

export default CardListInCart;
