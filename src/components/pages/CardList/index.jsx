import React from "react";
import "./style.css"
import Card from "../Card";

const CardList = ({cards}) => {
    return (
        <div className="main__card-list">
            {cards.map((card, i) => <Card key={`${card._id}${i}`} product={{...card}}/>)}
        </div>
    )
}

export default CardList;