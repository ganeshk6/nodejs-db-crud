const express = require("express");
const db = require("./utils/db_connection");
const userRoutes = require("./routes/userRoutes");
const app = express();
const PORT = 3000;

app.use(express.json());
app.get("/", (req, res) => {
    res.send("Welcome to the Node.js MySQL CRUD API");
})
app.use("/students", userRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})