import { useState } from "react";
import { FaList } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { MobileMenu } from "./MobileMenu";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdMenu } from "react-icons/io";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed bg-[#004d71] text-white w-full z-[999] border-b border-[D9E5EA]">
        <div className="max-w-[1200px] container mx-auto py-[10px] px-[20px] flex items-center justify-between w-full">
          <div className="flex items-center gap-[23px]">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/assets/logo.svg"
                alt="Law Society Logo"
                className="w-[150px] h-auto"
              />
            </Link>
            <nav className="hidden md:flex gap-[23px]">
              <Link
                to="/"
                className="text-white text-[15px] font-[500] leading-[1.5em] transition-colors hover:underline"
              >
                Home
              </Link>
              <Link
                to="/"
                className="text-white text-[15px] font-[500] leading-[1.5em] transition-colors hover:underline"
              >
                About
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center"
            >
              {!isMobileMenuOpen ? (
                <div className="flex items-center gap-[10px] leading-[1.5em] text-white">
                  <span className="text-[14px]">Menu</span>
                  <span className="py-[3px] px-[5px] border h-fit">
                    <IoMdMenu size={22} />
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-[10px] leading-[1.5em] text-white">
                  <span className="text-[14px]">Close</span>
                  <span className="py-[3px] px-[5px] border h-fit">
                    <IoCloseSharp size={22} />
                  </span>
                </div>
              )}
            </button>
            <Link
              to="/"
              className="hidden md:flex items-center gap-2 group text-[15px] font-[600] tracking-[1.5px] uppercase bg-transparent border border-white px-[20px] py-[10px] transition-colors"
            >
              <FaList size={15} />
              <span className="group-hover:underline">MY SHORTLIST</span>
            </Link>
          </div>
        </div>
      </header>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
