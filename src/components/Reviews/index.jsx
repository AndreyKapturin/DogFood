import React, { useState } from 'react';
import './style.scss';
import Review from '../Review';
import { useForm } from 'react-hook-form';

const Reviews = ({ reviews, productID, sendReview, deleteReview, user }) => {
    const [showForm, setShowForm] = useState(false);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        sendReview(productID, data);
        reset();
        setShowForm(false);
    };
    return (
        <div className='reviews'>
            <h2>Отзывы</h2>
            <button className='reviews__show-modal-btn' onClick={() => setShowForm((s) => !s)}>Написать отзыв</button>
            <div className={`reviews__modal ${showForm ? 'active' : ''}`}>
                <form className='addReviewForm' onSubmit={handleSubmit((data) => onSubmit(data))}>
                    <textarea
                        {...register('text')}
                        className='addReviewForm__text'
                        placeholder='Ваше мнение о продукте'
                    ></textarea>
                    <button className='addReviewForm__btn' type='submit'>
                        Отправить отзыв
                    </button>
                </form>
            </div>
            {reviews.map((review, i) => (
                <Review
                    key={`review${i}`}
                    review={review}
                    deleteReview={deleteReview}
                    user={user}
                />
            ))}
        </div>
    );
};

export default Reviews;
