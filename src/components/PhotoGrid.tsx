import React, { useEffect, useState } from 'react';
import './PhotoGrid.css';
import axios from 'axios';


const PhotoGrid: React.FC = () => {
  const [photos, setPhotos] = useState<string[]>([]);

  const fetchPhotos = async () => {
    try {
      const response = await axios.get('https://api.unsplash.com/photos/random?count=9', {
        headers: {
          Authorization: 'Client-ID SeBsYhpKNlEzxgEyP7Jxw54xXgtff3QpFBcI6L5sM38',
        },
      });
      setPhotos(response.data.map((photo: any) => photo.urls.small));
    } catch (error) {
      console.error('Error fetching photos', error);
    }   
  };

  useEffect(() => {
    fetchPhotos();
    const interval = setInterval(fetchPhotos, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="photo-grid">
      {photos.map((url, index) => (
        <img key={index} src={url} alt="Customer" />
      ))}
    </div>
  );
};

export default PhotoGrid;




