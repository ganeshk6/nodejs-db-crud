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
        },
        departmentId:{
            type:DataTypes.INTEGER,
            allowNull:true,

            references:{
                model: 'departments',
                key: 'id'
            }
        }
    }
)

module.exports = Students