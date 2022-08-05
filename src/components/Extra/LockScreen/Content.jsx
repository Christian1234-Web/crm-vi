import React from "react";

import "../style.css";

const content = () => {
  return (
    <React.Fragment>
      <div className="lock-container full-height-extra">
        <div className="full-height sm-p-t-50 align-items-center d-md-flex">
          <div className="row full-width">
            <div className="col-md-6">
              <div className="d-flex justify-content-start align-items-center">
                <div className="">
                  <div className="thumbnail-wrapper circular d48 m-r-10 ">
                    <img
                      width="43"
                      height="43"
                      data-src-retina="/assets/img/profiles/avatar_small2x.jpg"
                      data-src={
                        process.env.PUBLIC_URL +
                        "/assets/img/profiles/avatar.jpg"
                      }
                      alt=""
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/profiles/avatar.jpg"
                      }
                    />
                  </div>
                </div>
                <div className="">
                  <h5 className="logged hint-text no-margin">Logged in as</h5>
                  <h2 className="name no-margin">David Nester</h2>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <form
                id="form-lock"
                role="form"
                action="index.html"
                noValidate="novalidate"
              >
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group form-group-default sm-m-t-30">
                      <label>Credentials</label>
                      <div className="controls">
                        <input
                          type="text"
                          name="password"
                          placeholder="Password to unlock"
                          className="form-control"
                          required=""
                          aria-required="true"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 sm-p-l-25 d-flex">
                    <a
                      href="javascript:void(0);"
                      className="text-black fs-14 hint-text d-flex align-items-center"
                    >
                      <i className="pg-icon m-r-5">mail</i>{" "}
                      <span className="hint-text">12</span>
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="text-black  fs-14 hint-text m-l-30 d-flex align-items-center"
                    >
                      <i className="pg-icon m-r-5">comment</i>{" "}
                      <span className="hint-text">4</span>
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="pull-bottom full-width">
        <div className="lock-container m-b-10 clearfix row">
          <div className="inline col-lg-2">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/demo/pages_icon.png"}
              alt=""
              className="m-t-5 "
              data-src={
                process.env.PUBLIC_URL + "/assets/img/demo/pages_icon.png"
              }
              data-src-retina="/assets/img/demo/pages_icon_2x.png"
              width="60"
              height="60"
            />
          </div>
          <div className="col-lg-10 m-t-15">
            <p className="hinted-text small inline ">
              No part of this website or any of its contents may be reproduced,
              copied, modified or adapted, without the prior written consent of
              the author, unless otherwise indicated for stand-alone materials.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default content;
