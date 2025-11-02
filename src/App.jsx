import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";
import "./index.css";
import Displaypage from "./components/Displaypage";
import Signup from "./components/signup";
import Login from "./components/Login";
import Setting from "./components/setting";
import Profile from "./components/Profile";
import Upload from "./components/Upload";
import defaultSongs from "./defaultSongs";
  
function App() {
  const [songs, setSongs] = useState([
    { title: "Watermelon Sugar", artist: "Harry Styles", img: "https://i.postimg.cc/kMp7Hnrw/watermelon.jpg", src:"/songs/song1.mp3" },
    { title: "Dark Side", artist: "Alan Walker", img: "https://i.postimg.cc/JzMBfGQJ/darkside.jpg", src:"/songs/song2.mp3" },
  ]);

  useEffect(() => {
    const storedSongs = localStorage.getItem("uploadedSongs");
    if (storedSongs) {
      setSongs([...defaultSongs, ...JSON.parse(storedSongs)]);
    }
  }, []);

  const handleUploadSong = (newSong) => {
    const updatedSongs = [...songs, newSong];
    setSongs(updatedSongs);
    localStorage.setItem(
      "uploadedSongs",
      JSON.stringify(updatedSongs.filter((s) => !defaultSongs.includes(s)))
    );
  };
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Displaypage/>}></Route>
          <Route path="/Log in" element={<Login/>}></Route>
          <Route path="/Sign up for free" element={<Signup/>}></Route>
          <Route path="/Guest" element={<Navbar/>}></Route>
          <Route path="/Setting" element={<Setting/>}></Route>
          <Route path="/Profile" element={<Profile/>}></Route>
           <Route path="/Listen Now" element={<MusicPlayer songs={songs} setSongs={setSongs} />} />
           <Route path="/Upload" element={<Upload onUpload={handleUploadSong}/>} />

        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
