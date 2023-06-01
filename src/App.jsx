import React, { useEffect, useState } from 'react';
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { api } from './api/api';
import { filterMyFavProduct } from './utilities/utilities';
import { AppContext } from './context/AppContext';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfoByToken } from './store/slices/userSlice';

function App() {
    const dispatch = useDispatch();
    const {user} = useSelector(s => s.user);
    const [products, setProducts] = useState([]);
    const [myFavProduct, setMyFavProduct] = useState([]);
    const [search, setSearch] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        dispatch(getUserInfoByToken())
    }, [dispatch]);

    useEffect(() => {
        if (!search) {
            api.getProducts()
                .then((data) => {
                    setProducts(data.products);
                    setMyFavProduct(filterMyFavProduct(data.products, user._id));
                })
                .catch((error) => console.error('Ошибка при запросе всех продуктов', error));
        } else {
            const timer = setTimeout(() => {
                api.searchProducts(search)
                    .then((data) => setProducts(data))
                    .catch((error) =>
                        console.error('Ошибка при запросе продуктов в поиске', error)
                    );
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [search, user]);

    const changeLike = (productID, wasLiked) => {
        api.swithLike(productID, wasLiked)
            .then((res) => {
                const newProducts = products.map((product) =>
                    product._id === productID ? res : product
                );
                setProducts([...newProducts]);
                setMyFavProduct(filterMyFavProduct(newProducts, user._id));
            })
            .catch((error) => console.error('Ошибка при смене лайка в каталоге', error));
    };
    const Context = {
        setSearch,
        setProducts,
        changeLike,
        user,
        myFavProduct,
        setMyFavProduct,
        products,
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
