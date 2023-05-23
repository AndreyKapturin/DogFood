import React, { useState } from 'react';
import './style.scss';
import Review from '../Review';
import { useForm } from 'react-hook-form';
import Rating from '../Rating';

const Reviews = ({ reviews, productID, sendReview, deleteReview, user }) => {
    const [showForm, setShowForm] = useState(false);
    const [rating, setRating] = useState(0);
    const [filling, setFilling] = useState(0);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    
    const onSubmit = (data) => {
        sendReview(productID, { ...data, rating });
        reset();
        setRating(0);
        setFilling(0);
        setShowForm(false);
    };

    const textOption = {
        required: { value: true, message: 'Поле не может быть пустым' },
    };

    return (
        <div className='reviews'>
            <h2>Отзывы</h2>
            <button className='reviews__show-modal-btn' onClick={() => setShowForm((s) => !s)}>
                Написать отзыв
            </button>
            <div className={`reviews__modal ${showForm ? 'active' : ''}`}>
                <form className='addReviewForm' onSubmit={handleSubmit((data) => onSubmit(data))}>
                    <Rating
                        filling={filling}
                        rating={rating}
                        isEditable={true}
                        setRating={setRating}
                        setFilling={setFilling}
                    />
                    <textarea
                        {...register('text', textOption)}
                        className={`addReviewForm__text ${errors.text && 'error'}`}
                        placeholder={errors.text ? errors.text.message : 'Ваше мнение о продукте'}
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
