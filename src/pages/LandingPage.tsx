import { useState, useEffect, useRef } from "react";
import { FaHeart } from "react-icons/fa";
import { photos, LandingPhotos } from "../data/photos";
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

        const isCentered =
          containerCenter > windowHeight * 0.01 &&
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

      if (heartSectionRef.current) {
        const rect = heartSectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight * 0.5 && rect.bottom > 0) {
          setHeartVisible(true);
        } else {
          setHeartVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

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

      <div className="love-section">
        <div className="love-paragraph-container">
          <div className="love-image love-image-left">
            <img
              src="/photos/landing/1.webp"
              alt="Memory"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="love-image love-image-right">
            <img
              src="/photos/landing/2.webp"
              alt="Memory"
              loading="lazy"
              decoding="async"
            />
          </div>
          <p className="love-paragraph">
            <p>
              My immediate instict is to do a bit. Something like, "Uhm, I guess
              so," or "I'll think about it." <br /><br />But after pondering for a little
              while, I've decided to use this as a platform to tell you how much
              I love you and how much you mean to me. You'll get the answer
              eventually, I swear. Time to exercise a little bit of the patience
              we would talk about. <br /><br />
              Here it goes...
            </p>
          </p>
        </div>

        <div className="love-paragraph-container">
          <div className="love-image love-image-left">
            <img
              src="/photos/landing/3.webp"
              alt="Memory"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="love-image love-image-right">
            <img
              src="/photos/landing/4.webp"
              alt="Memory"
              loading="lazy"
              decoding="async"
            />
          </div>
          <p className="love-paragraph">
            It's crazy how much you remember about our first date. Most of what
            I can to recall is feeling relatively calm at first, thinking, "it's
            just another first date." <br />I got a little nervous stepping out
            of my car, but as I saw this beautiful, smiley boy walking towards
            me, my brain shut down and all I could think was, <br />
            <br />"
            <span className="font-semibold italic">
              HOLY SHIT HOLY SHIT HOOOOLLLYYY SHHIIIITTTT!
            </span>
            " <br />
            <br /> My immediate (and subsequent) attraction to you was INSANE!
          </p>
        </div>

        <div className="love-paragraph-container">
          <div className="love-image love-image-left">
            <img
              src="/photos/landing/5.webp"
              alt="Memory"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="love-image love-image-right">
            <img
              src="/photos/landing/6.webp"
              alt="Memory"
              loading="lazy"
              decoding="async"
            />
          </div>
          <p className="love-paragraph">
            I still think it's a bit unreal. This person who I felt so
            intensely attracted to on first sight, just ended up revealing more
            and more characteristics that kept drawing me in.<br /><br />
            This random dude from the internet turned out to not only be
            insanely hot in real life, but also kind, and caring. He's wildly
            smart, tremendously funny, and scarily charasmatic. <br /><br />What's even
            more wild is that <br />
            <span className="font-semibold italic">HE'S INTO ME TOO!</span>
          </p>
        </div>

        <div className="love-paragraph-container">
          <div className="love-image love-image-left">
            <img
              src="/photos/landing/7.webp"
              alt="Memory"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="love-image love-image-right">
            <img
              src="/photos/landing/8.webp"
              alt="Memory"
              loading="lazy"
              decoding="async"
            />
          </div>
          <p className="love-paragraph">
            That crazy, whirlwind feeling still hasn't left me. Sometimes, when
            I look at you while you're talking or doing something mundane, I
            just get hit with this realization that that man is actually real,
            and he's all mine. It's hard for me to put most of my thoughts into
            words, but that feeling is beyond indescribable. I just get so
            completely awestruck by how lucky I am to have you in my life.
            <br /> <br /> You make it so easy for me to still find more and more
            reasons to love you.
          </p>
        </div>

        <div className="love-paragraph-container">
          <div className="love-image love-image-left">
            <img
              src="/photos/landing/9.webp"
              alt="Memory"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="love-image love-image-right">
            <img
              src="/photos/landing/10.webp"
              alt="Memory"
              loading="lazy"
              decoding="async"
            />
          </div>
          <p className="love-paragraph">
            I could genuinely go on and on about all the things I love about
            you, but I need to save some content for future projects. So, for
            now, I'll just say this: <br />
            <br />I love you for being the person that you are, and for sharing
            that person with me. I love you for being the person with whom I want to share
            infinitely more memories. <br /><br /><span className= "italic">You mean the world to me,
            Tristan.</span>
          </p>
        </div>
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl md:text-6xl text-gray-900 italic text-center mb-2 px-2">
          So, with all of that in mind,<br /> my final answer is...
        </h1>
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
              className={`text-4xl md:text-5xl font-bold text-gray-900 mb-12 ${heartVisible ? "heart-title-visible" : "heart-title-hidden"}`}
            >
              Yes!
            </a>
          </div>
        </div>
        <h1 className="text-xl md:text-3xl text-gray-900 mt-28">
          One thousand times yes.
        </h1>

        <h1 className="text-xl md:text-3xl text-gray-900 font-semibold mb-28 md:m-2">
          I love you so much, Tristan.
        </h1>
      </div>
    </>
  );
}
