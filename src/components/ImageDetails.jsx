import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


function ImageDetails() {

    const {id} = useParams();
    const [imageDetails, setImageDetails] = useState({});

    async function downloadImages() {
        const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
        console.log(response.data);

      setImageDetails({
            title : response.data.photo.title,
            image : response.data.photo.url,
            description: response.data.photo.description
        });
       
    }
    
    useEffect(() => {
        downloadImages()
    },[])

  return (
        <div className='w-full h-full my-32' >
        <div className='w-[65%] flex flew items-center my-auto mx-auto bg-blue-900 shadow-2xl shadow-gray-600 ring-8 ring-gray-300/30'>
            <img className='w-72 h-64 m-4 rounded-lg shadow-xl shadow-blue-500/50 ring-4 ring-blue-500/50' src={imageDetails.image}/>
        
            <div className='text-center text-white mx-4'>
                <span className='text-3xl font-bold px-2 '>{imageDetails.title}</span>
            <div className='text-white mt-6 mx-4'>
            <span className='text-lg pt-8 px-4'> {imageDetails.description}</span>
            </div>
            <div className='mt-6'>
            <Link to="/" className='text-xl font-bold 
                px-2 outline-none rounded-md hover:text-gray-300'>Back  
            </Link>
            </div>
            
            </div>
        
                
       
        </div>  
      </div>

  )
}

export default ImageDetails