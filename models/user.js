const Sequalize = require('sequalize')

const sequalize = require('../util/database')

const User = sequalize.define('user', {
    id: {
        type: Sequalize.INTEGER,
        autoIncrement: true
    },
    name: Sequalize.STRING,
    email: Sequalize.STRING
});

module.exports = User;
