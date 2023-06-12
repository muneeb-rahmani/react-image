import { Routes, Route } from "react-router-dom";
import AllPageContent from "./components/AllPageContent";
import Navbar from "./components/Navbar";
import PageContent from "./components/PageContent";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<AllPageContent />} />
        <Route path="/post/:id" element={<PageContent />} />
      </Routes>
      {/* <Home /> */}
      <AllPageContent />
    </>
  );
}

export default App;
