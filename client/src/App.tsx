import React from "react";
import NavBar from "./layout/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog/Blog";
import NewPost from "./pages/NewPost/NewPost";
import PostDetails from "./pages/PostDetails/PostDetails";
import Home from "./pages/Home/Home";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/new" element={<NewPost />} />
        <Route path="/post/:id" element={<PostDetails />} />
      </Routes>
    </>
  );
}

export default App;
