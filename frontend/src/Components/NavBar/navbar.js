import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Styles from './navbar.module.css';
import { useSelector } from 'react-redux';
import ProfileImage from './ProfileImage';

const Navbar = () => {
  const userData = useSelector(state => state.userReducer);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={Styles['navbar']}>
      {/* Logo */}
      <img
        className={Styles['webLogo']}
        src="https://res.cloudinary.com/dvnza1g1p/image/upload/v1736442835/CropCare/blgd4we2wvplpkl2njb1.png"
        alt="Logo"
      />

      {/* Hamburger (only visible on small screens) */}
      <button className={Styles['hamburger']} onClick={() => setIsOpen(!isOpen)}>
        <span className={Styles['bar']}></span>
        <span className={Styles['bar']}></span>
        <span className={Styles['bar']}></span>
      </button>

      {/* Nav Links */}
      <ul className={`${Styles['navLinks']} ${isOpen ? Styles['open'] : ''}`}>
        {!userData.isLoggedIn && <li><NavLink className={Styles['navItem']} to="/home">Home</NavLink></li>}
        {!userData.isLoggedIn && <li><NavLink className={Styles['navItem']} to="/signup">Sign Up</NavLink></li>}
        {!userData.isLoggedIn && <li><NavLink className={Styles['navItem']} to="/login">Login</NavLink></li>}
        {userData.isLoggedIn && <li><NavLink className={Styles['navItem']} to="/detector">Detector</NavLink></li>}
        {userData.isLoggedIn && <li><NavLink className={Styles['navItem']} to="/chatBot">ChatBot</NavLink></li>}
        {userData.isLoggedIn && <li><NavLink className={Styles['navItem']} to="/logout">Logout</NavLink></li>}
      </ul>

      {/* Profile Section */}
      {userData.isLoggedIn && (
        <div className={Styles['profileSection']}>
          <ProfileImage imageUrl={userData.profileImage} />
          <p>{userData.name}</p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
