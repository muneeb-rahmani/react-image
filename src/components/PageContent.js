import React, { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import axios from "axios";
import { useParams } from "react-router-dom";

const PageContent = () => {
  const { id } = useParams();
  const [imgItem, setImgItem] = useState(null);

  const getSingleData = async () => {
    try {
      const res = await axios.get(
        `https://strapi-deployment-backend.onrender.com/api/img-lists/${id}?populate[imgDownload][populate]=*`
      );
      const imgItemData = res.data;
      setImgItem(imgItemData);
    } catch (error) {
      // Handle error
    }
  };

  useEffect(() => {
    getSingleData();
  }, [id]);

  const getDownloadUrl = () => {
    if (imgItem) {
      const downloadUrl = imgItem?.data?.attributes?.imgDownload?.data?.[0]?.attributes?.url;
      if (downloadUrl) {
        return `${downloadUrl}?fl_attachment=true`;
        console.log(downloadUrl)
      }
    }
    return "";
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        {imgItem && (
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={imgItem?.data?.attributes?.imgDownload?.data?.[0]?.attributes?.url}
              alt={imgItem.imgTitle}
            />

            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Vector
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {imgItem?.data.attributes?.imgTitle}
              </h1>
              <div className="flex mb-4">
                <ReactMarkdown className="line-break">
                  {imgItem.data.attributes?.imgContent}
                </ReactMarkdown>
              </div>
              <div className="flex">
                {getDownloadUrl() && (
                  <a className="w-full" href={getDownloadUrl()} download>
                    <button className="flex w-full items-center justify-center text-white bg-indigo-500 border-0 my-8 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                      Download
                    </button>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PageContent;
