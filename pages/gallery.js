// pages/gallery.js
import React from 'react';
import Image from '../components/Image';

const Gallery = () => {
  const images = [
    { src: '/images/image1.png', alt: 'Image 1' },
    { src: '/images/image2.png', alt: 'Image 2' },
    { src: '/images/image3.png', alt: 'Image 3' },
    { src: '/images/image4.png', alt: 'Image 4' },
 
  
  ];

  return (
    <div>
      <h1>Image Gallery</h1>
      <div>
        {images.map((image, index) => (
          <Image key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
