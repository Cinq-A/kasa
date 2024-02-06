import React from 'react';
import './Error404.css';
import { Link } from 'react-router-dom';
const Error404 = () => {
    return (
        <div className='page404'>
          
       
            
            <div className='messageError'>
               <h1>404</h1>
               <p> Oups! La page que vous demandez n'existe pas.</p>
               <p><Link to="/">Retourner sur la page d’accueil</Link></p>
            </div>
        
        </div>
    );
};

export default Error404;