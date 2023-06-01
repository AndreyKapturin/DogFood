import React, { useContext } from 'react';
import './style.scss';
import { getEnding } from '../../utilities/utilities';
import { AppContext } from '../../context/AppContext';
import { useSelector } from 'react-redux';

const SearchResult = () => {
    const { productsStore } = useSelector((s) => s.products);
    const { search } = useContext(AppContext);
    return (
        <h1 className='searchResult'>
            По запросу <span className='red'>{search}</span> найдено {productsStore.length} товар
            {getEnding(productsStore.length)}
        </h1>
    );
};

export default SearchResult;
