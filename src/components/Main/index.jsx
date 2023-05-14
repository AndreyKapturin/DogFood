import React from 'react';
import './style.scss';
import { Route, Routes } from 'react-router-dom';
import ProductPage from '../pages/ProductPage';
import NotFoundPage from '../pages/NotFoundPage';
import HomePage from '../pages/HomePage';
import CatalogPage from '../pages/CatalogPage';
import FavoritePage from '../pages/FavoritePage';
import Faq from '../pages/Faq';

const Main = () => {
    return (
        <main className='main'>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/favorite' element={<FavoritePage />} />
                <Route path='/catalog' element={<CatalogPage />} />
                <Route path='/product/:id' element={<ProductPage />} />
                <Route path='/*' element={<NotFoundPage />} />
                <Route path='/FAQ' element={<Faq />} />
            </Routes>
        </main>
    );
};

export default Main;
