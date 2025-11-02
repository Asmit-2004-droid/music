import React from "react";
import "./signup.css";
import { IoMusicalNote } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
 function Signup() {
  const navigate =useNavigate();
  return (
    <div className="login-container">
      <div className="music-icon">
        <IoMusicalNote />
      </div>
      <h1 className="login-title">Sign up to musicverse</h1>

      <button className="btn email-btn">
        <span><MdEmail />Continue with email</span>
      </button>

      <button className="btn guest-btn">
        <span className="icons" 
        onClick={()=>navigate("/Guest")}
        ><IoIosPhonePortrait />Continue as Guest</span>
      </button>
      <p className="login-text">
        Already have an account ?<br /><br/>
        <a href="#" className="login-link"
        onClick={()=>navigate("/Log in")}>
        Log in</a>
      </p>
    </div>
  );
}
export default Signup;
