import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
// import FetchData from "../hooks/FetchData"




const AllPageContent = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  const getApiData = async () => {
    try {
      const res = await axios.get("http://localhost:1337/api/img-lists?populate=*");
      
      // console.log(res.data.data)
      setMyData(res.data.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    
    <div className="w-full bg-[#f9f9f9] py-[50px]">
      <div className="max-w-[1240px] mx-auto">
      
        <div className=" w-full max-w-5xl p-5 pb-10 mx-auto mb-10 gap-5 lg:columns-3 md:columns-2 sm:columns-2 ss:columns-1 space-y-5">
          {isError !== "" && <h2>{isError}</h2>}
          {myData.map((post) => {
            const { id, attributes } = post;
            const { imgTitle, imgDownload } = attributes;
            const { data: [{ attributes: { url } }] } = imgDownload;


            return (

              // <Link to={{ pathname: `/post/${id}`, state: { post } }} key={id}>
              <Link  key={id} to={`/post/${id}`}>
                  
                  <div className="bg-white rounded-xl overflow-hidden drop-shadow-md my-5">
                    <img className="h-auto w-full object-cover" alt={imgTitle} src={`http://localhost:1337${url}`}/>   
                  </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllPageContent;
