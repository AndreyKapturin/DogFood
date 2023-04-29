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
    console.log(product);
    return (
        <div className="productPage">
            <Product product={product} />
        </div>
    )
}

export default ProductPage;