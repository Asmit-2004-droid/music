import React from "react";
import "./Navbar.css";
import { FaHome ,FaSearch} from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoIosSettings } from "react-icons/io";
import {useNavigate} from "react-router-dom"
function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="home-container">
    <nav className="navbar">
      <h1 className="logo">MusicVerse</h1>
      <ul className="nav-links">
        <li><FaHome /> Home</li>
        <li><FaSearch /> Discover</li>
        <li><div className="Profile"
         onClick={()=>navigate("/profile")}
         > <CgProfile />Profile</div></li>
        <li><div className="setting"
        onClick={()=>navigate("/setting")}
        ><IoIosSettings /> Settings</div></li>
      </ul>
    </nav>
     <section className="hero">
      <div className="hero-content">
        <h1>Feel the Beat. Live the Moment.</h1>
        <p>Stream your favorite tunes anytime, anywhere.<br/>Just with a click.</p>
        <button className="song-btn"
        onClick={()=>navigate("/Listen Now")}
        >Listen Now</button>
      </div>
    </section>
    </div>
  );
}

export default Navbar;
