import React, { useContext } from 'react';
import './style.scss';
import { AppContext } from '../../context/AppContext';

const Search = ({ location }) => {
    const { setSearch } = useContext(AppContext);
    return (
        <input
            className='search'
            type='text'
            placeholder={'Поиск'}
            disabled={location.pathname !== '/catalog'}
            onChange={(e) => setSearch(e.target.value)}
        ></input>
    );
};

export default Search;
