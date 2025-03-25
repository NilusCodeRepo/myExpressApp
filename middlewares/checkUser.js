exports.checkUser = (req,res,next)=>{
    console.log("middleware 1");
    next();
}

exports.checkJWT = (req,res,next)=>{
    console.log("middleware 2");
    next();
}