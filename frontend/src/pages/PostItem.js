import React from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

const PostItem = () => {
  const {id} = useParams()

  return ( 
    <div className='w-full pb-10 bg-[#f9f9f9]'>
        <div className='max-w-[1240px] mx-auto'>
            
            <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ss:grid-cols-1
            md:gap-x-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black'>

                <div className='col-span-2 '>
                    <h1 className='font-bold text-2xl my-1 pt-5'>{id.imgTitle}</h1>
                    <img className='h-56 w-full object-cover' alt={id.imgTitle} src={`http://localhost:1337${id.url}`} />
                    <div className='pt-5'><ReactMarkdown className='line-break'>{id.imgContent}</ReactMarkdown></div>
                </div>

            </div>

        </div>
    </div>
)


}

export default PostItem