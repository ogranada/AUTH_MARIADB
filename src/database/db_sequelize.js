const Sequelize = require('sequelize');
const { createModel } = require('./models/users');

let _database = null;

const users = [
    {
        username: 'daniela',
        password: 'secreto'
    },
    {
        username: 'ximena',
        password: 'mipassword'
    },
    {
        username: 'diego',
        password: 'diego123'
    },
    {
        username: 'yeison',
        password: '0627'
    }
]

async function validarUsuario(username, password) {
  const sequelize = getDatabaseConnection();
  const User = sequelize.models.User;
  const user = await User.findOne({
    where: {
      username,
      password
    }
  });
  return user;
}

async function connect(params) {
  const sequelize = new Sequelize({
    dialect: 'mariadb',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  });
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
  const Users = createModel(sequelize);
  await Users.sync();
  await sequelize.sync();
  console.log('DB Object created...');
  _database = sequelize;
  return sequelize;
}

function getDatabaseConnection() {
  return _database;
}

module.exports = {
  validarUsuario,
  connect,
  getDatabaseConnection
};
