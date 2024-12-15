import React, { useState, useEffect } from "react";
import { useSearch } from "../contexts/SearchContext";
import { SearchResults } from "./Search/SearchResults";
import RefineResults from "./Search/RefineResults";
import SearchBox from "./Search/SearchBox";

const SearchResultsPage = () => {
  const {
    areaOfPractice,
    searchResults: contextSearchResults,
    formData: contextFormData,
    setSearchResults,
  } = useSearch();

  const [searchResults, setLocalSearchResults] = useState(
    contextSearchResults || []
  );

  const [formData, setFormData] = useState({
    ...contextFormData,
    areaOfPractice: areaOfPractice || "",
    secondAreaOfPractice: "",
    language: "",
  });

  // Update `searchResults` when the context's `searchResults` changes
  useEffect(() => {
    setLocalSearchResults(contextSearchResults || []);
  }, [contextSearchResults]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    let refined = [...(contextSearchResults || [])];

    if (formData.areaOfPractice && formData.areaOfPractice !== "All areas") {
      refined = refined.filter((item) =>
        item.area_of_practice
          .toLowerCase()
          .includes(formData.areaOfPractice.toLowerCase())
      );
    }

    if (formData.secondAreaOfPractice) {
      refined = refined.filter((item) =>
        item.area_of_practice
          .toLowerCase()
          .includes(formData.secondAreaOfPractice.toLowerCase())
      );
    }

    if (formData.language) {
      refined = refined.filter((item) =>
        item.language.toLowerCase().includes(formData.language.toLowerCase())
      );
    }

    setLocalSearchResults(refined);
    setSearchResults(refined); // Update results in context
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
