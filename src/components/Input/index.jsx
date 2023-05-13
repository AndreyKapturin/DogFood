import React, { useContext } from 'react';
import './style.css';
import { AppContext } from '../../context/AppContext';

const Input = ({ location }) => {
    const { setSearch } = useContext(AppContext);
    return (
        <input
            className='header__input'
            type='text'
            placeholder={'Поиск'}
            disabled={location.pathname !== '/catalog'}
            onChange={(e) => setSearch(e.target.value)}
        ></input>
    );
};

export default Input;
