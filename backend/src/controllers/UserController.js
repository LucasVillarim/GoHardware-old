const express = require('express');
const Users = require('../model/user');
const createUserToken = require('../services/token');

module.exports = {

    async indexUser( request, response ) {
        try {
            const users = await Users.find({});
            return response.send(users);

        } catch ( err ) {
            return response.status(500).send({ error: 'Erro na consulta de usuários.' });
        }
    },

    async createUser( request, response ) {

        const { email, password } = request.body;

        if ( !email || !password ) return response.status(400).send({ error: 'Dados insuficientes.' });
        
        try {
            if ( await Users.findOne( {email} )) return response.send({ error: 'Usuário já registrado' });
        
            const user = await Users.create(request.body);
            user.password = undefined;
            return response.send(user);
            
        } catch ( err ) {
            console.log(err.stack);
            return response.send({ error: 'Error ao criar usuário.' });
        }
    }
}