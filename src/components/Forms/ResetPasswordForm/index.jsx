import React, { useContext } from 'react';
import './../formStyle.scss';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { tokenOptions, passwordOptions } from '../formOptions';
import { api } from '../../../api/api';
import { EyeFill, EyeSlashFill } from 'react-bootstrap-icons';
import { AppContext } from '../../../context/AppContext';

const ResetPasswordForm = () => {
    const { showPassword, setShowPassword } = useContext(AppContext);
    const navigate = useNavigate();
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onSubmit' });

    const resetPassword = (data) => {
        api.setNewPassword(data).then((res) => {
            if (!!res.err) {
                alert(`${res.message}`);
            } else {
                alert(`Добро пожаловать, ${res.data.name}`);
                navigate('/catalog');
                reset();
            }
        });
    };
    return (
        <div>
            <h3>Восстановление пароля</h3>
            <form className='form' onSubmit={handleSubmit(resetPassword)}>
                <input
                    className={errors.token ? 'input error' : 'input'}
                    type='text'
                    {...register('token', tokenOptions)}
                    placeholder='Токен из письма'
                />
                <div className='input__wrapper'>
                    <input
                        className={errors.password ? 'input error' : 'input'}
                        type={showPassword ? 'text' : 'password'}
                        {...register('password', passwordOptions)}
                        placeholder='Пароль'
                        autoComplete='true'
                    />
                    <span className='input__eye' onClick={() => setShowPassword((s) => !s)}>
                        {showPassword ? <EyeFill /> : <EyeSlashFill />}
                    </span>
                </div>
                {errors.token && <span className='error__message'>{errors.token.message}</span>}
                {errors.password && (
                    <span className='error__message'>{errors.password.message}</span>
                )}
                <button className='form__button' type='submit'>
                    Обновить пароль
                </button>
                <Link to='/logIn'>
                    <button className='form__button-link' type='submit'>
                        Я вспомнил пароль
                    </button>
                </Link>
            </form>
        </div>
    );
};

export default ResetPasswordForm;
