const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/db_connection');

const Students = sequelize.define(
    'students',
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        name:{
            type:DataTypes.STRING,
            allowNull:true
        },
        email:{
            type:DataTypes.STRING,
            allowNull:true
        },
        age:{
            type:DataTypes.STRING,
            allowNull:true
        }
    }
)

module.exports = Students