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
                <Link to = "#">Create Hardware</Link>
            </div>

            <div className = 'container-box-right'>
            <div className = "glass-background2"></div>

                <h1>Control Panel</h1>

                <div className = "last-comparison-box">
                    <label className = "title">Last Comparison:</label>
                    <label>Hardware X</label>
                    <label>Hardware Y</label>

                    <div className = "glass-background1"></div>
                    <div className = "glass-detail1"></div>
                    <div className = "glass-detail2"></div>
                </div>

                <div className = "hardware-data-box">
                    <label>Specifications : Lorem ipsum</label>
                    <label>Brand Name : Lorem ipsum</label>
                    <label>Hardware X : Lorem ipsum</label>
                    <label>VRAM : Lorem ipsum</label>
                    <label>Clock : Lorem ipsum</label>
                    <label>Power demand : 000W</label>
                
                    
                    <div className = "glass-detail1-box2"></div>
                </div>
            </div>
        </div>
    );
}