import React from "react";
import "./style.css"
import { getEnding } from "../../utilities/utilities";

const SearchResult = ({search, cards}) => {
    return (
        <h1 className="searchResult">По запросу <span className="red">{search}</span> найдено {cards.length} товар{getEnding(cards.length)}</h1>
    )
}

export default SearchResult;