import React from 'react';
import './style.scss';
import { Trash3 } from 'react-bootstrap-icons';
import Rating from '../Rating';
import { useDispatch, useSelector } from 'react-redux';
import { deleteReview } from '../../store/slices/reviewsSlice';
const Review = ({ review }) => {
    const dispatch = useDispatch();
    const { user } = useSelector((s) => s.user);
    const { author, rating, text, created_at, product, _id } = review;
    return (
        <div className='review'>
            <div className='review__header'>
                <div className='review__author-avatar-wrapper'>
                    <img className='review__author-avatar' src={author.avatar} alt='avatar' />
                </div>
                <div>
                    <h3>{author.name}</h3>
                    <Rating filling={rating} isEditable={false} />
                </div>
                <span>
                    {new Date(created_at).toLocaleDateString('ru-RU', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
                </span>
                {user._id === author._id && (
                    <Trash3
                        className='review__trash'
                        onClick={() => dispatch(deleteReview([product, _id]))}
                    />
                )}
            </div>
            <p>{text}</p>
        </div>
    );
};

export default Review;
