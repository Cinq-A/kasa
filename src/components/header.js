import React from 'react';
import logo from '../images/LOGO.png';
import './header.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';


function Header () {
    return (
        <div className='header'>
           < img src={logo} alt="logo-kasa"/>
          
           <div className='liens'>
           
            <p><Link to="/">Accueil</Link></p>
            <p><Link to="/apropos">À Propos</Link></p>

           
        
           </div> 
          
        </div>
    );
};

export default Header;