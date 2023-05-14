import React from 'react';
import './style.scss';
import BackBtn from '../../BackBtn';
import { faqInfo } from '../../../Constants/constants';
import Accordion from '../../Accordion';

const Faq = () => {
    return (
        <div className='faq'>
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
