import React, { useEffect } from "react";
import AboutSolicitor from "./AboutSolicitor/AboutSolicitor";
import SearchBox from "./Search/SearchBox";

const SolicitorSearch = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-[73px]">
      <SearchBox />
      <AboutSolicitor />
    </div>
  );
};

export default SolicitorSearch;
