import React from "react";
import logo from '../Components/images/logo.png';
import profile from '../Components/images/profile.jfif';
import './navbar.css';

function Navbar() {
  
  return (
    <div >
    <nav className="navbar">
        
        <img src={logo} height={60} className="logo"/>
        <h4 className="sname">Ghazali Educational Complex</h4>
        <div className="profile-div">
        <h6 className="oname">Your Name Here</h6>
        <img src={profile} height={75} className="profilep"/>
        <div class="dropdown">
        <button class="dropbtn"><i class="fa-solid fa-angle-down"></i></button>
        <div class="dropdown-content">
        <a href="#">Your profile</a>
        <a href="#">Sign Out</a>
        </div>
        </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;