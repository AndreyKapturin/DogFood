import React, { useContext } from 'react';
import './style.scss';
import CardList from '../../components/CardList';
import BackBtn from '../../components/BackBtn';
import NotFound from '../../components/NotFound';
import { AppContext } from '../../context/AppContext';

const FavoritePage = () => {
    const { myFavProduct } = useContext(AppContext);
    return (
        <div className='favoritePage'>
            <BackBtn />
            {myFavProduct.length === 0 && (
                <NotFound
                    text='Пусто... Добавьте товары из каталога!'
                    buttonText='В каталог'
                    buttonPath='/catalog'
                />
            )}
            <CardList cards={myFavProduct} />
        </div>
    );
};

export default FavoritePage;
