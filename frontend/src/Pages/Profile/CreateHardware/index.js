import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../services/api';

import './style.css';


export default function CreateHardware() {

    const [ hardware, setHardware ] = useState({
        model: "", 
        ram: "", 
        clock: "", 
        driver: "", 
        memoryType: "",
        powerSupply: ""
    });

    async function handleCreation(e) {
        e.preventDefault();
        
        try {
            await api.post('/profile/create', { hardware });
        }
        catch (err) {
            alert(err.stack);
        }
    }
    
    function prepareArray(e) {
        const data = e.target.value;
        setHardware({
            ...hardware,
            [e.target.name]: data  
        })
    }

    return(
        <div className = "container">

            <div className = 'container-box-menu'>
                <h1>Menu</h1>
                <Link to = "/profile/saved">Saved</Link>
                <Link to = "/">Compare</Link>
                <Link to = "/store">Store</Link>
                <Link to = "/reviews">Reviews</Link>
                <Link to = "#">Create</Link>
            </div>

            <section className = "form">
                <h1>Create the Hardware</h1>

                <form onSubmit = {handleCreation}>
                    <input type = "text" 
                        required = "required"
                        placeholder = "Model"
                        name = "model"
                        value = {hardware.model}
                        onChange = {prepareArray}
                    />

                    <input type = "text" 
                        required = "required"
                        placeholder = "RAM"
                        name = "ram"
                        value = {hardware.ram}
                        onChange = {prepareArray}
                    />
                    
                    <input type = "text" 
                        required = "required"
                        placeholder = "Clock"
                        name = "clock"
                        value = {hardware.clock}
                        onChange = {prepareArray}
                    />
                    
                    <input type = "text"
                        required = "required"
                        placeholder = "Last driver"
                        name = "driver"
                        value = {hardware.driver}
                        onChange = {prepareArray}
                    />
                    
                    <input type = "text" 
                        required = "required"
                        placeholder = "Memory type"
                        name = "memoryType"
                        value = {hardware.memoryType}
                        onChange = {prepareArray}
                    />
                    
                    <input type = "text" 
                        required = "required"
                        placeholder = "Power supply"
                        name = "powerSupply"
                        value = {hardware.powerSupply}
                        onChange = {prepareArray}
                    />

                    <button type = "submit">Create</button>
                </form>
            </section>
        </div>

    );

}