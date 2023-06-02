import React from 'react';
import './style.scss';
import CardList from '../../components/CardList';
import SearchResult from '../../components/SearchResult';
import NotFound from '../../components/NotFound';
import Sorting from '../../components/Sorting';
import { useSelector } from 'react-redux';

const CatalogPage = () => {
    const { searchQuery, productsStore } = useSelector((s) => s.products);

    return (
        <>
            {searchQuery && <SearchResult />}
            {productsStore.length === 0 && (
                <NotFound
                    text='Простите, по вашему запросу товаров не найдено'
                    buttonText='На главную'
                    buttonPath='/'
                />
            )}
            {!!productsStore.length && <Sorting />}
            {!!productsStore.length && <CardList cards={productsStore} />}
        </>
    );
};

export default CatalogPage;
