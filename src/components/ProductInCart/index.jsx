import React from 'react';
import './style.scss';
import { Trash } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import Price from '../Price';
import Counter from '../Counter';
import { useDispatch } from 'react-redux';
import { deleteProductFromCart } from '../../store/slices/cartSlice';

const ProductInCart = ({ cartItem }) => {
    const dispatch = useDispatch();
    const { product, count, totalProductPrice, totalProductPriceWithDiscount } = cartItem;
    const handleDeleteCart = () => {
        dispatch(deleteProductFromCart(cartItem));
    };

    return (
        <div className='productInCart'>
            <div className='productInCart__image-wrapper'>
                <img className='productInCart__image' src={product.pictures} alt={product.name} />
            </div>
            <div className='productInCart__wrapper'>
                <div className='productInCart__info'>
                    <Link to={`/product/${product._id}`} className='productInCart__link'>
                        <h3>{product.name}</h3>
                        <span>{product.wight}</span>
                    </Link>
                </div>
                <div className='productInCart__container'>
                    <Counter product={product} count={count} />
                </div>
                <div className='productInCart__container'>
                    <Price
                        discount={product.discount}
                        price={totalProductPriceWithDiscount}
                        oldPrice={totalProductPrice}
                    />
                </div>
            </div>
            <div className='productInCart__container'>
                <Trash className='productInCart__trash' onClick={handleDeleteCart} />
            </div>
        </div>
    );
};

export default ProductInCart;
