import { Routes, Route } from "react-router-dom";
import ImageCard from "./components/ImageCard";
import Navbar from "./components/Navbar";
import ImageDetails from "./pages/ImageDetails";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<ImageCard />} />
        <Route path="/post/:id" element={<ImageDetails />} />
      </Routes>
    </>
  );
}
//ui kaha hai
export default App;
