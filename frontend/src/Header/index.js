import React from 'react';
import { FiPower } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom';

import './style.css';

export default function Header() {

    const history = useHistory();
    const token = localStorage.getItem('jwt');

    async function handleLogout() {
        localStorage.clear();
        history.push('/');
    }
    
    return(
        <div className = "header">
            <Link to = "/" className = "main-logo">GoHardware</Link>

            <Link to = "/sobre" className = "sobre">Sobre</Link>

            { token ? "" : <Link to = "/login" className = "login"><strong>LogIn</strong></Link> }
            { token ? <button 
            className = "exit"
            onClick = {handleLogout}
            ><FiPower size = {26} color = "#c4c4c4"/></button> : "" }
        </div>
    );
}