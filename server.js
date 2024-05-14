import app from './app.js';
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()


const port = process.env.PORT || 8000

const db_connection = process.env.DB_CONNECTION.replace("<password>",process.env.PASSWORD)

// mongoose.set({strictQuery:true})
mongoose.connect(db_connection).then(()=>console.log("database connected")).catch(error=>{console.error(error)})

app.listen(port,()=>{
    console.log(`server started at ${port}`)
})
