import React from "react";
import "./style.css"
import { Route, Routes } from "react-router-dom";
import ProductPage from "../pages/ProductPage";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import CatalogPage from "../pages/CatalogPage";

const Main = ({ cards, search, setProducts, user, changeLike }) => {
    return <main className="main">
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage cards={cards} search={search} setProducts={setProducts} user={user} changeLike={changeLike} />} />
            <Route path="/product/:id" element={<ProductPage setProducts={setProducts} user={user} products={cards} />} />
            <Route path="/*" element={<NotFoundPage />} />
        </Routes>
    </main>
}

export default Main;