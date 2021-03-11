
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

function validarUsuario(username, password) {
  const query = `SELECT username FROM users WHERE username = '${username}' AND password = '${password}'`
  console.log(query)
    const user = users.find(user => {
      return user.username === username && user.password === password
    })
    return user;
}

module.exports = {
  validarUsuario
};
