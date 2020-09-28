import React from "react";
import "./networking.css";

function search() {
  return (
    <div>
      <div className="searchBar">
        <div id="cover">
          <form method="get" action="" className="searchForm">
            <div className="tb">
              <div className="td">
                <input
                  type="text"
                  className="search"
                  placeholder="Search"
                  required
                />{" "}
              </div>
              <div className="td" id="s-cover">
                <button type="submit" className="searchBTN">
                  <div id="s-circle"></div>
                  <span></span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default search;
