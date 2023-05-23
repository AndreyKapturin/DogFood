import React, { useContext } from 'react';
import './style.scss';
import { AppContext } from '../../context/AppContext';
import { sort } from '../../utilities/utilities';

const Sorting = () => {
    const { products, setProducts } = useContext(AppContext);
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
                    onClick={() => sort(products, filter.filter, setProducts)}
                >
                    {filter.title}
                </span>
            ))}
        </div>
    );
};

export default Sorting;
