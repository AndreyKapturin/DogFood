import React, { useContext } from "react";
import "./style.css"
import { AppContext } from "../../context/AppContext";

const Sorting = ({ sort }) => {
    const { products } = useContext(AppContext)
    return (
        <div className="sorting">
            <span className="sorting__point" onClick={() => sort(products, "popular")}>Популярные</span>
            <span className="sorting__point" onClick={() => sort(products, "new")}>Новинки</span>
            <span className="sorting__point" onClick={() => sort(products, "cheap")}>Сначала дешёвые</span>
            <span className="sorting__point" onClick={() => sort(products, "costly")}>Сначала дорогие</span>
            <span className="sorting__point" onClick={() => sort(products, "topRate")}>По рейтингу</span>
            <span className="sorting__point" onClick={() => sort(products, "reviews")}>По количеству отзывов</span>
            <span className="sorting__point" onClick={() => sort(products, "sale")}>По скидке</span>
        </div>
    )
}

export default Sorting;