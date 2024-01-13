import { useEffect, useState } from 'react';
import axios from 'axios';
import ImageList from './ImageList';

function Dashboard() {

    const [images, setImages] = useState([]);
    // const [data, setData] = useState([]); // The data to be paginated
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(20);
    // const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
        downloadImages();
    }, [offset, limit])

    async function downloadImages() {
        const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=${limit}`);
        const imageData = response.data.photos; 
       // console.log(imageData);
        
        const res = imageData.map((imgData) => {
            
            return {
                id : imgData.id,
                title : imgData.title,
                image : imgData.url
            }
        });
       // console.log(res);
       setImages(res);
       setIsLoading(false)

        // For demonstration purposes, let's simulate data fetching:
        // const newData = Array.from({ length: 50 }, (_, index) => index + 1).slice(offset, offset + limit);
        // setData(newData);

        // const handlePageChange = (newPage) => {
        //     const newOffset = (newPage - 1) * limit;
        //     setOffset(newOffset);
        //     setCurrentPage(images);
        //   };
   
    }
 
  return (
    <div className='w-full max-h-screen'>
        <div className='text-2xl font-bold text-center my-8 '>List Of Images</div>
        {(isLoading) ? <h1 className='text-xl font-bold text-center '>Data is Loading....</h1> : 
            <div className='w-[100%] h-full flex flex-wrap justify-center gap-4 md:gap-6 md:mx-auto '>
                {
                    images.map((item) => 
                    <ImageList title={item.title} 
                    image={item.image} key={item.id} id={item.id} /> )
                }
            </div>
        }

        
        {/* <div className='text-center mb-4'>
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span> Page {currentPage} </span>
        <button onClick={() => handlePageChange(images + 1)} disabled={data.length < limit}>
          Next
        </button>
      </div> */}
        
    </div>
  )
}

export default Dashboard