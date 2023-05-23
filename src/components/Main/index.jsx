import React from 'react';
import './style.scss';
import { Route, Routes } from 'react-router-dom';
import ProductPage from './../../pages/ProductPage';
import NotFoundPage from './../../pages/NotFoundPage';
import HomePage from './../../pages/HomePage';
import CatalogPage from './../../pages/CatalogPage';
import FavoritePage from './../../pages/FavoritePage';
import Faq from './../../pages/Faq';
import Modal from '../Modal';
import AuthorizationForm from '../Forms/AuthorizationForm';
import RegistrationForm from '../Forms/RegistrationForm';
import ForgotPasswordForm from '../Forms/ForgotPasswordForm';

const Main = ({ showModal, setShowModal }) => {
    return (
        <main className='main'>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/favorite' element={<FavoritePage />} />
                <Route path='/catalog' element={<CatalogPage />} />
                <Route path='/product/:id' element={<ProductPage />} />
                <Route path='/*' element={<NotFoundPage />} />
                <Route path='/FAQ' element={<Faq />} />
                <Route
                    path='/login'
                    element={
                        <Modal showModal={showModal} setShowModal={setShowModal}>
                            <AuthorizationForm />
                        </Modal>
                    }
                />
                <Route
                    path='/registration'
                    element={
                        <Modal showModal={showModal} setShowModal={setShowModal}>
                            <RegistrationForm />
                        </Modal>
                    }
                />
                <Route
                    path='/forgot-password'
                    element={
                        <Modal showModal={showModal} setShowModal={setShowModal}>
                            <ForgotPasswordForm />
                        </Modal>
                    }
                />
            </Routes>
        </main>
    );
};

export default Main;
