import React from "react";
import "../styles/SignIn/signin.css";

function SignIn() {
  return (
    <div className="signin-page-wrapper">
      <div className="signin-container">
        <h2>Sign In</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
