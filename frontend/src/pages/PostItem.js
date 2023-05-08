import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const PostItem = () => {
    const {id} = useParams()
    const [imgData, setImgData] = useState([]);
    const [hasError, setHasError] = useState();
    
    const getImgData = async () =>{
        try {
           const res = await axios.get(`http://localhost:1337/api/img-lists/${id}?populate=*`)
           console.log(setImgData)
           setImgData(res.data.data)
        } catch (error) {
            setHasError(error.message)
        }
    }

    useEffect(() =>{
        getImgData()
    },[])

    console.log(imgData)
  return (
    
    <div className='w-full pb-10 bg-[#f9f9f9]'>
        <div className='max-w-[1240px] mx-auto'>
            
            <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ss:grid-cols-1
            md:gap-x-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black'>

                <div className='col-span-2 '>
                {hasError !== "" && <h2>{hasError}</h2>}
                    {/* {imgData.map((post) => { */}
                    {imgData?.map((post) => {
                        
                       
                    return (
                            <div key={post.id}>
                                <h1 className='font-bold text-2xl my-1 pt-5'>{post.attributes.imgTitle}</h1>
                                {/* <h1 className='font-bold text-2xl my-1 pt-5'>{post.attributes.imgTitle}</h1> */}
                            </div>
                        )    
                    })}
                </div>
            </div>
        </div>
    </div>
)


}

export default PostItem