import React, { createContext, useState, useContext } from "react";

const SearchContext = createContext(undefined);

export const SearchProvider = ({ children }) => {
  const [areaOfPractice, setAreaOfPractice] = useState("");

  return (
    <SearchContext.Provider value={{ areaOfPractice, setAreaOfPractice }}>
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
