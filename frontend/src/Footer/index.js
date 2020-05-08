import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import logoInstagram from '../assets/instagramLogo.svg';
import logoTwitter from '../assets/twitterLogo.svg';
import logoFacebook from '../assets/facebookLogo.svg';
import logoContact from '../assets/contactLogo.svg';

export default function Footer () {

    return(
        <div className = "footer">
            
            <span className = "copyright">GoHardware Copyright.</span>
            <span className = "logo">GoHardware</span>

            <Link to = "">
                <img className = "contact" src = {logoContact} alt = "Contact" />
                Contact
            </Link>
            
            <Link to = "">
                <img src = {logoTwitter} alt = "Twitter" />    
                Twitter
            </Link>
            
            <Link to = "">
                <img src = {logoInstagram} alt = "Instagram" />
                <span>Instagram</span>
            </Link>
            
            <Link to = "">
                <img src = {logoFacebook} alt = "Facebook" />
                Facebook
            </Link>

        </div>

    );

}