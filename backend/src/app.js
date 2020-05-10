const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/config');
const cors = require('cors');


const url = config.bd_string;
const options = { poolSize: 5, useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(url, options);
mongoose.set('useCreateIndex', true);

mongoose.connection.on('error', (err) => {
    console.log('Erro na conexão com o banco de dados' + err);
})

mongoose.connection.on('disconnected', () => {
    console.log('Aplicação desconectada do banco de dados!');
})

//Body Parser

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const usersRoute = require('./Routes/users');

app.use(cors());
app.use(usersRoute);

app.listen(3333);

module.exports = app;