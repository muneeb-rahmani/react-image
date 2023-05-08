import React, { useEffect, useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PageContent = () => {
  const { id } = useParams();
  const [imgItem, setImgItem] = useState(null);

  const getSingleData = async () => {
    try {
      const res = await axios.get(`http://localhost:1337/api/img-lists/${id}?populate=*`);
      const imgItemData = res.data;
      setImgItem(imgItemData);
    } catch (error) {
      console.log(error);
    }
  };
console.log(imgItem)
  useEffect(() => {
    getSingleData();
  }, [id]);

  return (
    <div className='w-full pb-10 bg-[#f9f9f9]'>
      <div className='max-w-[1240px] mx-auto'>
        {imgItem && (
          <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ss:grid-cols-1
            md:gap-x-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black'>
            <div className='col-span-2'>
              <img className='h-56 w-full object-cover' src={`http://localhost:1337${imgItem.url}`} alt={imgItem.imgTitle} />
              <h1 className='font-bold text-2xl my-1 pt-5'>{imgItem.attributes?.imgTitle}</h1>
              <div className='pt-5'><ReactMarkdown className='line-break'>{imgItem.attributes?.imgContent}</ReactMarkdown></div>
            </div>
          </div>
        )}
      </div>
    </div>
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