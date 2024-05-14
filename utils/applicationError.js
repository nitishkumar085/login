const applicationError = (err,req,res,next)=>{
    err.statusCode = err.statusCode || 500
    err.status = err.status || "error occured"
    if(process.env.NODE_ENV !=="development"){
        res.status(err.statusCode).json({
            status : err.status,
            message : err.message,
            
        })
    }
    else{
        res.status(err.statusCode).json({
            status : err.status,
            message : err.message,
            stack : err.stack
        })
    }
   
}

export default applicationError