import React from "react";
import "./style.css"
import Like from "../images/Like";

const Card = ({ product }) => {
    const { name, pictures, price, wight, discount, isFavorite } = product;
    return (
        <div className="card">
            {!!discount && <span className="card__discount">{discount} %</span>}
            {!isFavorite && <Like />}
            <img className="card__img" src={pictures} alt={name}></img>
            {!!discount ? <span className="card__old-price">{price} ₽</span> : <span className="card__old-price"></span>}
            {!!discount ? <span className="card__price red">{price - (price * discount) / 100} ₽</span> : <span className="card__price black">{price - (price * discount) / 100} ₽</span>}
            <span className="card__wight">{wight}</span>
            <span className="card__name">{name}</span>
            <button className="card__btn">В корзину</button>
        </div>
    )
}

export default Card;