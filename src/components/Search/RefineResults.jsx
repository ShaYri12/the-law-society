import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoChevronUp } from "react-icons/io5";
import areasOfPractice from "../../../public/assets/data/areaOfPractice";
import { accreditations } from "../../../public/assets/data/accreditations";
import { accessOptions } from "../../../public/assets/data/accessOptions";
import { languages } from "../../../public/assets/data/languagesData";
import { useSearch } from "../../contexts/SearchContext";

export default function RefineResults({
  formData,
  handleInputChange,
  handleSearch,
}) {
  const { areaOfPractice, setAreaOfPractice } = useSearch();
  const [includeInHouse, setIncludeInHouse] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    Accreditations: true,
    "Access options": false,
  });
  const [selectedItems, setSelectedItems] = useState({});
  const [language, setLanguage] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const toggleItem = (item) => {
    setSelectedItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  useEffect(() => {
    // Trigger search when any refinement option changes
    handleSearch();
  }, [formData, includeInHouse, selectedItems, language]);

  const handleLocalInputChange = (e) => {
    const { name, value } = e.target;
    handleInputChange({ target: { name, value } });
    // Update localStorage
    const storedFormData = JSON.parse(
      localStorage.getItem("searchFormData") || "{}"
    );
    localStorage.setItem(
      "searchFormData",
      JSON.stringify({
        ...storedFormData,
        [name]: value,
      })
    );
    setIsDrawerOpen(false);
  };

  const handleLanguageChange = (e) => {
    const { value } = e.target;
    setLanguage(value);
    handleLocalInputChange(e);
    setIsDrawerOpen(false);
  };

  const RefineContent = () => (
    <>
      <div className="w-full bg-[#FEF8F6] p-[16px] mb-[30px]">
        <h2 className="text-[16px] md:text-[18px] font-bold md:leading-[1.5em]">
          Refine results
        </h2>

        {/* Area of practice */}
        <div className="mb-[16px]">
          <label className="block text-[#004d71] text-[16px] font-bold py-[10px] mb-[2px] leading-[1.5em]">
            Area of practice
          </label>
          <div className="relative">
            <select
              name="areaOfPractice"
              value={areaOfPractice}
              onChange={(e) => {
                handleLocalInputChange(e);
                setAreaOfPractice(e.target.value);
              }}
              className="w-full p-[10px] border border-[#574840] placeholder:text-black/70 appearance-none pr-10"
            >
              {areasOfPractice.map((area, index) => (
                <option key={index} value={area.label}>
                  {area.label}
                </option>
              ))}
            </select>
            <IoIosArrowDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black/60" />
          </div>
        </div>

        {/* Second area of practice */}
        <div className="mb-4">
          <label className="block text-[#004d71] text-[16px] font-bold py-[10px] mb-[2px] leading-[1.5em]">
            Second area of practice
          </label>
          <div className="relative">
            <select
              name="secondAreaOfPractice"
              value={formData.secondAreaOfPractice}
              onChange={handleLocalInputChange}
              className="w-full p-[10px] border border-[#574840] placeholder:text-black/70 appearance-none pr-10"
            >
              <option value="">Select second area of practice</option>
              {areasOfPractice.map((area, index) => (
                <option key={index} value={area.label}>
                  {area.label}
                </option>
              ))}
            </select>
            <IoIosArrowDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black/60" />
          </div>
        </div>

        {/* Include in-house teams */}
        <div className="mb-[18px]">
          <label className="flex items-start gap-3 text-[14px] leading-[20px] mb-[12px]">
            <input
              type="checkbox"
              checked={includeInHouse}
              onChange={() => setIncludeInHouse(!includeInHouse)}
              className="custom-checkbox mt-1"
            />
            <span>
              Include in-house teams, government departments and other employers
            </span>
          </label>
        </div>

        {/* Accreditations */}
        <div
          className={`${
            expandedSections["Accreditations"] ? "pb-[12px]" : ""
          } border-t-[0.8px] border-[#4D839C]`}
        >
          <button
            onClick={() => toggleSection("Accreditations")}
            className="flex justify-between items-center w-full text-left text-[#004d71] text-[16px] font-bold py-[10px] mb-[2px] leading-[1.5em]"
          >
            <span>Accreditations</span>
            <IoChevronUp
              className={`transition-transform duration-300 ${
                expandedSections["Accreditations"] ? "" : "rotate-[180deg]"
              }`}
            />
          </button>
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              expandedSections["Accreditations"] ? "max-h-full" : "max-h-0"
            }`}
          >
            <div className="space-y-2">
              {accreditations.map((item) => (
                <label
                  key={item}
                  className="flex items-start gap-3 text-[14px] leading-[20px] mb-[12px]"
                >
                  <input
                    type="checkbox"
                    checked={selectedItems[item] || false}
                    onChange={() => toggleItem(item)}
                    className="custom-checkbox mt-1"
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Access options */}
        <div className="mb-4 border-t-[0.8px] border-[#4D839C]">
          <p className="text-[#004d71] text-[16px] font-bold py-[10px] mb-[2px] leading-[1.5em]">
            Access options
          </p>
          <div className="">
            {accessOptions.map((item) => (
              <label
                key={item}
                className="flex items-start gap-3 text-[14px] leading-[20px] mb-[12px]"
              >
                <input
                  type="checkbox"
                  checked={selectedItems[item] || false}
                  onChange={() => toggleItem(item)}
                  className="custom-checkbox mt-[2px]"
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Language spoken */}
        <div className="mb-2 border-t-[0.8px] border-[#4D839C]">
          <label className="block text-[#004d71] text-[16px] font-bold py-[10px] mb-[2px] leading-[1.5em]">
            Language spoken
          </label>
          <div className="relative">
            <select
              name="language"
              value={language}
              onChange={handleLanguageChange}
              className="w-full p-[10px] border border-[#574840] placeholder:text-black/70 appearance-none pr-10"
            >
              <option value="">Select language</option>
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
            <IoIosArrowDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black/60" />
          </div>
        </div>
      </div>

      <div className="w-full bg-[#F2F6F8] p-[16px]">
        {/* Help and advice */}
        <h3 className="font-tinos font-bold text-[24px] leading-[1em] mb-[0.5em]">
          Help and advice
        </h3>
        <ul className="space-y-3 text-[15px]">
          <li>
            <a href="#" className="text-[#574840] underline hover:no-underline">
              About accreditations
            </a>
          </li>
          <li>
            <a href="#" className="text-[#574840] underline hover:no-underline">
              How to choose a solicitor
            </a>
          </li>
          <li>
            <a href="#" className="text-[#574840] underline hover:no-underline">
              Getting expert help
            </a>
          </li>
        </ul>
      </div>
    </>
  );

  return (
    <>
      <div className="md:hidden">
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="border-2 border-[#004d71] text-[#004d71] font-bold px-4 py-2 rounded"
        >
          Refine Results
        </button>
      </div>
      <div className="hidden md:block max-w-[270px]">
        <RefineContent />
      </div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          isDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsDrawerOpen(false)}
      ></div>
      <div
        className={`fixed inset-y-0 left-0 w-full md:max-w-sm bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full overflow-y-auto relative">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-semibold">Refine Results</h2>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="text-gray-500 hover:text-gray-700 fixed z-[999999] top-[80px] right-[20px] bg-white rounded-full p-1 shadow-lg"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div className="p-4">
            <RefineContent />
          </div>
        </div>
      </div>
    </>
  );
}
