import React from 'react';
import { FiPower } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import './style.css';

export default function Header() {

    return(
        <div className = "header">
            <Link to = "/" className = "main-logo">GoHardware</Link>

            <Link to = "/sobre" className = "sobre">Sobre</Link>

            <Link to = "/login" className = "login"><strong>LogIn</strong></Link>
            <button className = "exit"><FiPower size = {26} color = "#c4c4c4"/></button>
        </div>
    );
}