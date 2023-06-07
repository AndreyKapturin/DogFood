import React, { useContext } from 'react';
import './../formStyle.scss';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { aboutOptions, emailOptions, nameOptions, passwordOptions } from '../formOptions';
import { api } from '../../../api/api';
import { EyeFill, EyeSlashFill } from 'react-bootstrap-icons';
import { AppContext } from '../../../context/AppContext';
import Button from '../../Button';

const RegistrationForm = () => {
    const { showPassword, setShowPassword } = useContext(AppContext);
    const navigate = useNavigate();
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onSubmit' });

    const registration = (data) => {
        api.signUp(data).then((res) => {
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
            <h3>Регистрация</h3>
            <form className='form' onSubmit={handleSubmit(registration)}>
                <input
                    className={errors.name ? 'input error' : 'input'}
                    type='text'
                    {...register('name', nameOptions)}
                    placeholder='Имя'
                />
                {errors.name && <span className='error__message'>{errors.name.message}</span>}
                <input
                    className={errors.about ? 'input error' : 'input'}
                    type='text'
                    {...register('about', aboutOptions)}
                    placeholder='Пара слов о себе'
                />
                {errors.about && <span className='error__message'>{errors.about.message}</span>}
                <input
                    className={errors.email ? 'input error' : 'input'}
                    type='text'
                    {...register('email', emailOptions)}
                    placeholder='Email'
                />
                {errors.email && <span className='error__message'>{errors.email.message}</span>}
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
                {errors.password && (
                    <span className='error__message'>{errors.password.message}</span>
                )}
                <Button className={'base-btn primary large'} type={'submit'}>
                    Зарегистрироваться
                </Button>
                <Link to='/login'>
                    <Button className={'base-btn secondary large'}>У меня уже есть аккаунт</Button>
                </Link>
            </form>
        </div>
    );
};

export default RegistrationForm;
