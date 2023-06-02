import React from 'react';
import './style.scss';
import { getEnding } from '../../utilities/utilities';
import { useSelector } from 'react-redux';

const SearchResult = () => {
    const { searchQuery, productsStore } = useSelector((s) => s.products);

    return (
        <h1 className='searchResult'>
            По запросу <span className='red'>{searchQuery}</span> найдено {productsStore.length}{' '}
            товар{getEnding(productsStore.length)}
        </h1>
    );
};

export default SearchResult;
