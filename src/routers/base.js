const express = require('express');
const { checkAuth, authenticate } = require('../middlewares/auth');
const { createUser } = require('../database/db');

const router = express.Router()

router.get('/', (request, response) => {
    response.send('Hello, this is an example...');
})

router.get('/private', checkAuth, (request, response) => {
    response.send('Si ves esto es por que estas logueado...');
})

router.post('/register', async (request, response) => {
    const {username, password} = request.body;
    const user = await createUser(username, password);
    response.json(user);
})

router.post('/login', authenticate, (request, response) => {
    response.status(200).send(request.user);
});

module.exports = {
    router
};
