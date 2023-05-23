import React, { useContext, useEffect } from 'react';
import './style.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
const Modal = ({ children }) => {
    const {showModal, setShowModal} = useContext(AppContext);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (
            location.pathname === '/registration' ||
            location.pathname === '/logIn' ||
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
