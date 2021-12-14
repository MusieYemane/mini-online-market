import React, { useRef, useState } from 'react';
import './Login.css';
import { useDispatch } from 'react-redux';
// import store, { authActions } from '../../reduxStore/index';
import axios from 'axios';
import store from '../../reduxStore';


function LoginComponent(props) {

    const [user, setUser] = useState({});

    const dispatch = useDispatch();
    const formData = useRef();

    const loginHandler = () => {
        const user = {
            email: formData.current.username.value,
            password: formData.current.password.value
        }
        dispatch(store.login(user));
    }

    const registerHandler = () => {
        const user = {
            email: formData.current.username.value,
            password: formData.current.password.value
        }
        dispatch(store.register(user));
    }

    return (

        <div className="login">

            <form ref={formData}>
                <h2>Login</h2>

                <div>
                    <label htmlFor='username' className="label">Name</label><br></br>
                    <input type="text" placeholder="Enter username" name="username" id="username" />
                </div>

                <div>
                    <label htmlFor='password' className="label">Password</label><br></br>
                    <input type="password" placeholder="Password" name="password" id="password" />
                </div>

                <div className="btn">
                    <button type='submit' onClick={() => loginHandler()}>
                        Login
                    </button> &nbsp;
                    <button type="submit" onClick={() => registerHandler()}>
                        Signup
                    </button><br></br>

                </div>


            </form>
        </div>
    )
}

export default LoginComponent;
