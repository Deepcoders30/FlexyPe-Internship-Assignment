//Importing Necessary Modules
const express = require('express');
require('dotenv').config(); //Configuring environment variables
const connect_to_DB = require("./db.js");
const testingRouter = require("./routes/testingRouter.js");

const app = express() // Initializing express app

// Middleware
app.use(express.json()); // Body Parsing Middleware
app.use("/api", testingRouter); // Router Middleware

app.get("/", (req, res) => {
    console.log(`GET / - Request from IP: ${req.ip}`);
})


const PORT = process.env.PORT_NUMBER || 5000;

// Database Connection -> MongoDB Atlas
connect_to_DB();

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`)
})





