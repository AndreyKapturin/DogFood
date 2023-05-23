import React, { useContext } from 'react';
import './style.scss';
import CardList from '../../components/CardList';
import SearchResult from '../../components/SearchResult';
import NotFound from '../../components/NotFound';
import Sorting from '../../components/Sorting';
import { AppContext } from '../../context/AppContext';
const CatalogPage = () => {
    const { search, products } = useContext(AppContext);
    return (
        <>
            {search && <SearchResult />}
            {products.length === 0 && (
                <NotFound
                    text='Простите, по вашему запросу товаров не найдено'
                    buttonText='На главную'
                    buttonPath='/'
                />
            )}
            {products.length && <Sorting />}
            <CardList cards={products} />
        </>
    );
};

export default CatalogPage;
