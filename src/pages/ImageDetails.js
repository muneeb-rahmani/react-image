import React, { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import axios from "axios";
import { useParams } from "react-router-dom";
import useSingleData from "../hooks/useImageData";
import LoadingScreen from "../components/LoadingScreen";

const ImageDetails = () => {
  const { id } = useParams();
  const { imgItem, error } = useSingleData(id);
  const [downloadUrl, setDownloadUrl] = useState("");
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    if (imgItem) {
      const downloadUrl =
        imgItem?.data?.attributes?.imgDownload?.data?.[0]?.attributes?.url;
      setDownloadUrl(downloadUrl);
    }
  }, [imgItem]);

  const startDownload = () => {
    axios({
      url: downloadUrl,
      method: "GET",
      responseType: "blob", // Important: responseType should be set to "blob"
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${imgItem?.data?.attributes?.imgDownload?.data?.[0]?.attributes?.name}`); // Set the desired file name
      document.body.appendChild(link);
      link.click();
    });
  };

  const handleDownload = () => {
    // Disable the download button
    const downloadButton = document.getElementById("downloadButton");
    downloadButton.disabled = true;
  
    // Show "Download" initially
    setCountdown(10);
  
    // Start the countdown after a delay
    setTimeout(() => {
      const countdownInterval = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown === 1) {
            clearInterval(countdownInterval);
            startDownload();
          }
          return prevCountdown - 1;
        });
      }, 1000);
    }, 1000); // Delay the start of the countdown by 1 second
  };
  
  if (error) {
    // Handle error
    return <p>Error: {error.message}</p>;
  }

  if (!imgItem) {
    // Render loading state
    return <LoadingScreen />;
  }

  const width = imgItem?.data?.attributes?.imgDownload?.data?.[0]?.attributes?.width;
  const height = imgItem?.data?.attributes?.imgDownload?.data?.[0]?.attributes?.height;

  const output = `${width} x ${height}`;

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        {imgItem && (
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={
                imgItem?.data?.attributes?.imgDownload?.data?.[0]?.attributes?.url
              }
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

              {/* Image details in table */}
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-[65%] py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="min-w-full border text-center text-sm font-light dark:border-neutral-500">
                        <thead className="border-b font-medium dark:border-neutral-500">
                          <tr>
                            <th
                              scope="col"
                              className="border-r px-6 py-4 dark:border-neutral-500"
                            >
                              File type:
                            </th>
                            <th
                              scope="col"
                              className="border-r px-6 py-4 dark:border-neutral-500"
                            >
                              {imgItem?.data?.attributes?.imgDownload?.data?.[0]?.attributes?.ext}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                              File Size:
                            </td>
                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                              {imgItem?.data?.attributes?.imgDownload?.data?.[0]?.attributes?.size}
                            </td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                              Dimension:
                            </td>
                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                              {output}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {/* End of Image details in table */}

              <div className="flex">
                <button
                  id="downloadButton"
                  className="flex w-full items-center justify-center text-white hover:text-white bg-indigo-500 border-0 my-8 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded"
                  onClick={handleDownload}
                >
                  {countdown === 10 ? "Download" : `Your download will start in ${countdown}`}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageDetails;
