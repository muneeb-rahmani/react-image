import { Routes, Route } from "react-router-dom";
import AllPageContent from "./components/AllPageContent";
import Navbar from "./components/Navbar";
import PostItem from "./pages/PostItem"



function App() {
  return (

    <>
        <Navbar />
      <Routes>
        <Route path="/post/:id" element={<PostItem />} />
        {/* <Route path="/posts" element={<AllPageContent />}/> */}
        {/* <Route /> */}
      </Routes>
        <AllPageContent />


    </>

  );
}

export default App;
