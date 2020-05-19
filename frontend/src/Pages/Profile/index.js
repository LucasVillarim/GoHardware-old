import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default function Profile() {
    return(
        <div className = 'container'>

            <div className = 'container-box-left'>
                <h1>Menu</h1>
                <Link to = "/profile/saved">Saved</Link>
                <Link to = "/">Compare</Link>
                <Link to = "/store">Store</Link>
                <Link to = "/reviews">Reviews</Link>
                <Link to = "/profile/create">Create</Link>
            </div>

            <div className = 'container-box-right'>
                <div className = "glass-background2"></div>

                <h1>Control Panel</h1>

                <div className = "last-comparison-box">
                    <label className = "title">Last Comparison:</label>
                    <label>Hardware X</label>
                    <label>Hardware Y</label>
                </div>

                <div className = "hardware-data-box">
                    <label>Specifications : Lorem ipsum</label>
                    <label>Brand Name : Lorem ipsum</label>
                    <label>Hardware X : Lorem ipsum</label>
                    <label>VRAM : Lorem ipsum</label>
                    <label>Clock : Lorem ipsum</label>
                    <label>Power demand : 000W</label>
                
                </div>
            </div>
        </div>
    );
}