import React from 'react';
import './style.scss';
import Rating from '../Rating';
const Review = ({ review }) => {
    const { author, rating, text, created_at } = review;
    return (
        <div className='review'>
            <div>
            <div className='review__header'>
                <h3>{author.name}</h3>
                <span>
                    {new Date(created_at).toLocaleDateString('ru-RU', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
                </span>
            </div>
            <span>{<Rating rate={rating} />}</span>
            </div>
            <p>{text}</p>
        </div>
    );
};

export default Review;
