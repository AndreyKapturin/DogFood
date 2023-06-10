import React from 'react';
import './style.scss';
import Like from '../images/Like';
import { Truck, Award } from 'react-bootstrap-icons';
import { getEnding, getRating } from '../../utilities/utilities';
import Rating from '../Rating';
import { useDispatch, useSelector } from 'react-redux';
import { changeLikeOnProductPage } from '../../store/slices/productSlice';
import Button from '../Button';

const Product = ({ product }) => {
    const dispatch = useDispatch();
    const { user } = useSelector((s) => s.user);
    const { reviews } = useSelector((s) => s.reviews);
    const { name, discount, price, description, pictures, likes, _id } = product;
    let isLiked = likes ? likes.includes(user._id) : false;
    return (
        <div className='product'>
            <h1 className='product__name'>{name}</h1>
            <div className='rating-wrapper'>
                <span>Артикул: </span>
                <span className='product___rating'>
                    <Rating filling={getRating(reviews)} isEditable={false} />
                </span>
                <span>
                    {!!reviews
                        ? `${reviews.length} отзыв${getEnding(reviews.length)}`
                        : 'Ещё нет отзывов'}
                </span>
            </div>
            <div className='info-wrapper'>
                <div className='product-wrapper'>
                    <div className='product__img-wrapper'>
                        <img className='product__img' src={pictures} alt={name} />
                    </div>
                    <div className='product-action-wrapper'>
                        {!!discount ? (
                            <span className='product__old-price'>{price} ₽</span>
                        ) : (
                            <span className='product__old-price'></span>
                        )}
                        {!!discount ? (
                            <span className='product__price red'>
                                {price - (price * discount) / 100} ₽
                            </span>
                        ) : (
                            <span className='product__price black'>
                                {price - (price * discount) / 100} ₽
                            </span>
                        )}
                        <div className='product-action-buttons'>
                            <div className='product__quantity-counter'>
                                <button className='quantity-counter-btn'>-</button>
                                <span>0</span>
                                <button className='quantity-counter-btn'>+</button>
                            </div>
                            <Button className={'base-btn primary fit'}>В корзину</Button>
                        </div>
                        <div
                            onClick={() => dispatch(changeLikeOnProductPage([_id, isLiked]))}
                            className='product-favorite'
                        >
                            <Like fill={isLiked ? 'red' : 'none'} />{' '}
                            {isLiked ? 'В избранном' : 'В избранное'}
                        </div>
                        <div className='placeholrer-delivery'>
                            <Truck width='24' height='24' />
                            <div className='placeholrer-delivery__text'>
                                <h3>Доставка по всему Миру!</h3>
                                <p>
                                    Доставка курьером — <b>от 399 ₽</b>
                                </p>
                                <p>
                                    Доставка в пункт выдачи — <b>от 199 ₽</b>
                                </p>
                            </div>
                        </div>
                        <div className='placeholrer-guarantee'>
                            <Award width='24' height='24' />
                            <div className='placeholrer-guarantee__text'>
                                <h3>Гарантия качества</h3>
                                <p>
                                    Если Вам не понравилось качество нашей продукции, мы вернем
                                    деньги, либо сделаем все возможное, чтобы удовлетворить ваши
                                    нужды.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='description-wrapper'>
                    <h2>Описание</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Product;
