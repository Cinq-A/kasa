import React from 'react';
import LogoNoirEtBlanc from '../images/LOGONoirEtBlanc.png';
import './footer.css';
function Footer() {
    return (
        <div className='footer'>
            <img src={LogoNoirEtBlanc}></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;