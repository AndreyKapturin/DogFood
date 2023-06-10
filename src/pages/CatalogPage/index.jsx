import React from 'react';
import './style.scss';
import CardList from '../../components/CardList';
import SearchResult from '../../components/SearchResult';
import NotFound from '../../components/NotFound';
import Sorting from '../../components/Sorting';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader';

const CatalogPage = () => {
    const { searchQuery, products, loading } = useSelector((s) => s.products);
    return (
        <>
            {searchQuery && <SearchResult />}
            {!!products.length && <Sorting />}
            {loading ? (
                <Loader />
            ) : (
                <>
                    {products.length === 0 && (
                        <NotFound
                            text='Простите, по вашему запросу товаров не найдено'
                            buttonText='На главную'
                            buttonPath='/'
                        />
                    )}
                    {!!products.length && <CardList cards={products} />}
                </>
            )}
        </>
    );
};

export default CatalogPage;
