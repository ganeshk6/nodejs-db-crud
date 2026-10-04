const express = require("express");
const coursesController = require("../controllers/courseController");
const router = express.Router();

router.post('/add', coursesController.addCourses);
router.get('/add-student-course', coursesController.addStudentToCourses);

module.exports = router;
