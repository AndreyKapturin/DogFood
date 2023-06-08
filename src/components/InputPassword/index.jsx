import React, { useState } from 'react';
import './style.scss';
import { passwordOptions } from '../Forms/formOptions';
import { EyeFill, EyeSlashFill } from 'react-bootstrap-icons';


const InputPassword = ({errors, register}) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className='input__wrapper'>
            <input
                className={errors.password ? 'input error' : 'input'}
                type={showPassword ? 'text' : 'password'}
                {...register('password', passwordOptions)}
                placeholder='Пароль'
                autoComplete='true'
            />
            <span className='input__eye' onClick={() => setShowPassword((s) => !s)}>
                {showPassword ? <EyeFill /> : <EyeSlashFill />}
            </span>
        </div>
    );
};

export default InputPassword;