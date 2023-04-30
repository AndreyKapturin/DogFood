import React from "react";
import "./style.css"
import { EmojiFrown } from "react-bootstrap-icons";

const SearchNotFound = () => {
    return (
        <div className="searhNotFound">
            <EmojiFrown width="100" height="100" />
            <h2>Простите, по вашему запросу
                товаров не надено</h2>
            <button className="searhNotFound__button">На главную</button>
        </div>
    )
}

export default SearchNotFound;