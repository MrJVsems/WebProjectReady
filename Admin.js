const Sequalize = require('sequelize');
const db = require('./public/db.js');

const Admin = db.define('Role', {
    RoleId:{
        type: Sequalize.CHAR(1)
    },
    RoleName:{
        type: Sequalize.CHAR(50)
    }
})
Admin.findAll({raw:true}).then(Role=>{
    console.log(Role);
}).catch(err=>console.log(err));

module.exports = Admin;