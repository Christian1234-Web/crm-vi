import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import "../style.css";

const content = () => {
  const [errorInput, setErrorInput] = useState(false);
  const [errorSearch, setErrorSearch] = useState("");
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center full-height-extra full-width align-items-center error-page">
        <div className="error-container text-center">
          <h1 className="error-number" onClick={() => setErrorInput(false)}>
            404
          </h1>
          <h2 className="semi-bold" onClick={() => setErrorInput(false)}>
            Sorry but we couldnt find this page
          </h2>
          <p className="p-b-10" onClick={() => setErrorInput(false)}>
            This page you are looking for does not exsist{" "}
            <a href="javascript:void(0);">Report this?</a>
          </p>
          <div className="error-container-innner text-center">
            <form className="error-form">
              <div className=" transparent text-left">
                <div
                  className={`form-group form-group-default input-group ${
                    errorInput ? "focused" : ""
                  }`}
                >
                  <div
                    className="form-input-group"
                    onClick={() => setErrorInput(true)}
                  >
                    <InputWithLabel
                      label="Search"
                      type="email"
                      onChange={(e) => setErrorSearch(e.target.value)}
                      value={errorSearch}
                      placeholder="Try searching the missing page"
                      className="form-control"
                    />
                  </div>
                  <div className="input-group-append-line">
                    <span className="input-group-text input-search-text">
                      <i className="pg-icon">search</i>
                    </span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default content;
