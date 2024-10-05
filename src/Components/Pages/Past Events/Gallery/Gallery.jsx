import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Gallery.css";
import GalleryData from "../../../../data/GalleryImages.js"
const Gallery = (props) => {

  const settings = {
    infinite: true,
    easing: 'linear',
    autoplaySpeed: 1500,
    autoplay: true,
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
    ;

  return (
    <div className='Slider'>
      <div className='text'><div className='heading'>PHOTO GALLERY</div></div>
      <div style={{ width: '80vw', margin: '0 auto' }}  >
        <Slider {...settings}>
          {props.Gallery.map((image, index) => (
            <div key={index} >
              <div className='boxed' style={{
                boxSizing: 'border-box',
                width: '100%',
                padding: '0.7rem',
                height: '16rem',
              }}>
                <img
                  src={`/Images/Mun_Gallery_Photos/${image}`}
                  alt={`Slide ${index}`}

                  style={{
                    boxSizing: 'border-box',
                    width: '100%',
                    borderRadius: '0.1rem',
                    height: '100%',
                    objectFit: 'cover',
                    border: '0.1rem solid #7506c2',
                  }}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <hr className='lined' />
    </div>
  );
};

export default Gallery;
