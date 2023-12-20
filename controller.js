import img_schema from './img.model.js'
import path from 'path'


export async function form(req,res)
{
    console.log(req.files);
    // console.log(req.body);
    // const{images}=req.body;
    // const profile=req.file;
     const images=req.files;
     console.log(images);
    const result=await img_schema.create({images})
    res.send({result})
    // res.end()

    
}


export async function gets(req,res)
{
    const result=await img_schema.find()
    console.log(result);
   res.send(result)
}

export async function SetPath(req,res)
{
  let { filename } = req.params;
  console.log(filename);
  return res.sendFile(path.resolve(`./images/${filename}`))
}