import React from 'react';
import './style.scss';
import Like from '../../images/Like';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeLike } from '../../store/slices/productsSlice';
import Button from '../Button';
import { addProductInCart } from '../../store/slices/cartSlice';
import Counter from '../Counter';
import Price from '../Price';
import { getPriceWithDiscount } from '../../utilities/utilities';

const Card = ({ product }) => {
    const dispatch = useDispatch();
    const { user } = useSelector((s) => s.user);
    const { productsInCart } = useSelector((s) => s.cart);
    const { name, pictures, price, wight, discount, likes, _id, stock } = product;
    const isLiked = likes.includes(user._id);

    const handleCart = () => {
        dispatch(addProductInCart(product));
    };

    const currentProductInCart = productsInCart.find((e) => {
        return e.product._id === _id;
    });

    return (
        <div className='card'>
            {!!discount && <span className='card__discount'>{discount} %</span>}
            <span onClick={() => dispatch(changeLike([_id, isLiked]))}>
                <Like className='card__like' fill={isLiked ? 'red' : 'none'} />
            </span>
            <Link to={`/product/${_id}`} className='card__link'>
                <img className='card__img' src={pictures} alt={name}></img>
                <Price discount={discount} price={getPriceWithDiscount(product)} oldPrice={price} />
                <span className='card__wight'>{wight}</span>
                <span className='card__wight'>{`В наличии: ${stock}`}</span>
                <span className='card__name'>{name}</span>
            </Link>
            {stock ? (
                <div className='card__button-wrapper'>
                    {currentProductInCart ? (
                        <Counter
                            product={product}
                            count={currentProductInCart ? currentProductInCart.count : 0}
                        />
                    ) : (
                        <Button className={'base-btn primary fit'} onClick={handleCart}>
                            В корзину
                        </Button>
                    )}
                </div>
            ) : (
                <span>Товара нет в наличии</span>
            )}
        </div>
    );
};

export default Card;
