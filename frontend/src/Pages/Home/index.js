import React, {useState, useEffect } from 'react';
import Select, { components } from 'react-select';
import options from './options';

import api from '../../services/api';

import './style.css';

export default function Home() { 
    const [ selectedLeft, setSelectedLeft ] = useState({});
    const [ selectedRight, setSelectedRight ] = useState({});

    const[ hardware, setHardware ] = useState({
        ramLeft: "",
        clockLeft: "",
        driverLeft: "",
        memoryTypeLeft: "",
        powerSupplyLeft: "",
        
        ramRight: "",
        clockRight: "",
        driverRight: "",
        memoryTypeRight: "",
        powerSupplyRight: "",
    });

    const [ ramLeft, setRamLeft ] = useState([]);
    const [ clockLeft, setClockLeft ] = useState([]);
    const [ driverLeft, setDriverLeft ] = useState([]);
    const [ memoryTypeLeft, setMemoryTypeLeft ] = useState([]);
    const [ powerSupplyLeft, setPowerSupplyLeft ] = useState([]);

    const [ ramRight, setRamRight ] = useState([]);
    const [ clockRight, setClockRight ] = useState([]);
    const [ driverRight, setDriverRight ] = useState([]);
    const [ memoryTypeRight, setMemoryTypeRight ] = useState([]);
    const [ powerSupplyRight, setPowerSupplyRight ] = useState([]);

    useEffect(() => {
        
        const select = selectedLeft;
        console.log(select);

        api.post('info', {select}).then(response => {
            response.data.map( hardware => {
                setHardware(hardware.ram)
                setHardware(hardware.clock)
                setHardware(hardware.driver)
                setHardware(hardware.memoryType)
                setHardware(hardware.powerSupply)
            })
        })
    },[selectedLeft])


/*
    useEffect(() => {
        const selection = selected.right;

        api.post('info', {selected}).then(response => {
            response.data.map( hardware => {
                setRamRight(hardware.ram)
                setClockRight(hardware.clock)
                setDriverRight(hardware.driver)
                setMemoryTypeRight(hardware.memoryType)
                setPowerSupplyRight(hardware.powerSupply)
            })

            console.log(response.data);
        })
    },[selected])  
*/      
    return(
        <div className = "wrapper">
            <div className = "container">

                <div className = "main-board">
                    <label>VS</label>

                    <table className = "table">
                        <tr>
                            <td>{selectedLeft.value}</td>
                            <td>Model</td>
                            <td>{selectedRight.value}</td>
                        </tr>
                        <tr>   
                            <td>{ hardware.ramLeft }</td>
                            <td>RAM</td>
                            <td>{ramRight}</td>
                        </tr>
                        <tr>
                            <td>{hardware.clockLeft}</td>
                            <td>Clock</td>
                            <td>{clockRight}</td>
                        </tr>
                        <tr>    
                            <td>{hardware.driverLeft}</td>
                            <td>Driver</td>
                            <td>{driverRight}</td>
                        </tr>
                        <tr>    
                            <td>{hardware.memoryTypeLeft}</td>
                            <td>Memory type</td>
                            <td>{memoryTypeRight}</td>
                        </tr>
                        <tr className = "last-tr">    
                            <td>{hardware.powerSupplyLeft}</td>
                            <td>Power Supply</td>
                            <td>{powerSupplyRight}</td>
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
                    />
                </div>
                
                <div className = "right-board">
                    <label>Hardware 2</label>
                </div>
                <div className = "input-background-right">
                    <Select className = "select-right" options = {options} 
                    onChange = {setSelectedRight}
                    placeholder = "Select an option"
                    />
                </div>

            </div>
        </div>
    );
}

/*
 {hardwareInfoLeft.map( hardwareLeft => (
                            hardwareInfoRight.map(hardwareRight => (

    ))
                        ))}
                                */