import React from 'react';
import './style.scss';

const Counter = () => {
    return (
        <div className='counter'>
            <button className='counter__button'>-</button>
            <span>0</span>
            <button className='counter__button'>+</button>
        </div>
    );
};

export default Counter;
