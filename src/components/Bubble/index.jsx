import React from 'react';
import './style.scss';

const Bubble = ({ products }) => {
    return <span className='bubble'>{products.length}</span>;
};

export default Bubble;
