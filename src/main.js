
const express = require('express');
const dotenv = require('dotenv');
const { connect } = require('./database/db');

const baseRouter = require('./routers/base');

const TOKEN_KEY = 'mimamamemima123';

async function main() {
  dotenv.config();
  await connect();
	const server = express();
	server.use(express.json());
  server.use('/', baseRouter.router);
	server.listen(8080, () => {
		console.log('Ready for the action!...');
	})
}

/*

O -> IN -> S -> Node -> E( MIDDL -> HANDLER )

*/


main();
