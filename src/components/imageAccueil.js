import React from 'react';
import img1 from '../images/IMG1.png';
import './imageAccueil.css'


function ImageAccueil() {
    return (
        <div>
            < img className="AccueilIMG" src={img1} alt="logo-kasa"/>
        </div>
    );
};

export default ImageAccueil;