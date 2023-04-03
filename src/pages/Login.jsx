import React, { useState } from 'react';
import Add from '../img/addAvatar.png';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const email = e.target[0].value;
      const password = e.target[1].value;
  
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/")
      } catch (err) {
        setErr(true);
      }
    };
    return (
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">Chatter Box</span>
          <span className="title">Login</span>
          <form onSubmit={handleSubmit}>
<<<<<<< HEAD
            <input type="email" placeholder="email" value="demo@demo.com"/>
            <input type="password" placeholder="password" value="Demo!123" />
=======
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
>>>>>>> fea70882fbed1d527d613b8a41466c9352f7f857
            <button>Sign in</button>
            {err && <span>Something went wrong</span>}
          </form>
          <p>New to Chatter Box? <Link to="/register">Register</Link></p>
        </div>
      </div>
    );
};

export default Login;