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
import { useSelector, useDispatch } from 'react-redux';
import { setAuth } from '../../store/slices/userSlice';

const Header = () => {
    const { myFavProducts } = useSelector((s) => s.products);
    const dispatch = useDispatch();
    const logout = () => {
        localStorage.removeItem('DodFood_token_AK');
        dispatch(setAuth(false));
    };
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
                    <Link className='header__icon-link' to='/cart'>
                        {!!myFavProducts.length && <Bubble products={myFavProducts} />}
                        <Cart />
                    </Link>
                    <Link className='header__icon-link' to='/profile'>
                        <Profile />
                    </Link>
                    <BoxArrowInLeft
                        className='header__icon-link'
                        onClick={logout}
                        width='30px'
                        height='30px'
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
