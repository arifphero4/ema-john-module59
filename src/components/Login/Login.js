import React from 'react';
import './Login.css';
import { Link, useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        })

    }
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
                onClick={handleGoogleLogin}
                 className="btn-regular">Google Sign In</button>

        </div>
        </div>
    );
};

export default Login;