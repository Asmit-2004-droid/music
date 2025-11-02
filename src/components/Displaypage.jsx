import React from 'react'
import { IoMusicalNote } from "react-icons/io5";
import "./Displaypage.css"
import { useNavigate } from 'react-router-dom';
function Displaypage() {
  const navigate =useNavigate();
  return (
    <div className="display-container">
    <div className="musiclogo">
      <IoMusicalNote />
    </div>
    <div className="text">  
      <h1>
        Millions of songs <br /> Free on Musicverse
      </h1>
    </div>
      <div className="btn">
        <button className="btn1" 
        onClick={()=>navigate("/Sign up for free")}>
          Sign up for free
        </button>
        <button className="btn2"
        onClick={()=>navigate("/Log in")}>
          Log in
        </button>
      </div>
   
    </div>
  )
}

export default Displaypage
