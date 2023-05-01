import React from "react";
import "./style.css"

const Bubble = ({ products }) => {
    return (
        products.length && <span className="header__bubble" >{products.length}</span>
    )
}

export default Bubble;