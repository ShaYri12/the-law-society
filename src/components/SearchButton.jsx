import React from "react";

export const SearchButton = () => {
  return (
    <div className="flex justify-end">
      <button
        type="submit"
        className="bg-[#00527a] text-white px-8 py-4 text-xl rounded hover:bg-[#003d5c] transition-colors"
      >
        SEARCH
      </button>
    </div>
  );
};
