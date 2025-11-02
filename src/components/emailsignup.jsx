import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Emailsignup() {
  const [data, setData] = useState({ username: "", email: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/auth/signup", data);
    setMsg(res.data.message);
    if(res.data.message === "Signup successful"){
      navigate("/Continue with email");
    }
  };

  return (
    <div className="login-container">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input placeholder="Username" onChange={(e)=>setData({...data, username:e.target.value})}/>
        <input placeholder="Email" onChange={(e)=>setData({...data, email:e.target.value})}/>
        <input type="password" placeholder="Password" onChange={(e)=>setData({...data, password:e.target.value})}/>
        <button type="submit" className="login-btn">Sign Up</button>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
}
export default Emailsignup;
