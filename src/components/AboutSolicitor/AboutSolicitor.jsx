import { FaInfoCircle } from "react-icons/fa";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import LawSociety from "./LawSociety";

export default function AboutSolicitor() {
  return (
    <div className="py-8">
      <div className="rounded-lg overflow-hidden mb-[60px]">
        <div className="md:flex mb-[16px] bg-[#F2F6F8]">
          {/* About Section */}
          <div className="md:w-1/2 py-[28px] md:px-[28px] px-5">
            <h2 className="heading">About Find a Solicitor</h2>
            <p className="para">
              Run by the Law Society, Find a Solicitor is a free service for
              anyone looking for information about organisations or people
              providing legal services in England and Wales that are regulated
              by the Solicitors Regulation Authority (SRA).
            </p>
            <button className="bg-[#005177] text-white px-4 py-2 rounded hover:bg-[#003e5a] transition-colors">
              LEARN MORE
            </button>
          </div>
          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src="/assets/home-banner-about.jpg"
              alt="People in a meeting"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* Info Box */}
        <div className="bg-[#f0f7fa] p-4 flex items-start">
          <FaInfoCircle className="text-[#005177] mr-2 mt-1 flex-shrink-0" />
          <p className="text-sm">
            <span className="font-semibold">Using Find a Solicitor</span>
            <br />
            The Law Society does not provide legal advice. Please{" "}
            <Link to="#" className="text-[#005177] hover:underline">
              read our guides to common legal issues
            </Link>{" "}
            for information about getting advice from a solicitor.
          </p>
        </div>
      </div>

      {/* Using Find a Solicitor Section */}
      <Cards />

      {/* Law Society Section */}
      <LawSociety />
    </div>
  );
}
