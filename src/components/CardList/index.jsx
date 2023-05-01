import React from "react";
import "./style.css"
import Card from "../Card";

const CardList = ({ cards, user, changeLike }) => {
    return (
        <>
            <div className="card-list">
                {cards.map((card, i) => <Card key={`${card._id}${i}`} product={{ ...card }} user={user} changeLike={changeLike} />)}
            </div>
        </>
    )
}

export default CardList;