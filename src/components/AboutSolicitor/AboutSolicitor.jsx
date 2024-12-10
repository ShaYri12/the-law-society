import Cards from "./Cards";
import { Link } from "react-router-dom";
import LawSociety from "./LawSociety";
import {
  IoIosInformationCircleOutline,
  IoMdInformationCircleOutline,
} from "react-icons/io";

export default function AboutSolicitor() {
  return (
    <div className="px-5 md:px-[28px] py-[28px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="overflow-hidden mb-[60px]">
          <div className="flex flex-col-reverse md:flex-row  mb-[16px] bg-[#F2F6F8]">
            {/* About Section */}
            <div className="md:w-1/2 py-[28px] md:px-[28px] px-5">
              <h2 className="heading">About Find a Solicitor</h2>
              <p className="para">
                Run by the Law Society, Find a Solicitor is a free service for
                anyone looking for information about organisations or people
                providing legal services in England and Wales that are regulated
                by the Solicitors Regulation Authority (SRA).
              </p>
              <button className="bg-[#004d71] text-white px-[25px] py-[10px] text-[15px] font-[600] hover:bg-[#003e5a] transition-colors uppercase tracking-[1.5px] mt-[10px]">
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
          <div className="bg-[#F2F6F8] p-[16px] flex flex-col items-start border border-[#004d71] border-l-[4px]">
            <div className="flex items-center">
              <IoMdInformationCircleOutline
                size={18}
                className="text-black/80 mr-1 flex-shrink-0"
              />
              <span className="text-[#004d71] text-[18px] font-[600]">
                Using Find a Solicitor
              </span>
            </div>
            <p className="text-[18px] leading-[1.5em]">
              The Law Society does not provide legal advice. Please{" "}
              <Link to="#" className="text-[#574840] text-underline">
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
    </div>
  );
}
