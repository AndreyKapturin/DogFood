import React from "react";
import "./style.css"
import CardList from "../pages/CardList";
import { Route, Routes } from "react-router-dom";
import ProductPage from "../pages/ProductPage";

const Main = ({cards}) => {
    return <main className="main">
        <Routes>
            <Route path="/catalog" element={<CardList cards={cards}/>}/>
            <Route path="/product/:id" element={<ProductPage />}/>
        </Routes>
    </main>
}

export default Main;