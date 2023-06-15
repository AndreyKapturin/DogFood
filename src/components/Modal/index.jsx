import React, { useEffect, useState } from 'react';
import './style.scss';
import { useLocation } from 'react-router-dom';
const Modal = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (
            location.pathname === '/registration' ||
            location.pathname === '/login' ||
            location.pathname === '/forgot-password' ||
            location.pathname === '/password-reset'
        ) {
            setShowModal(true);
        }
    }, [location, setShowModal]);

    return (
        <div className={showModal ? 'modal active' : 'modal'}>
            <div className='modal__content'>
                {children}
            </div>
        </div>
    );
};

export default Modal;
