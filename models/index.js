const Student = require('./students');
const Department = require('./department');


//one to many
Department.hasMany(Student,{
    foreignKey: 'departmentId'
});

Student.belongsTo(Department, {
    foreignKey: 'departmentId'
});

module.exports = {
    Department,
    Student
}