import express from "express"
import Menuroute from "./MenuRoute.js"

const route=express.Router()
route.use("/menu", Menuroute)

export default route
