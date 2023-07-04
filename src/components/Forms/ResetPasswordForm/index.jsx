import React from 'react';
import './../formStyle.scss';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { tokenOptions } from '../formOptions';
import Button from '../../Button';
import InputPassword from '../../InputPassword';
import { useDispatch } from 'react-redux';
import { sendNewPassword } from '../../../store/slices/userSlice';
import { isError } from '../../../utilities/utilities';

const ResetPasswordForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onSubmit' });

    const resetPassword = (data) => {
        dispatch(sendNewPassword(data)).then((res) => {
            if (!isError(res)) {
                navigate('/catalog');
                reset();
            }
        });
    };
    return (
        <div className='form__container'>
            <h3>Восстановление пароля</h3>
            <form className='form' onSubmit={handleSubmit(resetPassword)}>
                <input
                    className={errors.token ? 'input error' : 'input'}
                    type='text'
                    {...register('token', tokenOptions)}
                    placeholder='Токен из письма'
                />
                <InputPassword register={register} errors={errors} />
                {errors.token && <span className='error__message'>{errors.token.message}</span>}
                {errors.password && (
                    <span className='error__message'>{errors.password.message}</span>
                )}
                <Button className={'base-btn primary large'} type={'submit'}>
                    Обновить пароль
                </Button>
                <Link to='/logIn'>
                    <Button className={'base-btn secondary large'}>Я вспомнил пароль</Button>
                </Link>
            </form>
        </div>
    );
};

export default ResetPasswordForm;
