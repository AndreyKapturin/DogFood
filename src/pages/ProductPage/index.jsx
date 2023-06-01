import React, { useContext, useEffect, useState } from 'react';
import './style.scss';
import Product from '../../components/Product';
import { useParams } from 'react-router-dom';
import { api } from '../../api/api';
import { filterMyFavProduct } from '../../utilities/utilities';
import { AppContext } from '../../context/AppContext';
import BackBtn from '../../components/BackBtn';
import Reviews from '../../components/Reviews';
import { useSelector } from 'react-redux';

const ProductPage = () => {
    const {user} = useSelector(s => s.user);
    const { setProducts, products, setMyFavProduct } = useContext(AppContext);
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        Promise.all([api.getProductsByID(id), api.getReviewsByID(id)])
            .then(([productData, reviewsData]) => {
                setProduct(productData);
                setReviews(reviewsData.reverse());
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
            .then((res) => setReviews(res.reviews.reverse()))
            .catch((error) => console.error('Ошибка при отправке отзыва', error));
    };

    const deleteReview = (productId, reviewId) => {
        api.deleteProductReviewByID(productId, reviewId)
            .then((res) => setReviews(res.reviews.reverse()))
            .catch((error) => console.error('Ошибка при удалении отзыва', error));
    };

    return (
        <div className='productPage'>
            <BackBtn />
            <Product
                product={product}
                changeLikeOnProductPage={changeLikeOnProductPage}
                reviews={reviews}
                sendReview={sendReview}
                deleteReview={deleteReview}
            />
            <Reviews
                reviews={reviews}
                sendReview={sendReview}
                productID={id}
                deleteReview={deleteReview}
            />
        </div>
    );
};

export default ProductPage;
