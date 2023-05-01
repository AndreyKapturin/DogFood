import React from "react";
import "./style.css"
import { Route, Routes } from "react-router-dom";
import ProductPage from "../pages/ProductPage";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import CatalogPage from "../pages/CatalogPage";
import FavoritePage from "../pages/FavoritePage";

const Main = ({ cards, search, setProducts, user, changeLike, setMyFavProduct, myFavProduct }) => {
    return <main className="main">
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favorite" element={<FavoritePage myFavProduct={myFavProduct} setProducts={setProducts} user={user} changeLike={changeLike} />} />
            <Route path="/catalog" element={<CatalogPage cards={cards} search={search} setProducts={setProducts} user={user} changeLike={changeLike} />} />
            <Route path="/product/:id" element={<ProductPage setProducts={setProducts} user={user} products={cards} setMyFavProduct={setMyFavProduct} />} />
            <Route path="/*" element={<NotFoundPage />} />
        </Routes>
    </main>
}

export default Main;