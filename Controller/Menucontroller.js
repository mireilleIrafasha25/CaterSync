import MenuModel from "../Model/Menu.js";
import cloudinary from "../Util/cloudinary.js"
import asyncWrapper from "../Middleware/async.js";
 import {validationResult} from "express-validator"
export const AddMenu=asyncWrapper(async(req,res,next)=>
{
    // allow image file to be uploaded
    const result=await cloudinary.uploader.upload(req.file.path)
    // checking if  cloudinary upload was successfully
    if(!result || result.file)
    {
        return res.status(400).json({error:"Failed to upload image"})
    }
    // validate request body
    const error=validationResult(req)
    if(!error.isEmpty())
    {
   throw new Error(error)
    }


})