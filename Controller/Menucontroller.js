import MenuModel from "../Model/Menu.js";
import cloudinary from "../Util/cloudinary.js"
import asyncWrapper from "../Middleware/async.js";
 import {validationResult} from "express-validator"
 import { BadRequestError } from "../Error/BadrequestError.js"; 
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
    throw new BadRequestError(error.array()[0].msg)
   }
   // create new menu
   const NewMenu=await MenuModel.create({
    name:req.body.name,
    price:req.body.price,
    description:req.body.description,
    category:req.body.category,
    image:{
        url:result.url
         }
   })
   res.status(201).json({
    message:"Menu created successfully",
    menu:NewMenu
   })


})