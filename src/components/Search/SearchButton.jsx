import React from "react";

export const SearchButton = () => {
  return (
    <div className="flex md:justify-end ">
      <button
        type="submit"
        className="bg-[#004d71] text-white px-[25px] py-[13.2px] text-[15px] font-[600] leading-[19px] tracking-[1.5px] hover:bg-[#003d5c] hover:underline transition-colors uppercase"
      >
        SEARCH
      </button>
    </div>
  );
};
