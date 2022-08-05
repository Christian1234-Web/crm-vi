import React, { useState } from "react";
import Skycons from "react-skycons";

// import footer component
import Copyright from "../../ui/Footer/Copyright/Component";

//import ui widgets component
import GraphWidget from "../../ui/widget/GraphWidget/Component";
import BarDoubleWidget from "../../ui/widget/BarDoubleStackWidget/Component";
import ServerLoadWidget from "../../ui/widget/ServerLoadWidget/Component";
import MapWidget from "../../ui/widget/MapWidget/Component";

import "./style.scss";

const Content = () => {
  const progress = (
    <React.Fragment>
      <div
        className="card-progress"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", display: "block" }}
      ></div>
    </React.Fragment>
  );

  const [refreshSix, setRefreshSix] = useState(false);
  const [refreshSeven, setRefreshSeven] = useState(false);
  const [refreshEight, setRefreshEight] = useState(false);
  const [refreshNine, setRefreshNine] = useState(false);
  const [refreshTen, setRefreshTen] = useState(false);
  const [refreshTwelve, setRefreshTwelve] = useState(false);
  const [refreshThirteen, setRefreshThirteen] = useState(false);
  const [refreshFourteen, setRefreshFourteen] = useState(false);

  return (
    <div className="page-content-wrapper ">
      {/* START PAGE CONTENT */}
      <div className="content sm-gutter">
        <div className="container-fluid padding-25 sm-padding-10">
          <div className="row m-b-10">
            <div className="col-lg-4 col-xl-3 col-xlg-2 ">
              <div className="row">
                <div className="col-md-12 m-b-10">
                  <div className="widget-8 card  bg-warning no-margin widget-loader-bar">
                    <div className="container-xs-height full-height">
                      <div className="row-xs-height">
                        <div className="col-xs-height col-top">
                          <div className="card-header  top-left top-right">
                            <div className="card-title">
                              <span className="font-montserrat fs-11 all-caps">
                                Weekly Sales{" "}
                              </span>
                            </div>
                            <div className="card-controls">
                              <ul>
                                <li>
                                  <a
                                    data-toggle="refresh"
                                    className={`card-refresh ${
                                      refreshSix ? "refreshing" : ""
                                    }`}
                                    href="javascript:void(0);"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setRefreshSix(true);
                                      setTimeout(() => {
                                        setRefreshSix(false);
                                      }, 2000);
                                    }}
                                  >
                                    <i
                                      className={`card-icon card-icon-refresh ${
                                        refreshSix ? "fade" : ""
                                      }`}
                                    ></i>
                                    <i
                                      className={`card-icon-refresh-lg-white-animated ${
                                        refreshSix ? "active" : ""
                                      }`}
                                      style={{
                                        position: "absolute",
                                        top: "14px",
                                        right: "20px",
                                      }}
                                    ></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row-xs-height ">
                        <div className="col-xs-height col-top relative">
                          <div className="row full-height">
                            <div className="col-sm-6">
                              <div className="p-l-20 full-height d-flex flex-column justify-content-between">
                                <h3 className="no-margin p-b-5">$14,000</h3>
                                <p className="small m-t-5 m-b-20">
                                  <span className="label label-white hint-text font-montserrat m-r-5">
                                    60%
                                  </span>
                                  <span className="fs-12">Higher</span>
                                </p>
                              </div>
                            </div>
                            <div className="col-sm-6"></div>
                          </div>
                          <div
                            className="widget-8-chart line-chart"
                            data-line-color="white"
                            data-points="true"
                            data-point-color="warning"
                            data-stroke-width="2"
                          >
                            {/* START SVG HERE */}
                            <svg>
                              <g
                                className="nvd3 nv-wrap nv-lineChart"
                                transform="translate(-10,10)"
                              >
                                <g>
                                  <rect
                                    width="158"
                                    height="103"
                                    style={{ opacity: "0" }}
                                  ></rect>
                                  <g className="nv-x nv-axis"></g>
                                  <g className="nv-y nv-axis"></g>
                                  <g className="nv-linesWrap">
                                    <g
                                      className="nvd3 nv-wrap nv-line"
                                      transform="translate(0,0)"
                                    >
                                      <defs>
                                        <clipPath id="nv-edge-clip-10456">
                                          <rect width="163" height="103"></rect>
                                        </clipPath>
                                      </defs>
                                      <g clipPath="">
                                        <g className="nv-groups">
                                          <g
                                            className="nv-group nv-series-0"
                                            style={{
                                              strokeOpacity: "1",
                                              fillOpacity: "0.5",
                                              fill: "rgb(0, 0, 0)",
                                              stroke: "rgb(0, 0, 0)",
                                            }}
                                          >
                                            <path
                                              className="nv-line"
                                              d="M0,103L30.16666666666667,75.53333333333333L60.33333333333334,34.33333333333334L90.5,27.46666666666667L120.66666666666669,0L150.83333333333334,13.733333333333334L181,68.66666666666667"
                                            ></path>
                                          </g>
                                        </g>
                                        <g
                                          className="nv-scatterWrap"
                                          clipPath=""
                                        >
                                          <g
                                            className="nvd3 nv-wrap nv-scatter nv-chart-10456"
                                            transform="translate(0,0)"
                                          >
                                            <defs>
                                              <clipPath id="nv-edge-clip-10456">
                                                <rect
                                                  width="163"
                                                  height="103"
                                                ></rect>
                                              </clipPath>
                                            </defs>
                                            <g clipPath="">
                                              <g className="nv-groups">
                                                <g
                                                  className="nv-group nv-series-0"
                                                  style={{
                                                    strokeOpacity: "1",
                                                    fillOpacity: "0.5",
                                                    stroke: "rgb(0, 0, 0)",
                                                    fill: "rgb(0, 0, 0)",
                                                  }}
                                                >
                                                  <circle
                                                    cx="0"
                                                    cy="103"
                                                    r="3"
                                                    className="nv-point nv-point-0"
                                                    style={{
                                                      strokeWidth: "2px",
                                                    }}
                                                  ></circle>
                                                  <circle
                                                    cx="30.16666666666667"
                                                    cy="75.53333333333333"
                                                    r="3"
                                                    className="nv-point nv-point-1"
                                                    style={{
                                                      strokeWidth: "2px",
                                                    }}
                                                  ></circle>
                                                  <circle
                                                    cx="60.33333333333334"
                                                    cy="34.33333333333334"
                                                    r="3"
                                                    className="nv-point nv-point-2"
                                                    style={{
                                                      strokeWidth: "2px",
                                                    }}
                                                  ></circle>
                                                  <circle
                                                    cx="90.5"
                                                    cy="27.46666666666667"
                                                    r="3"
                                                    className="nv-point nv-point-3"
                                                    style={{
                                                      strokeWidth: "2px",
                                                    }}
                                                  ></circle>
                                                  <circle
                                                    cx="120.66666666666669"
                                                    cy="0"
                                                    r="3"
                                                    className="nv-point nv-point-4"
                                                    style={{
                                                      strokeWidth: "2px",
                                                    }}
                                                  ></circle>
                                                  <circle
                                                    cx="150.83333333333334"
                                                    cy="13.733333333333334"
                                                    r="3"
                                                    className="nv-point nv-point-5"
                                                    style={{
                                                      strokeWidth: "2px",
                                                    }}
                                                  ></circle>
                                                  <circle
                                                    cx="181"
                                                    cy="68.66666666666667"
                                                    r="3"
                                                    className="nv-point nv-point-6"
                                                    style={{
                                                      strokeWidth: "2px",
                                                    }}
                                                  ></circle>
                                                </g>
                                              </g>
                                              <g className="nv-point-paths"></g>
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                  <g className="nv-legendWrap"></g>
                                  <g className="nv-interactive"></g>
                                </g>
                              </g>
                            </svg>
                            {/* END SVG HERE */}
                          </div>
                        </div>
                      </div>
                      {refreshSix ? progress : null}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 m-b-10">
                  <div className="widget-9 card  bg-success no-margin widget-loader-bar ">
                    <div className="full-height d-flex flex-column">
                      <div className="card-header ">
                        <div className="card-title">
                          <span className="font-montserrat fs-11 all-caps">
                            Weekly Sales{" "}
                          </span>
                        </div>
                        <div className="card-controls">
                          <ul>
                            <li>
                              <a
                                data-toggle="refresh"
                                className={`card-refresh ${
                                  refreshSeven ? "refreshing" : ""
                                }`}
                                href="javascript:void(0);"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setRefreshSeven(true);
                                  setTimeout(() => {
                                    setRefreshSeven(false);
                                  }, 2000);
                                }}
                              >
                                <i
                                  className={`card-icon card-icon-refresh ${
                                    refreshSeven ? "fade" : ""
                                  }`}
                                ></i>
                                <i
                                  className={`card-icon-refresh-lg-white-animated ${
                                    refreshSeven ? "active" : ""
                                  }`}
                                  style={{
                                    position: "absolute",
                                    top: "14px",
                                    right: "20px",
                                  }}
                                ></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="p-l-20">
                        <h3 className="no-margin p-b-5">$23,000</h3>
                        <span className="d-flex align-items-center">
                          <i className="pg-icon m-r-5">arrow_down</i>
                          <span className="small hint-text">
                            65% lower than last month
                          </span>
                        </span>
                      </div>
                      <div className="mt-auto">
                        <div className="progress progress-small m-b-20">
                          <div
                            className="progress-bar progress-bar-white"
                            style={{ width: "45%" }}
                          ></div>
                        </div>
                      </div>
                      {refreshSeven ? progress : null}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="widget-10 card  bg-white no-margin widget-loader-bar">
                    <div className="card-header  top-left top-right ">
                      <div className="card-title text-black hint-text">
                        <span className="font-montserrat fs-11 all-caps">
                          Weekly Sales{" "}
                        </span>
                      </div>
                      <div className="card-controls">
                        <ul>
                          <li>
                            <a
                              data-toggle="refresh"
                              className={`card-refresh ${
                                refreshEight ? "refreshing" : ""
                              }`}
                              href="javascript:void(0);"
                              onClick={(e) => {
                                e.preventDefault();
                                setRefreshEight(true);
                                setTimeout(() => {
                                  setRefreshEight(false);
                                }, 2000);
                              }}
                            >
                              <i
                                className={`card-icon card-icon-refresh ${
                                  refreshEight ? "fade" : ""
                                }`}
                              ></i>
                              <i
                                className={`card-icon-refresh-lg-white-animated ${
                                  refreshEight ? "active" : ""
                                }`}
                                style={{
                                  position: "absolute",
                                  top: "14px",
                                  right: "20px",
                                }}
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body p-t-40">
                      <div className="row">
                        <div className="col-sm-12 ">
                          <h4 className="no-margin p-b-5 text-danger semi-bold">
                            APPL 2.032
                          </h4>
                          <div className="d-flex align-items-center pull-left small">
                            <span>WMHC</span>
                            <span className=" text-success">
                              {" "}
                              <i className="pg-icon m-l-10">arrow_up</i>{" "}
                            </span>
                            <span className="text-success font-montserrat">
                              {" "}
                              21%{" "}
                            </span>
                          </div>
                          <div className="d-flex align-items-center pull-left m-l-20 small">
                            <span>HCRS</span>
                            <span className="text-danger">
                              <i className="pg-icon m-l-10">arrow_down</i>{" "}
                            </span>
                            <span className="text-danger font-montserrat">
                              {" "}
                              21%{" "}
                            </span>
                          </div>
                          <div className="clearfix"></div>
                        </div>
                      </div>
                      <div className="p-t-5 full-width">
                        <a
                          href="javascript:void(0);"
                          className="btn-circle-arrow b-grey"
                        >
                          <i className="pg-icon">chevron_down</i>
                        </a>
                        <span className="hint-text small">Show more</span>
                      </div>
                    </div>
                    {refreshEight ? progress : null}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-xl-9 col-xlg-6 ">
              <div className="row h-100">
                <div className="col-md-12 h-100">
                  <div className="widget-12 card  widget-loader-circle no-margin h-100">
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="card-header  pull-up top-right ">
                          <div className="card-controls">
                            <ul>
                              <li className="hidden-xlg">
                                <div className="dropdown">
                                  <a
                                    data-target="#"
                                    href="javascript:void(0);"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    role="button"
                                    aria-expanded="false"
                                  >
                                    <i className="card-icon card-icon-settings"></i>
                                  </a>
                                  <ul
                                    className="dropdown-menu pull-right"
                                    role="menu"
                                  >
                                    <li>
                                      <a href="javascript:void(0);">AAPL</a>
                                    </li>
                                    <li>
                                      <a href="javascript:void(0);">YHOO</a>
                                    </li>
                                    <li>
                                      <a href="javascript:void(0);">GOOG</a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-toggle="refresh"
                                  className={`card-refresh ${
                                    refreshNine ? "refreshing" : ""
                                  }`}
                                  href="javascript:void(0);"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setRefreshNine(true);
                                    setTimeout(() => {
                                      setRefreshNine(false);
                                    }, 2000);
                                  }}
                                >
                                  <i
                                    className={`card-icon card-icon-refresh ${
                                      refreshNine ? "fade" : ""
                                    }`}
                                  ></i>
                                  <i
                                    className={`card-icon-refresh-lg-white-animated ${
                                      refreshNine ? "active" : ""
                                    }`}
                                    style={{
                                      position: "absolute",
                                      top: "14px",
                                      right: "20px",
                                    }}
                                  ></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-8">
                          <div className="p-l-5">
                            <h2 className="pull-left m-t-5 m-b-5">
                              Tesla Inc.
                            </h2>
                            <h2 className="pull-right m-r-25 m-t-5 m-b-5 text-success">
                              <i className="pg-icon m-r-5">arrow_up</i>
                              <span className="">448.97</span>
                              <span className="text-success fs-12">
                                +318.24
                              </span>
                            </h2>
                            <div className="clearfix"></div>
                            <div className="full-width">
                              <ul className="list-inline m-t-10 p-b-10 m-b-0 b-b b-dashed b-grey">
                                <li>
                                  <a
                                    href="javascript:void(0);"
                                    className="font-montserrat fs-12 text-color"
                                  >
                                    1D
                                  </a>
                                </li>
                                <li className="active">
                                  <a
                                    href="javascript:void(0);"
                                    className="font-montserrat fs-12   bg-contrast-low text-color"
                                  >
                                    5D
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="javascript:void(0);"
                                    className="font-montserrat fs-12 text-color"
                                  >
                                    1M
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="javascript:void(0);"
                                    className="font-montserrat fs-12 text-color"
                                  >
                                    1Y
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="nvd3-line line-chart text-center"
                              data-x-grid="false"
                              style={{ height: "320px" }}
                            >
                              {/* START SVG GOES HERE */}
                              <GraphWidget specifiedHeight={320} />
                              {/* END SVG GOES HERE */}
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4 p-l-15">
                          <div className="widget-12-search">
                            <p className="pull-left">Stocks list</p>
                            <button
                              aria-label=""
                              className="btn btn-default btn-rounded btn-icon pull-right"
                            >
                              <i className="pg-icon">add</i>
                            </button>
                            <div className="clearfix"></div>
                            <input
                              type="text"
                              placeholder="Search list"
                              className="form-control m-t-5"
                            />
                          </div>
                          <div className="company-stat-boxes">
                            <div
                              data-index="0"
                              className="company-stat-box m-t-15 active p-l-5 p-r-5 p-t-10 p-b-10 b-b b-grey"
                            >
                              <div className="pull-left">
                                <p className="company-name pull-left text-uppercase bold no-margin">
                                  <span className="text-success fs-11"></span>{" "}
                                  AAPL
                                </p>
                                <small className="hint-text m-l-10">
                                  Apple Inc.
                                </small>
                              </div>
                              <div className="pull-right">
                                <p className="small hint-text no-margin inline">
                                  325.73
                                </p>
                                <span className="label label-success m-l-5 inline">
                                  + 12.09
                                </span>
                              </div>
                              <div className="clearfix"></div>
                            </div>
                            <div
                              data-index="1"
                              className="company-stat-box active p-l-5 p-r-5 p-t-15 p-b-10 b-b b-grey"
                            >
                              <div className="pull-left">
                                <p className="company-name pull-left text-uppercase bold no-margin">
                                  <span className="text-success fs-11"></span>{" "}
                                  GOOG
                                </p>
                                <small className="hint-text m-l-10">
                                  Alphabet Inc.
                                </small>
                              </div>
                              <div className="pull-right">
                                <p className="small hint-text no-margin inline">
                                  1407.73
                                </p>
                                <span className="label label-important m-l-5 inline">
                                  - 1.09
                                </span>
                              </div>
                              <div className="clearfix"></div>
                            </div>
                            <div
                              data-index="2"
                              className="company-stat-box active p-l-5 p-r-5 p-t-15 p-b-10 b-b b-grey"
                            >
                              <div className="pull-left">
                                <p className="company-name pull-left text-uppercase bold no-margin">
                                  <span className="text-success fs-11"></span>{" "}
                                  YHOO
                                </p>
                                <small className="hint-text m-l-10">
                                  Yahoo Inc.
                                </small>
                              </div>
                              <div className="pull-right">
                                <p className="small hint-text no-margin inline">
                                  37.73
                                </p>
                                <span className="label label-success m-l-5 inline">
                                  + 0.09
                                </span>
                              </div>
                              <div className="clearfix"></div>
                            </div>
                            <div
                              data-index="3"
                              className="company-stat-box active p-l-5 p-r-5 p-t-15 p-b-10 b-b b-grey"
                            >
                              <div className="pull-left">
                                <p className="company-name pull-left text-uppercase bold no-margin">
                                  <span className="text-success fs-11"></span>{" "}
                                  NKE
                                </p>
                                <small className="hint-text m-l-10">
                                  Nike Inc.
                                </small>
                              </div>
                              <div className="pull-right">
                                <p className="small hint-text no-margin inline">
                                  100.02
                                </p>
                                <span className="label label-important m-l-5 inline">
                                  - 0.04
                                </span>
                              </div>
                              <div className="clearfix"></div>
                            </div>
                            <div
                              data-index="4"
                              className="company-stat-box active p-l-5 p-r-5 p-t-15 p-b-10"
                            >
                              <div className="pull-left">
                                <p className="company-name pull-left text-uppercase bold no-margin">
                                  <span className="text-success fs-11"></span>{" "}
                                  TSLA
                                </p>
                                <small className="hint-text m-l-10">
                                  Tesla Inc.
                                </small>
                              </div>
                              <div className="pull-right">
                                <p className="small hint-text no-margin inline">
                                  537.73
                                </p>
                                <span className="label label-success m-l-5 inline">
                                  + 0.09
                                </span>
                              </div>
                              <div className="clearfix"></div>
                            </div>
                          </div>
                          <span className="pull-bottom hint-text small">
                            VIA YAHOO Finance (Stock market API)(800) MY-STOCKS
                            (800-692-7753)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {refreshNine ? progress : null}
                </div>
              </div>
            </div>

            <div className="col-lg-6 visible-md visible-xlg col-xlg-4 m-b-10">
              <div className="widget-15 card no-margin  widget-loader-circle">
                <div className="card-header top-right">
                  <div className="card-controls">
                    <ul>
                      <li></li>
                    </ul>
                  </div>
                </div>
                <div className="card-body no-padding">
                  <ul className="nav nav-tabs nav-tabs-simple p-t-5">
                    <li className="nav-item">
                      <a
                        href="javascript:void(0);"
                        data-toggle="tab"
                        className="active"
                      >
                        APPL
                        <br />
                        22.23
                        <br />
                        <span className="text-success">+60.223%</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="javascript:void(0);"
                        data-toggle="tab"
                        className=""
                      >
                        FB
                        <br />
                        45.97
                        <br />
                        <span className="text-danger">-06.56%</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="javascript:void(0);"
                        data-toggle="tab"
                        className=""
                      >
                        GOOG
                        <br />
                        22.23
                        <br />
                        <span className="text-success">+60.223%</span>
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content p-l-10 p-r-10">
                    <div
                      className="tab-pane no-padding active"
                      id="widget-15-tab-1"
                    >
                      <div className="full-width">
                        <div className="full-width">
                          <div className="widget-15-chart rickshaw-chart rickshaw_graph">
                            <BarDoubleWidget
                              style={{
                                height: "200px",
                                width: "100%",
                                paddingLeft: "0px",
                                marginLeft: "0px",
                              }}
                              color={[
                                "rgba(66, 199, 244, 1)",
                                "rgba(244, 244, 244, 1)",
                              ]}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane no-padding"
                      id="widget-15-tab-2"
                    ></div>
                    <div className="tab-pane" id="widget-15-tab-3"></div>
                  </div>
                  <div className="p-t-20 p-l-20 p-r-20 p-b-20">
                    <div className="row">
                      <div className="col-md-9">
                        <p className="fs-16">
                          Apple’s Motivation - Innovation
                          <br />
                          distinguishes between A leader and a follower.
                        </p>
                        <p className="small hint-text">
                          VIA Apple Store (Consumer and Education Individuals)
                          <br />
                          (800) MY-APPLE (800-692-7753)
                        </p>
                      </div>
                      <div className="col-md-3 text-right">
                        <p className="font-montserrat bold text-success m-r-20 fs-16 m-t-0">
                          +0.94
                        </p>
                        <p className="font-montserrat bold text-danger m-r-20 fs-16">
                          -0.63
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 m-b-10">
              <div className="widget-13 card   no-margin widget-loader-circle">
                <div className="card-header  pull-up top-right ">
                  <div className="card-controls">
                    <ul>
                      <li>
                        <a
                          data-toggle="refresh"
                          className={`card-refresh ${
                            refreshThirteen ? "refreshing" : ""
                          } text-black`}
                          href="javascript:void(0);"
                          onClick={(e) => {
                            e.preventDefault();
                            setRefreshThirteen(true);
                            setTimeout(() => {
                              setRefreshThirteen(false);
                            }, 2000);
                          }}
                        >
                          <i
                            className={`card-icon card-icon-refresh ${
                              refreshThirteen ? "fade" : ""
                            }`}
                          ></i>
                          <i
                            className={`card-icon-refresh-lg-white-animated ${
                              refreshThirteen ? "active" : ""
                            }`}
                            style={{
                              position: "absolute",
                              top: "14px",
                              right: "20px",
                            }}
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="container-sm-height no-overflow">
                  <div className="row row-sm-height">
                    <div className="col-sm-5 col-lg-4 col-xlg-3 col-sm-height col-top no-padding">
                      <div className="card-header  ">
                        <div className="card-title">Geolocation</div>
                      </div>
                      <div className="card-body">
                        <ul
                          className="nav nav-pills m-t-10 m-b-15"
                          role="tablist"
                        >
                          <li className="active">
                            <a
                              href="#tab1"
                              data-toggle="tab"
                              role="tab"
                              className="b-a b-grey text-color"
                            >
                              fb
                            </a>
                          </li>
                          <li>
                            <a
                              href="#tab2"
                              data-toggle="tab"
                              role="tab"
                              className="b-a b-grey text-color"
                            >
                              gl
                            </a>
                          </li>
                          <li>
                            <a
                              href="#tab3"
                              data-toggle="tab"
                              role="tab"
                              className="b-a b-grey text-color"
                            >
                              am
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content">
                          <div className="tab-pane active" id="tab1">
                            <h3 className="m-t-5 m-b-20">Facebook</h3>
                            <p className="hint-text all-caps font-montserrat small no-margin ">
                              Views
                            </p>
                            <p className="all-caps font-montserrat  no-margin text-success ">
                              14,256
                            </p>
                            <br />
                            <p className="hint-text all-caps font-montserrat small no-margin ">
                              Today
                            </p>
                            <p className="all-caps font-montserrat  no-margin text-warning ">
                              24
                            </p>
                            <br />
                            <p className="hint-text all-caps font-montserrat small no-margin ">
                              Week
                            </p>
                            <p className="all-caps font-montserrat  no-margin text-success ">
                              56
                            </p>
                          </div>
                          <div className="tab-pane " id="tab2">
                            <h3 className="m-t-5 m-b-20">Google</h3>
                            <p className="hint-text all-caps font-montserrat small no-margin ">
                              Views
                            </p>
                            <p className="all-caps font-montserrat  no-margin text-success ">
                              14,256
                            </p>
                            <br />
                            <p className="hint-text all-caps font-montserrat small no-margin ">
                              Today
                            </p>
                            <p className="all-caps font-montserrat  no-margin text-warning ">
                              24
                            </p>
                            <br />
                            <p className="hint-text all-caps font-montserrat small no-margin ">
                              Week
                            </p>
                            <p className="all-caps font-montserrat  no-margin text-success ">
                              56
                            </p>
                          </div>
                          <div className="tab-pane" id="tab3">
                            <h3 className="m-t-5 m-b-20">Amazon</h3>
                            <p className="hint-text all-caps font-montserrat small no-margin ">
                              Views
                            </p>
                            <p className="all-caps font-montserrat  no-margin text-success ">
                              14,256
                            </p>
                            <br />
                            <p className="hint-text all-caps font-montserrat small no-margin ">
                              Today
                            </p>
                            <p className="all-caps font-montserrat  no-margin text-warning ">
                              24
                            </p>
                            <br />
                            <p className="hint-text all-caps font-montserrat small no-margin ">
                              Week
                            </p>
                            <p className="all-caps font-montserrat  no-margin text-success ">
                              56
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="p-l-20 p-r-20 p-t-10 p-b-10 pull-bottom full-width hidden-xs">
                        <p className="no-margin">
                          <a
                            href="javascript:void(0);"
                            className="btn-circle-arrow b-grey"
                          >
                            <i className="pg-icon">chevron_down</i>
                          </a>
                          <span className="hint-text">
                            Super secret options
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-7 col-lg-8 col-xlg-9 col-sm-height col-top no-padding relative">
                      <div
                        className="bg-complete widget-13-map mapplic-element"
                        style={{ height: "465px" }}
                      >
                        <MapWidget />
                      </div>
                      {refreshThirteen ? progress : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 m-b-10">
              <div className="widget-14 card   no-margin widget-loader-circle">
                <div className="container-xs-height full-height">
                  <div className="row-xs-height">
                    <div className="col-xs-height">
                      <div className="card-header ">
                        <div className="card-title">Server load</div>
                        <div className="card-controls">
                          <ul>
                            <li>
                              <a
                                data-toggle="refresh"
                                className={`card-refresh ${
                                  refreshFourteen ? "refreshing" : ""
                                } text-black`}
                                href="javascript:void(0);"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setRefreshFourteen(true);
                                  setTimeout(() => {
                                    setRefreshFourteen(false);
                                  }, 2000);
                                }}
                              >
                                <i
                                  className={`card-icon card-icon-refresh ${
                                    refreshFourteen ? "fade" : ""
                                  }`}
                                ></i>
                                <i
                                  className={`card-icon-refresh-lg-white-animated ${
                                    refreshFourteen ? "active" : ""
                                  }`}
                                  style={{
                                    position: "absolute",
                                    top: "14px",
                                    right: "20px",
                                  }}
                                ></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row-xs-height">
                    <div className="col-xs-height">
                      <div className="p-l-20 p-r-20">
                        <p>Server: www.revox.io</p>
                        <div className="row">
                          <div className="col-lg-3 col-md-12">
                            <h4 className="bold no-margin">5.2GB</h4>
                            <p className="small no-margin">Total usage</p>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <h5 className=" no-margin p-t-5">227.3KB</h5>
                            <p className="small no-margin">Currently</p>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <h5 className=" no-margin p-t-5">117.6MB</h5>
                            <p className="small no-margin">Average</p>
                          </div>
                          <div className="col-lg-3 visible-xlg"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row-xs-height">
                    <div className="col-xs-height relative bg-contrast-lowest">
                      <div className="widget-14-chart_y_axis">
                        <svg
                          className="rickshaw_graph y_axis"
                          width="35"
                          height="326.70000000000005"
                          style={{ position: "relative" }}
                        >
                          <g className="y_ticks plain">
                            <g
                              className="tick major"
                              transform="translate(0,296)"
                              style={{ opacity: "1" }}
                            >
                              <line x2="4" y2="0"></line>
                              <text
                                x="7"
                                y="0"
                                dy=".32em"
                                style={{ textAnchor: "start" }}
                              >
                                0
                              </text>
                            </g>
                            <g
                              className="tick major"
                              transform="translate(0,189.08735475600236)"
                              style={{ opacity: "1" }}
                            >
                              <line x2="4" y2="0"></line>
                              <text
                                x="7"
                                y="0"
                                dy=".32em"
                                style={{ textAnchor: "start" }}
                              >
                                10
                              </text>
                            </g>
                            <g
                              className="tick major"
                              transform="translate(0,82.17470951200474)"
                              style={{ opacity: "1" }}
                            >
                              <line x2="4" y2="0"></line>
                              <text
                                x="7"
                                y="0"
                                dy=".32em"
                                style={{ textAnchor: "start" }}
                              >
                                20
                              </text>
                            </g>
                            <path className="domain" d="M4,0H0V296H4"></path>
                          </g>
                        </svg>
                      </div>
                      <ServerLoadWidget />
                    </div>
                  </div>
                  {refreshFourteen ? progress : null}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 visible-lg hidden-xlg sm-p-b-10 md-m-b-10">
              <div className="widget-15-2 card no-margin  widget-loader-circle">
                <div className="card-header  top-right">
                  <div className="card-controls">
                    <ul>
                      <li>
                        <a
                          data-toggle="refresh"
                          className={`card-refresh ${
                            refreshTen ? "refreshing" : ""
                          }`}
                          href="javascript:void(0);"
                          onClick={(e) => {
                            e.preventDefault();
                            setRefreshTen(true);
                            setTimeout(() => {
                              setRefreshTen(false);
                            }, 2000);
                          }}
                        >
                          <i
                            className={`card-icon card-icon-refresh ${
                              refreshTen ? "fade" : ""
                            }`}
                          ></i>
                          <i
                            className={`card-icon-refresh-lg-white-animated ${
                              refreshTen ? "active" : ""
                            }`}
                            style={{
                              position: "absolute",
                              top: "14px",
                              right: "20px",
                            }}
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <ul className="nav nav-tabs nav-tabs-simple">
                  <li>
                    <a href="#widget-15-2-tab-1" className="active">
                      APPL
                      <br />
                      22.23
                      <br />
                      <span className="text-success">+60.223%</span>
                    </a>
                  </li>
                  <li>
                    <a href="#widget-15-2-tab-2">
                      FB
                      <br />
                      45.97
                      <br />
                      <span className="text-danger">-06.56%</span>
                    </a>
                  </li>
                  <li>
                    <a href="#widget-15-2-tab-3">
                      GOOG
                      <br />
                      22.23
                      <br />
                      <span className="text-success">+60.223%</span>
                    </a>
                  </li>
                </ul>
                <div className="tab-content p-l-10 p-r-10">
                  <div
                    className="tab-pane no-padding active"
                    id="widget-15-2-tab-1"
                  >
                    <BarDoubleWidget
                      style={{
                        height: "282px",
                        width: "100%",
                        paddingLeft: "0px",
                        marginLeft: "0px",
                        paddingTop: "0px",
                        marginBottom: "-50px",
                        marginTop: "-50px",
                      }}
                      color={["#0F8EFA", "#F4F4F4"]}
                    />
                  </div>
                  <div
                    className="tab-pane no-padding"
                    id="widget-15-2-tab-2"
                  ></div>
                  <div className="tab-pane" id="widget-15-2-tab-3"></div>
                </div>
                <div className="p-t-10 p-l-20 p-r-20 p-b-20">
                  <div className="row">
                    <div className="col-md-9">
                      <p className="fs-16">
                        Apple’s Motivation - Innovation distinguishes between A
                        leader and a follower.
                      </p>
                      <p className="small hint-text">
                        VIA Apple Store (Consumer and Education Individuals)
                        <br />
                        (800) MY-APPLE (800-692-7753)
                      </p>
                    </div>
                    <div className="col-md-3 text-right">
                      <h5 className="font-montserrat bold text-success m-t-0">
                        +0.94
                      </h5>
                      <h5 className="font-montserrat bold text-danger">
                        -0.63
                      </h5>
                    </div>
                  </div>
                </div>
                {refreshTen ? progress : null}
              </div>
            </div>

            <div className="col-xlg-2 visible-xlg ">
              <div className="widget-18 card   no-margin ">
                <div className="padding-15">
                  <div className="item-header clearfix">
                    <div className="thumbnail-wrapper d32 circular">
                      <img
                        width="40"
                        height="40"
                        src="assets/img/profiles/3x.jpg"
                        data-src="assets/img/profiles/3.jpg"
                        data-src-retina="assets/img/profiles/3x.jpg"
                        alt=""
                      />
                    </div>
                    <div className="inline m-l-10">
                      <p className="no-margin">
                        <strong>Anne Simons</strong>
                      </p>
                      <p className="no-margin hint-text fs-12 d-flex">
                        Shared a link
                        <span className="location semi-bold d-flex">
                          <i className="pg-icon">map</i> NY center
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <ul className="buttons pull-top top-right list-inline p-r-10 p-t-10">
                    <li>
                      <a className="text-white" href="javascript:void(0);">
                        <i className="pg-icon">expand</i>
                      </a>
                    </li>
                    <li>
                      <a className="text-white" href="javascript:void(0);">
                        <i className="pg-icon">heart_outline</i>
                      </a>
                    </li>
                  </ul>
                  <div className="widget-18-post bg-black no-overflow"></div>
                </div>
                <div className="padding-15">
                  <div className="hint-text pull-left fs-13">
                    few seconds ago
                  </div>
                  <ul className="list-inline pull-right no-margin">
                    <li>
                      <a
                        className="text-color hint-text fs-13 d-flex"
                        href="javascript:void(0);"
                      >
                        <i className="pg-icon m-r-5">comment_alt</i> 5,345
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-color hint-text fs-13 d-flex"
                        href="javascript:void(0);"
                      >
                        <i className="pg-icon m-r-5">heart</i> 23K
                      </a>
                    </li>
                  </ul>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
            <div className="col-xlg-2 visible-xlg ">
              <div className="row">
                <div className="col-xlg-12">
                  <div className="card   no-margin">
                    <div className="padding-15">
                      <div className="item-header clearfix">
                        <div className="thumbnail-wrapper d32 circular">
                          <img
                            width="40"
                            height="40"
                            src="assets/img/profiles/3x.jpg"
                            data-src="assets/img/profiles/3.jpg"
                            data-src-retina="assets/img/profiles/3x.jpg"
                            alt=""
                          />
                        </div>
                        <div className="inline m-l-10">
                          <p className="no-margin">
                            <strong>Anne Simons</strong>
                          </p>
                          <p className="no-margin hint-text fs-12 d-flex">
                            Shared a link
                            <span className="location semi-bold d-flex">
                              <i className="pg-icon">map</i> NY center
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr className="no-margin" />
                    <div className="padding-15">
                      <p>
                        Crafting Digital Products that merge Humans and
                        Machines. Join the revolution.
                      </p>
                      <div className="hint-text fs-12">via themeforest</div>
                    </div>
                    <div className="relative">
                      <ul className="buttons pull-top top-right list-inline p-r-10 p-t-10">
                        <li>
                          <a className="text-white" href="javascript:void(0);">
                            <i className="pg-icon">expand</i>
                          </a>
                        </li>
                        <li>
                          <a className="text-white" href="javascript:void(0);">
                            <i className="pg-icon">comment</i>
                          </a>
                        </li>
                      </ul>
                      <div className="widget-19-post no-overflow">
                        <img
                          src="assets/img/social-post-image.png"
                          className="block center-margin relative"
                          alt="Post"
                        />
                      </div>
                    </div>
                    <div className="padding-15">
                      <div className="hint-text pull-left fs-13">
                        few seconds ago
                      </div>
                      <ul className="list-inline pull-right no-margin">
                        <li>
                          <a
                            className="text-color hint-text fs-13 d-flex"
                            href="javascript:void(0);"
                          >
                            <i className="pg-icon m-r-5">comment_alt</i> 5,345
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-color hint-text fs-13 d-flex"
                            href="javascript:void(0);"
                          >
                            <i className="pg-icon m-r-5">heart</i> 23K
                          </a>
                        </li>
                      </ul>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-8 col-xlg-6 md-m-t-10">
              <div className="widget-17 card  no-border no-margin widget-loader-circle">
                <div className="card-header ">
                  <div className="card-title">
                    <i className="pg-icon">map</i> California, USA
                    <span className="caret"></span>
                  </div>
                  <div className="card-controls">
                    <ul>
                      <li className="">
                        <div className="dropdown">
                          <a
                            data-target="#"
                            href="javascript:void(0);"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            role="button"
                            aria-expanded="false"
                          >
                            <i className="card-icon card-icon-settings"></i>
                          </a>
                          <ul className="dropdown-menu pull-right" role="menu">
                            <li>
                              <a href="javascript:void(0);">AAPL</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);">YHOO</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);">GOOG</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a
                          data-toggle="refresh"
                          className={`card-refresh ${
                            refreshTwelve ? "refreshing" : ""
                          } text-black`}
                          href="javascript:void(0);"
                          onClick={(e) => {
                            e.preventDefault();
                            setRefreshTwelve(true);
                            setTimeout(() => {
                              setRefreshTwelve(false);
                            }, 2000);
                          }}
                        >
                          <i
                            className={`card-icon card-icon-refresh ${
                              refreshTwelve ? "fade" : ""
                            }`}
                          ></i>
                          <i
                            className={`card-icon-refresh-lg-white-animated ${
                              refreshTwelve ? "active" : ""
                            }`}
                            style={{
                              position: "absolute",
                              top: "14px",
                              right: "20px",
                            }}
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <div className="p-l-0">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="row m-t-10">
                          <div className="col-lg-5">
                            <h4 className="no-margin">Monday</h4>
                            <p className="small hint-text">9th August 2020</p>
                          </div>
                          <div className="col-lg-7 d-flex">
                            <div class="pull-left ">
                              <p class="small hint-text no-margin">Currently</p>
                              <h4 class="text-danger bold no-margin">
                                32°
                                <span class="small">/ 30C</span>
                              </h4>
                            </div>
                            <div className="d-flex pull-right">
                              <Skycons
                                color="black"
                                icon="CLEAR_DAY"
                                style={{
                                  width: 117,
                                  height: 64,
                                  position: "relative",
                                  right: -40,
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <h5>
                          Feels like
                          <span className="semi-bold"> rainy</span>
                        </h5>
                        <p>Weather information</p>
                        <div className="widget-17-weather">
                          <div className="row">
                            <div className="col-6 p-r-10">
                              <div className="row">
                                <div className="col-lg-12">
                                  <p className="pull-left">Wind</p>
                                  <p className="pull-right bold">11km/h</p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-12">
                                  <p className="pull-left">Sunrise</p>
                                  <p className="pull-right bold">05:20</p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-12">
                                  <p className="pull-left">Humidity</p>
                                  <p className="pull-right bold">20%</p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-12">
                                  <p className="pull-left">Precipitation</p>
                                  <p className="pull-right bold">60%</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-6 p-l-10">
                              <div className="row">
                                <div className="col-lg-12">
                                  <p className="pull-left">Sunset</p>
                                  <p className="pull-right bold">21:05</p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-12">
                                  <p className="pull-left">Visibility</p>
                                  <p className="pull-right bold">21km</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row m-t-10 timeslot">
                          <div className="col-2 p-t-10 text-center">
                            <p className="small">13:30</p>
                            <Skycons
                              color="black"
                              icon="PARTLY_CLOUDY_DAY"
                              style={{ width: "100%", height: "auto" }}
                            />
                            <p className="text-success bold">30°C</p>
                          </div>
                          <div className="col-2 p-t-10 text-center">
                            <p className="small">14:00</p>
                            <Skycons
                              color="black"
                              icon="CLOUDY"
                              style={{ width: "100%", height: "auto" }}
                            />
                            <p className="text-success bold">24°C</p>
                          </div>
                          <div className="col-2 p-t-10 text-center">
                            <p className="small">14:30</p>
                            <Skycons
                              color="black"
                              icon="RAIN"
                              style={{ width: "100%", height: "auto" }}
                            />
                            <p className="text-success bold">30°C</p>
                          </div>
                          <div className="col-2 p-t-10 text-center">
                            <p className="small">15:00</p>
                            <Skycons
                              color="black"
                              icon="SLEET"
                              style={{ width: "100%", height: "auto" }}
                            />
                            <p className="text-danger bold">30°C</p>
                          </div>
                          <div className="col-2 p-t-10 text-center">
                            <p className="small">15:30</p>
                            <Skycons
                              color="black"
                              icon="SNOW"
                              style={{ width: "100%", height: "auto" }}
                            />
                            <p className="text-danger bold">30°C</p>
                          </div>
                          <div className="col-2 p-t-10 text-center">
                            <p className="small">16:00</p>
                            <Skycons
                              color="black"
                              icon="WIND"
                              style={{ width: "100%", height: "auto" }}
                            />
                            <p className="text-success bold">21°C</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 d-none d-sm-none d-md-block d-lg-block d-xl-block">
                        <div className="row">
                          <div className="forecast-day col-sm-6 text-center m-t-10 ">
                            <div className="bg-contrast-lowest p-b-10 p-t-10">
                              <h4 className="p-t-10 no-margin">Tuesday</h4>
                              <p className="small hint-text m-b-20">
                                11th Augest 2020
                              </p>
                              <Skycons
                                color="black"
                                icon="RAIN"
                                style={{ width: "75%", height: "auto" }}
                              />
                              <h5 className="text-success">27°</h5>
                              <p>
                                Feels like
                                <span className="bold"> rainy</span>
                              </p>
                              <p className="small">
                                Wind
                                <span className="bold p-l-20">11km/h</span>
                              </p>
                              <div className="m-t-20 block">
                                <div className="padding-10">
                                  <div className="row">
                                    <div className="col-lg-6 text-center">
                                      <p className="small">Noon</p>
                                      <Skycons
                                        color="black"
                                        icon="SLEET"
                                        style={{ width: "75%", height: "auto" }}
                                      />
                                      <p className="text-danger bold">30°C</p>
                                    </div>
                                    <div className="col-lg-6 text-center">
                                      <p className="small">Night</p>
                                      <Skycons
                                        color="black"
                                        icon="WIND"
                                        style={{ width: "75%", height: "auto" }}
                                      />
                                      <p className="text-success bold">29°C</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 text-center m-t-10 ">
                            <div className="bg-contrast-lowest p-b-10 p-t-10">
                              <h4 className="p-t-10 no-margin">Wednesday</h4>
                              <p className="small hint-text m-b-20">
                                11th Augest 2020
                              </p>
                              <Skycons
                                color="black"
                                icon="PARTLY_CLOUDY_DAY"
                                style={{ width: "75%", height: "auto" }}
                              />
                              <h5 className="text-danger">32°</h5>
                              <p>
                                Feels like
                                <span className="bold"> sunny</span>
                              </p>
                              <p className="small">
                                Wind
                                <span className="bold p-l-20">11km/h</span>
                              </p>
                              <div className="m-t-20 block">
                                <div className="padding-10">
                                  <div className="row">
                                    <div className="col-lg-6 text-center">
                                      <p className="small">Noon</p>
                                      <Skycons
                                        color="black"
                                        icon="PARTLY_CLOUDY_DAY"
                                        style={{ width: "75%", height: "auto" }}
                                      />
                                      <p className="text-danger bold">30°C</p>
                                    </div>
                                    <div className="col-lg-6 text-center">
                                      <p className="small">Night</p>
                                      <Skycons
                                        color="black"
                                        icon="WIND"
                                        style={{ width: "75%", height: "auto" }}
                                      />
                                      <p className="text-danger bold">30°C</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {refreshTwelve ? progress : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END PAGE CONTENT */}
      {/* START COPYRIGHT */}
      <Copyright
        year={"2014"}
        brand={"REVOX"}
        reserved={"All rights reserved."}
        terms={"Terms of use"}
        policy={"Privacy Policy"}
      />
      {/* END COPYRIGHT */}
    </div>
  );
};

export default Content;
