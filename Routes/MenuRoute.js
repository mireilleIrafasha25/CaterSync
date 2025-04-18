import {AddMenu} from "../Controller/Menucontroller.js"
import express from "express"
import {CreateMenus} from "../Controller/menusql.js"
const Menuroute=express.Router();
import upload from "../Middleware/multer.js"

Menuroute.post("/add",upload.single("image"),AddMenu)
Menuroute.post("/addSql",CreateMenus)
export default Menuroute