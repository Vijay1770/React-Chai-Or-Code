import React from 'react'
import "./Connect.css"
import { useState } from 'react';
export const Connect = () => {
  const [action, setAction] = useState("Login");

  return (
    <div className="signup-container">
      <h2 className="signup-header">{action}</h2>

      <form className="signup-form">
        {/* Name Field */}

        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input-group">
            <i className="fas fa-user input-icon"></i>
            <input
              type="text"
              className="signup-input"
              placeholder="Name"
              required
            />
          </div>
        )}

        {/* Email Field */}
        <div className="input-group">
          <i className="fas fa-envelope input-icon"></i>
          <input
            type="email"
            className="signup-input"
            placeholder="Email"
            required
          />
        </div>

        {/* Password Field */}
        <div className="input-group">
          <i className="fas fa-lock input-icon"></i>
          <input
            type="password"
            className="signup-input"
            placeholder="Password"
            required
          />
        </div>

        {/* Buttons */}
        <div className="button-group">
          <button
            type="button"
            className={action === "Login" ? "btn gray" : " btn submit"}
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </button>
          <button
            type="submit"
            className={action === "Sign Up" ? "btn gray" : " btn submit"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};
