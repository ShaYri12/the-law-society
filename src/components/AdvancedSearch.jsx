import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { SearchButton } from "./SearchButton";

export const AdvancedSearch = ({
  formData,
  searchType,
  setSearchType,
  handleInputChange,
  handleSearch,
}) => {
  return (
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
  );
};
