import React, { useRef, useEffect } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { storeActions } from "../../reduxStore/index";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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
      dispatch(storeActions.auth.login(credintial));
    }
  };

  useEffect(() => {
    if (authState.isAuthenticated) navigate("/seller-profile");
  }, [authState.isAuthenticated]);

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
