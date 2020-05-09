import React, {useState} from 'react';
import Select from 'react-select';

import './style.css';

export default function Home() {

    const [ selectedLeft, setSelectedLeft ] = useState({});
    const [ selectedRight, setSelectedRight ] = useState({});
    const value1 = selectedLeft.value;
    const value2 = selectedRight.value;


    const optionsLeft = [
        {value: "", label: "None"},
        {value: "GTX 1060 6gb", label: "GTX 1060 6gb"},
        {value: "GTX 1070 8gb", label: "GTX 1070 8gb"},
        {value: "GTX 1080 12gb", label: "GTX 1080 12gb"}
    ];      

    const optionsRight = [
        {value: "", label: "None"},
        {value: "GTX 1060 6gb", label: "GTX 1060 6gb"},
        {value: "GTX 1070 8gb", label: "GTX 1070 8gb"},
        {value: "GTX 1080 12gb", label: "GTX 1080 12gb"},
        {value: "AMD Radeon VEGA", label: "AMD Radeon VEGA"}
    ];      
    
    return(
        <div className = "wrapper">
            <div className = "container">

                <div className = "main-board">
                    <label>Hardware 1 x Hardware 2</label>


                    <table className = "table">
                        <tr>
                            <td>{value1}</td>
                            <td>Model</td>
                            <td>{value2}</td>
                        </tr>
                        <tr>   
                            <td></td>
                            <td>RAM</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Clock</td>
                            <td></td>
                        </tr>
                        <tr>    
                            <td></td>
                            <td>Driver</td>
                            <td></td>
                        </tr>
                        <tr>    
                            <td></td>
                            <td>Memory type</td>
                            <td></td>
                        </tr>
                        <tr className = "last-tr">    
                            <td></td>
                            <td>Power Supply</td>
                            <td></td>
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
                    <Select className = "select-left" options = {optionsLeft} 
                    onChange = {setSelectedLeft}
                    placeholder = "Select an option"
                    />
                </div>
                
                <div className = "right-board">
                    <label>Hardware 2</label>
                </div>
                <div className = "input-background-right">
                    <Select className = "select-right" options = {optionsRight} 
                    onChange = {setSelectedRight}
                    placeholder = "Select an option"

                />
                </div>

            </div>
        </div>
    );
}

//Puxar no database todas as informações referentes a option (ex:. GTX 1060) na query deve conter 
//todos os atributos do hardware, posteriormente desestruturar a query e por nas células.

/* Maybe Deleted
                    <button className = "start">Start</button>
*/