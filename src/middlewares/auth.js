const jwt = require('jsonwebtoken');
const { validarUsuario } = require("../database/db");

function checkAuth(request, response, next) {
    const TOKEN_KEY = process.env.TOKEN_KEY;
    if (request.headers.authorization) {
        try {
            const data = jwt.verify(request.headers.authorization, TOKEN_KEY);
            if (data) {
                console.log(data);
                request.user = data;
                next();
            } else {
                response
                    .status(403)
                    .send('Su token es invalido >:P')
                    ;
            }
        } catch (error) {
            response
                .status(403)
                .send(`Su token es invalido (${error.message}) >:P`)
                ;
        }
    } else {
        response
            .status(403)
            .send('No esta autorizado >:P')
            ;
    }
}

async function authenticate(request, response, next) {
    const TOKEN_KEY = process.env.TOKEN_KEY;
    if (request.body.username && request.body.password) {
        const user = await validarUsuario(request.body.username, request.body.password);
        if (user) {
            request.user = {
                username: request.body.username,
                token: jwt.sign({
                    username: user.username
                }, TOKEN_KEY)
            }
            next()
        } else {
            response.status(403).send('Credenciales invalidas.')
        }
    }
}

module.exports = {
    checkAuth,
    authenticate
};