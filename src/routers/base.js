const express = require('express');
const { checkAuth, authenticate } = require('../middlewares/auth');


const router = express.Router()

router.get('/', (request, response) => {
    response.send('Hello, this is an example...');
})

router.get('/private', checkAuth, (request, response) => {
    response.send('Si ves esto es por que estas logueado...');
})

router.post('/login', authenticate, (request, response) => {
    response.status(200).send(request.user);
});

module.exports = {
    router
};
