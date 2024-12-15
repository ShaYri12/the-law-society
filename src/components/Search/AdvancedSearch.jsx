import React, { useState, useEffect, useRef } from "react";
import { SearchButton } from "./SearchButton";
import areasOfPractice from "../../../public/assets/data/areaOfPractice";
import { IoIosArrowDown } from "react-icons/io";
import { useSearch } from "../../contexts/SearchContext";
import { countries } from "../../../public/assets/data/countries";

export const AdvancedSearch = ({
  formData,
  searchType,
  setSearchType,
  handleInputChange,
  handleSearch,
}) => {
  const { areaOfPractice, setAreaOfPractice } = useSearch();
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLocationChange = (e) => {
    const { value } = e.target;
    handleInputChange(e);

    if (value.length > 0) {
      const filtered = countries.filter((country) =>
        country.name.toLowerCase().startsWith(value.toLowerCase())
      );
      setFilteredCountries(filtered);
      setShowDropdown(true);
    } else {
      setFilteredCountries([]);
      setShowDropdown(false);
    }
  };

  const handleCountrySelect = (country) => {
    handleInputChange({ target: { name: "location", value: country.name } });
    setShowDropdown(false);
  };

  return (
    <form onSubmit={handleSearch} className="space-y-6">
      {/* Search by Type */}
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

      {/* Search Fields */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_auto] items-end gap-4">
        {/* Name or SRA ID */}
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

        {/* Location */}
        <div className="relative" ref={dropdownRef}>
          <label className="block text-[18px] leading-[1.5em] mb-[5px]">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleLocationChange}
            placeholder="Postcode, town, city or country"
            className="w-full p-[10px] border border-[#574840] placeholder:text-black/70"
          />
          {showDropdown && filteredCountries.length > 0 && (
            <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
              {filteredCountries.map((country) => (
                <li
                  key={country.code}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleCountrySelect(country)}
                >
                  {country.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Area of Practice */}
        <div>
          <label className="block text-[18px] leading-[1.5em] mb-[5px]">
            Area of practice
          </label>
          <div className="relative">
            <select
              name="areaOfPractice"
              value={areaOfPractice}
              onChange={(e) => setAreaOfPractice(e.target.value)}
              className="w-full p-[10px] border border-[#574840] placeholder:text-black/70 appearance-none pr-10"
            >
              <option value="">Select an area</option>
              {areasOfPractice.map((area, index) => (
                <option key={index} value={area.label}>
                  {area.label}
                </option>
              ))}
            </select>
            <IoIosArrowDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black/60" />
          </div>
        </div>

        {/* Search Button */}
        <SearchButton />
      </div>
    </form>
  );
};
