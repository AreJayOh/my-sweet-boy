// utils/preloadImages.js
export const preloadImages = (imageUrls) => {
  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
};
