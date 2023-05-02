import React from "react";
import "./style.css"
import Card from "../Card";

const CardList = ({ cards, className }) => {
    return (
        <>
            <div className={className}>
                {cards.map((product, i) => <Card key={`${product._id}${i}`} product={product} />)}
            </div>
        </>
    )
}

export default CardList;