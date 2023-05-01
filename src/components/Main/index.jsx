import React from "react";
import "./style.css"
import CardList from "../pages/CardList";
import { Route, Routes } from "react-router-dom";
import ProductPage from "../pages/ProductPage";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";

const Main = ({ cards, search, setProducts, user, changeLike }) => {
    return <main className="main">
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CardList cards={cards} search={search} setProducts={setProducts} user={user} changeLike={changeLike} />} />
            <Route path="/product/:id" element={<ProductPage setProducts={setProducts} user={user} products={cards} />} />
            <Route path="/*" element={<NotFoundPage />} />
        </Routes>
    </main>
}

export default Main;