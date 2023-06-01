import React, { useContext } from 'react';
import './style.scss';
import { AppContext } from '../../context/AppContext';
import { sort } from '../../utilities/utilities';
import { useSelector } from 'react-redux';
import { filterProduct } from '../../store/slices/productsSlice';

const Sorting = () => {
    const { productsStore } = useSelector((s) => s.products);

    const filters = [
        { filter: 'popular', title: 'Популярные' },
        { filter: 'new', title: 'Новинки' },
        { filter: 'cheap', title: 'Сначала дешёвые' },
        { filter: 'costly', title: 'Сначала дорогие' },
        { filter: 'topRate', title: 'По рейтингу' },
        { filter: 'reviews', title: 'По количеству отзывов' },
        { filter: 'sale', title: 'По скидке' },
    ];
    return (
        <div className='sorting'>
            {filters.map((filter, i) => (
                <span
                    key={`sorting${i}`}
                    className='sorting__point'
                    onClick={() => sort(productsStore, filter.filter, filterProduct)}
                >
                    {filter.title}
                </span>
            ))}
        </div>
    );
};

export default Sorting;
