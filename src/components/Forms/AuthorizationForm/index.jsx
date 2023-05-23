import React from 'react';
import './../formStyle.scss';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { emailOptions, passwordOptions } from '../formOptions';

const AuthorizationForm = () => {
    const navigate = useNavigate();
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onSubmit' });

    const logIn = (data) => {
        navigate('/catalog');
        reset();
    };
    return (
        <div>
            <h3>Авторизация</h3>
            <form className='form' onSubmit={handleSubmit(logIn)}>
                <input
                    className={errors.email ? 'input error' : 'input'}
                    type='text'
                    {...register('email', emailOptions)}
                    placeholder='Email'
                />
                <input
                    className={errors.password ? 'input error' : 'input'}
                    type='password'
                    {...register('password', passwordOptions)}
                    placeholder='Пароль'
                    autoComplete='true'
                />
                <span className='form__forgote-password'>
                    <Link className='form__text' to='/forgot-password'>Забыли пароль?</Link>
                </span>
                {errors.email && <span className='error__message'>{errors.email.message}</span>}
                {errors.password && (
                    <span className='error__message'>{errors.password.message}</span>
                )}
                <button className='form__button' type='submit'>
                    Войти
                </button>
                <Link to='/registration'>
                    <button className='form__button-link' type='submit'>
                        У меня ещё нет аккаунта
                    </button>
                </Link>
            </form>
        </div>
    );
};

export default AuthorizationForm;
