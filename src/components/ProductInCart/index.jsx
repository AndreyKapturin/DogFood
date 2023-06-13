import React from 'react';
import './style.scss';
import { Trash } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import Price from '../Price';
import Counter from '../Counter';

const ProductInCart = ({ product }) => {
    const { pictures, name, wight, discount, price, _id } = product;
    return (
        <div className='productInCart'>
            <div className='productInCart__image-wrapper'>
                <img className='productInCart__image' src={pictures} alt={name} />
            </div>
            <div className='productInCart__info'>
                <Link to={`/product/${_id}`} className='productInCart__link'>
                    <h3>{name}</h3>
                    <span>{wight}</span>
                </Link>
            </div>
            <div className='productInCart__container'>
                <Counter />
            </div>
            <div className='productInCart__container'>
                <Price discount={discount} price={price} />
            </div>
            <div className='productInCart__container'>
                <Trash className='productInCart__trash' />
            </div>
        </div>
    );
};

export default ProductInCart;
