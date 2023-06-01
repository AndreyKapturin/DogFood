import React from 'react';
import './style.scss';
import { Trash3 } from 'react-bootstrap-icons';
import Rating from '../Rating';
import { useSelector } from 'react-redux';
const Review = ({ review, deleteReview }) => {
    const {user} = useSelector(s => s.user);
    const { author, rating, text, created_at, product, _id } = review;
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
                        <Trash3 className='review__trash' onClick={() => deleteReview(product, _id)} />
                    )}
                </div>
                <Rating filling={rating} isEditable={false} />
            </div>
            <p>{text}</p>
        </div>
    );
};

export default Review;
