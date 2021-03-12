const { DataTypes } = require("sequelize");

function createModel(sequelize) {
    const User = sequelize.define('User', {
        // Model attributes are defined here
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(100)
            // allowNull defaults to true
        }
    }, {
        // Other model options go here
    });
    return User;
}

module.exports = {
    createModel
}
