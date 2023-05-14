import React, { useContext } from 'react';
import './style.scss';
import { getEnding } from '../../utilities/utilities';
import { AppContext } from '../../context/AppContext';

const SearchResult = () => {
    const { products, search } = useContext(AppContext);
    return (
        <h1 className='searchResult'>
            По запросу <span className='red'>{search}</span> найдено {products.length} товар
            {getEnding(products.length)}
        </h1>
    );
};

export default SearchResult;
