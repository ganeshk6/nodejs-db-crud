const coursesModel = require('../models/courses');
const studentModel = require('../models/students');

const { sendSuccessResponse, sendErrorResponse } = require("../utils/response");

const addCourses = async(req, res) => {
    try{
        const { name } = req.body;
        const user = await coursesModel.create({
            name:name,
        })
        
        sendSuccessResponse(res, user, "New department added successfully", 201);
    }catch(err){
        sendErrorResponse(res, err, "Failed to add new department", 500);
    }
}

const addStudentToCourses = async (req, res) => {
    try{
        const { studentId, courseIds } = req.body;
        const student = await studentModel.findByPk(studentId);
        if(!student){
            sendErrorResponse(res, err, "Student not found", 404);    
        }
        const course = await coursesModel.findAll({
            where:{
                id:courseIds
            }
        })
        await student.addCourses(course);
        const updatedStudent = await studentModel.findByPk(studentId, {include:coursesModel});
        sendSuccessResponse(res, updatedStudent, "Student add to course successfully!", 200);
    }catch(err){
        sendErrorResponse(res, err, "Failed to add Student courses", 500);
    }
}

module.exports = {
    addCourses,
    addStudentToCourses
}
