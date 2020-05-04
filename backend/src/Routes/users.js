const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

const UserController = require('../controllers/UserController');
const AuthController = require('../controllers/AuthController');

router.get('/', auth, UserController.indexUser);

router.post('/create', UserController.createUser);

router.post('/auth', AuthController.authUser);

module.exports = router;

