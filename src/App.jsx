import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SolicitorSearch from "./components/SolicitorSearch";
import SearchResultsPage from "./components/SearchResultsPage";
import { SearchProvider } from "./contexts/SearchContext";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<SolicitorSearch />} />
        <Route path="/search-results" element={<SearchResultsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
