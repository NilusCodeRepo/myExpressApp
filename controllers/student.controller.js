const {getUser} =require('../services/student.service.js')

exports.getStudent = (req,res)=>{
    let name = "Nilam";
    const newVal = getUser(name);
    console.log("After service : ", newVal);
    res.send("Controller is working");
}

