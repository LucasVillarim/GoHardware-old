import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './style.css';

export default function Login() {
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();
        
        try{

            const response = await api.post('auth', {email, password}).then(
                response => {
                    localStorage.setItem('jwt', response.data.token);
                    localStorage.setItem('email', email);

                    history.push('/profile');
                }
            );
    
        } catch (err) {
            alert(err);         
        }
    }

    return(
        <div className = "container">
            <div className = "gif-box">
                <h1>Faça o seu login ou cadastre-se na GoHardware!</h1>
                <img src = {require('../../assets/Notebook.gif')} alt = "Login" />
            </div>
                
            <div className = "login-box">
                <form onSubmit = {handleLogin}>    
                    <label className = "label-usuario">Nome de Usuário/E-mail</label>
                    <input 
                    className = "input-usuario" 
                    type = "text" 
                    placeholder = "Digite seu nome aqui" 
                    required = "required" 
                    onChange = {e => setEmail(e.target.value)}
                    />
                    
                    <label className = "label-password">Password</label>
                    <input 
                    className = "input-password" 
                    type = "password" 
                    placeholder = "Digite sua senha aqui" 
                    required = "required"
                    onChange = {e => setPassword(e.target.value)}
                    />

                    <button type = "submit">Enter</button>
                
                    <Link className = "link" to = '/'>Ainda não é cadastrado? Clique aqui!</Link>
                </form>
            </div>     
        </div>
    );
}