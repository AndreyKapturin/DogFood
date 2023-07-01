import React, { useEffect, useState } from 'react';
import './style.scss';
import { useLocation } from 'react-router-dom';
import { allowedPaths } from '../../utilities/utilities';
const Modal = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (allowedPaths.includes(location.pathname)) {
            setShowModal(true);
        }
    }, [location, setShowModal]);

    return (
        <div className={showModal ? 'modal active' : 'modal'}>
            <div className='modal__content'>{children}</div>
        </div>
    );
};

export default Modal;
