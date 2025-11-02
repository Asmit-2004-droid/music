import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import "./Upload.css";
const Upload = ({ onUpload }) => {
  const [songName, setSongName] = useState("");
  const [artist, setArtist] = useState("");
  const [audioFile, setAudioFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!audioFile || !imageFile || !songName || !artist) {
      alert("Please fill all fields");
      return;
    }

    const newSong = {
      title: songName,
      artist: artist,
      src: URL.createObjectURL(audioFile),
      img: URL.createObjectURL(imageFile)
    };

    onUpload(newSong);
    alert(" Song Uploaded Successfully!");
    navigate("/");
  };

  return (
    <div className="upload-page">
      <div className="upload-box">
      <h2>Upload Your Music</h2>
    <p className="subtitle">Enter your details </p>
      
      <form onSubmit={handleSubmit}>
        <label>Track Name</label>
        <input type="text" placeholder="Song Name" onChange={(e) => setSongName(e.target.value)} />
        <br/>

        <label>Artist Name</label>
        <input type="text" placeholder="Artist Name" onChange={(e) => setArtist(e.target.value)} />
        <br/>

        <label>Upload Music</label>
        <input type="file" accept="audio/*" onChange={(e) => setAudioFile(e.target.files[0])} />
        <br/>

        <label>Upload Cover Image</label>
        <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} />
        <br/>
        <button type="submit-btn">Upload </button>
      </form>

        <button className="back-btn"
        onClick={()=>navigate("/Listen Now")}> Back to Player</button>
      
      </div>
    </div>
  );
};

export default Upload;
