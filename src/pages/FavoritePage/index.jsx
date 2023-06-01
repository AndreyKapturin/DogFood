import React from 'react';
import './style.scss';
import CardList from '../../components/CardList';
import BackBtn from '../../components/BackBtn';
import NotFound from '../../components/NotFound';
import { useSelector } from 'react-redux';

const FavoritePage = () => {
    const { myFavProducts } = useSelector((s) => s.products);
    return (
        <div className='favoritePage'>
            <BackBtn />
            {myFavProducts.length === 0 && (
                <NotFound
                    text='Пусто... Добавьте товары из каталога!'
                    buttonText='В каталог'
                    buttonPath='/catalog'
                />
            )}
            <CardList cards={myFavProducts} />
        </div>
    );
};

export default FavoritePage;
