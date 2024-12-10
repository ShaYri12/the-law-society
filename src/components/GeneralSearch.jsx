import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { SearchButton } from "./SearchButton";

export const GeneralSearch = ({
  formData,
  handleInputChange,
  handleSearch,
}) => {
  return (
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
  );
};
