import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SearchResults } from "./Search/SearchResults";
import RefineResults from "./Search/RefineResults";
import SearchBox from "./Search/SearchBox";
import { useSearch } from "../contexts/SearchContext";

const SearchResultsPage = () => {
  const location = useLocation();
  const { areaOfPractice } = useSearch();
  const { searchResults: initialResults, formData: initialFormData } =
    location.state;

  const [searchResults, setSearchResults] = useState(initialResults);
  const [formData, setFormData] = useState({
    ...initialFormData,
    areaOfPractice: areaOfPractice,
    secondAreaOfPractice: "",
    language: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    let refined = [...initialResults];

    if (formData.areaOfPractice && formData.areaOfPractice !== "All areas") {
      refined = refined.filter((item) =>
        item.area_of_practice
          .toLowerCase()
          .includes(formData.areaOfPractice.toLowerCase())
      );
    }

    if (formData.secondAreaOfPractice) {
      refined = refined.filter(
        (item) =>
          item.area_of_practice
            .toLowerCase()
            .includes(formData.secondAreaOfPractice.toLowerCase()) ||
          item.area_of_practice
            .toLowerCase()
            .includes(formData.areaOfPractice.toLowerCase())
      );
    }

    if (formData.language) {
      refined = refined.filter((item) =>
        item.language.toLowerCase().includes(formData.language.toLowerCase())
      );
    }

    setSearchResults(refined);
  };

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      areaOfPractice: areaOfPractice,
    }));
  }, [areaOfPractice]);

  useEffect(() => {
    handleSearch();
  }, [formData, areaOfPractice]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [handleInputChange]);

  return (
    <div className="pt-[73px]">
      <SearchBox />
      <div className="md:px-[28px] px-[20px] py-[28px]">
        <div className="flex md:flex-row flex-col gap-[28px] max-w-[1200px] mx-auto">
          <RefineResults
            formData={formData}
            handleInputChange={handleInputChange}
            handleSearch={handleSearch}
          />
          <SearchResults results={searchResults} />
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;
