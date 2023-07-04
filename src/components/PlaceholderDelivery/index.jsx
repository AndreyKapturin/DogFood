import React from 'react';
import './style.scss';
import { Truck } from 'react-bootstrap-icons';

const PlaceholderDelivery = () => {
    return (
        <div className='placeholrer-delivery'>
            <Truck width='24' height='24' />
            <div>
                <h3>Доставка по всему Миру!</h3>
                <p>
                    Доставка курьером — <b>от 399 ₽</b>
                </p>
                <p>
                    Доставка в пункт выдачи — <b>от 199 ₽</b>
                </p>
            </div>
        </div>
    );
};

export default PlaceholderDelivery;
