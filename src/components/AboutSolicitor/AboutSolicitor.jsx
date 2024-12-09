import { FaInfoCircle } from "react-icons/fa";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import LawSociety from "./LawSociety";

export default function AboutSolicitor() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-[28px] py-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="md:flex">
          {/* About Section */}
          <div className="md:w-1/2 p-6">
            <h2 className="text-3xl font-bold mb-4">About Find a Solicitor</h2>
            <p className="mb-4">
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
              src="/placeholder.svg"
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
