import React, { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const PageContent = () => {
  const { id } = useParams();
  const [imgItem, setImgItem] = useState(null);

  const getSingleData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:1337/api/img-lists/${id}?populate[imgDownload][populate]=*`
      );
      const imgItemData = res.data;
      setImgItem(imgItemData);
    } catch (error) {
      
    }
  };
  
  useEffect(() => {
    getSingleData();
  }, [id]);

  
  return (
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        {imgItem && (
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={`http://localhost:1337${imgItem.data.attributes.imgDownload.data.attributes.url}`}
              alt={imgItem.imgTitle}
            />

            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">
                Vector
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                {imgItem.data.attributes?.imgTitle}
              </h1>
              <div class="flex mb-4">
                <ReactMarkdown className="line-break">
                  {imgItem.data.attributes?.imgContent}
                </ReactMarkdown>
              </div>
              <div class="flex">
                <a className="w-full" href={`http://localhost:1337${imgItem.data.attributes.imgDownload.data.attributes.url}`} download>
                  <button class="flex w-full items-center justify-center text-white bg-indigo-500 border-0 my-8 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Download
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}
        ;
      </div>
    </section>

    // <div className='w-full pb-10 bg-[#f9f9f9]'>
    //   <div className='max-w-[1240px] mx-auto'>
    //     {imgItem && (
    //       <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ss:grid-cols-1
    //         md:gap-x-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black'>
    //         <div className='col-span-2'>
    //           <h1 className='font-bold text-2xl my-1 pt-5'>{imgItem.data.attributes?.imgTitle}</h1>
    //           <img className='h-full w-full object-cover' src={`http://localhost:1337${imgItem.data.attributes.imgDownload.data.attributes.url}`} alt={imgItem.imgTitle} />
    //           <div className='pt-5'><ReactMarkdown className='line-break'>{imgItem.data.attributes?.imgContent}</ReactMarkdown></div>
    //         </div>
    //       </div>
    //     )}
    //   </div>

    // </div>
  );
};

export default PageContent;

// import React, { useEffect } from 'react'
// import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const PageContent = () => {
//     const {id} = useParams()
//     // const imgData = imgItem.find((product) => product.id === id);
//     // const {imgTitle, imgContent} = imgData;
//     const getSingleData = async () => {
//         try {
//             const res = await axios.get(`http://localhost:1337/api/img-lists/${id}?populate=*`)
//             const imgItem = await res.data
//             // .then(data=>{

//             //     console.log(data.data.data.attributes.imgTitle)
//             // })
//             console.log(imgItem)
//            } catch (error) {
//         }
//     }

//     useEffect(()=>{
//        getSingleData()
//     }, [])

//     return (
//         <div className='w-full pb-10 bg-[#f9f9f9]'>
//             <div className='max-w-[1240px] mx-auto'>

//                 <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ss:grid-cols-1
//                 md:gap-x-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black'>

//                     <div className='col-span-2 '>
//                         {/* <img className='h-56 w-full object-cover' src={`http://localhost:1337${url}`} /> */}
//                         <h1 className='font-bold text-2xl my-1 pt-5'>{}</h1>
//                         <div className='pt-5'><ReactMarkdown className='line-break'>{}</ReactMarkdown></div>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default PageContent
