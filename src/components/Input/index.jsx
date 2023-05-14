import React, { useContext } from 'react';
import './style.scss';
import { AppContext } from '../../context/AppContext';

const Input = ({ location }) => {
    const { setSearch } = useContext(AppContext);
    return (
        <input
            className='input'
            type='text'
            placeholder={'Поиск'}
            disabled={location.pathname !== '/catalog'}
            onChange={(e) => setSearch(e.target.value)}
        ></input>
    );
};

export default Input;
