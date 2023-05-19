import React from 'react';
import './style.scss';
import { Trash3 } from 'react-bootstrap-icons';
const Review = ({ review, deleteReview, user }) => {
    const { author, text, created_at, product, _id } = review;
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
                    {user._id === author._id && (
                        <Trash3 onClick={() => deleteReview(product, _id)} />
                    )}
                </div>
                <span>{'rating'}</span>
            </div>
            <p>{text}</p>
        </div>
    );
};

export default Review;
