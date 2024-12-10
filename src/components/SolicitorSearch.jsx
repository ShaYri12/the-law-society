import React, { useState } from "react";
import { data } from "../../public/assets/data";
import AboutSolicitor from "./AboutSolicitor/AboutSolicitor";
import { GeneralSearch } from "./GeneralSearch";
import { AdvancedSearch } from "./AdvancedSearch";
import { SearchResults } from "./SearchResults";

const SolicitorSearch = () => {
  const [activeTab, setActiveTab] = useState("quick");
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
    let filtered = [...data];

    if (activeTab === "quick") {
      if (formData.legalIssue) {
        filtered = filtered.filter((item) =>
          item.area_of_practice
            .toLowerCase()
            .includes(formData.legalIssue.toLowerCase())
        );
      }
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
      if (formData.nameOrSRA) {
        filtered = filtered.filter(
          (item) =>
            item.name
              .toLowerCase()
              .includes(formData.nameOrSRA.toLowerCase()) ||
            item.SRAid.toLowerCase().includes(formData.nameOrSRA.toLowerCase())
        );
      }
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
      if (formData.areaOfPractice) {
        filtered = filtered.filter((item) =>
          item.area_of_practice
            .toLowerCase()
            .includes(formData.areaOfPractice.toLowerCase())
        );
      }
    }

    setSearchResults(filtered);
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
          <h1 className="text-[45px] my-[0.5em] font-tinos leading-[1em] font-bold">
            Find a Solicitor
          </h1>
          <p className="text-[20px] mb-[18px]">
            The official database of{" "}
            <strong>{data.length.toLocaleString()}</strong> legal professionals
          </p>

          <div className="flex">
            <button
              className={`px-8 py-4 text-xl ${
                activeTab === "quick"
                  ? "bg-[#ffe4e1] text-black"
                  : "bg-[#00527a] text-white"
              }`}
              onClick={() => setActiveTab("quick")}
            >
              Quick search
            </button>
            <button
              className={`px-8 py-4 text-xl ${
                activeTab === "advanced"
                  ? "bg-[#ffe4e1] text-black"
                  : "bg-[#00527a] text-white"
              }`}
              onClick={() => setActiveTab("advanced")}
            >
              Advanced search
            </button>
          </div>

          <div className="bg-[#ffe4e1] p-8">
            {activeTab === "quick" ? (
              <GeneralSearch
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
        <AboutSolicitor />
      )}
    </div>
  );
};

export default SolicitorSearch;
