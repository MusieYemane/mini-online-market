import React, { useRef, useEffect } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { Navigate } from "react-router-dom";
import { login } from "../../redux/actions/auth";
import { BUYER, SELLER } from "../../helper/constants"

const LoginComponent = (props) => {
  const authState = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const formData = useRef();

  const loginHandler = (event) => {
    event.preventDefault();
    const credintial = {
      username: formData.current.username.value,
      password: formData.current.password.value,
    };

    if (credintial.username && credintial.password) {
      dispatch(login(credintial.username, credintial.password)).then((user) => {

        document.getElementById('login-bttun').classList.add('hidden');
        document.getElementById('logout-bttun').classList.remove('hidden');
        
        document.getElementById('logout-bttun').onclick = (event) => {
          localStorage.removeItem("user");
          document.getElementById('login-bttun').classList.remove('hidden');
          document.getElementById('logout-bttun').classList.add('hidden');
        };

        if (user.authorities[0].authority == SELLER) navigate("/seller-profile");
        else if (user.authorities[0].authority == BUYER) navigate("/buyer-profile");
        else navigate("/");
      });
    }
  };

    // useEffect(() => {
    //   if (authState.isLoggedIn) navigate("/seller-profile");
    // }, [authState.isLoggedIn]);

  if (authState.isLoggedIn) return <Navigate to="/seller-profile" />;

  return (
    <div className="login">
      <form ref={formData} onSubmit={loginHandler}>
        <h2>Login</h2>

        <div>
          <label htmlFor="username" className="label">
            Name
          </label>
          <br></br>
          <input
            type="text"
            placeholder="Enter username"
            name="username"
            id="username"
          />
        </div>

        <div>
          <label htmlFor="password" className="label">
            Password
          </label>
          <br></br>
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
          />
        </div>

        <div className="btn">
          <button type="submit">Login</button> &nbsp;
          <Link to="/register" className="button">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;
