import React, { useState, useEffect } from "react";
import { SlideDown } from "react-slidedown";
import PerfectScrollbar from "react-perfect-scrollbar";
import PageScroll from "../../UIElements/PageScroll";
import PageBreadcrumb from "../../UIElements/Breadcrumb";
import PageContainer from "../../UIElements/Containers";
import Layout from "./BuildLayout";
import Content from "./BuildContent";
import "./style.scss";
const content = () => {
  const [builderToggle, setBuilderToggle] = useState(true);
  const [navTab, setNavTab] = useState([true, false]);
  const [expand, setExpand] = useState(true);
  const [layoutOption, setLayoutOption] = useState([true, false]);
  const [contentOptions, setContentOptions] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const setLayoutOptionTwo = (shouldAdd) => {
    shouldAdd
      ? document.body.classList.add(
          "menu-behind",
          "horizontal-menu",
          "horizontal-app-menu",
          "mac",
          "desktop",
          "js-focus-visible",
          "pace-done"
        )
      : document.body.classList.remove(
          "menu-behind",
          "horizontal-menu",
          "horizontal-app-menu",
          "mac",
          "desktop",
          "js-focus-visible",
          "pace-done"
        );
  };

  return (
    <React.Fragment>
      {layoutOption[0] && (
        <div
          className={`page-content-wrapper content-builder content-builder-executive container ${
            layoutOption[0] ? "active" : ""
          }`}
          id="plainContent"
        >
          <div className="content">
            <div>
              <ul className="breadcrumb p-l-0 ">
                <li className="breadcrumb-item">
                  <a href="javascript:void(0);">Home</a>
                </li>
                <li className="breadcrumb-item active">Plain template</li>
              </ul>
              <h3 className="page-title">Page Title</h3>
            </div>
            <PageContainer>
              {/* CONTENT goes here */}
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              {/* CONTENT goes here */}
            </PageContainer>
          </div>
          <PageContainer className=" footer" style={{ position: "fixed" }}>
            <div className="copyright sm-text-center">
              <p className="small no-margin pull-left sm-pull-reset">
                <span className="hint-text">Copyright © 2014 </span>
                <span className="font-montserrat">REVOX</span>.
                <span className="hint-text">All rights reserved. </span>
                <span className="sm-block">
                  <a href="javascript:void(0);" className="m-l-10 m-r-10">
                    Terms of use
                  </a>{" "}
                  |{" "}
                  <a href="javascript:void(0);" className="m-l-10">
                    Privacy Policy
                  </a>
                </span>
              </p>
              <p className="small no-margin pull-right sm-pull-reset">
                <a href="javascript:void(0);">Hand-crafted</a>{" "}
                <span className="hint-text">&amp; Made with Love ®</span>
              </p>
              <div className="clearfix"></div>
            </div>
          </PageContainer>
        </div>
      )}
      {layoutOption[1] && (
        <div
          className={`page-content-wrapper content-builder content-builder-executive-sidebar container ${
            contentOptions[1] ? "active" : ""
          }`}
          id="plainContent"
        >
          <div
            className="secondary-sidebar secondary-sidebar-executive light"
            data-init="secondary-sidebar"
          >
            <p className="menu-title">BROWSE</p>
            <ul className="main-menu">
              <li className="">
                <a href="javascript:void(0);">
                  <span className="title">pages frontend</span>
                </a>
              </li>
              <li className="">
                <a href="javascript:void(0);">
                  <span className="title">webarch admin</span>
                </a>
              </li>
            </ul>
            <p className="menu-title m-t-30">YOUR FAVOURITE</p>
            <ul className="main-menu">
              <li className="">
                <a href="javascript:void(0);">
                  <span className="icon-thumbnail">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-layers"
                    >
                      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                      <polyline points="2 17 12 22 22 17"></polyline>
                      <polyline points="2 12 12 17 22 12"></polyline>
                    </svg>
                  </span>
                  <span className="title">Collection</span>
                  <span className="badge pull-right">5</span>
                </a>
              </li>
              <li className="">
                <a href="javascript:void(0);">
                  <span className="icon-thumbnail">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-award"
                    >
                      <circle cx="12" cy="8" r="7"></circle>
                      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                    </svg>
                  </span>
                  <span className="title"> Playlist</span>
                </a>
              </li>
              <li className={expand ? "open active" : ""}>
                <a
                  href="javascript:void(0);"
                  onClick={() => setExpand(!expand)}
                >
                  <span className="icon-thumbnail">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-inbox"
                    >
                      <polyline points="22 13 16 13 14 16 10 16 8 13 2 13"></polyline>
                      <path d="M5.47 5.19L2 13v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5l-3.47-7.81A2 2 0 0 0 16.7 4H7.3a2 2 0 0 0-1.83 1.19z"></path>
                    </svg>
                  </span>
                  <span className="title">Case Study</span>
                  <span className="arrow"></span>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="javascript:void(0);">
                      <span className="bold m-r-10 fs-12">B4</span>
                      <span className="title">Bootstrap 4</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <span className="bold m-r-10 fs-12">MP</span>
                      <span className="title">Made with Pages</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="inner-content full-height  p-r-20 p-l-20">
            <div
              className="page-content-wrapper content-builder full-height"
              id="plainContent"
            >
              <div className="content">
                <div className=" container    container-fixed-lg">
                  <PageContainer>
                    <ul className="breadcrumb p-l-0">
                      <li className="breadcrumb-item">
                        <a href="javascript:void(0);">Home</a>
                      </li>
                      <li className="breadcrumb-item active">Plain template</li>
                    </ul>
                    <h3 className="page-title">Page Title</h3>
                  </PageContainer>
                  <PageContainer>
                    {/* CONTENT goes here */}
                    <br />
                    <br />
					<br />
                    <br />
					<br />
                    <br />
                    <br />
                    <br />
                    <br />
					<br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    {/* CONTENT goes here */}
                  </PageContainer>
                </div>
                <PageContainer className=" footer no-padding">
                  <div className="copyright sm-text-center">
                    <p className="small pull-left sm-pull-reset m-b-20 pull-bottom">
                      <span className="hint-text">Copyright © 2014 </span>
                      <span className="font-montserrat">REVOX</span>.
                      <span className="hint-text">All rights reserved. </span>
                      <span className="sm-block">
                        <a href="javascript:void(0);" className="m-l-10 m-r-10">
                          Terms of use
                        </a>{" "}
                        |{" "}
                        <a href="javascript:void(0);" className="m-l-10">
                          Privacy Policy
                        </a>
                      </span>
                    </p>
                    <p className="small no-margin pull-right sm-pull-reset">
                      <a href="javascript:void(0);">Hand-crafted</a>{" "}
                      <span className="hint-text">&amp; Made with Love ®</span>
                    </p>
                    <div className="clearfix"></div>
                  </div>
                </PageContainer>
              </div>
            </div>
          </div>
        </div>
      )}

      {contentOptions[0] && (
        <div
          className={`page-content-wrapper content-builder content-builder-executive container ${
            contentOptions[0] ? "active" : ""
          }`}
          id="plainContent"
        >
          <div className="content">
            <PageContainer>
              <ul className="breadcrumb p-l-0">
                <li className="breadcrumb-item">
                  <a href="javascript:void(0);">Home</a>
                </li>
                <li className="breadcrumb-item active">Plain template</li>
              </ul>
              <h3 className="page-title">Page Title</h3>
            </PageContainer>
            <PageContainer>
              {/* CONTENT goes here */}
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              {/* CONTENT goes here */}
            </PageContainer>
          </div>
          <PageContainer className=" footer">
            <div className="copyright sm-text-center">
              <p className="small pull-left sm-pull-reset m-b-20 pull-bottom">
                <span className="hint-text">Copyright © 2014 </span>
                <span className="font-montserrat">REVOX</span>.
                <span className="hint-text">All rights reserved. </span>
                <span className="sm-block">
                  <a href="javascript:void(0);" className="m-l-10 m-r-10">
                    Terms of use
                  </a>{" "}
                  |{" "}
                  <a href="javascript:void(0);" className="m-l-10">
                    Privacy Policy
                  </a>
                </span>
              </p>
              <p className="small no-margin pull-right sm-pull-reset">
                <a href="javascript:void(0);">Hand-crafted</a>{" "}
                <span className="hint-text">&amp; Made with Love ®</span>
              </p>
              <div className="clearfix"></div>
            </div>
          </PageContainer>
        </div>
      )}

      {contentOptions[1] && (
        <div
          className={`page-content-wrapper content-builder content-builder-executive ${
            contentOptions[1] ? "active" : ""
          }`}
          id="parallaxCoverpage"
        >
          <div className="content">
            <div className="jumbotron page-cover" data-pages="parallax">
              <PageContainer>
                <PageScroll>
                  <PageBreadcrumb className=" p-l-0">
                    <li className="breadcrumb-item">
                      <a href="javascript:void(0);">UI Elements</a>
                    </li>
                    <li className="breadcrumb-item active">Typography</li>
                  </PageBreadcrumb>
                  <div className="container-md-height m-b-20">
                    <div className="row m-lg-0">
                      <div className="col-xl-7 col-lg-6 bg-white">
                        <div className="full-height">
                          <div className="card-body text-center">
                            <img
                              className="image-responsive-height demo-mw-500"
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/img/demo/typography_hero.gif"
                              }
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-5 col-lg-6">
                        <div className="card card-transparent">
                          <div className="card-header ">
                            <div className="card-title">Getting started</div>
                          </div>
                          <div className="card-body">
                            <h3>
                              One of the most underestimated elements of design
                              is typography. However, it’s critical in both
                              print and web media. We Made it Perfect in both.
                            </h3>
                            <p>
                              This feature in our product specifically creates
                              hinted fonts for various OS browsers; whether its
                              Windows, Mac OSx, or ubuntu, it does it for all.
                            </p>
                            <br />
                            <div>
                              <div className="profile-img-wrapper m-t-5 inline">
                                <img
                                  width="35"
                                  height="35"
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/assets/img/profiles/avatar_small.jpg"
                                  }
                                  alt=""
                                  data-src={
                                    process.env.PUBLIC_URL +
                                    "/assets/img/profiles/avatar_small.jpg"
                                  }
                                  data-src-retina={
                                    process.env.PUBLIC_URL +
                                    "/assets/img/profiles/avatar_small2x.jpg"
                                  }
                                />
                                <div className="chat-status available"></div>
                              </div>
                              <div className="inline m-l-10">
                                <p className="small hint-text m-t-5">
                                  VIA senior product manage
                                  <br /> for fonts and typography at REVOX
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </PageScroll>
              </PageContainer>
            </div>
            <PageContainer className=" demo-container"></PageContainer>
          </div>
        </div>
      )}

      {contentOptions[2] && (
        <div
          className={`page-content-wrapper content-builder content-builder-executive full-height ${
            contentOptions[2] ? "active" : ""
          }`}
          id="fullheightParallax"
        >
          <div className="content full-height">
            <div
              className="jumbotron full-height no-padding"
              data-pages="parallax"
            >
              <PageContainer className="sm-p-l-0 sm-p-r-0 full-height">
                <PageScroll className="full-height d-flex align-items-center">
                  <div className="row justify-content-center full-width">
                    <div className="col-md-6 text-center">
                      {/* CONTENT goes here */}
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      {/* CONTENT goes here */}
                      <h2 className="text-center">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/img/logo_2x.png"
                          }
                          alt="logo"
						  width="80"
						  height="24"
                        />
                        <span>&nbsp;</span>
                        makes it super-easy to create your dashboard Without a
                        designer.
                      </h2>
                      <button
                        aria-label=""
                        className="btn btn-success btn-rounded"
                      >
                        Live Preview
                      </button>
                      {/* CONTENT goes here */}
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      {/* CONTENT goes here */}
                    </div>
                  </div>
                </PageScroll>
              </PageContainer>
            </div>
            <PageContainer className="  demo-container"></PageContainer>
          </div>
        </div>
      )}

      {contentOptions[3] && (
        <div
          className={`page-content-wrapper content-builder content-builder-executive full-height ${
            contentOptions[3] ? "active" : ""
          }`}
          id="titleParallax"
        >
          <div className="content">
            <div className="jumbotron  no-margin" data-pages="parallax">
              <PageContainer className=" sm-p-l-0 sm-p-r-0">
                <div className="inner">
                  <h3 className="">Page Title</h3>
                </div>
              </PageContainer>
            </div>
            <PageContainer className=" demo-container">
              <ul className="breadcrumb p-l-0">
                <li className="breadcrumb-item">
                  <a href="javascript:void(0);">Home</a>
                </li>
                <li className="breadcrumb-item active">
                  Parallax for page title
                </li>
              </ul>
            </PageContainer>
          </div>
        </div>
      )}

      {contentOptions[4] && (
        <div
          className={`page-content-wrapper content-builder content-builder-executive full-height ${
            contentOptions[4] ? "active" : ""
          }`}
          id="columns-3-9"
        >
          <div className="content full-height">
            <div className="container-fluid full-height no-padding">
              <div className="row full-height no-margin">
                <div className="col-md-3 no-padding b-r b-grey sm-b-b full-height">
                  <div className="bg-white full-height">
                    {/* CONTENT goes here */}
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    {/* CONTENT goes here */}
                  </div>
                </div>
                <div className="col-md-9 no-padding full-height">
                  <div className="placeholder full-height">
                    {/* CONTENT goes here */}
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    {/* CONTENT goes here */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <PageContainer className=" footer">
            <div className="copyright sm-text-center">
              <p className="small no-margin pull-left sm-pull-reset">
                <span className="hint-text">Copyright © 2014 </span>
                <span className="font-montserrat">REVOX</span>.
                <span className="hint-text">All rights reserved. </span>
                <span className="sm-block">
                  <a href="javascript:void(0);" className="m-l-10 m-r-10">
                    Terms of use
                  </a>{" "}
                  |{" "}
                  <a href="javascript:void(0);" className="m-l-10">
                    Privacy Policy
                  </a>
                </span>
              </p>
              <p className="small no-margin pull-right sm-pull-reset">
                <a href="javascript:void(0);">Hand-crafted</a>{" "}
                <span className="hint-text">&amp; Made with Love ®</span>
              </p>
              <div className="clearfix"></div>
            </div>
          </PageContainer>
        </div>
      )}

      {contentOptions[5] && (
        <div
          className={`page-content-wrapper content-builder content-builder-executive full-height ${
            contentOptions[5] ? "active" : ""
          }`}
          id="columns-9-3"
        >
          <div className="content full-height">
            <div className="container-fluid full-height no-padding">
              <div className="row full-height no-margin">
                <div className="col-md-9 no-padding b-r b-grey full-height">
                  <div className="full-height placeholder">
                    {/* CONTENT goes here */}
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    {/* CONTENT goes here */}
                  </div>
                </div>
                <div className="col-md-3 no-padding full-height">
                  <div className="bg-white  full-height">
                    {/* CONTENT goes here */}
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    {/* CONTENT goes here */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <PageContainer className=" footer">
            <div className="copyright sm-text-center">
              <p className="small no-margin pull-left sm-pull-reset">
                <span className="hint-text">Copyright © 2014 </span>
                <span className="font-montserrat">REVOX</span>.
                <span className="hint-text">All rights reserved. </span>
                <span className="sm-block">
                  <a href="javascript:void(0);" className="m-l-10 m-r-10">
                    Terms of use
                  </a>{" "}
                  |{" "}
                  <a href="javascript:void(0);" className="m-l-10">
                    Privacy Policy
                  </a>
                </span>
              </p>
              <p className="small no-margin pull-right sm-pull-reset">
                <a href="javascript:void(0);">Hand-crafted</a>{" "}
                <span className="hint-text">&amp; Made with Love ®</span>
              </p>
              <div className="clearfix"></div>
            </div>
          </PageContainer>
        </div>
      )}

      {contentOptions[6] && (
        <div
          className={`page-content-wrapper content-builder content-builder-executive full-height ${
            contentOptions[6] ? "active" : ""
          }`}
          id="columns-6-6"
        >
          <div className="content full-height">
            <div className="container-fluid full-height no-padding">
              <div className="row full-height no-margin">
                <div className="col-md-6 no-padding b-r b-grey full-height">
                  <div className="bg-white full-height">
                    {/* CONTENT goes here */}
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    {/* CONTENT goes here */}
                  </div>
                </div>
                <div className="col-md-6 no-padding full-height">
                  <div className="bg-white full-height">
                    {/* CONTENT goes here */}
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    {/* CONTENT goes here */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <PageContainer className=" footer">
            <div className="copyright sm-text-center">
              <p className="small no-margin pull-left sm-pull-reset">
                <span className="hint-text">Copyright © 2014 </span>
                <span className="font-montserrat">REVOX</span>.
                <span className="hint-text">All rights reserved. </span>
                <span className="sm-block">
                  <a href="javascript:void(0);" className="m-l-10 m-r-10">
                    Terms of use
                  </a>{" "}
                  |{" "}
                  <a href="javascript:void(0);" className="m-l-10">
                    Privacy Policy
                  </a>
                </span>
              </p>
              <p className="small no-margin pull-right sm-pull-reset">
                <a href="javascript:void(0);">Hand-crafted</a>{" "}
                <span className="hint-text">&amp; Made with Love ®</span>
              </p>
              <div className="clearfix"></div>
            </div>
          </PageContainer>
        </div>
      )}

      {/* START config side bar */}
      <div
        className={`quickview-wrapper builder hidden-sm hidden-xs ${
          builderToggle ? "open" : ""
        }`}
        id="builder"
      >
        <div className="p-l-30 p-r-30 ">
          <a
            className="builder-close quickview-toggle pg-icon"
            data-toggle="quickview"
            data-toggle-element="#builder"
            onClick={() => setBuilderToggle(false)}
          >
            close
          </a>
          <a
            className="builder-toggle"
            data-toggle="quickview"
            data-toggle-element="#builder"
            onClick={() => {
              setBuilderToggle((prevState) => !prevState);
            }}
          >
            <i className="pg-icon">paint_bucket</i>
          </a>
          <ul
            className="nav nav-tabs nav-tabs-simple nav-tabs-primary m-t-10"
            id="builderTabs"
            role="tablist"
          >
            <li className="nav-item" onClick={() => setNavTab([true, false])}>
              <a
                className={`nav-link ${navTab[0] ? "active" : ""}`}
                data-toggle="tab"
                href="#tabLayouts"
                role="tab"
                aria-controls="home"
                aria-selected={`${navTab[0] ? "true" : "false"}`}
              >
                <span>Layouts</span>
              </a>
            </li>
            <li className="nav-item" onClick={() => setNavTab([false, true])}>
              <a
                className={`nav-link ${navTab[1] ? "active" : ""}`}
                data-toggle="tab"
                href="#tabContent"
                role="tab"
                aria-controls="messages"
                aria-selected={`${navTab[1] ? "true" : "false"}`}
              >
                <span>Content</span>
              </a>
            </li>
          </ul>
          <div className="tab-content m-b-30 p-l-30">
            <div
              className={`tab-pane ${navTab[0] ? "active" : ""}`}
              id="tabLayouts"
              role="alert"
            >
              <div className="scroll-wrapper " style={{ position: "relative" }}>
                <div
                  className="scrollable scroll-content"
                  style={{ marginBottom: "0px", marginRight: "0px" }}
                >
                  <div className="p-l-10 p-r-50 p-t-20">
                    <h5 className="semi-bold">Layout options</h5>
                    <p className="no-margin">Builder make it easier</p>
                    <p className="small hint-text m-b-20">
                      Customize and Preview your dashboard.
                    </p>
                    <div className="row p-b-35">
                      <div className="col-6 layout-block">
                        <Layout
                          type={"HorizontalMenu"}
                          dataAction={"menuDefault"}
                          active={layoutOption[0] ? true : false}
                          description={"Default Horizontal Menu"}
                          onClick={() => {
                            setLayoutOption([true, false]);
                            setLayoutOptionTwo(false);
                          }}
                        />
                      </div>
                      <div className="col-6 layout-block">
                        <Layout
                          type={"HorizontalMenuSidebar"}
                          dataAction={"menuBelow"}
                          active={layoutOption[1] ? true : false}
                          description={"Horizontal Menu with Sidebar"}
                          onClick={() => {
                            setLayoutOption([false, true]);
                            setLayoutOptionTwo(true);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`tab-pane ${navTab[1] ? "active" : ""}`}
              id="tabContent"
              role="alert"
            >
                <PerfectScrollbar
                    className="p-l-10 p-r-50 m-t-50"
                    style={{ paddingBottom: "10%" }}
                >
                    <h5 className="semi-bold">Content</h5>
                    <p className=" hint-text no-margin">
                      Builder make it easier
                    </p>
                    <p className="small hint-text m-b-20">
                      Customize and Preview your dashboard.
                    </p>
                    <ul className="p-b-50">
                      <li className="full-width m-b-30">
                        <Content
                          active={contentOptions[0] ? true : false}
                          dataAction={"plainContent"}
                          onClick={() => {
                            setContentOptions([
                              true,
                              false,
                              false,
                              false,
                              false,
                              false,
                              false,
                            ]);
                            setLayoutOption([false, false]);
                          }}
                        >
                          <img
                            alt="Blank"
                            className="m-b-10 image-responsive-height"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/demo/blank.svg"
                            }
                          />{" "}
                          Plain
                        </Content>
                      </li>
                      <li className="full-width m-b-30">
                        <Content
                          active={contentOptions[1] ? true : false}
                          dataAction={"parallaxCoverpage"}
                          onClick={() => {
                            setContentOptions([
                              false,
                              true,
                              false,
                              false,
                              false,
                              false,
                              false,
                            ]);
                            setLayoutOption([false, false]);
                          }}
                        >
                          <img
                            alt="Parallax cover"
                            className="m-b-10 image-responsive-height"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/demo/paralax_cover.gif"
                            }
                          />{" "}
                          Coverpage with parallax
                        </Content>
                      </li>
                      <li className="full-width m-b-30">
                        <Content
                          active={contentOptions[2] ? true : false}
                          dataAction={"fullheightParallax"}
                          onClick={() => {
                            setContentOptions([
                              false,
                              false,
                              true,
                              false,
                              false,
                              false,
                              false,
                            ]);
                            setBuilderToggle(false);
                            setLayoutOption([false, false]);
                          }}
                        >
                          <img
                            alt="Parallax full"
                            className="m-b-10 image-responsive-height"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/demo/paralax_full.gif"
                            }
                          />{" "}
                          Full height coverpage with parallax
                        </Content>
                      </li>
                      <li className="full-width m-b-30">
                        <Content
                          active={contentOptions[3] ? true : false}
                          dataAction={"titleParallax"}
                          onClick={() => {
                            setContentOptions([
                              false,
                              false,
                              false,
                              true,
                              false,
                              false,
                              false,
                            ]);
                            setLayoutOption([false, false]);
                          }}
                        >
                          <img
                            alt="Parallax title"
                            className="m-b-10 image-responsive-height"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/demo/paralax_title.gif"
                            }
                          />{" "}
                          Page title parallax
                        </Content>
                      </li>
                      <li className="full-width m-b-30">
                        <Content
                          active={contentOptions[4] ? true : false}
                          dataAction={"columns-3-9"}
                          onClick={() => {
                            setContentOptions([
                              false,
                              false,
                              false,
                              false,
                              true,
                              false,
                              false,
                            ]);
                            setLayoutOption([false, false]);
                          }}
                        >
                          <img
                            alt="3_9"
                            className="m-b-10 image-responsive-height"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/demo/3_9.svg"
                            }
                          />{" "}
                          Column view (3 : 9)
                        </Content>
                      </li>
                      <li className="full-width m-b-30">
                        <Content
                          active={contentOptions[5] ? true : false}
                          dataAction={"columns-9-3"}
                          onClick={() => {
                            setContentOptions([
                              false,
                              false,
                              false,
                              false,
                              false,
                              true,
                              false,
                            ]);
                            setBuilderToggle(false);
                            setLayoutOption([false, false]);
                          }}
                        >
                          <img
                            alt="9_3"
                            className="m-b-10 image-responsive-height"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/demo/9_3.svg"
                            }
                          />{" "}
                          Column view (9 : 3)
                        </Content>
                      </li>
                      <li className="full-width m-b-30">
                        <Content
                          active={contentOptions[6] ? true : false}
                          dataAction={"columns-6-6"}
                          onClick={() => {
                            setContentOptions([
                              false,
                              false,
                              false,
                              false,
                              false,
                              false,
                              true,
                            ]);
                            setBuilderToggle(false);
                            setLayoutOption([false, false]);
                          }}
                        >
                          <img
                            alt="6_6"
                            className="m-b-10 image-responsive-height"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/demo/6_6.svg"
                            }
                          />{" "}
                          Column view (6 : 6)
                        </Content>
                      </li>
                    </ul>
            	</PerfectScrollbar>
            </div>
          </div>
        </div>
      </div>
      {/* END config side bar */}
    </React.Fragment>
  );
};

export default content;
