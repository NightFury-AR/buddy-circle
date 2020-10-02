import React from 'react';
import '../login-page/login-page-style.scss';
import bg from '../../../assets/bg.svg';

import {LoginForm} from '../login-form/login-form.component';

export const LoginPage = () => {

    return (
        <div className="card-container">
            <div className="content-card">
                <div className="img-container">
                <img className='bg-image' src={bg} alt="back"/>
                </div>
                <div className="form-container">
                    <LoginForm/>
                </div>
            </div>
        </div>
    )
}