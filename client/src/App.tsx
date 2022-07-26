import React from "react";
import NavBar from "./layout/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog/Blog";
import NewPost from "./pages/NewPost/NewPost";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="blog" element={<Blog />} />
        <Route path="new" element={<NewPost />} />
      </Routes>
    </>
  );
}

export default App;
