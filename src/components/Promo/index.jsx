import React from 'react';
import './style.scss';

const Promo = ({ title, description, image, size='large' }) => {
    return (
        <div className={`promo ${size}`}>
            <div className='promo__text-wrapper'>
                <h1 className={`promo__title ${size}`}>{title}</h1>
                <p className={`promo__subtitle ${size}`}>{description}</p>
            </div>
            <div className='promo__image-wrapper'>
                <img className='promo__image' src={image} alt='promo' />
            </div>
        </div>
    );
};

export default Promo;
