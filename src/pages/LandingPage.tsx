import { useState, useEffect, useRef } from "react";
import { FaHeart } from "react-icons/fa";
import { photos } from "../data/photos";
import "./LandingPage.css";

export default function LandingPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [heartVisible, setHeartVisible] = useState(false);
  const heartSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const paragraphs = document.querySelectorAll(".love-paragraph-container");

      paragraphs.forEach((container) => {
        const rect = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const containerCenter = rect.top + rect.height / 2;

        // Check if paragraph is centered in viewport
        const isCentered =
          containerCenter > windowHeight * 0.3 &&
          containerCenter < windowHeight * 0.9;
        const isCentered2 =
          containerCenter > windowHeight * 0.2 &&
          containerCenter < windowHeight * 1;

        if (isCentered) {
          container.classList.add("active");
        } else {
          container.classList.remove("active");
        }

        if (isCentered2) {
          container.classList.add("active2");
        } else {
          container.classList.remove("active2");
        }
      });

      // Check if heart section is in view
      if (heartSectionRef.current) {
        const rect = heartSectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Trigger animation when section is 30% visible from the top
        if (rect.top < windowHeight * 0.05 && rect.bottom > 0) {
          setHeartVisible(true);
        } else {
          setHeartVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const totalPhotos = 30;

  const getSize = () => {
    if (typeof window === "undefined") return 300;
    if (window.innerWidth >= 1280) return 600;
    if (window.innerWidth >= 1024) return 500;
    if (window.innerWidth >= 768) return 400;
    return 300;
  };

  const getScale = () => {
    if (typeof window === "undefined") return 9;
    if (window.innerWidth >= 1280) return 16;
    if (window.innerWidth >= 1024) return 10;
    if (window.innerWidth >= 768) return 12;
    return 9;
  };

  const size = getSize();
  const scale = getScale();

  const heartPhotos = Array.from({ length: totalPhotos }).map((_, i) => {
    const photoIndex = i % photos.length;
    const t = (i / totalPhotos) * Math.PI * 2;

    const x = 16 * Math.pow(Math.sin(t), 3);

    const y =
      13 * Math.cos(t) -
      5 * Math.cos(2 * t) -
      2 * Math.cos(3 * t) -
      Math.cos(4 * t);

    return {
      ...photos[photoIndex],
      heartId: i,
      left: size / 2 + x * scale,
      top: size / 2 - y * scale,
    };
  });

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
        <div className="text-center space-y-8">
          <div>
            <h1 className="text-4xl md:text-7xl font-light text-gray-900 mb-2">
              Will I be Tristan's
            </h1>
            <h2 className="text-5xl md:text-7xl font-semibold text-yellow-400">
              girlfriend?
            </h2>
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-2xl text-pink-700 bounce">
              <FaHeart />
            </span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>
        </div>
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl md:text-7xl text-gray-900 mb-2">
          Let's find out...
        </h1>
      </div>

      {/* Love paragraphs with animated images */}
      <div className="love-section">
        <div className="love-paragraph-container">
          <div className="love-image love-image-left">
            <img src="/photos/1_20-01.jpg" alt="Memory" loading="lazy" decoding="async" />
          </div>
          <div className="love-image love-image-right">
            <img src="/photos/1_20-01.jpg" alt="Memory" loading="lazy" decoding="async" />
          </div>
          <p className="love-paragraph">
            <p>
              From the moment I met you, I knew there was something special
              about you. Your smile lights up every room you walk into, and your
              laugh is the most beautiful sound I've ever heard. You make every
              ordinary moment feel extraordinary, and I can't imagine my days
              without you in them.
            </p>
          </p>
        </div>

        <div className="love-paragraph-container">
          <div className="love-image love-image-left">
            <img src="/photos/1_20-01.webp" alt="Memory" loading="lazy" decoding="async" />
          </div>
          <div className="love-image love-image-right">
            <img src="/photos/1_20-01.webp" alt="Memory" loading="lazy" decoding="async" />
          </div>
          <p className="love-paragraph">
            You've shown me what it means to truly care for someone. The way you
            listen when I talk, the way you remember the little things I
            mention, and the way you always know how to make me feel better when
            I'm down - these are the things that make my heart skip a beat every
            single day.
          </p>
        </div>

        <div className="love-paragraph-container">
          <div className="love-image love-image-left">
            <img src="/photos/5.jpg" alt="Memory" loading="lazy" decoding="async" />
          </div>
          <div className="love-image love-image-right">
            <img src="/photos/6.jpg" alt="Memory" loading="lazy" decoding="async" />
          </div>
          <p className="love-paragraph">
            I love how we can talk for hours about everything and nothing, how
            we can sit in comfortable silence, and how even the simplest
            activities become adventures when I'm with you. You make me want to
            be a better person, and you inspire me to chase my dreams because
            you believe in me.
          </p>
        </div>

        <div className="love-paragraph-container">
          <div className="love-image love-image-left">
            <img src="/photos/7.jpg" alt="Memory" loading="lazy" decoding="async" />
          </div>
          <div className="love-image love-image-right">
            <img src="/photos/8.jpg" alt="Memory" loading="lazy" decoding="async" />
          </div>
          <p className="love-paragraph">
            Every day with you feels like a gift. I love the way you challenge
            me, support me, and stand by my side through everything. You've
            become my best friend, my confidant, and the person I want to share
            every moment with. Being with you feels like coming home.
          </p>
        </div>

        <div className="love-paragraph-container">
          <div className="love-image love-image-left">
            <img src="/photos/9.jpg" alt="Memory" loading="lazy" decoding="async" />
          </div>
          <div className="love-image love-image-right">
            <img src="/photos/10.jpg" alt="Memory" loading="lazy" decoding="async" />
          </div>
          <p className="love-paragraph">
            So yes, the answer is yes - a thousand times yes. I want to be your
            girlfriend, your partner, and your person. I want to create more
            memories with you, laugh with you, grow with you, and build
            something beautiful together. You mean the world to me, Tristan.
          </p>
        </div>
      </div>

      <div
        ref={heartSectionRef}
        className="min-h-screen flex flex-col items-center justify-center bg-white p-4 overflow-hidden"
      >
        <div className="heart-container mb-12">
          {heartPhotos.map((photo, index) => (
            <div
              key={photo.heartId}
              className={`heart-photo ${
                expandedId === photo.heartId ? "expanded" : ""
              } ${heartVisible ? "heart-photo-visible" : ""}`}
              style={{
                left: photo.left,
                top: photo.top,
                animationDelay: `${index * 0.05}s`,
              }}
              onMouseEnter={() => setExpandedId(photo.heartId)}
              onMouseLeave={() => setExpandedId(null)}
              onClick={() =>
                setExpandedId(
                  expandedId === photo.heartId ? null : photo.heartId,
                )
              }
            >
              <img
                src={`/photos/${photo.filename}`}
                alt={photo.caption}
                className="w-full h-full object-cover rounded-lg shadow-md transition-all"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1 z-10">
            <a
            href="/gallery"
              className={`text-3xl md:text-5xl font-bold text-gray-900 mb-12 ${heartVisible ? "heart-title-visible" : "heart-title-hidden"}`}
            >
              Yes!
            </a>
          </div>
        </div>


        <h1 className="text-xl md:text-3xl text-gray-900 mt-28 font-semibold">
          I love you so much, Tristan.
        </h1>
      </div>
    </>
  );
}
