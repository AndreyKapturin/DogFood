import React from 'react';
import { Star, StarFill } from 'react-bootstrap-icons';


const Rating = ({ rate }) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        i < rate
            ? stars.push(<StarFill key={`${StarFill}` + i} fill='#FFE44D' stroke='#1A1A1A' />)
            : stars.push(<Star key={`${Star}` + i} />);
    }
    return [...stars];
};

export default Rating;