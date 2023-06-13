import { useState, useEffect } from 'react';
import axios from 'axios';

const useImageData = (id) => {
  const [imgItem, setImgItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://strapi-deployment-backend.onrender.com/api/img-lists/${id}?populate[imgDownload][populate]=*`
        );
        const imgItemData = res.data;
        setImgItem(imgItemData);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [id]);

  return { imgItem, error };
};

export default useImageData;
