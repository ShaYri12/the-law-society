import React, { useState } from "react";
import { data } from "../../../public/assets/data";
import AboutSolicitor from "../AboutSolicitor/AboutSolicitor";
import { QuickSearch } from "./QuickSearch";
import { AdvancedSearch } from "./AdvancedSearch";
import { SearchResults } from "./SearchResults";

const SolicitorSearch = () => {
  const [activeTab, setActiveTab] = useState("advanced");
  const [searchType, setSearchType] = useState("organisation");
  const [searchResults, setSearchResults] = useState([]);
  const [formData, setFormData] = useState({
    legalIssue: "",
    location: "",
    nameOrSRA: "",
    areaOfPractice: "",
  });

  const handleSearch = (e) => {
    e.preventDefault();

    let filtered = [...data]; // Clone the data to ensure immutability

    // If quick search is active
    if (activeTab === "quick") {
      // Search by legal issue (area_of_practice)
      if (formData.legalIssue) {
        filtered = filtered.filter(
          (item) =>
            item.area_of_practice
              .toLowerCase()
              .includes(formData.legalIssue.toLowerCase()) // Filtering by area_of_practice
        );
      }

      // Search by location (country or associate_at)
      if (formData.location) {
        filtered = filtered.filter(
          (item) =>
            item.country
              .toLowerCase()
              .includes(formData.location.toLowerCase()) ||
            item.associate_at
              .toLowerCase()
              .includes(formData.location.toLowerCase())
        );
      }
    } else {
      // If it's an advanced search
      // Search by name or SRA ID
      if (formData.nameOrSRA) {
        filtered = filtered.filter(
          (item) =>
            item.name
              .toLowerCase()
              .includes(formData.nameOrSRA.toLowerCase()) ||
            item.SRAid.toLowerCase().includes(formData.nameOrSRA.toLowerCase())
        );
      }

      // Search by location
      if (formData.location) {
        filtered = filtered.filter(
          (item) =>
            item.country
              .toLowerCase()
              .includes(formData.location.toLowerCase()) ||
            item.associate_at
              .toLowerCase()
              .includes(formData.location.toLowerCase())
        );
      }

      // Search by area of practice
      if (formData.areaOfPractice) {
        filtered = filtered.filter(
          (item) =>
            item.area_of_practice
              .toLowerCase()
              .includes(formData.areaOfPractice.toLowerCase()) // Filtering by selected area of practice
        );
      }
    }

    setSearchResults(filtered); // Update the search results state
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="pt-[73px]">
      <div className="bg-[#FCFAF4] px-5 md:px-[28px] py-[28px] mb-[30px]">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-[27px] md:text-[45px] my-[0.5em] font-tinos leading-[1em] font-bold">
            Find a Solicitor
          </h1>
          <p className="text-[18px] md:text-[20px] mb-[18px]">
            The official database of{" "}
            <strong>{data.length.toLocaleString()}</strong> legal professionals
          </p>

          <div className="flex gap-1">
            <button
              className={`search-tab px-[10px] sm:px-[28px] py-[9px] text-[18px] sm:text-[21.6px] font-[600] tracking-[1px] leading-[1.5em] ${
                activeTab === "quick"
                  ? "bg-[#FBD7CC] text-black"
                  : "bg-[#004d71] text-white hover:underline"
              }`}
              onClick={() => setActiveTab("quick")}
            >
              Quick search
            </button>
            <button
              className={`search-tab px-[10px] sm:px-[28px] py-[9px] text-[18px] sm:text-[21.6px] font-[600] tracking-[1px] leading-[1.5em] ${
                activeTab === "advanced"
                  ? "bg-[#FBD7CC] text-black"
                  : "bg-[#004d71] text-white hover:underline"
              }`}
              onClick={() => setActiveTab("advanced")}
            >
              Advanced search
            </button>
          </div>

          <div className="bg-[#FBD7CC] p-[20px] sm:p-[28px]">
            {activeTab === "quick" ? (
              <QuickSearch
                formData={formData}
                handleInputChange={handleInputChange}
                handleSearch={handleSearch}
              />
            ) : (
              <AdvancedSearch
                formData={formData}
                searchType={searchType}
                setSearchType={setSearchType}
                handleInputChange={handleInputChange}
                handleSearch={handleSearch}
              />
            )}
          </div>
        </div>
      </div>

      {searchResults.length > 0 ? (
        <SearchResults results={searchResults} />
      ) : (
        <>
          <div className="px-[20px] md:px-[28px] py-[50px]">
            <div className="max-w-[1200px] mx-auto">
              <p className="para border-b border-[#4D839C] pb-2">
                Sorry, no results found.
              </p>
            </div>
          </div>
          <AboutSolicitor />
        </>
      )}
    </div>
  );
};

export default SolicitorSearch;
