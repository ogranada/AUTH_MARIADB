
const express = require('express');
const jwt = require('jsonwebtoken');
const { validarUsuario } = require('./db');

const TOKEN_KEY = 'mimamamemima123';

function checkAuth(request, response, next) {
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

function authenticate(request, response) {
  if (request.body.username && request.body.password) {
    const user = validarUsuario(request.body.username, request.body.password);
    if (user) {
      response.status(200).json({
        token: jwt.sign(user, TOKEN_KEY)
      })
    } else {
      response.status(403).send('Credenciales invalidas.')
    }
  }
}

function main() {

	const server = express();
	server.use(express.json());

	server.get('/', (request, response) => {
		response.send('Hello, this is an example...');
	})

	server.get('/private', checkAuth, (request, response) => {
		response.send('Si ves esto es por que estas logueado...');
	})

	server.post('/login', authenticate);

	server.listen(8080, () => {
		console.log('Ready for the action!...');
	})

}

/*

O -> IN -> S -> Node -> E( MIDDL -> HANDLER )

*/


main();
