import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Headlines from "./pages/Headlines/Headlines";
import NewsDetails from "./pages/newsDetails/NewsDetails";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:type" element={<Home />} />
      <Route path="/top-headlines" element={<Headlines />} />{" "}
      <Route path="/news-details/:param" element={<NewsDetails />} />{" "}
    </Routes>
  );
};

export default MainRoutes;
