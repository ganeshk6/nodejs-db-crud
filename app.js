const express = require("express");
const db = require('./utils/db_connection');
const userRoutes = require("./routes/userRoutes");
const departmentRoutes = require('./routes/departmentRoutes');
require('./models')
const app = express();
const PORT = 4000;

app.use(express.json());
app.get("/", (req, res) => {
    res.send("Welcome to the Node.js MySQL CRUD API");
})
app.use("/departments", departmentRoutes);
app.use("/students", userRoutes);

db.sync({ force: false })
.then(() => {
    console.log("Database synchronized");

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((err) => {
    console.error(err);
});