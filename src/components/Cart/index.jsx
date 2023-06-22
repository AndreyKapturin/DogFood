import React from 'react';
import './style.scss';
import Button from './../Button';
import Card from './../Card';
import product from './data.json';
import PlaceholderDelivery from '../PlaceholderDelivery';
import CardListInCart from '../CardListInCart';
import { getTotalPrice, getTotalPriceWithDiscount } from '../../utilities/utilities';
import { useDispatch } from 'react-redux';
import { sendOrder } from '../../store/slices/cartSlice';
import { addNotification } from '../../store/slices/notificationSlice';

const Cart = ({ productsInCart }) => {
    const dispatch = useDispatch();
    const totalCount = productsInCart.reduce((acc, el) => acc + el.count, 0);
    const totalPrice = getTotalPrice(productsInCart).toLocaleString('ru-RU');
    const totalDiscount = (
        getTotalPrice(productsInCart) - getTotalPriceWithDiscount(productsInCart)
    ).toLocaleString('ru-RU');
    const totalPriceWithDiscount =
        getTotalPriceWithDiscount(productsInCart).toLocaleString('ru-RU');
    const buy = () => {
        dispatch(sendOrder());
        dispatch(addNotification({ type: 'success', message: 'Заказ отправлен' }));
    };
    return (
        <div className='cart'>
            <div className='cart__productList'>
                <CardListInCart productsInCart={productsInCart} />
            </div>
            <div className='cart__form'>
                <div className='cart__order'>
                    <h2>Ваша корзина</h2>
                    <div className='cart__amountOrder'>
                        <span className='cart__order-text grey'>{`Товары (${totalCount})`}</span>
                        <span className='cart__order-cost bold'>{`${totalPrice} ₽`}</span>
                    </div>
                    <div className='cart__amountOrder'>
                        <span className='cart__order-text grey'>Скидка</span>
                        <span className='cart__order-cost red bold'>{`${totalDiscount} ₽`}</span>
                    </div>
                    <hr />
                    <div className='cart__amountOrder'>
                        <span className='cart__order-text bold'>Общая стоимость</span>
                        <span className='cart__order-cost bold'>{`${totalPriceWithDiscount} ₽`}</span>
                    </div>
                    <Button className={'base-btn primary large'} onClick={buy}>
                        Оформить заказ
                    </Button>
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
