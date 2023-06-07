import React, { useContext } from 'react';
import './../formStyle.scss';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { emailOptions, passwordOptions } from '../formOptions';
import { api } from '../../../api/api';
import { EyeFill, EyeSlashFill } from 'react-bootstrap-icons';
import { AppContext } from '../../../context/AppContext';
import Button from '../../Button';

const AuthorizationForm = () => {
    const { showPassword, setShowPassword } = useContext(AppContext);
    const navigate = useNavigate();
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onSubmit' });

    const logIn = (data) => {
        api.signIn(data).then((res) => {
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
            <h3>Авторизация</h3>
            <form className='form' onSubmit={handleSubmit(logIn)}>
                <input
                    className={errors.email ? 'input error' : 'input'}
                    type='text'
                    {...register('email', emailOptions)}
                    placeholder='Email'
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
                <span className='form__forgote-password'>
                    <Link className='form__text' to='/forgot-password'>
                        Забыли пароль?
                    </Link>
                </span>
                {errors.email && <span className='error__message'>{errors.email.message}</span>}
                {errors.password && (
                    <span className='error__message'>{errors.password.message}</span>
                )}
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
