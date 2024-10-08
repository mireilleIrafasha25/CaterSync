import express from 'express'
import mongoose from 'mongoose'
import router from "./Routes/MenuRoute.js"
import dotenv from "dotenv"
import errorHandler from "./Middleware/errorHandler.js"
import documentation from "./Doc/swagger.json" assert{type:"json"};
import swaggerUi from "swagger-ui-express"
dotenv.config();
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // 30 seconds timeout
    socketTimeoutMS: 45000, // 45 seconds timeout
    maxPoolSize: 10, // Maintain up to 10 socket connections
  };
const app= express();
app.use(express.json());
app.use("/Cater",router)
app.use("/api_docs",swaggerUi.serve, swaggerUi.setup(documentation))
mongoose.connect(`${process.env.db}`,options)
.then(()=>
{
    console.log("Connected to Database")
})
 .catch((error)=>
 {
     console.error("Failed to connect to Database",error)
 })
 app.listen(process.env.PORT,()=>

{
    console.log(`Server is running on port ${process.env.PORT}`)
 
})
app.use(errorHandler)