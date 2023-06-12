import React, { memo } from 'react';
import './style.scss';
import { Notificator } from '../Notificator';

export const NotificationList = memo(({ notifications }) => {
    return (
        <div className='notificationList'>
            {notifications.map((e, i) => {
                return <Notificator type={e.type} message={e.message} id={e.id} key={i} />;
            })}
        </div>
    );
});
