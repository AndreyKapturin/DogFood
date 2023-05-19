import React, { useContext, useEffect, useState } from 'react';
import './style.scss';
import Product from '../../Product';
import { useParams } from 'react-router-dom';
import { api } from '../../../api/api';
import { filterMyFavProduct } from '../../../utilities/utilities';
import { AppContext } from '../../../context/AppContext';
import BackBtn from '../../BackBtn';

const ProductPage = () => {
    const { setProducts, user, products, setMyFavProduct } = useContext(AppContext);
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        Promise.all([api.getProductsByID(id), api.getReviewsByID(id)])
            .then(([productData, reviewsData]) => {
                setProduct(productData);
                setReviews(reviewsData);
            })
            .catch((error) =>
                console.error('Ошибка при запросе данных о продукте и отзывах', error)
            );
    }, [id]);

    const changeLikeOnProductPage = (productID, wasLiked) => {
        api.swithLike(productID, wasLiked)
            .then((res) => {
                setProduct(res);
                const newProducts = products.map((product) =>
                    product._id === productID ? res : product
                );
                setProducts([...newProducts]);
                setMyFavProduct(filterMyFavProduct(newProducts, user._id));
            })
            .catch((error) => console.error('Ошибка при смене лайка в продукте', error));
    };

    const sendReview = (id, data) => {
        api.addProductReviewByID(id, data)
            .then((res) => setReviews(res.reviews))
            .catch((error) => console.error('Ошибка при отправке отзыва', error));
    };

    const deleteReview = (productId, reviewId) => {
        api.deleteProductReviewByID(productId, reviewId)
            .then((res) => setReviews(res.reviews))
            .catch((error) => console.error('Ошибка при удалении отзыва', error));
    };

    return (
        <div className='productPage'>
            <BackBtn />
            <Product
                product={product}
                changeLikeOnProductPage={changeLikeOnProductPage}
                user={user}
                reviews={reviews}
                sendReview={sendReview}
                deleteReview={deleteReview}
            />
        </div>
    );
};

export default ProductPage;
