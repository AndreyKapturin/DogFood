import React from "react";
import "./style.css"
import Card from "../../Card";
import SearchResult from "../../SearchResult";
import SearchNotFound from "../../SearchNotFound";

const CardList = ({ cards, search }) => {
    return (
        <>
            {search && <SearchResult search={search} cards={cards} />}
            {cards.length === 0 && <SearchNotFound />}
            <div className="main__card-list">
                {cards.map((card, i) => <Card key={`${card._id}${i}`} product={{ ...card }} />)}
            </div>
        </>
    )
}

export default CardList;