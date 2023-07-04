import React, { memo } from 'react';
import './style.scss';
import Button from '../../components/Button';
import Promo from '../../components/Promo';
import Slider from '../../components/Slider';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { beefLung, horns, stomach, vein } from '../../components/Promo/data';
import Loader from '../../components/Loader';

const HomePage = memo(() => {
    const navigate = useNavigate();
    const { products, loading } = useSelector((s) => s.products);
    const popular = [...products].sort((a, b) => b.likes.length - a.likes.length).slice(0, 12);
    const sale = [...products].sort((a, b) => b.discount - a.discount).slice(0, 12);
    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div className='homePage'>
                    <div className='homePage__header'>
                        <h1 className='homePage__header-title'>Крафтовые лакомства для собак</h1>
                        <p className='homePage__header-subtitle'>
                            Всегда свежие лакомства ручной работы с доставкой по России и Миру
                        </p>
                        <Button
                            className='base-btn primary fit'
                            onClick={() => navigate('/catalog')}
                        >
                            {'В каталог >'}
                        </Button>
                    </div>
                    <Promo
                        title={'Подарок за первый заказ!'}
                        description={'Легкое говяжье - пластины'}
                        image={beefLung}
                    />
                    <Slider title={'Популярные'} cards={popular} />
                    <div className='homePage__promo-wrapper'>
                        <Promo
                            title={'Желудки утиные сушено-вяленые'}
                            description={'100 % натуральное'}
                            image={stomach}
                            size='small'
                        />
                        <Promo
                            title={'Мелкая говяжья сушено-вяленая жилка'}
                            description={'Вашему питомцу понравится'}
                            image={vein}
                            size='small'
                        />
                    </div>
                    <Slider title={'Максимальная выгода'} cards={sale} />
                    <Promo
                        title={'Рога северного оленя'}
                        description={'от 10 до 30 кг.'}
                        image={horns}
                    />
                </div>
            )}
        </>
    );
});

export default HomePage;
