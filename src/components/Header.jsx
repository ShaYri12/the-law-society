import { FaList } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-[#005177] text-white w-full">
      <div className="max-w-[1200px] container mx-auto px-4 md:px-[28px] py-3 flex items-center justify-between w-full">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/assets/logo.svg"
              alt="Law Society Logo"
              className="w-auto h-10"
            />
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/"
              className="text-white hover:text-gray-200 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-gray-200 transition-colors"
            >
              About
            </Link>
          </nav>
        </div>
        <button className="flex items-center gap-2 bg-transparent border-2 border-white px-4 py-2 rounded hover:bg-white/10 transition-colors">
          <FaList className="w-4 h-4" />
          <span className="hidden md:inline">MY SHORTLIST</span>
        </button>
      </div>
    </header>
  );
}
