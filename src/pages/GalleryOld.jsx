import { useState } from "react";
import { photos } from "../data/photos";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./Gallery.css";

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const currentPhoto = photos[currentIndex];

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStart - touchEnd > 50) {
      goToNext();
    }
    if (touchEnd - touchStart > 50) {
      goToPrev();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") goToNext();
    if (e.key === "ArrowLeft") goToPrev();
  };

  return (
    <div
      className="min-h-screen bg-white flex flex-col items-center justify-center p-4"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Header */}
      <h1 className="text-3xl text-gray-900 mb-4">Gallery</h1>

      {/* Gallery container */}
      <div className="w-full max-w-3xl">
        {/* Main photo display */}
        <div
          className="gallery-container"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative w-full h-96 md:h-[500px] rounded-xl overflow-hidden shadow-lg bg-slate-900">
            <img
              src={`/public/photos/${currentPhoto.filename}`}
              alt={currentPhoto.caption}
              className="w-full h-full object-contain"
            />

            {/* Navigation arrows */}
            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-lg w-10 h-10 items-center justify-center text-xl font-semibold shadow-md transition-colors z-10 hidden md:flex"
            >
              <FaArrowLeft />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-lg w-10 h-10 items-center justify-center text-xl font-semibold shadow-md transition-colors z-10 hidden md:flex"
            >
              <FaArrowRight />
            </button>

            {/* Photo counter */}
            <div className="absolute top-4 right-4 bg-gray-900 bg-opacity-60 text-white px-3 py-1 rounded-lg text-sm font-medium">
              {currentIndex + 1} / {photos.length}
            </div>
          </div>

          {/* Photo info */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-lg font-semibold">
              {currentPhoto.date}
            </p>
            <p className="text-gray-900">{currentPhoto.caption}</p>
          </div>
        </div>

        {/* Thumbnail navigation */}
        <div className="mt-8 overflow-x-auto pb-4">
          <div className="flex gap-2 justify-center min-w-max">
            {photos.map((photo, index) => (
              <button
                key={photo.id}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden transition-all ${
                  index === currentIndex
                    ? "ring-2 ring-yellow-400"
                    : "opacity-50 hover:opacity-75"
                }`}
              >
                <img
                  src={`/public/photos/${photo.filename}`}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Navigation links */}
        <div className="mt-8 flex justify-center">
          <a
            href="/"
            className="px-6 py-3 bg-yellow-400 text-gray-900 font-medium rounded-lg hover:bg-yellow-500 transition-colors"
          >
            Home
          </a>
        </div>
      </div>
    </div>
  );
}
