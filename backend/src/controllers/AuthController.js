const bcrypt = require('bcrypt');
const Users = require('../model/user');
const createUserToken = require('../services/token');

module.exports = {

    async authUser(request, response) {
        const { username, password } = request.body;


        if (!username || !password ) return response.send({ error: 'Dados insuficientes.' });

        try {
            const user = await Users.findOne({ username }).select('+password'); 
            if (!user) {
                 return response.status(400).send({ error: 'Usuário não registrado.' });
            } else {
                const pass_ok = await bcrypt.compare(password, user.password);        
                
                if (!pass_ok) return response.status(401).send({ error: 'Erro ao autenticar usuário.' });
            }

            user.password = undefined;
            return response.send({ user, token: createUserToken(user.id) });


        } catch (err) {
            return response.send({ error: 'Erro ao buscar usuário.' });
        }
    }
}