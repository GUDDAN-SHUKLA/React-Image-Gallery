import React from 'react'
import {Link} from 'react-router-dom'


function ImageList({ image, id}) {
   
  return (
    <div >
           <Link to={`/dashboard/${id}`}>
            <img src={image} className='w-72 h-60 border-2 rounded-lg cursor-pointer overflow-hidden bg-cover hover:border-blue-800' />
            </Link>
    </div>
  )
}

export default ImageList;
