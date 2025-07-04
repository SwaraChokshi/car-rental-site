import React from "react";
import "../styles/Register/register.css"; // make sure the path matches your folder name

function Register() {
  return (
    <div className="register-page-wrapper">
      <div className="register-container">
        <h2>Register</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
