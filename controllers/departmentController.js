const departmentModel = require('../models/department');
const { sendSuccessResponse, sendErrorResponse } = require("../utils/response");

const addDepartment = async(req, res) => {
    try{
        const { name } = req.body;
        const user = await departmentModel.create({
            name:name,
        })
        
        sendSuccessResponse(res, user, "New department added successfully", 201);
    }catch(err){
        sendErrorResponse(res, err, "Failed to add new department", 500);
    }
}

module.exports = {
    addDepartment
}