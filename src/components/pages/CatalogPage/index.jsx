import React from "react";
import "./style.css"
import CardList from "../../CardList";
import SearchResult from "../../SearchResult";
import SearchNotFound from "../../SearchNotFound";
import Sorting from "../../Sorting";
import { getRate } from "../../../utilities/utilities";
const CatalogPage = ({ cards, search, setProducts, user, changeLike }) => {
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
            {search && <SearchResult search={search} cards={cards} />}
            {cards.length === 0 && <SearchNotFound />}
            {cards.length > 0 && <Sorting cards={cards} setProducts={setProducts} sort={sort} />}
            <CardList cards={cards} user={user} changeLike={changeLike} className={"catalogPageCardList"} />
        </>
    )
}

export default CatalogPage;