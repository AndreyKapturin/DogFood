import React, { memo } from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import { removeNotification } from '../../store/slices/notificationSlice';
import { CheckCircle, ExclamationCircle } from 'react-bootstrap-icons';

export const Notificator = memo(({ type, message, id }) => {
    const dispatch = useDispatch();
    setTimeout(() => {
        dispatch(removeNotification(id));
    }, 4000);

    return (
        <div className='notificator'>
            <div className='notificator__icon-wrapper'>
                {type === 'success' ? (
                    <CheckCircle fill='green' />
                ) : (
                    <ExclamationCircle fill='red' />
                )}
            </div>
            <div className='notificator__message-wrapper'>
                <h4>{message}</h4>
            </div>
            <span className='notificator__closer' onClick={() => dispatch(removeNotification(id))}>
                X
            </span>
        </div>
    );
});
