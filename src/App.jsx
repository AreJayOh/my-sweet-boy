import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Gallery from "./pages/Gallery";
import { useEffect } from "react";
import { photos, LandingPhotos } from "./data/photos";
import { preloadImages } from "./utils/preloadImages";

function App() {
   useEffect(() => {
    const urls = photos.map((p) => `/photos/${p.filename}`);
    preloadImages(urls);
    const landingUrls = LandingPhotos.map((p) => `/photos/${p.filename}`);
    preloadImages(landingUrls);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
