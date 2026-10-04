const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db_connection');

const Courses = sequelize.define('courses', {
    id:{
        autoIncrement: true,
        primaryKey: true,
        type:DataTypes.INTEGER,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports = Courses