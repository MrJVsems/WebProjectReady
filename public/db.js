
const { Sequelize } = require('sequelize');
module.exports = new Sequelize('090303-19_ssa', '090303-19_ssa', 'ssassa', {
    host: '84.201.184.150',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

});

