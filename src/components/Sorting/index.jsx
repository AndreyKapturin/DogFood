import React from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import { sortProduct } from '../../store/slices/productsSlice';
import { filters } from '../../Constants/constants';

const Sorting = () => {
    const dispatch = useDispatch();

    return (
        <div className='sorting'>
            {filters.map((filter, i) => (
                <span
                    key={`sorting${i}`}
                    className='sorting__point'
                    onClick={() => dispatch(sortProduct(filter.filter))}
                >
                    {filter.title}
                </span>
            ))}
        </div>
    );
};

export default Sorting;
