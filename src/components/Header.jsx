import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link
          to="/travelapp"
          className="text-2xl font-extrabold tracking-wide text-slate-700 transition hover:text-slate-900"
        >
          Traveler
        </Link>
      </div>
    </header>
  );
};

export default Header;