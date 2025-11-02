import React from 'react'
import "./setting.css"
import { useNavigate } from 'react-router-dom'
function Setting () {
    const navigate =useNavigate();
  return (
    <div className="settings-container">
        <button className="back-button" onClick={()=>navigate(-1)}>X</button>
      <div className="settings-header">
        <h2>Settings</h2>
      </div>

      <div className="settings-section">
        <div className="settings-item">
          <h3>Mobile Data</h3>
          <p>501 MB used by musicverse this month</p>
        </div>

        <div className="settings-item">
          <h3>Storage</h3>
          <p>232 MB used by musicverse</p>
        </div>

        <div className="settings-item">
          <h3>Audio Settings</h3>
          <p>Audio quality: basic</p>
        </div>

        <div className="settings-item">
          <h3>Download Settings</h3>
          <p>Downloading over mobile network only</p>
        </div>

        <div className="settings-item">
          <h3>Account</h3>
          <p>Free account</p>
        </div>

        <div className="settings-item">
          <h3>About</h3>
          <p>Musicverse version 1.9.0.72402</p>
        </div>
      </div>
        
      
    </div>
  )
}

export default Setting
