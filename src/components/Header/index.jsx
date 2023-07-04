import React from 'react';
import './style.scss';
import Logo from '../../images/Logo';
import Search from '../Search';
import Favorite from '../../images/Favorite';
import Cart from '../../images/Cart';
import Profile from '../../images/Profile';
import { Link, useNavigate } from 'react-router-dom';
import Bubble from '../Bubble';
import { BoxArrowInLeft } from 'react-bootstrap-icons';
import { useSelector, useDispatch } from 'react-redux';
import { setAuth } from '../../store/slices/userSlice';

const Header = () => {
    const { myFavProducts } = useSelector((s) => s.products);
    const { productsInCart } = useSelector((s) => s.cart);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logout = () => {
        localStorage.removeItem('DodFood_token_AK');
        dispatch(setAuth(false));
        navigate('/login');
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
                        {!!myFavProducts.length && <Bubble products={myFavProducts.length} />}
                        <Favorite />
                    </Link>
                    <Link className='header__icon-link' to='/cart'>
                        {!!productsInCart.length && (
                            <Bubble
                                products={productsInCart.reduce((acc, el) => acc + el.count, 0)}
                            />
                        )}
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
