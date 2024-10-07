import mongoose from "mongoose";
const schema= mongoose.Schema
const Menuschema=new schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        url:{
        type:String //URL of imag
        }
    },
    category:{
        type:String,
        enum:{
            value:["Main Course","Appetizer","Dessert"],
            message:"Value must be Main Course or Appetizer or Dessert"
    },
    required:true
    }

})
 const MenuModel= mongoose.model("Menu",Menuschema);
 export default MenuModel;