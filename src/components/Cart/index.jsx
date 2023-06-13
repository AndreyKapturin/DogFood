import React from 'react';
import './style.scss';
import Button from './../Button';
import Card from './../Card';
import product from './data.json';
import PlaceholderDelivery from '../PlaceholderDelivery';
import CardListInCart from '../CardListInCart';

const Cart = () => {
    const arrProd = [product, product]
    return (
        <div className='cart'>
            <div className='cart__productList'>
            <CardListInCart cards={arrProd} />
            </div>
            <div className='cart__form'>
                <div className='cart__order'>
                    <h2>Ваша корзина</h2>
                    <div className='cart__amountOrder'>
                        <span className='cart__order-text grey'>Товары 4</span>
                        <span className='cart__order-cost bold'>3 925 р</span>
                    </div>
                    <div className='cart__amountOrder'>
                        <span className='cart__order-text grey'>Скидка</span>
                        <span className='cart__order-cost red bold'> -960 р</span>
                    </div>
                    <hr />
                    <div className='cart__amountOrder'>
                        <span className='cart__order-text bold'>Общая стоимость</span>
                        <span className='cart__order-cost bold'> 3500</span>
                    </div>
                    <Button className={'base-btn primary large'}>Оформить заказ</Button>
                </div>
                <PlaceholderDelivery />
            </div>
            <div className='slider'>
                <Card product={product} />
                <Card product={product} />
                <Card product={product} />
                <Card product={product} />
            </div>
        </div>
    );
};

export default Cart;
