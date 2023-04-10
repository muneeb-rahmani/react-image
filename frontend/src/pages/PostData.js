// import React, { useEffect, useState } from "react";
// import axios from "axios";
// // import '../index.css'

// const PostData = () => {
//   const [myData, setMyData] = useState([]);
//   const [isError, setIsError] = useState("");

//   const getApiData = async () => {
//     try {
//       const res = await axios.get("http://localhost:1337/api/img-lists?populate=*");
//       // console.log(res.data.data)
//       setMyData(res.data.data);
//     } catch (error) {
//       setIsError(error.message);
//     }
//   };

//   useEffect(() => {
//     getApiData();
//   }, []);

//   return (
//     <div className="w-full bg-[#f9f9f9] py-[50px]">
//       <div className="max-w-[1240px] mx-auto">
//         {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 px-4 text-black"> */}
//         <div className=" w-full max-w-5xl p-5 pb-10 mx-auto mb-10 gap-5 lg:columns-3 md:columns-2 sm:columns-2 ss:columns-1 space-y-5">
//           {isError !== "" && <h2>{isError}</h2>}
//           {myData.map((post) => {
//             const { id, attributes } = post;
//             const { imgTitle, imgContent, createdAt, imgDownload } = attributes;
//             const { data: { attributes: { url } }  } = imgDownload;

//             return (
//               <div key={id} className="bg-white rounded-xl overflow-hidden drop-shadow-md">
//                 <img className="h-auto w-full object-cover" src={`http://localhost:1337${url}`}/>   
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PostData;
