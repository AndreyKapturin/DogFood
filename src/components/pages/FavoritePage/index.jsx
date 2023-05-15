import React, { useContext } from 'react';
import './style.scss';
import CardList from '../../CardList';
import BackBtn from '../../BackBtn';
import NotFound from '../../NotFound';
import { AppContext } from '../../../context/AppContext';

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
