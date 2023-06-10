import React, { useEffect } from 'react';
import './style.scss';
import Product from '../../components/Product';
import { useParams } from 'react-router-dom';
import BackBtn from '../../components/BackBtn';
import Reviews from '../../components/Reviews';
import { useDispatch, useSelector } from 'react-redux';
import { getOneProduct } from '../../store/slices/productSlice';
import { getProductReviews } from '../../store/slices/reviewsSlice';
import Loader from '../../components/Loader';

const ProductPage = () => {
    const dispatch = useDispatch();
    const { product, loading } = useSelector((s) => s.product);
    const { reviews } = useSelector((s) => s.reviews);
    const { id } = useParams();

    useEffect(() => {
        dispatch(getOneProduct(id));
        dispatch(getProductReviews(id));
    }, [id, dispatch]);

    return (
        <div className='productPage'>
            <BackBtn />
            {loading && reviews ? <Loader /> : <><Product product={product} />
            <Reviews productID={id} /></>}
        </div>
    );
};

export default ProductPage;
