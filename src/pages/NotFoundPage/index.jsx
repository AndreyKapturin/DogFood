import React from 'react';
import './style.scss';
import NotFound from '../../components/NotFound';

const NotFoundPage = () => {
    return (
        <div className='notFoundPage'>
            <NotFound
                text='Ошибка 404. Страницы по такому адресу не существует'
                buttonText='На главную'
                buttonPath='/'
            />
        </div>
    );
};

export default NotFoundPage;
