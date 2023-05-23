import React from 'react';
import './../formStyle.scss';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { emailOptions } from '../formOptions';

const ForgotPasswordForm = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onSubmit' });

    const resetPassword = (data) => {
        reset();
    };

    return (
        <div>
            <h3>Восстановление пароля</h3>
            <form className='form' onSubmit={handleSubmit(resetPassword)}>
                <span className='form__text'>
                    Для получения временного пароля необходимо ввести email, указанный при
                    регистрации.
                </span>
                <input
                    className={errors.email ? 'input error' : 'input'}
                    type='text'
                    {...register('email', emailOptions)}
                    placeholder='Email'
                />
                {errors.email && <span className='error__message'>{errors.email.message}</span>}
                <button className='form__button' type='submit'>
                    Восстановить пароль
                </button>
                <Link to='/login'>
                    <button className='form__button-link' type='submit'>
                        Я вспомнил пароль
                    </button>
                </Link>
            </form>
        </div>
    );
};

export default ForgotPasswordForm;
