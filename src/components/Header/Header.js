import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    const [user] = useAuthState(auth);
    if(user){
        console.log(user)
    }

    return (
        <nav className='header-nav'>
            <img src={logo} alt="" />
            <div className='header-links'>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user ? <button className="logout-btn" onClick={() => signOut(auth)}>Log Out</button> : <Link to="/login">Login</Link>
                }
                
            </div>
        </nav>
    );
};

export default Header;