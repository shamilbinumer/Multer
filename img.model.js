import mongoose from "mongoose";
const img_schema=new mongoose.Schema({
  
    images:{type:Array}
})

export default mongoose.model.images||mongoose.model("image",img_schema)