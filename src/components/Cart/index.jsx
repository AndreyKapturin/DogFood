import React from 'react';
import './style.scss';
import Button from './../Button';
import Card from './../Card';
import product from './data.json';
import PlaceholderDelivery from '../PlaceholderDelivery';
import CardListInCart from '../CardListInCart';
import { useSelector } from 'react-redux';

const Cart = ({ productsInCart }) => {
    const { orderPrice, orderPriceWithDiscount } = useSelector((s) => s.cart);
    return (
        <div className='cart'>
            <div className='cart__productList'>
                <CardListInCart productsInCart={productsInCart} />
            </div>
            <div className='cart__form'>
                <div className='cart__order'>
                    <h2>Ваша корзина</h2>
                    <div className='cart__amountOrder'>
                        <span className='cart__order-text grey'>{`Товары (${productsInCart.reduce(
                            (acc, el) => acc + el.count,
                            0
                        )})`}</span>
                        <span className='cart__order-cost bold'>{`${orderPrice.toLocaleString(
                            'ru-RU'
                        )} ₽`}</span>
                    </div>
                    <div className='cart__amountOrder'>
                        <span className='cart__order-text grey'>Скидка</span>
                        <span className='cart__order-cost red bold'>{`${(
                            orderPrice - orderPriceWithDiscount
                        ).toLocaleString('ru-RU')} ₽`}</span>
                    </div>
                    <hr />
                    <div className='cart__amountOrder'>
                        <span className='cart__order-text bold'>Общая стоимость</span>
                        <span className='cart__order-cost bold'>{`${orderPriceWithDiscount.toLocaleString(
                            'ru-RU'
                        )} ₽`}</span>
                    </div>
                    <Button className={'base-btn primary large'}>Оформить заказ</Button>
                </div>
                <PlaceholderDelivery />
            </div>
            <div className='slider'>
                <Card product={product} />
                <Card product={product} />
                <Card product={product} />
            </div>
        </div>
    );
};

export default Cart;
