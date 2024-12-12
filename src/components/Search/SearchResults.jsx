import { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";

export const SearchResults = ({ results }) => {
  const [openSections, setOpenSections] = useState({
    areas: false,
    languages: false,
  });
  const [showEmail, setShowEmail] = useState(false);

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="w-full">
      <Link
        to="/"
        className="flex items-center text-[#004d71] text-[12.5px] leading-[19px] font-[600] tracking-[1.5px] uppercase hover:underline"
      >
        <MdKeyboardArrowLeft size={20} className="mr-2" />
        Go BACK
      </Link>

      {results.length > 0 ? (
        <>
          <div className="w-full">
            <div className="space-y-[60px]">
              {results.map((solicitor, index) => (
                <div key={index}>
                  <h1 className="text-[45px] font-bold font-tinos leading-[58px] my-[0.5em]">
                    {solicitor.name}
                  </h1>

                  <p className="para border-b border-[#4D839C] pb-[0.5em]">
                    Solicitor Admitted as a solicitor: {solicitor.admitted_date}
                  </p>

                  <div className="space-y-[20px] mb-6">
                    <div className="flex gap-x-[14px]">
                      <span className="md:text-[18px] text-[16px] leading-[1.5em] font-bold">
                        SRA ID
                      </span>
                      <span>
                        {solicitor.SRAid}{" "}
                        <span className="md:text-[18px] text-[16px] leading-[1.5em] font-bold">
                          | SRA Regulated
                        </span>
                      </span>
                    </div>

                    <div className="flex gap-x-[14px]">
                      <span className="md:text-[18px] text-[16px] leading-[1.5em] font-bold">
                        Telephone
                      </span>
                      <span>{solicitor.telephone}</span>
                    </div>

                    <div className="flex gap-x-[14px]">
                      <span className="md:text-[18px] text-[16px] leading-[1.5em] font-bold">
                        Email
                      </span>
                      <div className="flex gap-x-[14px]">
                        <div
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            showEmail ? "max-h-[50px]" : "max-h-0 hidden"
                          }`}
                        >
                          {showEmail && <span>{solicitor.email}</span>}
                        </div>
                        <button
                          onClick={() => setShowEmail(!showEmail)}
                          className="hover:no-underline cursor-pointer underline text-[#574840]"
                        >
                          {showEmail ? "Hide" : "Show"}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-[16px] mb-[20px]">
                    <h2 className="md:text-[18px] text-[16px] leading-[1.5em] font-bold">
                      {solicitor.role} at{" "}
                      <span className="hover:no-underline cursor-pointer underline text-[#574840] font-[400]">
                        {solicitor.associate_at.split(",")[0]}
                      </span>
                    </h2>
                    <p className="leading-[23px] max-w-[450px]">
                      {solicitor.associate_at}
                    </p>
                    <button className="hover:no-underline cursor-pointer underline text-[#574840] font-[400]">
                      <a
                        href={solicitor.google_maps_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View in Google Maps
                      </a>
                    </button>
                  </div>

                  <div
                    className={`border-t border-[#4D839C] border-l-[4px] transition-all duration-300 ease-in-out ${
                      openSections.areas
                        ? "border-l-[#004d71]"
                        : "border-l-white"
                    }`}
                  >
                    <button
                      onClick={() => toggleSection("areas")}
                      className="flex items-center justify-between w-full p-4 text-left"
                    >
                      <h2 className="font-[700] text-[21.6px] leading-[32px]">
                        Areas of practice
                      </h2>
                      <IoMdAdd
                        className={`transform transition-transform duration-200 text-xl ${
                          openSections.areas ? "rotate-45" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        openSections.areas ? "max-h-[200px]" : "max-h-0"
                      }`}
                    >
                      {openSections.areas && (
                        <div className="pb-4 px-4 grid grid-cols-2 gap-[14px] md:text-[18px] text-[16px] leading-[1.5em]">
                          <span>{solicitor.area_of_practice}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div
                    className={`border-y border-[#4D839C] border-l-[4px] transition-all duration-300 ease-in-out ${
                      openSections.languages
                        ? "border-l-[#004d71]"
                        : "border-l-white"
                    }`}
                  >
                    <button
                      onClick={() => toggleSection("languages")}
                      className="flex items-center justify-between w-full p-4 text-left"
                    >
                      <h2 className="font-[700] text-[21.6px] leading-[32px]">
                        Languages spoken
                      </h2>
                      <IoMdAdd
                        className={`transform transition-transform duration-200 text-xl ${
                          openSections.languages ? "rotate-45" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        openSections.languages ? "max-h-[200px]" : "max-h-0"
                      }`}
                    >
                      {openSections.languages && (
                        <div className="pb-4 px-4 grid grid-cols-3 gap-[14px] md:text-[18px] text-[16px] leading-[1.5em]">
                          {solicitor.language.split(",").map((lang, index) => (
                            <span key={index} className="flex items-center">
                              {lang.trim()}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="max-w-[1200px] mx-auto bg-[#F2F6F8] p-[16px] border border-[#004d71] border-l-[4px] space-y-[28px] mt-[56px]">
            <div className="flex flex-col items-start">
              <h4 className="text-[#004d71] text-[18px] text-[16px] font-[600]">
                Where does this information come from?
              </h4>
              <p className="text-[16px] md:text-[18px] text-[16px] leading-[1.5em]">
                Most information on this page comes from the Solicitors
                Regulation Authority. However, some information may have been
                edited directly by the professional, firm or their
                representative.{" "}
                <Link to="#" className="text-[#574840] text-underline">
                  Find out more.
                </Link>
              </p>
            </div>
            <div className="flex flex-col items-start">
              <h4 className="text-[#004d71] text-[18px] text-[16px] font-[600]">
                Are these your details?
              </h4>
              <p className="text-[16px] md:text-[18px] text-[16px] leading-[1.5em]">
                If you need to amend any information about you on Find a
                Solicitor or wish to give other feedback about the website,
                please call 020 7320 5757 (Monday to Friday from 09:00 to 17:00
                charged at local call rates) or visit our{" "}
                <Link to="#" className="text-[#574840] text-underline">
                  contact us
                </Link>{" "}
                page.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <h4 className="text-[#004d71] text-[18px] text-[16px] font-[600]">
                Report abuse
              </h4>
              <p className="text-[16px] md:text-[18px] text-[16px] leading-[1.5em]">
                To notify the Law Society about any inappropriate or offensive
                content displayed on Find a Solicitor, please visit our{" "}
                <Link to="#" className="text-[#574840] text-underline">
                  contact us
                </Link>{" "}
                page.
              </p>
            </div>
          </div>
        </>
      ) : (
        <p className="para border-b border-[#4D839C] pb-4 pt-[30px]">
          Sorry, no results found.
        </p>
      )}
    </div>
  );
};
