import React from "react";
import { SearchButton } from "./SearchButton";
import { IoIosArrowDown } from "react-icons/io";

export const QuickSearch = ({ formData, handleInputChange, handleSearch }) => {
  return (
    <form onSubmit={handleSearch} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] items-end gap-[14px]">
        <div className="w-full">
          <label className="block text-[18px] leading-[1.5em] mb-[5px]">
            Your legal issue
          </label>
          <div className="relative">
            <select
              name="legalIssue"
              value={formData.legalIssue}
              onChange={handleInputChange}
              className="w-full p-[10px] border border-[#574840] appearance-none pr-10 [&_optgroup]:font-bold [&_optgroup]:text-black [&_option]:pl-4 [&_option]:font-normal [&_option]:text-gray-900"
            >
              <option value="">All issues</option>
              <optgroup label="PERSONAL">
                <option value="accident-injury">Accident and Injury</option>
                <option value="consumer-rights">
                  Consumer and civil rights
                </option>
                <option value="crime">Crime</option>
                <option value="employment">Employment</option>
                <option value="family">Family and relationships</option>
                <option value="property">
                  Houses, property and neighbours
                </option>
                <option value="immigration">
                  Immigration and changing countries
                </option>
                <option value="mental-capacity">Mental Capacity</option>
                <option value="money-debt">Money and debt</option>
                <option value="welfare">
                  Social welfare, health and benefits
                </option>
                <option value="wills">Wills, trusts and probate</option>
              </optgroup>
              <optgroup label="BUSINESS">
                <option value="business-premises">Business premises</option>
                <option value="commercial">Company and commercial</option>
                <option value="dispute-resolution">Dispute resolution</option>
                <option value="eut">Energy, utilities and transport</option>
                <option value="mitip">
                  Media, IT and intellectual property
                </option>
                <option value="rc">Regulation and compliance</option>
              </optgroup>
            </select>
            <IoIosArrowDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black/60" />
          </div>
        </div>

        <div className="w-full">
          <label className="block text-[18px] leading-[1.5em] mb-[5px]">
            Location of legal adviser
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
        <SearchButton />
      </div>
    </form>
  );
};
