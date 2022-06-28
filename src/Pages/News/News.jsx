import React from "react";
import { Outlet, Link } from "react-router-dom";

const News = () => {
  return (
    <>
      <h1>News Page</h1>
      <div className="card">
        <ul className="list-unstyled d-flex justify-content-around w-50 mx-auto mt-3">
          <li>
            <button className="btn btn-primary">
              <Link
                className="text-light text-decoration-none"
                to="/news/sport_news"
              >
                Sport News
              </Link>
            </button>
          </li>

          <li>
            <button className="btn btn-primary">
              <Link
                className="text-light text-decoration-none"
                to="/news/breaking_news"
              >
                Breaking News
              </Link>
            </button>
          </li>
        </ul>
      </div>
      <Outlet />


    </>
  );
};

export default News;
