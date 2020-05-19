import React, {useState, useEffect } from 'react';
import Select, { components } from 'react-select';
import options from './options';

import api from '../../services/api';

import './style.css';

export default function Home() { 

    const [ fade, setFade ] = useState(false);
    const [ selectedLeft, setSelectedLeft ] = useState('');
    const [ selectedRight, setSelectedRight ] = useState('');
    const [ hardwareSpec, setHardwareSpec ] = useState({ 
        //left-side selection
        ramLeft: "",
        clockLeft: "",
        driverLeft: "",
        memoryTypeLeft: "",
        powerSupplyLeft: "",
        //Right-side selection
        ramRight: "",
        clockRight: "",
        driverRight: "",
        memoryTypeRight: "",
        powerSupplyRight: "",
    });
   
    useEffect(() => {
        if (selectedLeft === null) return;
        
        const selection = selectedLeft;

        api.post('info', { selection }).then(response => {
            response.data.map( hardware => {
                setHardwareSpec({ ...hardwareSpec, 
                    ramLeft:  hardware.ram,
                    clockLeft: hardware.clock,
                    driverLeft:hardware.driver,
                    memoryTypeLeft: hardware.memoryType,
                    powerSupplyLeft: hardware.powerSupply
                })
            })
        })
    }, [selectedLeft])
        
    useEffect(() => {
        if (selectedRight === null) return;

        const selection = selectedRight;
        
        api.post('info', { selection }).then(response => {
            response.data.map( hardware => {
                setHardwareSpec({ ...hardwareSpec, 
                    ramRight:  hardware.ram,
                    clockRight: hardware.clock,
                    driverRight:hardware.driver,
                    memoryTypeRight: hardware.memoryType,
                    powerSupplyRight: hardware.powerSupply
                })
            })
        })
    }, [selectedRight])
   
    return(
        <div className = "wrapper">
            <div className = "container">

                <div className = "main-board">
                    <label>VS</label>

                    <table className = "table">
                        <tr>
                            <td>{selectedLeft ? selectedLeft.value : ""}</td>
                            <td>Model</td>
                            <td>{selectedRight ? selectedRight.value : ""}</td>
                        </tr>
                        <tr>   
                            <td>{selectedLeft ? hardwareSpec.ramLeft : ""}</td>
                            <td>RAM</td>
                            <td>{selectedRight ? hardwareSpec.ramRight : ""}</td>
                        </tr>
                        <tr>
                            <td>{selectedLeft ? hardwareSpec.clockLeft : ""}</td>
                            <td>Clock</td>
                            <td>{selectedRight ? hardwareSpec.clockRight : ""}</td>
                        </tr>
                        <tr>    
                            <td>{selectedLeft ? hardwareSpec.driverLeft : ""}</td>
                            <td>Driver</td>
                            <td>{selectedRight ? hardwareSpec.driverRight : ""}</td>
                        </tr>
                        <tr>    
                            <td>{selectedLeft ? hardwareSpec.memoryTypeLeft : ""}</td>
                            <td>Memory type</td>
                            <td>{selectedRight ? hardwareSpec.memoryTypeRight : ""}</td>
                        </tr>
                        <tr className = "last-tr">    
                            <td>{selectedLeft ? hardwareSpec.powerSupplyLeft : ""}</td>
                            <td>Power Supply</td>
                            <td>{selectedRight ? hardwareSpec.powerSupplyRight : ""}</td>
                        </tr>
                    </table>
                </div>

                <div className = "small-board">
                    <label>Comparison</label>
                </div>
            
                <div className = "left-board">
                    <label>hardware 1</label>
                </div>
                <div className = "input-background-left">
                    <Select className = "select-left" options = {options} 
                    onChange = {setSelectedLeft}
                    placeholder = "Select an option"
                    isClearable
                    />
                </div>
                
                <div className = "right-board">
                    <label>Hardware 2</label>
                </div>
                <div className = "input-background-right">
                    <Select className = "select-right" options = {options} 
                    onChange = {setSelectedRight}
                    placeholder = "Select an option"
                    isClearable
                    />
                </div>

            </div>
        </div>
    );
}

/*

Junkyard

*/