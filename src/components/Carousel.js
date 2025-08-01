import React, { useState, useEffect } from 'react';
import './Carousel.css';

const images = [
  'https://imgs.search.brave.com/aKDEwb2c77bd8IaHy-KBRJgOSJftd-m0X7iB7HnGn5s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMTYx/Njg4L21lZGljYWwt/dGFibGV0cy1waWxs/cy1kcnVnLTE2MTY4/OC5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA',
  'https://imgs.search.brave.com/MbHPlgqEl7z_DyNurEMElWeysg4qGD5oog8VUzCVSgw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC81Mi81NC9i/bHVlLW1lZGljYWwt/YmFja2dyb3VuZC1l/Y2ctaGVhcnRiZWF0/LWFuZC1jcm9zcy12/ZWN0b3ItNDI1NDUy/NTQuanBn',
  'https://imgs.search.brave.com/589-CfCKw_DmkPyxdLsQ4dyqQsv-0cdaj-ls4FDt03Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFHZzRj/TEdkRHMvMS8wLzE2/MDB3L2NhbnZhLXBy/ZXNlbnRhY2klQzMl/QjNuLWRpYXBvc2l0/aXZhcy1wcm95ZWN0/by1tZWRpY2luYS1o/b3NwaXRhbC1zYWx1/ZC1pbHVzdHJhY2lv/bmVzLWZvdG9nciVD/MyVBMWZpY28tYXp1/bC1oT0ZQOWd3RTZC/US5qcGc',
];

function Carousel() {
  const [index, setIndex] = useState(0);

  // Auto change every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  const prevImage = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="carousel">
      <button className="arrow left" onClick={prevImage}>&#10094;</button>
      <img src={images[index]} alt={`slide-${index}`} />
      <button className="arrow right" onClick={nextImage}>&#10095;</button>
    </div>
  );
}

export default Carousel;
