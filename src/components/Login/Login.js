import React from 'react';
import './Login.css';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle} = useAuth();
    const location = useLocation();
    console.log('came from', location.state?.from);
    return (
        <div className="login-form">
            <div>
            <h2>Login</h2>
            <form >
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