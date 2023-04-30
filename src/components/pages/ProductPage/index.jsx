import React, { useEffect, useState } from "react";
import "./style.css"
import Product from "../../Product";
import { useParams } from "react-router-dom";
import { api } from "../../../api/api";

const ProductPage = ({ setProducts, user, products }) => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        api.getProductsByID(id).then(data => {
            setProduct(data);
        })
    }, [id])

    const changeLikeOnProductPage = (productID, wasLiked) => {
        api.swithLike(productID, wasLiked).then(res => {
            setProduct(res)
            const newProducts = products.map(product => product._id === productID ? res : product);
            setProducts([...newProducts])
        })
    }

    return (
        <div className="productPage">
            <Product product={product} changeLikeOnProductPage={changeLikeOnProductPage} user={user} />
        </div>
    )
}

export default ProductPage;