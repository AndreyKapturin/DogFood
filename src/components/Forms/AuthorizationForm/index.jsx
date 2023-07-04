import React from 'react';
import './../formStyle.scss';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { emailOptions } from '../formOptions';
import Button from '../../Button';
import { authorization } from '../../../store/slices/userSlice';
import { useDispatch } from 'react-redux';
import InputPassword from '../../InputPassword';
import { isError } from '../../../utilities/utilities';

const AuthorizationForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onSubmit' });

    const logIn = (data) => {
        dispatch(authorization(data)).then((res) => {
            if (!isError(res)) {
                navigate('/catalog');
                reset();
            }
        });
    };
    return (
        <div className='form__container'>
            <h3>Авторизация</h3>
            <form className='form' onSubmit={handleSubmit(logIn)}>
                <input
                    className={errors.email ? 'input error' : 'input'}
                    type='text'
                    {...register('email', emailOptions)}
                    placeholder='Email'
                />
                {errors.email && <span className='error__message'>{errors.email.message}</span>}
                <InputPassword register={register} errors={errors} />
                {errors.password && (
                    <span className='error__message'>{errors.password.message}</span>
                )}
                <span className='form__forgote-password'>
                    <Link className='form__text' to='/forgot-password'>
                        Забыли пароль?
                    </Link>
                </span>
                <Button className={'base-btn primary large'} type={'submit'}>
                    Войти
                </Button>
                <Link to='/registration'>
                    <Button className={'base-btn secondary large'}>У меня ещё нет аккаунта</Button>
                </Link>
            </form>
        </div>
    );
};

export default AuthorizationForm;
