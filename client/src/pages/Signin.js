import React, { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import {
  signInStart,
  signInSuccess,
  signInFailure
} from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import OAuth from '../components/OAuth';

export default function Signin() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/server/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data));
        return;
      }
      dispatch(signInSuccess(data));
      if (window.history.length > 1) {
        navigate(-1);
      } else {
        navigate('/');
      }
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };

  const handleClose = () => {
      navigate('/');
  };

  return (
    <div className="bg">
      <div className="container">
      <button onClick={handleClose} className="close-button">X</button>
        <h1 className="title">Sign In</h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="email"
            placeholder="Email"
            id="email"
            className="input"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            className="input"
            onChange={handleChange}
          />
          <button disabled={loading} className="button">
            {loading ? "Loading..." : "Sign In"}
          </button>
          <OAuth/>
        </form>
        <div className="account-link">
          <p>Don&apos;t have an account?</p>
          <Link to="/sign-up">
            <span className="sign-in-link">Sign up</span>
          </Link>
        </div>
        <p className="error">{error ? error.message || 'Something went wrong!' : ''}</p>
      </div>
    </div>
  );
}
