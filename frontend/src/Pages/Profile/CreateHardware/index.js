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

            <section className = "form">
                <form onSubmit = {handleCreation}>
                    <input type = "text" 
                        required = "required"
                        placeholder = "Model"
                    />

                    <input type = "text" 
                        required = "required"
                        placeholder = "RAM"
                    />
                    
                    <input type = "text" 
                        required = "required"
                        placeholder = "Clock"
                    />
                    
                    <input type = "text"
                        required = "required"
                        placeholder = "Last driver"
                    />
                    
                    <input type = "text" 
                        required = "required"
                        placeholder = "Memory type"
                    />
                    
                    <input type = "text" 
                        required = "required"
                        placeholder = "Power supply"
                    />

                    <button type = "submit">Create</button>
                </form>
            </section>
        </div>

    );

}