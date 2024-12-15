import React, { createContext, useState, useContext } from "react";

const SearchContext = createContext(undefined);

export const SearchProvider = ({ children }) => {
  const [areaOfPractice, setAreaOfPractice] = useState("");
  const [searchResults, setSearchResults] = useState([]); // Store search results
  const [formData, setFormData] = useState({
    legalIssue: "",
    location: "",
    nameOrSRA: "",
    areaOfPractice: "",
  }); // Store form data

  return (
    <SearchContext.Provider
      value={{
        areaOfPractice,
        setAreaOfPractice,
        searchResults,
        setSearchResults,
        formData,
        setFormData,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
