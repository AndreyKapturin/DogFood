import React from 'react';
import './style.scss';
import { getEnding } from '../../utilities/utilities';
import { useSelector } from 'react-redux';

const SearchResult = () => {
    const { searchQuery, products } = useSelector((s) => s.products);

    return (
        <h1 className='searchResult'>
            По запросу <span className='red'>{searchQuery}</span> найдено {products.length}{' '}
            товар{getEnding(products.length)}
        </h1>
    );
};

export default SearchResult;
