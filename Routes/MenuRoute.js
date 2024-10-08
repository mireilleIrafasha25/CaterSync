import {AddMenu} from "../Controller/Menucontroller.js"
import express from "express"
const Menuroute=express.Router();
import upload from "../Middleware/multer.js"

Menuroute.post("/add",upload.single("image"),AddMenu)
export default Menuroute