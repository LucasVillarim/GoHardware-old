import React from 'react';

import './style.css';

export default function Home() {
    return(
        <div className = "wrapper">
            <div className = "container">

                <div className = "main-board">
                    <label>Hardware 1 x Hardware 2</label>
                    <button className = "start">Start</button>
                </div>

                <div className = "small-board">
                    <label>Comparison</label>
                </div>
            
                <div className = "left-board">
                    <label>hardware 1</label>
                </div>
                <div className = "input-background-left">
                    <select type = "text" />
                </div>
                
                <div className = "right-board">
                    <label>Hardware 2</label>
                </div>
                <div className = "input-background-right">
                    <select type = "text" />
                </div>
            </div>
        </div>
    );
}