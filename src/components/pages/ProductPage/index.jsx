import React, { useContext, useEffect, useState } from 'react';
import './style.scss';
import Product from '../../Product';
import { useParams } from 'react-router-dom';
import { api } from '../../../api/api';
import { filterMyFavProduct } from '../../../utilities/utilities';
import { AppContext } from '../../../context/AppContext';

const ProductPage = () => {
    const { setProducts, user, products, setMyFavProduct } = useContext(AppContext);
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        Promise.all([api.getProductsByID(id), api.getReviewsByID(id)])
            .then(([productData, reviewsData]) => {
                setProduct(productData);
                console.log(productData);
                setReviews(reviewsData);
                console.log(reviewsData);
            })
            .catch((error) => console.error('Ошибка при запросе данных о продукте и отзывах', error));
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

    return (
        <div className='productPage'>
            <Product
                product={product}
                changeLikeOnProductPage={changeLikeOnProductPage}
                user={user}
                reviews={reviews}
            />
        </div>
    );
};

export default ProductPage;
