import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className='homePage'>
            <h1>
                Страница в разработке. Перейдите в каталог {'> '}
                <Link to='/catalog'>
                    <button>Перейти</button>
                </Link>
            </h1>
        </div>
    );
};

export default HomePage;
