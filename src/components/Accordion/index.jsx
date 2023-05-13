import React from 'react';
import './style.css';
import { CaretDownFill } from 'react-bootstrap-icons';

const Accordion = ({ data }) => {
    return (
        <div
            className='accordion'
            onClick={(e) => {
                if (e.currentTarget.classList.contains('active')) {
                    e.currentTarget.lastElementChild.style.height = '0px';
                    e.currentTarget.firstElementChild.firstElementChild.classList.remove('turn180');
                    e.currentTarget.lastElementChild.classList.remove('active');
                    e.currentTarget.classList.remove('active');
                } else {
                    e.currentTarget.lastElementChild.classList.add('active');
                    e.currentTarget.classList.add('active');
                    e.currentTarget.firstElementChild.firstElementChild.classList.add('turn180');
                    e.currentTarget.lastElementChild.style.height = `${e.currentTarget.lastElementChild.scrollHeight}px`;
                }
            }}
        >
            <h3 className='accordion__title'>
                {data.title}
                <CaretDownFill className='accordion__arrow' />
            </h3>
            <div className='accordion__text'>{data.text}</div>
        </div>
    );
};

export default Accordion;
