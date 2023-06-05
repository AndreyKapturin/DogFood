import React, { useEffect } from 'react';
import './style.scss';
import Product from '../../components/Product';
import { useParams } from 'react-router-dom';
import BackBtn from '../../components/BackBtn';
import Reviews from '../../components/Reviews';
import { useDispatch, useSelector } from 'react-redux';
import { getOneProduct } from '../../store/slices/productSlice';
import { getProducrReviews } from '../../store/slices/reviewsSlice';

const ProductPage = () => {
    const dispatch = useDispatch();
    const { product } = useSelector((s) => s.product);
    const { id } = useParams();

    useEffect(() => {
        dispatch(getOneProduct(id));
        dispatch(getProducrReviews(id));
    }, [id, dispatch]);

    return (
        <div className='productPage'>
            <BackBtn />
            <Product product={product} />
            <Reviews productID={id} />
        </div>
    );
};

export default ProductPage;
