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
import ResetPasswordForm from '../Forms/ResetPasswordForm';
import ProfilePage from '../../pages/ProfilePage';
import CartPage from '../../pages/CartPage';

const Main = () => {
    return (
        <main className='main'>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/favorite' element={<FavoritePage />} />
                <Route path='/catalog' element={<CatalogPage />} />
                <Route path='/profile' element={<ProfilePage />} />
                <Route path='/product/:id' element={<ProductPage />} />
                <Route path='/*' element={<NotFoundPage />} />
                <Route path='/FAQ' element={<Faq />} />
                <Route path='/cart' element={<CartPage />} />
                <Route
                    path='/login'
                    element={
                        <Modal>
                            <AuthorizationForm />
                        </Modal>
                    }
                />
                <Route
                    path='/registration'
                    element={
                        <Modal>
                            <RegistrationForm />
                        </Modal>
                    }
                />
                <Route
                    path='/forgot-password'
                    element={
                        <Modal>
                            <ForgotPasswordForm />
                        </Modal>
                    }
                />
                <Route
                    path='/password-reset'
                    element={
                        <Modal>
                            <ResetPasswordForm />
                        </Modal>
                    }
                />
            </Routes>
        </main>
    );
};

export default Main;
