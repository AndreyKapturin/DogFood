import React, { useEffect, useState } from 'react';
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { AppContext } from './context/AppContext';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfoByToken, setAuth } from './store/slices/userSlice';
import { getAllProducts, searсhProducts } from './store/slices/productsSlice';
import { useLocation, useNavigate } from 'react-router-dom';

function App() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { searchQuery } = useSelector((s) => s.products);
    const { isAuth } = useSelector((s) => s.user);
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (!!localStorage.getItem('token')) {
            dispatch(setAuth(true));
        } else {
            if (
                location.pathname.includes('/registration') ||
                location.pathname.includes('/login') ||
                location.pathname.includes('/forgot-password') ||
                location.pathname.includes('/password-reset')
            ) {
                return;
            } else {
                navigate('/login');
            }
        }
    }, [dispatch, isAuth, location, navigate]);

    useEffect(() => {
        if (isAuth) {
            dispatch(getUserInfoByToken()).then(() => dispatch(getAllProducts()));
        }
    }, [dispatch, isAuth]);

    useEffect(() => {
        if (isAuth) {
            if (!searchQuery) {
                dispatch(getAllProducts());
            } else {
                const timer = setTimeout(() => {
                    dispatch(searсhProducts(searchQuery));
                }, 500);
                return () => clearTimeout(timer);
            }
        }
    }, [searchQuery, dispatch, isAuth]);

    const Context = {
        showPassword,
        setShowPassword,
    };

    return (
        <div className='app'>
            <AppContext.Provider value={Context}>
                <Header />
                <Main />
                <Footer />
            </AppContext.Provider>
        </div>
    );
}

export default App;
