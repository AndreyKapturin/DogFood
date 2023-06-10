import React, { useEffect, useState } from 'react';
import './style.scss';
import BackBtn from '../../components/BackBtn';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { aboutOptions, avatarOptions, nameOptions } from '../../components/Forms/formOptions';
import { sendNewUserInfo } from '../../store/slices/userSlice';
import defaultImage from '../../images/defaultAvatar.png';
import Button from '../../components/Button';
import Loader from '../../components/Loader';

const ProfilePage = () => {
    const dispatch = useDispatch();
    const { user, loading } = useSelector((s) => s.user);
    const [showForm, setShowForm] = useState(false);
    const [prefillingImage, setPrefillingImage] = useState('');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onSubmit' });

    const setNewUserInfo = (newUserInfo) => {
        dispatch(sendNewUserInfo(newUserInfo)).then(() => {
            setShowForm(false);
        });
    };

    useEffect(() => {
        setPrefillingImage(user.avatar);
    }, [user]);

    return (
        <div className='profilePage'>
            <BackBtn />
            <h1>Профиль</h1>
            {loading ? <Loader /> : <><div className='profilePage__container'>
                <div className='profilePage__avatar-wrapper'>
                    <img className='profilePage__avatar' src={user.avatar} alt='defaultAvatar' />
                </div>
                <div className='profilePage__userInfo-wrapper'>
                    <div className='profilePage__userInfo'>
                        <h2>{user.name}</h2>
                        <span>{user.email}</span>
                        <span>{user.about}</span>
                    </div>
                    <Button
                        className={'base-btn secondary fit'}
                        onClick={() => setShowForm((s) => !s)}
                    >
                        Изменить
                    </Button>
                </div>
            </div>
            {showForm && (
                <form className='profilePage__form' onSubmit={handleSubmit(setNewUserInfo)}>
                    <input
                        className={errors.name ? 'input error' : 'input'}
                        type='text'
                        {...register('name', nameOptions)}
                        placeholder='Имя'
                        defaultValue={user.name}
                    />
                    {errors.name && <span className='error__message'>{errors.name.message}</span>}
                    <input
                        className={errors.about ? 'input error' : 'input'}
                        type='text'
                        {...register('about', aboutOptions)}
                        placeholder='О себе'
                        defaultValue={user.about}
                    />
                    {errors.about && <span className='error__message'>{errors.about.message}</span>}
                    <div className='profilePage__avatar-wrapper'>
                        <img
                            className='profilePage__avatar'
                            src={prefillingImage}
                            alt='avatar'
                            onError={(e) => (e.target.src = defaultImage)}
                        />
                    </div>
                    <input
                        className={errors.avatar ? 'input error' : 'input'}
                        type='text'
                        {...register('avatar', avatarOptions)}
                        placeholder='example.com/avatar.jpg'
                        defaultValue={user.avatar}
                        onChange={(e) => setPrefillingImage(e.target.value)}
                    />
                    {errors.avatar && (
                        <span className='error__message'>{errors.avatar.message}</span>
                    )}
                    <Button className={'base-btn secondary fit'} type={'submit'}>
                        Сохранить
                    </Button>
                </form>
            )}</>}
        </div>
    );
};

export default ProfilePage;
