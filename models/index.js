const Student = require('./students');
const Department = require('./department');
const Courses = require('./courses');
const StudentCourses = require('./studentCourses');

//one to many
Department.hasMany(Student,{
    foreignKey: 'departmentId'
});
Student.belongsTo(Department, {
    foreignKey: 'departmentId'
});

// many to many relation
Student.belongsToMany(Courses, {through: StudentCourses});
Courses.belongsToMany(Student, {through: StudentCourses});

module.exports = {
    Department,
    Student,
    Courses,
    StudentCourses
}