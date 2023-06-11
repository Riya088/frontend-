import React, { useState, useEffect } from 'react';
import carousel1 from '../images/carousel/1.png';
import carousel2 from '../images/carousel/2.png';
import carousel3 from '../images/carousel/3.png';
import carousel4 from '../images/carousel/4.png';
import carousel5 from '../images/carousel/5.png';
import carousel6 from '../images/carousel/6.png';

const Carousel = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const imgs = [carousel1, carousel2, carousel3, carousel4, carousel5, carousel6];
  const interval = 500;

  useEffect(() => {
    const timer = setInterval(changeSlide, interval);
    return () => clearInterval(timer);
  }, []);

  function changeSlide() {
    setCurrentImg((currentImg + 1) % imgs.length);
  }

  return (
    <div className='margin'>
      <div className="slider">
        {imgs.map((img, index) => (
          <img
            key={index}
            src={img}
            className={`d-block w-100 ${currentImg === index ? 'active' : ''}`}
            alt="..."
            style={{ transform: `translateX(${(index - currentImg) * 100}%)`
            
           }}
          />
        ))}
      </div>

      <div className="navigation-button">
        {imgs.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentImg === index ? 'active' : ''}`}
            onClick={() => setCurrentImg(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
