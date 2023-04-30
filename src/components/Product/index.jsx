import React from "react";
import "./style.css"
import Like from "../images/Like";
import BackBtn from "../BackBtn";
import { Star, Truck, Award, StarFill } from "react-bootstrap-icons";
import { getEnding, getRate } from "../../utilities/utilities";


const Product = ({ product, changeLikeOnProductPage, user }) => {
    const { name, discount, price, description, pictures, reviews, likes, _id } = product;
    let rate = getRate(product);
    const stars = []
    for (let i = 0; i < 5; i++) {
        i < rate ? stars.push(<StarFill key={`${StarFill}` + i} fill="#FFE44D" stroke="#1A1A1A" />) : stars.push(<Star key={`${Star}` + i} />)
    }
    let isLiked = likes ? likes.includes(user._id) : false
    return (
        <div>
            <BackBtn />
            <h1 className="product__name">{name}</h1>
            <div className="rating-wrapper">
                <span>Артикул: </span>
                <span className="product___rating">{[...stars]}</span>
                <span>{!!reviews ? `${reviews.length} отзыв${getEnding(reviews.length)}` : "Ещё нет отзывов"}</span>
            </div>
            <div className="info-wrapper">
                <div className="pruduct-wrapper">
                    <img className="product__img" src={pictures} alt={name} />
                    <div className="pruduct-action-wrapper">
                        {!!discount ? <span className="product__old-price">{price} ₽</span> : <span className="product__old-price"></span>}
                        {!!discount ? <span className="product__price red">{price - (price * discount) / 100} ₽</span> : <span className="product__price black">{price - (price * discount) / 100} ₽</span>}
                        <div className="pruduct-action-buttons">
                            <div className="product__quantity-counter">
                                <button className="quantity-counter-btn">-</button>
                                <span>0</span>
                                <button className="quantity-counter-btn">+</button>
                            </div>
                            <button className="product__card-btn">В корзину</button>
                        </div>
                        <div className="product-favorite">
                            <span onClick={() => changeLikeOnProductPage(_id, isLiked)}><Like fill={isLiked ? "red" : "none"}/> В избранное</span>
                        </div>
                        <div className="placeholrer-delivery">
                            <Truck width="24" height="24" />
                            <div className="placeholrer-delivery__text">
                                <h3>Доставка по всему Миру!</h3>
                                <p>Доставка курьером — <b>от 399 ₽</b></p>
                                <p>Доставка в пункт выдачи — <b>от 199 ₽</b></p>
                            </div>
                        </div>
                        <div className="placeholrer-guarantee">
                            <Award width="24" height="24" />
                            <div className="placeholrer-guarantee__text">
                                <h3>Гарантия качества</h3>
                                <p>Если Вам не понравилось качество нашей продукции, мы вернем деньги, либо сделаем все возможное, чтобы удовлетворить ваши нужды.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="description-wrapper">
                    <h2>Описание</h2>
                    <p>{description}</p>
                </div>
                <div className="specifications-wrapper">
                    <h2>Характеристики</h2>
                    <div>тут будут характеристики</div>
                </div>
            </div>
        </div>
    )
}

export default Product;