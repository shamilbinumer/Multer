import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';
import imgModel from '../img.model';

function App() {
  // let Photo="";
  // let images;
  // const [image,setImage]=useState("")
  const [getImage,setImage]=useState([])

  // const Upload=async(e)=>{
  //   e.preventDefault()
  //   console.log(e.target.files);
  
  //   Photo=await convertToBase64(e.target.files[0])
   
  //   setImage(Photo)
  //   console.log(image);
  // }
  // const UploadMultipple=async(e)=>{
  //   e.preventDefault()
  //   images=await convertToBase64(e.target.files[0])
  //   setImages(images)
  //   console.log(imagess);
  // }

  const Register=async(e)=>{
    e.preventDefault()
    const data=new FormData(e.target)
    console.log(data);
    const res=await axios.post("http://localhost:3001/multer",data)
    console.log(res.data);
  }


  const GetData=async()=>{
    const res=await axios.get("http://localhost:3001/multer/get")
    console.log(res.data[0].images);
    setImage(res.data[0].images)
    console.log(getImage);
  }
  useEffect(()=>{
    GetData()
  },[])

  return (
    <>
    <div className='form'>
     <form action="" onSubmit={Register}>
      
     {/* <input type="file" name='image'id='image' /> */}
     <input type="file" name='images' id='images' multiple/>
     <button>Upload</button>
     </form>
    </div>
    <div className="images">
      {
        getImage.map((data,index)=>
        <div key={index}>
          <img src={data.path} alt="" style={{width:'30%'}} />
        </div>
        )
      }
    </div>
    </>
  )
}

export default App
