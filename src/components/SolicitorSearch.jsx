import React, { useState } from "react";
import { FaSearch, FaChevronDown } from "react-icons/fa";
import { data } from "../../public/assets/data";
import AboutSolicitor from "./AboutSolicitor/AboutSolicitor";

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

  const SearchButton = () => {
    return (
      <div className="flex justify-end">
        <button
          onClick={handleSearch}
          className="bg-[#00527a] text-white px-8 py-4 text-xl rounded hover:bg-[#003d5c] transition-colors"
        >
          SEARCH
        </button>
      </div>
    );
  };

  return (
    <div className="max-w-[1200px] mx-auto px-5 md:px-[28px] py-8 py-[40px]">
      <h1 className="text-4xl font-bold mb-2">Find a Solicitor</h1>
      <p className="text-xl mb-8">
        The official database of {data.length.toLocaleString()} legal
        professionals
      </p>

      <div className="mb-6">
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
            <form onSubmit={handleSearch} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] items-end gap-4">
                <div className="w-full">
                  <label className="block text-xl mb-2">Your legal issue</label>
                  <div className="relative">
                    <select
                      name="legalIssue"
                      value={formData.legalIssue}
                      onChange={handleInputChange}
                      className="w-full p-4 border rounded appearance-none pr-10"
                    >
                      <option value="">All issues</option>
                      <option value="Family">Family law</option>
                      <option value="Commercial">Commercial law</option>
                    </select>
                    <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2" />
                  </div>
                </div>

                <div className="w-full">
                  <label className="block text-xl mb-2">
                    Location of legal adviser
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Postcode, town, city or country"
                    className="w-full p-4 border rounded"
                  />
                </div>
                <SearchButton />
              </div>
            </form>
          ) : (
            <form onSubmit={handleSearch} className="space-y-6">
              <div className="flex gap-8 mb-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="searchType"
                    value="organisation"
                    checked={searchType === "organisation"}
                    onChange={(e) => setSearchType(e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-xl">Organisation</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="searchType"
                    value="person"
                    checked={searchType === "person"}
                    onChange={(e) => setSearchType(e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-xl">Person</span>
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_auto] items-end gap-4">
                <div>
                  <label className="block text-xl mb-2">Name or SRA ID</label>
                  <input
                    type="text"
                    name="nameOrSRA"
                    value={formData.nameOrSRA}
                    onChange={handleInputChange}
                    placeholder="Name of organisation or SRA ID"
                    className="w-full p-4 border rounded"
                  />
                </div>

                <div>
                  <label className="block text-xl mb-2">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Postcode, town, city or country"
                    className="w-full p-4 border rounded"
                  />
                </div>

                <div>
                  <label className="block text-xl mb-2">Area of practice</label>
                  <div className="relative">
                    <select
                      name="areaOfPractice"
                      value={formData.areaOfPractice}
                      onChange={handleInputChange}
                      className="w-full p-4 border rounded appearance-none pr-10"
                    >
                      <option value="">All areas</option>
                      <option value="Family">Family law</option>
                      <option value="Commercial">Commercial law</option>
                    </select>
                    <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2" />
                  </div>
                </div>
                <SearchButton />
              </div>
            </form>
          )}
        </div>
      </div>

      {searchResults.length > 0 ? (
        <div className="mt-8">
          <h2 className="text-2xl mb-4">Search Results</h2>
          <div className="space-y-4">
            {searchResults.map((solicitor) => (
              <div key={solicitor.id} className="border p-4 rounded">
                <h3 className="text-xl font-bold">{solicitor.name}</h3>
                <p>{solicitor.area_of_practice}</p>
                <p>{solicitor.associate_at}</p>
                <p>SRA ID: {solicitor.SRAid}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <AboutSolicitor />
      )}
    </div>
  );
};

export default SolicitorSearch;
