import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-center gap-6">
      <Link to="/" className="font-semibold hover:underline">
        Home
      </Link>
      <Link to="/gallery" className="font-semibold hover:underline">
        Gallery
      </Link>
    </nav>
  );
}
