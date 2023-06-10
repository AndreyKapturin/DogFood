import React, { useEffect, useState } from 'react';
import './style.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { XLg } from 'react-bootstrap-icons';
const Modal = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
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

    const modalClose = () => {
        setShowModal(false);
        navigate('/catalog');
    };

    return (
        <div className={showModal ? 'modal active' : 'modal'}>
            <div className='modal__content'>
                <span onClick={modalClose} className='modal__closer'>
                    <XLg />
                </span>
                {children}
            </div>
        </div>
    );
};

export default Modal;
