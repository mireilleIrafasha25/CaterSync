import asyncWrapper from "../Middleware/async.js";
import mysql from "mysql2"
//import { BadRequestError } from "../Error/BadrequestError.js";
//import {notfoundError } from "../Error/NotFoundError.js";
import dotenv from "dotenv"
dotenv.config()
const db=mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})
db.connect(err =>
{
if(err) throw err
console.log("Connected to Mysql db")
}
)
// add new Menu
export const CreateMenus=asyncWrapper(async(req,res,next)=>
{
const {name,description,price,category,image} =req.body;
const sql='INSERT INTO Menu (name,description,price,category,image) VALUES (?,?,?,?,?)';

db.query(sql,[name,description,price,category,image],(err,result)=>
{
    if(err) throw err;
    res.json({
        message:"Menu created",
        value:result
})
})
})