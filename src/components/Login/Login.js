import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {

    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory([]);
    const redirect_url = location.state?.from || '/'
    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then((result) => {
                console.log(result);
                history.push(redirect_url);

            })
            .catch(err => {
                console.log(err.message);
            })
    }
    return (
        <div className="login-form">
            <div>
                <h2>Log In</h2>
                <form>
                    <input type="email" name="" id="" placeholder="Enter Email Address" />
                    <br />
                    <input type="password" name="" id="" placeholder="password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New User for Ema-John? <Link to="/register">Create Account</Link></p>
                <div>---------or-----------</div>
                <button className="btn-regular"
                    onClick={handleGoogleLogIn}
                >Sign up with Google</button>
            </div>
        </div>
    );
};

export default Login;