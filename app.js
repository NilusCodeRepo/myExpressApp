require('dotenv').config();
const express = require('express');
const app = express();

// Routes
const studentRoute = require('./routes/student.route.js');

app.use("/Student", studentRoute);
app.get("/",(req,res)=>{
    res.send("Its working");
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
})