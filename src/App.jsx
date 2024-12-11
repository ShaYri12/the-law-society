import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SolicitorSearch from "./components/Search/SolicitorSearch";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<SolicitorSearch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
