import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import NewsDetails from "./pages/newsDetails/NewsDetails";
import Search from "./pages/search/Search";
import SearchList from "./pages/search/SearchList";
import Layout from "./layouts/Layout";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path=":type" element={<Home />} />
        <Route path="search" element={<Search />}>
          <Route path="" element={<SearchList />} />
        </Route>
        <Route path="news-details/:param" element={<NewsDetails />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
