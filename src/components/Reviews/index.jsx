import React, { useState } from 'react';
import './style.scss';
import Review from '../Review';
import { useForm } from 'react-hook-form';
import Rating from '../Rating';
import { ratingOptions, textOption } from '../Forms/formOptions';
import { useDispatch, useSelector } from 'react-redux';
import { addReview } from '../../store/slices/reviewsSlice';
import Button from '../Button';

const Reviews = ({ productID }) => {
    const dispatch = useDispatch();
    const { reviews } = useSelector((s) => s.reviews);
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
        dispatch(addReview([productID, data]));
        reset();
        setRating(0);
        setFilling(0);
        setValue('rating', null);
        setShowForm(false);
    };

    return (
        <div className='reviews'>
            <h2>Отзывы</h2>
            <Button className={'base-btn primary fit'} onClick={() => setShowForm((s) => !s)}>
                Написать отзыв
            </Button>
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
                    <Button
                        className={'base-btn primary fit'}
                        onClick={() => setShowForm((s) => !s)}
                        type={'submite'}
                    >
                        Отправить отзыв
                    </Button>
                </form>
            </div>
            {reviews.map((review, i) => (
                <Review key={`review${i}`} review={review} />
            ))}
        </div>
    );
};

export default Reviews;
