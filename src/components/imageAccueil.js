import React from 'react';
import img1 from '../images/IMG1.png';
import './imageAccueil.css'


function ImageAccueil() {
    return (
        <div className='image-accueil'> 
            <p>Chez vous, partout et ailleurs</p>
            
            < img className="AccueilIMG" src={img1} alt="logo-kasa"/>
      
        </div>
    );
};

export default ImageAccueil;