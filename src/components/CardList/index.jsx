import React from 'react';
import './style.scss';
import Card from '../Card';

const CardList = ({ cards }) => {
    return (
        <>
            <div className='сard-list'>
                {cards.map((product, i) => (
                    <Card key={`${product._id}${i}`} product={product} />
                ))}
            </div>
        </>
    );
};

export default CardList;
