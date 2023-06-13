import React from 'react';
import './style.scss';
import { Trash } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import Price from '../Price';
import Counter from '../Counter';
import { useDispatch } from 'react-redux';
import { deleteProductFromCart } from '../../store/slices/cartSlice';

const ProductInCart = ({ cartItem }) => {
    const dispatch = useDispatch();
    const { pictures, name, wight, _id } = cartItem.product;

    const handleDeleteCart = () => {
        dispatch(deleteProductFromCart(cartItem));
    };
    
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
                <Counter product={cartItem.product} count={cartItem.count} />
            </div>
            <div className='productInCart__container'>
                <Price cartItem={cartItem} />
            </div>
            <div className='productInCart__container'>
                <Trash className='productInCart__trash' onClick={handleDeleteCart} />
            </div>
        </div>
    );
};

export default ProductInCart;
