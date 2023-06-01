import React, { useEffect, useState } from 'react';
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { AppContext } from './context/AppContext';
import { useDispatch } from 'react-redux';
import { getUserInfoByToken } from './store/slices/userSlice';
import { getAllProducts, searсhProducts } from './store/slices/productsSlice';

function App() {
    const dispatch = useDispatch();
    const [search, setSearch] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        dispatch(getUserInfoByToken());
        dispatch(getAllProducts());
    }, [dispatch]);

    useEffect(() => {
        if (!search) {
            dispatch(getAllProducts());
        } else {
            const timer = setTimeout(() => {
                dispatch(searсhProducts(search));
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [search, dispatch]);

    const Context = {
        setSearch,
        search,
        showModal,
        setShowModal,
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
