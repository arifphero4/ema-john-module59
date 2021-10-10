import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle} = useAuth();
    return (
        <div className="login-form">
            <div>
            <h2>Login</h2>
            <form onSubmit="">
                <input type="email" name="" id="" placeholder="your email" />
                <br />
                <input type="password" name="" id="" /><br />
                <input type="submit" value="Submit" />
            </form>
            <p>new to ema-jhon? <Link to="/register">Create Account</Link></p>
            <div>----------or-----------</div>
            <button
                onClick={signInUsingGoogle}
                 className="btn-regular">Google Sign In</button>

        </div>
        </div>
    );
};

export default Login;