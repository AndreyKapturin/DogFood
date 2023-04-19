import React from "react";
import "./style.css"
import Card from "../Card";

const CardList = ({cards}) => {
    return (
        <div className="main__card-list">
            {cards.map(card => <Card key={card.name} product={{...card}}/>)}
        </div>
    )
}

export default CardList;