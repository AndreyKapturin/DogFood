import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const BackBtn = () => {
    return (
        <Link className='back-btn' to={-1}>
            <span>{`< Назад`}</span>
        </Link>
    );
};

export default BackBtn;
