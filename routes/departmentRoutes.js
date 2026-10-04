const express = require("express");
const departmentController = require("../controllers/departmentController");
const router = express.Router();

router.post('/add', departmentController.addDepartment);

module.exports = router;
