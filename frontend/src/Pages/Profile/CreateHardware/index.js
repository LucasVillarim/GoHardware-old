import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../services/api';

import './style.css';


export default function createHardware() {


    async function handleCreation(event) {
        event.preventDefault();
    }   

    return(
        <div className = "container">

            <div className = 'container-box-menu'>
                <h1>Menu</h1>
                <Link to = "/profile/saved">Saved</Link>
                <Link to = "/">Compare</Link>
                <Link to = "/store">Store</Link>
                <Link to = "/reviews">Reviews</Link>
                <Link to = "#">Create Hardware</Link>
            </div>

            <div className = "form">
                <form onSubmit = {handleCreation}>
                    <label>Model:</label>
                    <input type = "text" />

                    <label>Ram:</label>
                    <input type = "text" />
                    
                    <label>Clock:</label>
                    <input type = "text" />
                    
                    <label>Last Driver:</label>
                    <input type = "text" />
                    
                    <label>Memory Type:</label>
                    <input type = "text" />
                    
                    <label>Power Supply:</label>
                    <input type = "text" />

                    <button type = "submit">Create</button>
                </form>
            </div>
        </div>

    );

}