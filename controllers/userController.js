const db = require("../utils/db_connection");
const studentModel = require('../models/students')
const { sendSuccessResponse, sendErrorResponse } = require("../utils/response");

const getAllUsers = async(req, res) =>{
    try{
        const student = await studentModel.findAll();
        sendSuccessResponse(res, student, "Users fetched successfully", 200);
    }catch(err){
        sendErrorResponse(res, err, "Failed to fetch users", 500);
    }
}

const addNewuser = async(req, res) => {
    try{
        const { name, email, age } = req.body;
        const user = await studentModel.create({
            name:name,
            email:email,
            age:age
        })
        
        sendSuccessResponse(res, user, "New user added successfully", 201);
    }catch(err){
        sendErrorResponse(res, err, "Failed to add new user", 500);
    }
}

const updateUser = async(req, res) => {
    try{
        const { id } = req.params;
        const { name, email } = req.body;
        const student = await studentModel.findByPk(id);
        if(!student){
            return sendErrorResponse(res, null, "User not found", 404);
        }
        student.name = name;
        student.email = email;
        await student.save();
        sendSuccessResponse(res, student, "User updated successfully", 200);
    }catch(err){
        sendErrorResponse(res, err, "Failed to update user", 500);
    }
}

const deleteUser = async (req, res) => {
    try{
        const { id } = req.params;
        const student = await studentModel.destroy({
            where:{
                id:id
            }
        })
        if (student === 0) {
            return sendErrorResponse(
                res,
                null,
                "User not found",
                404
            );
        }
        sendSuccessResponse(res, [], "User deleted successfully", 200);
    }catch(err){
        sendErrorResponse(res, err, "Failed to delete user", 500);
    }
}

const getUserById = async (req, res) => {
    try{
        const { id } = req.params;
        const student = await studentModel.findByPk(id);
        if(!student){
            return sendErrorResponse(res, [], "User not found", 404);
        }
        sendSuccessResponse(res, student, "User fetched successfully", 200);
    }catch(err){
        sendErrorResponse(res, err, "Failed to fetch user", 500);
    }
}

module.exports = {
    getAllUsers,
    addNewuser,
    updateUser,
    deleteUser,
    getUserById
}
