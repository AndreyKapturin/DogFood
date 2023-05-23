import React from 'react';
import './style.scss';
import { StarFill } from 'react-bootstrap-icons';

const Rating = ({ filling, rating, isEditable, setRating = () => {}, setFilling = () => {} }) => {
    const ratingArr = [];
    for (let i = 0; i < 5; i++) {
        if (!isEditable && i < filling) {
            ratingArr.push(<StarFill key={`star${i}`} className='rating__star_filled' />);
        } else if (!isEditable && i >= filling) {
            ratingArr.push(<StarFill key={`star${i}`} className='rating__star_noFilled' />);
        } else if (isEditable && i < filling) {
            ratingArr.push(
                <StarFill
                    key={`star${i}`}
                    className='rating__star_filled editable'
                    onClick={() => {
                        setRating(i + 1);
                        setFilling(i + 1);
                    }}
                    onMouseEnter={() => setFilling(i + 1)}
                    onMouseLeave={() => setFilling(rating)}
                />
            );
        } else if (isEditable && i >= filling) {
            ratingArr.push(
                <StarFill
                    key={`star${i}`}
                    className='rating__star_noFilled editable'
                    onClick={() => {
                        setRating(i + 1);
                        setFilling(i + 1);
                    }}
                    onMouseEnter={() => setFilling(i + 1)}
                    onMouseLeave={() => setFilling(rating)}
                />
            );
        }
    }
    return <div>{ratingArr}</div>;
};

export default Rating;
