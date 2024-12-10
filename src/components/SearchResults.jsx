import React from "react";

export const SearchResults = ({ results }) => {
  return (
    <div className="max-w-[1200px] mx-auto px-5 md:px-[28px] py-[28px]">
      <h2 className="text-2xl mb-4">Search Results</h2>
      <div className="space-y-4">
        {results.map((solicitor) => (
          <div key={solicitor.id} className="border p-4 rounded">
            <h3 className="text-xl font-bold">{solicitor.name}</h3>
            <p>{solicitor.area_of_practice}</p>
            <p>{solicitor.associate_at}</p>
            <p>SRA ID: {solicitor.SRAid}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
