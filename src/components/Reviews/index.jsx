import React, { useState } from 'react';
import './style.scss';
import Review from '../Review';
import { useForm } from 'react-hook-form';
import Rating from '../Rating';
import { ratingOptions, textOption } from '../Forms/formOptions';

const Reviews = ({ reviews, productID, sendReview, deleteReview }) => {
    const [showForm, setShowForm] = useState(false);
    const [rating, setRating] = useState(0);
    const [filling, setFilling] = useState(0);

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        sendReview(productID, data);
        reset();
        setRating(0);
        setFilling(0);
        setValue('rating', null);
        setShowForm(false);
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
                        setValue={setValue}
                    />
                    {errors.rating && (
                        <span className='error__message'>{errors.rating.message}</span>
                    )}
                    <input type='hidden' {...register('rating', ratingOptions)} />
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
                />
            ))}
        </div>
    );
};

export default Reviews;
