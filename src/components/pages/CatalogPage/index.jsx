import React, { useContext } from "react";
import "./style.css"
import CardList from "../../CardList";
import SearchResult from "../../SearchResult";
import NotFound from "../../NotFound";
import Sorting from "../../Sorting";
import { getRate } from "../../../utilities/utilities";
import { AppContext } from "../../../context/AppContext";
const CatalogPage = () => {
    const { search, products, setProducts } = useContext(AppContext)
    const sort = (cards, filter) => {
        if (filter === "popular") {
            const filtered = cards.sort((a, b) => (b.likes.length - a.likes.length))
            return setProducts([...filtered])
        }
        if (filter === "new") {
            const filtered = cards.sort((a, b) => (new Date(b.created_at) - new Date(a.created_at)))
            return setProducts([...filtered])
        }
        if (filter === "cheap") {
            const filtered = cards.sort((a, b) => (a.price - (a.price * a.discount / 100)) - (b.price - (b.price * b.discount / 100)))
            return setProducts([...filtered])
        }
        if (filter === "costly") {
            const filtered = cards.sort((a, b) => (b.price - (b.price * b.discount / 100)) - (a.price - (a.price * a.discount / 100)))
            return setProducts([...filtered])
        }
        if (filter === "topRate") {
            const filtered = cards.sort((a, b) => (getRate(b) - getRate(a)))
            return setProducts([...filtered])
        }
        if (filter === "reviews") {
            const filtered = cards.sort((a, b) => (b.reviews.length - a.reviews.length))
            return setProducts([...filtered])
        }
        if (filter === "sale") {
            const filtered = cards.sort((a, b) => (b.discount - a.discount))
            return setProducts([...filtered])
        }
    }

    return (
        <>
            {search && <SearchResult />}
            {products.length === 0 && <NotFound text="Простите, по вашему запросу товаров не найдено" buttonText="На главную" buttonPath="/" />}
            {products.length && <Sorting sort={sort} />}
            <CardList cards={products} className={"catalogPageCardList"} />
        </>
    )
}

export default CatalogPage;