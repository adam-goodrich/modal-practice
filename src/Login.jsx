import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex-container">
      <div className="flex-child"></div>
      <div className="flex-child second-flex">
        <form className="log-in-form">
          <h1 className="login-title">Login</h1>
          <label for="username" className="username-label">
            Username
          </label>
          <br></br>
          <input
            type="text"
            placeholder="Username or Email"
            name="username"
            className="username-input"
            required></input>
          <br></br>
          <label for="password" className="password-label">
            <b>Password</b>
          </label>
          <br></br>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="password-input"
            required></input>
          <br></br>
          <Link to="/BlankContent">
            <button type="submit" className="login-btn">
              Sign In
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
