import React, { useContext } from 'react';
import './style.scss';
import CardList from '../../CardList';
import SearchResult from '../../SearchResult';
import NotFound from '../../NotFound';
import Sorting from '../../Sorting';
import { AppContext } from '../../../context/AppContext';
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
            <CardList cards={products} className={'catalogPageCardList'} />
        </>
    );
};

export default CatalogPage;
