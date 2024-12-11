import React from "react";
import { SearchButton } from "./SearchButton";
import areasOfPractice from "../../../public/assets/areaOfPractice";
import { IoIosArrowDown } from "react-icons/io";

export const AdvancedSearch = ({
  formData,
  searchType,
  setSearchType,
  handleInputChange,
  handleSearch,
}) => {
  return (
    <form onSubmit={handleSearch} className="space-y-6">
      <div className="flex md:flex-row flex-col md:gap-[20px] gap-[10px] mb-[20px]">
        <span className="text-[18px] leading-[1.5em]">Search by</span>
        <div className="flex md:flex-row flex-col gap-[20px]">
          <label className="flex items-center">
            <input
              type="radio"
              name="searchType"
              value="organisation"
              checked={searchType === "organisation"}
              onChange={(e) => setSearchType(e.target.value)}
              className="mr-2 w-[18px] h-[18px] appearance-none border-[1px] border-gray-600 rounded-full checked:border-[5px] checked:border-gray-500 bg-white"
            />
            <span className="text-[16px] md:text-[18px] leading-[1.5em]">
              Organisation
            </span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="searchType"
              value="person"
              checked={searchType === "person"}
              onChange={(e) => setSearchType(e.target.value)}
              className="mr-2 w-[18px] h-[18px] appearance-none border-[1px] border-gray-600 rounded-full checked:border-[5px] checked:border-gray-500 bg-white"
            />
            <span className="text-[16px] md:text-[18px] leading-[1.5em]">
              Person
            </span>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_auto] items-end gap-4">
        <div>
          <label className="block text-[18px] leading-[1.5em] mb-[5px]">
            Name or SRA ID
          </label>
          <input
            type="text"
            name="nameOrSRA"
            value={formData.nameOrSRA}
            onChange={handleInputChange}
            placeholder="Name of organisation or SRA ID"
            className="w-full p-[10px] border border-[#574840] placeholder:text-black/70"
          />
        </div>

        <div>
          <label className="block text-[18px] leading-[1.5em] mb-[5px]">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="Postcode, town, city or country"
            className="w-full p-[10px] border border-[#574840] placeholder:text-black/70"
          />
        </div>

        <div>
          <label className="block text-[18px] leading-[1.5em] mb-[5px]">
            Area of practice
          </label>
          <div className="relative">
            <select
              name="areaOfPractice"
              value={formData.areaOfPractice}
              onChange={handleInputChange}
              className="w-full p-[10px] border border-[#574840] placeholder:text-black/70 appearance-none pr-10"
            >
              {areasOfPractice.map((area) => (
                <option key={area.value} value={area.value}>
                  {area.label}
                </option>
              ))}
            </select>
            <IoIosArrowDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black/60" />
          </div>
        </div>
        <SearchButton />
      </div>
    </form>
  );
};
