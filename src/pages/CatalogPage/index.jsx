import React from 'react';
import './style.scss';
import CardList from '../../components/CardList';
import SearchResult from '../../components/SearchResult';
import NotFound from '../../components/NotFound';
import Sorting from '../../components/Sorting';
import { useSelector } from 'react-redux';

const CatalogPage = () => {
    const { searchQuery, products } = useSelector((s) => s.products);

    return (
        <>
            {searchQuery && <SearchResult />}
            {products.length === 0 && (
                <NotFound
                    text='Простите, по вашему запросу товаров не найдено'
                    buttonText='На главную'
                    buttonPath='/'
                />
            )}
            {!!products.length && <Sorting />}
            {!!products.length && <CardList cards={products} />}
        </>
    );
};

export default CatalogPage;
