import React from 'react';
import Header from './header';
import Footer from './Footer';
import './Error404.css';
import { Link } from 'react-router-dom';
const Error404 = () => {
    return (
        <div className='page404'>
          
            <Header/>
            
            <div className='messageError'>
               <h1>404</h1>
               <p> Oups! La page que vous demandez n'existe pas.</p>
               <p><Link to="/">Retourner sur la page d’accueil</Link></p>
            </div>
           <Footer/>
        </div>
    );
};

export default Error404;