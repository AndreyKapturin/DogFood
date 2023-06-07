import React from 'react';
import './style.scss';

const Button = ({children, className, onClick=() => {}, type='button'}) => {
    return <button className={className} onClick={onClick} type={type}>{children}</button>;
};

export default Button;
