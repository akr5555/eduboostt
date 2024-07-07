import React, { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import OAuth from '../components/OAuth';

export default function Signup() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/server/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
      navigate('/sign-in');
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  const handleClose = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      navigate('/');
    }// Navigates back to the previous page
  };

  return (
    <div className="bg">
      <div className="container">
      <button onClick={handleClose} className="close-button">X</button>
        <h1 className="title">Sign Up</h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="Username"
            id="username"
            className="input"
            onChange={handleChange}
          />
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
            minlength="8"
            onChange={handleChange}
          />
          <button disabled={loading} className="button">
            {loading ? "Loading..." : "Sign Up"}
          </button>
          <OAuth/>
        </form>
        <div className="account-link">
          <p>Have an account?</p>
          <Link to="/sign-in">
            <span className="sign-in-link">Sign in</span>
          </Link>
        </div>
        <p className="error">{error && "Something went wrong!"}</p>
      </div>
    </div>
  );
}
