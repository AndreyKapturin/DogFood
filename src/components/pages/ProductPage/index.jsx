import React, { useContext, useEffect, useState } from 'react';
import './style.css';
import Product from '../../Product';
import { useParams } from 'react-router-dom';
import { api } from '../../../api/api';
import { filterMyFavProduct } from '../../../utilities/utilities';
import { AppContext } from '../../../context/AppContext';

const ProductPage = () => {
    const { setProducts, user, products, setMyFavProduct } = useContext(AppContext);
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        api.getProductsByID(id)
            .then((data) => setProduct(data))
            .catch((error) => console.error('Ошибка при запросе данных об одном продукте', error));
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
            />
        </div>
    );
};

export default ProductPage;
