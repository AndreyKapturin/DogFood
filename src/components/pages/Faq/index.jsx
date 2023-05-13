import React from 'react';
import './style.css';
import BackBtn from '../../BackBtn';
import { faqInfo } from '../../../Constants/constants';
import Accordion from '../../Accordion';

const Faq = () => {
    return (
        <div className='faqPage'>
            <BackBtn />
            <h1 className='faq__title'>Часто спрашивают</h1>
            <div className='faq__list'>
                {faqInfo.map((item) => (
                    <Accordion data={item} />
                ))}
            </div>
        </div>
    );
};

export default Faq;
