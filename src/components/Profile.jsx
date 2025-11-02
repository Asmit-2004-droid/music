import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaPowerOff } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();

  return (
    <div className="profile-wrapper">
      <div className="profile-header">
        <span>Your Profile</span>
        <div className="profile-icons">
          <FaPlus className="icon-btn" />
          <IoMdSettings className="icon-btn" onClick={() => navigate("/setting")} />
          <FaPowerOff className="icon-btn" onClick={() => navigate("/")} />
        </div>
      </div>

      <div className="profile-info">
        <img
          src="\musicverse-logo.png"
          alt="User Avatar"
          className="profile-avatar"
        />
        <h3>Music</h3>
        <p className="email">matheo24@gmail.com</p>
      </div>

      <div className="menu-list">
        {[
          { label: "Your Playlist", route: "/musicplayer" },
          { label: "Liked songs", route: "/liked" },
          { label: "View Your Upload Songs", route: "/uploadedsongs" },
          { label: "View Your Ai Playlist", route: "/aiplaylist" }].map((item, index) => (
          <div  key={index} 
    className="menu-box"
    onClick={() => navigate("/Listen Now")}
  >
    <span>{item.label}</span>
    <span>&gt;</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;