const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db_connection');

const StudentCourses = sequelize.define('student_courses', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull:false
    }
})

module.exports = StudentCourses;
