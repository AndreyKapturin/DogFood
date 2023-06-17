import React from 'react';
import './style.scss';
import Like from '../images/Like';
import { Award } from 'react-bootstrap-icons';
import { getEnding, getPriceWithDiscount, getRating } from '../../utilities/utilities';
import Rating from '../Rating';
import { useDispatch, useSelector } from 'react-redux';
import { changeLikeOnProductPage } from '../../store/slices/productSlice';
import Button from '../Button';
import PlaceholderDelivery from '../PlaceholderDelivery';
import Counter from '../Counter';
import { addProductInCart } from '../../store/slices/cartSlice';
import Price from '../Price';

const Product = ({ product }) => {
    const dispatch = useDispatch();
    const { user } = useSelector((s) => s.user);
    const { reviews } = useSelector((s) => s.reviews);
    const { productsInCart } = useSelector((s) => s.cart);
    const { name, discount, price, description, pictures, likes, _id, stock } = product;

    const currentProductInCart = productsInCart.find((e) => {
        return e.product._id === _id;
    });
    console.log(currentProductInCart);
    const handleCart = () => {
        dispatch(addProductInCart(product));
    };

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
                        <Price
                            discount={discount}
                            price={getPriceWithDiscount(product)}
                            oldPrice={price}
                        />
                        {!!stock ? (
                            <div className='product-action-buttons'>
                                {currentProductInCart ? (
                                    <Counter product={product} count={currentProductInCart.count} />
                                ) : (
                                    <Button className={'base-btn primary fit'} onClick={handleCart}>
                                        В корзину
                                    </Button>
                                )}
                            </div>
                        ) : (
                            <span>Товара нет в наличии</span>
                        )}
                        <span>{`В наличии: ${stock}`}</span>
                        <div
                            onClick={() => dispatch(changeLikeOnProductPage([_id, isLiked]))}
                            className='product-favorite'
                        >
                            <Like fill={isLiked ? 'red' : 'none'} />{' '}
                            {isLiked ? 'В избранном' : 'В избранное'}
                        </div>
                        <PlaceholderDelivery />
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
