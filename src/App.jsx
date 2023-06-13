import React, { useEffect } from 'react';
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfoByToken, setAuth } from './store/slices/userSlice';
import { getAllProducts, searсhProducts } from './store/slices/productsSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import {NotificationList} from './components/NotificationList';
import { updateState } from './store/slices/cartSlice';

function App() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { searchQuery } = useSelector((s) => s.products);
    const { notifications } = useSelector((s) => s.notification);
    const { isAuth } = useSelector((s) => s.user);
    const location = useLocation();

    useEffect(() => {
        if (!!localStorage.getItem('DodFood_token_AK')) {
            dispatch(setAuth(true));
            dispatch(updateState());
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
        if (!isAuth) return;
        dispatch(getUserInfoByToken()).then(() => dispatch(getAllProducts()));
    }, [dispatch, isAuth]);

    useEffect(() => {
        if (!isAuth) return;
        if (!searchQuery) {
            dispatch(getAllProducts());
        } else {
            const timer = setTimeout(() => {
                dispatch(searсhProducts(searchQuery));
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [searchQuery, dispatch, isAuth]);

    return (
        <div className='app'>
            <Header />
            <Main />
            <Footer />
            {!!notifications.length && <NotificationList notifications={notifications} />}
        </div>
    );
}

export default App;
