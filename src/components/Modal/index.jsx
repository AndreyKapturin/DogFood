import React, { useEffect } from 'react';
import './style.scss';
import { useLocation, useNavigate } from 'react-router-dom';
const Modal = ({ showModal, setShowModal, children }) => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (
            location.pathname === '/registration' ||
            location.pathname === '/logIn' ||
            location.pathname === '/forgot-password'
        ) {
            setShowModal(true);
        }
    }, [location, setShowModal]);

    const modalClose = () => {
        setShowModal(false);
        navigate('/catalog');
    };

    return (
        <div className={`modal ${showModal ? 'active' : ''}`}>
            <div className='modal__content'>
                <span onClick={() => modalClose()} className='modal__closer'>
                    X
                </span>
                {children}
            </div>
        </div>
    );
};

export default Modal;
