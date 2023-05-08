import { Routes, Route } from "react-router-dom";
import AllPageContent from "./components/AllPageContent";
import Navbar from "./components/Navbar";
import PageContent from "./components/PageContent"
// import PostItem from "./pages/PostItem"


function App() {
  return (

    <>
        <Navbar />
      <Routes>
        {/* <Route path="/post/:id" element={<PostItem />} /> */}
        <Route path="/post/:id" element={<PageContent />} />
      </Routes>
        <AllPageContent />


    </>

  );
}

export default App;
