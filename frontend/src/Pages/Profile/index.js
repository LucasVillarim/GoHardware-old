import React from 'react';

import './style.css';

export default function Profile() {
    return(
        <div className = 'container'>

            <div className = 'container-box-left'>
                <h1>Menu</h1>
                <button>Button 1</button>
                <button>Button 1</button>
                <button>Button 1</button>
                <button>Button 1</button>
                <button>Button 1</button>
            </div>

            <div className = 'container-box-right'>
                <h1>Control Panel</h1>

                <div className = "last-comparison-box">
                    <label className = "title">Last Comparison:</label>
                    <label>Hardware X</label>
                    <label>Hardware Y</label>

                    <div className = "glass-detail1"></div>
                    <div className = "glass-detail2"></div>
                </div>

                <div className = "hardware-data-box">
                    <label>Specifications</label>
                    <label>Brand Name</label>
                    <label>Hardware X</label>
                    <label>VRAM</label>
                    <label>Clock</label>
                    <label>Power demand</label>
                </div>
            </div>

        </div>
    );
}