import React from 'react';
import { Link } from 'react-router-dom';

import './Register.css';

const Register = () => {
    // const { signInUsingGoogle } = useFirebase();
    return (
        <div className="login-form">
            <div>
                <h2>Register : Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email" /><br />
                    <input type="password" name="" id="" placeholder="Create Password" /><br />
                    <input type="password" name="" id="" placeholder="Re-enter Password" /><br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an Account <Link to="/login">Login</Link></p>
                <button
                    // onClick={signInUsingGoogle}
                    className="btn-regular">Sign up with Google</button>
            </div>
        </div>
    );
};

export default Register;