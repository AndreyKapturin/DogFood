import React from "react";
import "./style.css"
import { Route, Routes } from "react-router-dom";
import ProductPage from "../pages/ProductPage";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import CatalogPage from "../pages/CatalogPage";
import FavoritePage from "../pages/FavoritePage";

const Main = () => {
    return <main className="main">
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favorite" element={<FavoritePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/*" element={<NotFoundPage />} />
        </Routes>
    </main>
}

export default Main;