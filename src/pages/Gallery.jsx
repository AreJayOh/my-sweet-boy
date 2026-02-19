// src/pages/Gallery.jsx
import React, { useState } from "react";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa";
import { photos } from "../data/photos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="flex absolute top-1/2 left-4 transform -translate-y-1/2 transition-colors bg-yellow-400 hover:bg-yellow-500 text-black rounded-full p-2 shadow-lg z-10"
    >
      <FiChevronLeft className="w-5 h-5" />
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="flex absolute top-1/2 right-4 transform -translate-y-1/2 transition-colors bg-yellow-400 hover:bg-yellow-500 text-black rounded-full p-2 shadow-lg z-10"
    >
      <FiChevronRight className="w-5 h-5" />
    </button>
  );

  const mainSettings = {
    asNavFor: nav2,
    ref: (slider) => setNav1(slider),
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    infinite: true,
    arrows: true,
    adaptiveHeight: true,
    afterChange: (index) => setCurrentSlide(index),
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const thumbSettings = {
    asNavFor: nav1,
    ref: (slider) => setNav2(slider),
    slidesToShow: Math.min(photos.length, 12),
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: Math.min(photos.length, 7),
        },
      },
    ],
  };

  return (
    <>
      <a
        href="/"
        className="p-2 md:px-3 md:py-2 m-4 mt-8 md:mt-4 bg-yellow-400 text-gray-900 font-medium rounded-lg hover:bg-yellow-500 transition-colors absolute top-0 left-0 flex justify-center items-center gap-2 md:gap-3 text-sm"
      >
        <FaArrowLeft className="h-3 w-3" />
        Home
      </a>
      <div
        className="max-w-5xl mx-auto relative flex flex-col justify-between"
        style={{ height: "100dvh" }}
      >
        <div>
          <h1 className="text-3xl text-gray-900 text-center mb-10 mt-8">
            Gallery
          </h1>

          {/* Main Carousel */}
          <div className="bg-gray-800 rounded-lg mb-6 mx-4">
            <Slider {...mainSettings}>
              {photos.map((photo) => (
                <div key={photo.id} className="p-2 md:p-4 h-80 md:h-[60vh]">
                  {" "}
                  <div className="flex justify-center items-center h-full">
                    <img
                      src={`/photos/${photo.filename}`}
                      alt={photo.caption}
                      className="object-contain w-full max-h-full outline-none"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Dynamic Caption */}
          <div className="text-center h-24 mx-4">
            <p className="text-sm text-gray-500">{photos[currentSlide].date}</p>
            <p className="font-medium mt-2">{photos[currentSlide].caption}</p>
          </div>
        </div>

        {/* Thumbnails */}

        <Slider {...thumbSettings} className="mb-4 absolute bottom-0 mx-4">
          {photos.map((photo, idx) => (
            <div key={photo.id} className="px-1">
              <img
                src={`/photos/${photo.filename}`}
                alt={photo.caption}
                className={`object-cover w-full h-10 md:h-18 rounded-lg border-2 ${
                  idx === currentSlide ? "border-amber-400" : "border-gray-300"
                }`}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </Slider>

        <style jsx global>{`
          .slick-slide:focus {
            outline: none;
          }
        `}</style>
      </div>
    </>
  );
};

export default Gallery;
