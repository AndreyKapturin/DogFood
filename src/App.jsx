import React, { useEffect, useState } from 'react';
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { AppContext } from './context/AppContext';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfoByToken } from './store/slices/userSlice';
import { getAllProducts, searсhProducts } from './store/slices/productsSlice';

function App() {
    const dispatch = useDispatch();
    const { searchQuery } = useSelector((s) => s.products);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        dispatch(getUserInfoByToken())
        .then(() => dispatch(getAllProducts()));
    }, [dispatch]);

    useEffect(() => {
        if (!searchQuery) {
            dispatch(getAllProducts());
        } else {
            const timer = setTimeout(() => {
                dispatch(searсhProducts(searchQuery));
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [searchQuery, dispatch]);

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
