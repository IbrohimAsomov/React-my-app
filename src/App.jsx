import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Content from "./Pages/Content/Content";
import News from "./Pages/News/News";
import Login from "./Pages/Ligin/Login";
import Error from "./Pages/Error/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BreakingNews from "./Pages/News/BreakingNews";
import NewsItem from "./Pages/News/NewsItem";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/aboute" element={<About />} />
            <Route path="/contant" element={<Content />} />
            <Route path="/login" element={<Login />} />
            <Route path="/news" element={<News />}>
              <Route path="/news/sport_news" element={<NewsItem />} />
              <Route path="/news/breaking_news" element={<BreakingNews />} />
              {
              /* <Route index element={<BreakingNews />} /> */ 
              /*         ^  kirishi bilan otvoruvchi*/

              }
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
