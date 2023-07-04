import React from 'react';
import './style.scss';
import CardList from '../../components/CardList';
import BackBtn from '../../components/BackBtn';
import NotFound from '../../components/NotFound';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader';

const FavoritePage = () => {
    const { myFavProducts, loading } = useSelector((s) => s.products);

    return (
        <div className='favoritePage'>
            <BackBtn />
            {loading ? (
                <Loader />
            ) : (
                <>
                    {!!myFavProducts.length && <CardList cards={myFavProducts} />}
                    {myFavProducts.length === 0 && (
                        <NotFound
                            text='Пусто... Добавьте товары из каталога!'
                            buttonText='В каталог'
                            buttonPath='/catalog'
                        />
                    )}
                </>
            )}
        </div>
    );
};

export default FavoritePage;
