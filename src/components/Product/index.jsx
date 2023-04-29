import React from "react";
import "./style.css"
import Like from "../images/Like";

const Product = ({ product }) => {
    const { name, discount, price, description, pictures } = product;
    return (
        <div>
            <span>Назад</span>
            <h1>{name}</h1>
            <div className="rating-wrapper">
                <span>articul</span>
                <span>rating</span>
                <span>review</span>
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
                            <Like />
                            <span>В избранное</span>
                        </div>
                        <div className="placeholrer-delivery">
                            <span>icon</span>
                            <div className="placeholrer-delivery__text">
                                <h3>Доставка по всему Миру!</h3>
                                <p>Доставка курьером — <b>от 399 ₽</b></p>
                                <p>Доставка в пункт выдачи — <b>от 199 ₽</b></p>
                            </div>
                        </div>
                        <div className="placeholrer-guarantee">
                            <span>icon</span>
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