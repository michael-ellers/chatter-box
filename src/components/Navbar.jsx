import React, { useContext } from 'react'
import Profile from '../img/sample_profile_image_michael_ellers.jpg';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const {currentUser} = useContext(AuthContext);

  return (
    <div className="navbar">
        <span className="logo">Chatter Box</span>
        <div className="user">
            <img src={currentUser.photoURL} alt="" />
            <span>{currentUser.displayName}</span>
            <button onClick={() => signOut(auth)}>Logout</button>
        </div>
    </div>
  )
}

export default Navbar