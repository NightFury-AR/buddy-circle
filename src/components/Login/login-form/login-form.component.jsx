import React from 'react';
import '../login-form/login-form.style.scss';


export const LoginForm = () => {

    return (
        <form className="login-form-container" action="">
             <div className="form-header">
                <h1>Sign-in</h1>
            </div>
            <div className="form-input">
                <label htmlFor="username"> Username </label>
                <input type="text" name="username" id='username'/>
            </div>
            <div className="form-input">
                <label htmlFor="password"> Password </label>
                <input type="password" name="password" id='password'/>
            </div>

            <div className="forgot-pwd">
                forgot password ?
            </div>

            <div className="form-btn">
                <button type="submit"> log-in </button>
            </div>

        </form>
    )
}