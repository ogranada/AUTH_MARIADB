const mongoose = require('mongoose');
const { createModel } = require('./models/users');

let _database = null;

const models = {};

async function validarUsuario(username, password) {
  const User = models.User;
  const user = await User.findOne({
    username,
    password
  });
  return user;
}

async function createUser(username, password) {
  const user = new models.User({
    username, password
  });
  const saved = await user.save();
  return saved;
}

async function connect(params) {
  const host = process.env.DB_HOST;
  const port = process.env.DB_PORT;
  const username = process.env.DB_USERNAME;
  const password = process.env.DB_PASSWORD;
  const database = process.env.DB_DATABASE;
  const URL = `mongodb+srv://${username}:${password}@${host}/${database}?retryWrites=true&w=majority`;
  const connection = mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('Connection has been established successfully.');
  });
  models.User = createModel();
  _database = connection;
  return connection;
}

function getDatabaseConnection() {
  return _database;
}

module.exports = {
  validarUsuario,
  createUser,
  connect,
  getDatabaseConnection,
  models
};
