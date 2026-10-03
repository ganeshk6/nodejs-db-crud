const db = require("../utils/db_connection");
const { sendSuccessResponse, sendErrorResponse } = require("../utils/response");

const getAllUsers = (req, res) =>{
    try{
        const query = "SELECT * FROM users";
        db.query(query, (err, results)=>{
            if(err){
                sendErrorResponse(res, err, "Failed to fetch users", 500);
                return;
            }
            sendSuccessResponse(res, results, "Users fetched successfully", 200);
        })
    }catch(err){
        sendErrorResponse(res, err, "Failed to fetch users", 500);
    }
}

const addNewuser = (req, res) => {
    try{
        const { name, email, age } = req.body;
        const query = "INSERT INTO users (name, email, age) VALUES (?, ?, ?)";
        db.execute(query, [name, email, age], (err, results)=>{
            if(err){
                sendErrorResponse(res, err, "Failed to add new user", 500);
                return;
            }
            sendSuccessResponse(res, results, "New user added successfully", 201);
        })
    }catch(err){
        sendErrorResponse(res, err, "Failed to add new user", 500);
    }
}

const updateUser = (req, res) => {
    try{
        const { id } = req.params;
        const { name, email } = req.body;
        const query = "UPDATE users SET name = ?, email = ? WHERE id = ?";
        db.execute(query, [name, email, id], (err, results)=>{
            if(err){
                sendErrorResponse(res, err, "Failed to update user", 500);
                return;
            }
            if (results.affectedRows === 0) {
                sendErrorResponse(
                    res,
                    null,
                    "User not found",
                    404
                );
                return;
            }
            sendSuccessResponse(res, results, "User updated successfully", 200);
        })
    }catch(err){
        sendErrorResponse(res, err, "Failed to update user", 500);
    }
}

const deleteUser = (req, res) => {
    try{
        const { id } = req.params;
        const query = "DELETE FROM users WHERE id = ?";
        db.execute(query, [id], (err, results)=>{
            if(err){
                sendErrorResponse(res, err, "Failed to delete user", 500);
                return;
            }
            if (results.affectedRows === 0) {
                sendErrorResponse(
                    res,
                    null,
                    "User not found",
                    404
                );
                return;
            }
            sendSuccessResponse(res, results, "User deleted successfully", 200);
        })
    }catch(err){
        sendErrorResponse(res, err, "Failed to delete user", 500);
    }
}

const getUserById = (req, res) => {
    try{
        const { id } = req.params;
        const query = "SELECT * FROM users WHERE id = ?";
        db.execute(query, [id], (err, results)=>{
            if(err){
                sendErrorResponse(res, err, "Failed to fetch user", 500);
                return;
            }
            if (results.length === 0) {
                sendErrorResponse(
                    res,
                    null,
                    "User not found",
                    404
                );
                return;
            }
            sendSuccessResponse(res, results[0], "User fetched successfully", 200);
        })
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
