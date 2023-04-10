import React, { useState, useEffect } from 'react';

function ImgLists() {
  const [imgLists, setImgLists] = useState("");

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      // .then(data => console.log(data))
      .then(data => setImgLists(data))
      // console.log(data)
      .catch(error => console.log(error));
      
  }, []);

  return (
    <div>
      {imgLists.map((img) => (
        <div key={img.id}>
            {/* <img src={`http://localhost:1337${img.attributes.imgDownload}`} className='w-2 h-auto' alt="" /> */}
          <h2>{img.title}</h2>
          <p>{img.body}</p>
        </div>
      ))}
    </div>
  );
}

export default ImgLists;
