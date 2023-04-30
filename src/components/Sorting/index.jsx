import React from "react";
import "./style.css"

const Sorting = ({cards, sort}) => {
    return (
        <div className="sorting">
            <span className="sorting__point" onClick={() => sort(cards, "popular")}>Популярные</span>
            <span className="sorting__point" onClick={() => sort(cards, "new")}>Новинки</span>
            <span className="sorting__point" onClick={() => sort(cards, "cheap")}>Сначала дешёвые</span>
            <span className="sorting__point" onClick={() => sort(cards, "costly")}>Сначала дорогие</span>
            <span className="sorting__point" onClick={() => sort(cards, "topRate")}>По рейтингу</span>
            <span className="sorting__point" onClick={() => sort(cards, "reviews")}>По количеству отзывов</span>
            <span className="sorting__point" onClick={() => sort(cards, "sale")}>По скидке</span>
        </div>
    )
}

export default Sorting;