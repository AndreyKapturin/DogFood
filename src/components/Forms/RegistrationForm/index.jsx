import React from 'react';
import './../formStyle.scss';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { aboutOptions, emailOptions, nameOptions } from '../formOptions';
import Button from '../../Button';
import InputPassword from '../../InputPassword';
import { useDispatch } from 'react-redux';
import { authorization, registration } from '../../../store/slices/userSlice';
import { isError } from '../../../utilities/utilities';

const RegistrationForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ mode: 'onSubmit' });

    const sendRegistrationData = (data) => {
        dispatch(registration(data)).then((res) => {
            if (!isError(res)) {
                dispatch(authorization({email: data.email, password: data.password}))
                navigate('/catalog');
                reset();
            }
        });
    };

    return (
        <div className='form__container'>
            <h3>Регистрация</h3>
            <form className='form' onSubmit={handleSubmit(sendRegistrationData)}>
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
                <InputPassword register={register} errors={errors} />
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
