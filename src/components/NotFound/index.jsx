import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { EmojiFrown } from 'react-bootstrap-icons';

const NotFound = ({ text, buttonText, buttonPath }) => {
    return (
        <div className='notFound'>
            <EmojiFrown width='100' height='100' />
            <h2>{text}</h2>
            <Link to={buttonPath}>
                <button className='notFound__button'>{buttonText}</button>
            </Link>
        </div>
    );
};

export default NotFound;
