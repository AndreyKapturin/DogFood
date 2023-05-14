import React, { useContext } from 'react';
import './style.scss';
import Like from '../images/Like';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

const Card = ({ product }) => {
    const { user, changeLike } = useContext(AppContext);
    const { name, pictures, price, wight, discount, likes, _id } = product;
    const isLiked = likes.includes(user._id);
    return (
        <div className='card'>
            {!!discount && <span className='card__discount'>{discount} %</span>}
            <span onClick={() => changeLike(_id, isLiked)}>
                <Like className='card__like' fill={isLiked ? 'red' : 'none'} />
            </span>
            <Link to={`/product/${_id}`} className='card__link'>
                <img className='card__img' src={pictures} alt={name}></img>
                {!!discount ? (
                    <span className='card__old-price'>{price} ₽</span>
                ) : (
                    <span className='card__old-price'></span>
                )}
                {!!discount ? (
                    <span className='card__price red'>{price - (price * discount) / 100} ₽</span>
                ) : (
                    <span className='card__price black'>{price - (price * discount) / 100} ₽</span>
                )}
                <span className='card__wight'>{wight}</span>
                <span className='card__name'>{name}</span>
            </Link>
            <button className='card__btn'>В корзину</button>
        </div>
    );
};

export default Card;
