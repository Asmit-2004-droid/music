import React,{useState} from "react";
import "./Login.css";
import { IoMusicalNote } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
 function Login() {
  const navigate = useNavigate();

   const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validUser = "music";
  const validPass = "verse123";

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === validUser && password === validPass) {
      localStorage.setItem("isLoggedIn", true);
      navigate("/Guest"); 
    } else {
      setError(" Invalid Username or Password");
    }
  };
  return (
    <div className="login-container">
      <div className="music-icon"><IoMusicalNote /></div>
      <h1 className="login-title">Log in to musicverse</h1>

      <form className="login-form"  onSubmit={handleLogin} >
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="Enter your username"
        onChange={(e) => setUsername(e.target.value)} />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" 
        onChange={(e) => setPassword(e.target.value)}/>
        {error && <p className="error-text">{error}</p>}
        <button className="forgot-password">
          Forgot Password
        </button>

        <button type="submit" className="login-btn"
        >Log In</button>
      </form>

      <p className="signup-text">
        Don’t have an account? <br />
        <button className="signup-link" 
        onClick={()=>navigate("/Sign up for free")}
        >Sign up</button>
      </p>
    </div>
  );
}
export default Login;





