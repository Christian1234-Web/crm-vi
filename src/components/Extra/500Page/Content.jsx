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
            500
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

      <div
        className="pull-bottom sm-pull-bottom full-width d-flex align-items-center justify-content-center"
        onClick={() => setErrorInput(false)}
      >
        <div className="error-container">
          <div className="error-container-innner">
            <div className="p-b-30 sm-m-t-20 sm-p-r-15 sm-p-b-20 clearfix d-flex-md-up row no-margin">
              <div className="col-md-3 no-padding d-flex align-items-center justify-content-center">
                <img
                  alt=""
                  data-src={
                    process.env.PUBLIC_URL + "/assets/img/demo/pages_icon.png"
                  }
                  data-src-retina="/assets/img/demo/pages_icon_2x.png"
                  height="60"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/img/demo/pages_icon_2x.png"
                  }
                  width="60"
                />
              </div>
              <div className="col-md-9 no-padding d-flex align-items-center justify-content-center">
                <p className="small no-margin flex-1">
                  Create a pages account. If you have a facebook account, log
                  into it for this process. Sign in with{" "}
                  <a href="javascript:void(0);">Facebook</a> or{" "}
                  <a href="javascript:void(0);">Google</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default content;
