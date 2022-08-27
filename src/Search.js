import React from "react";
import "./search.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="search-city-form">
        <div className="row">
          <div className="col-6">
            <div className="input-group mb-3">
              <input
                type="search"
                className="form-control entered-city"
                placeholder="Enter the city"
              />
            </div>
          </div>
          <div className="col-auto">
            <input
              className="form-control"
              type="submit"
              value="Check weather"
              id="submit-btn"
            />
          </div>
        </div>
      </form>
      <div className="col-auto">
        <button className="btn-location">
          <i className="fa-solid fa-location-dot"></i>
        </button>
      </div>
    </div>
  );
}
