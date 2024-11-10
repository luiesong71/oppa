// components/Image.js
import React from 'react';

const Image = ({ src, alt }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <img
        src={src}
        alt={alt}
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default Image;
