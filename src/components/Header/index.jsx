import React from 'react';
import './style.scss';
import Logo from '../images/Logo';
import Search from '../Search';
import Favorite from '../images/Favorite';
import Cart from '../images/Cart';
import Profile from '../images/Profile';
import { Link } from 'react-router-dom';
import Bubble from '../Bubble';
import { BoxArrowInLeft } from 'react-bootstrap-icons';
import { useSelector } from 'react-redux';

const Header = () => {
    
    const { myFavProducts } = useSelector((s) => s.products);

    return (
        <header className='header'>
            <div className='header__container'>
                <Link to='/'>
                    <Logo />
                </Link>
                <Search />
                <div className='header__icons'>
                    <Link className='header__icon-link' to='/favorite'>
                        {!!myFavProducts.length && <Bubble products={myFavProducts} />}
                        <Favorite />
                    </Link>
                    <a href='/'>
                        <Cart />
                    </a>
                    <a href='/'>
                        <Profile />
                    </a>
                    <Link className='header__icon-link' to='/logIn'>
                        <BoxArrowInLeft width='30px' height='30px' />
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
