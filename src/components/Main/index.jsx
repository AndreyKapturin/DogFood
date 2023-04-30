import React from "react";
import "./style.css"
import CardList from "../pages/CardList";
import { Route, Routes } from "react-router-dom";
import ProductPage from "../pages/ProductPage";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";

const Main = ({ cards, search, setProducts }) => {
    return <main className="main">
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CardList cards={cards} search={search} setProducts={setProducts} />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/*" element={<NotFoundPage />} />
        </Routes>
    </main>
}

export default Main;