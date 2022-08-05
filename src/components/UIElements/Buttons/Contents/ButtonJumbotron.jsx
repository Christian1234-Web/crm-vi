import React from "react";

const ButtonJumbotron = () => {
  return (
    <div className="inner">
      {/* <!-- START BREADCRUMB --> */}
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="javascript:void(0);">UI Elements</a>
        </li>
        <li className="breadcrumb-item active">Buttons</li>
      </ol>
      {/* <!-- END BREADCRUMB --> */}
      <div className="container-md-height m-b-20">
        <div className="row m-lg-0">
          <div className="col-xl-7 col-lg-6 bg-white">
            {/* <!-- START card --> */}
            <div className="full-height">
              <div className="card-body text-center">
                <img
                  className="image-responsive-height demo-mw-500"
                  src="{# ASSETS #}/img/demo/buttons_hero.gif"
                  alt=""
                />
              </div>
            </div>
            {/* <!-- END card --> */}
          </div>
          <div className="col-xl-5 col-lg-6">
            {/* <!-- START card --> */}
            <div className="card card-transparent">
              <div className="card-header ">
                <div className="card-title">Getting started</div>
              </div>
              <div className="card-body">
                <h3>
                  A button consists of text and/or an image that clearly
                  communicates what action will occur when it is pressed upon.
                </h3>
                <div>
                  <div className="">
                    <p className="small hint-text">
                      VIA senior product manage <br /> for UI/UX at REVOX
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- END card --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonJumbotron;
