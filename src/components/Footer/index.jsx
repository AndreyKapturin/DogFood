import React from 'react';
import './style.scss';
import Logo from '../../images/Logo';
import LogoTG from '../../images/LogoTG';
import LogoWA from '../../images/LogoWA';
import LogoViber from '../../images/LogoViber';
import LogoInstagram from '../../images/LogoInstagram';
import LogoVK from '../../images/LogoVK';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <div className='footer__logo'>
                    <Logo />
                    <span>© «Интернет-магазин DogFood.ru»</span>
                </div>
                <div className='footer__nav-lists'>
                    <div className='footer__nav-list'>
                        <Link to='/catalog'>Каталог</Link>
                        <Link to='/catalog'>Акции</Link>
                        <Link to='/catalog'>Новости</Link>
                        <Link to='/catalog'>Отзывы</Link>
                    </div>
                    <div className='footer__nav-list'>
                        <Link to='/catalog'>Оплата и доставка</Link>
                        <Link to='/faq'>Часто спрашивают</Link>
                        <Link to='/catalog'>Обратная связь</Link>
                        <Link to='/catalog'>Контакты</Link>
                    </div>
                </div>
                <div className='footer__contacts'>
                    <h3>Мы на связи</h3>
                    <div>
                        <a href='tel:+7999000000'>
                            <h2>8 (999) 00-00-00</h2>
                        </a>
                        <a href='mailto:dogfood.ru@gmail.com'>dogfood.ru@gmail.com</a>
                    </div>
                    <div className='footer__contacts-social'>
                        <a href='/'>
                            <LogoTG />
                        </a>
                        <a href='/'>
                            <LogoWA />
                        </a>
                        <a href='/'>
                            <LogoViber />
                        </a>
                        <a href='/'>
                            <LogoInstagram />
                        </a>
                        <a href='/'>
                            <LogoVK />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
