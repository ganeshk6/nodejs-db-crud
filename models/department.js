const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/db_connection');

const Department = sequelize.define('departments', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports = Department