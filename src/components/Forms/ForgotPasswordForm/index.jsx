import React from 'react';
import './../formStyle.scss';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { emailOptions } from '../formOptions';
import Button from '../../Button';
import { useDispatch } from 'react-redux';
import { getTokenForNewPassword } from '../../../store/slices/userSlice';
import { isError } from '../../../utilities/utilities';

const ForgotPasswordForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onSubmit' });

    const resetPassword = (data) => {
        dispatch(getTokenForNewPassword(data)).then((res) => {
            if (!isError(res)) {
                navigate('/password-reset');
                reset();
            }
        });
    };

    return (
        <div className='form__container'>
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
                <Button className={'base-btn primary large'} type={'submit'}>
                    Восстановить пароль
                </Button>
                <Link to='/login'>
                    <Button className={'base-btn secondary large'}>Я вспомнил пароль</Button>
                </Link>
            </form>
        </div>
    );
};

export default ForgotPasswordForm;
