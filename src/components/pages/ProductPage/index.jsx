import React, { useEffect, useState } from "react";
import "./style.css"
import Product from "../../Product";
import { useParams } from "react-router-dom";
import { api } from "../../../api/api";

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        api.getProductsByID(id).then(data => {
            setProduct(data);
        })
    }, [id])

    const getRate = (product) => {
        if (product.reviews) {
            const rate = product.reviews.reduce((avg, review, i, arr) => {
                if (i !== arr.length - 1) {
                    return avg += review.rating
                } else {
                    return (avg += review.rating) / arr.length
                }
            }, 0)
            return Math.floor(rate)
        }
    }
    return (
        <div className="productPage">
            <Product product={product} getRate={getRate} />
        </div>
    )
}

export default ProductPage;