import React from 'react';
import './style.scss';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchProductsQuery } from '../../store/slices/productsSlice';

const Search = () => {

    const location = useLocation();
    const dispatch = useDispatch();
    
    return (
        <input
            className='search'
            type='text'
            placeholder={'Поиск'}
            disabled={location.pathname !== '/catalog'}
            onChange={(e) => dispatch(searchProductsQuery(e.target.value))}
        ></input>
    );
};

export default Search;
