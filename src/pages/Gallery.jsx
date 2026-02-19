const images = [
  "/images/boy1.jpg",
  "/images/boy2.jpg",
  "/images/boy3.jpg",
];

export default function Gallery() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="My Sweet Boy"
            className="rounded-2xl shadow-md hover:scale-105 transition"
          />
        ))}
      </div>
    </div>
  );
}
