import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";

import List from "./List";

const BreakingNews = () => {
  const URL = `https://reqres.in/api/users?page=2 `;
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = () => {
    fetch(URL)
      .then((responce) => responce.json())
      .then((result) => setNews(result.data))
      .catch((error) => alert(error));
  };

  console.log(news);

  return (
    <>
      <div className="p-3 bg-success w-50 card mx-auto">
        <h2 className="h1">Breaking News</h2>
      </div>

      <ul className="d-flex">
        {news.length === 0 ? (<Spinner />) : 
        (news.map((item) => {
            return <List data={item} key={item.id} />;
        })
        )}
      </ul>
    </>
  );
};

export default BreakingNews;
