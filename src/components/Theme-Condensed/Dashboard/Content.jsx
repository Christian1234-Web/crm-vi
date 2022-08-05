import React, { useState } from "react";
import Skycons from "react-skycons";

// import footer component
import Copyright from "../../ui/Footer/Copyright/Component";

//import ui widgets component
import GraphWidget from "../../ui/widget/GraphWidget/Component";
import GraphTitleWidget from "../../ui/widget/GraphTitleWidget/Component";
import PlainLiveWidget from "../../ui/widget/PlainLiveWidget/Component";
import GraphLiveWidget from "../../ui/widget/GraphLiveWidget/Component";
import BarDoubleWidget from "../../ui/widget/BarDoubleStackWidget/Component";
import LineAreaGraphWidget from "../../ui/widget/LineAreaGraphWidget/Component";
import ServerLoadWidget from "../../ui/widget/ServerLoadWidget/Component";
import SaleStackBar from "../../ui/widget/SaleStackBarWidget/Component";
import MapWidget from "../../ui/widget/MapWidget/Component";

import "./style.css";

const Content = () => {
  const progress = (
    <React.Fragment>
      <div
        className="card-progress"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", display: "block" }}
      ></div>
    </React.Fragment>
  );

  const [refreshOne, setRefreshOne] = useState(false);
  const [refreshTwo, setRefreshTwo] = useState(false);
  const [refreshThree, setRefreshThree] = useState(false);
  const [refreshFour, setRefreshFour] = useState(false);
  const [refreshFive, setRefreshFive] = useState(false);
  const [refreshSix, setRefreshSix] = useState(false);
  const [refreshSeven, setRefreshSeven] = useState(false);
  const [refreshEight, setRefreshEight] = useState(false);
  const [refreshNine, setRefreshNine] = useState(false);
  const [refreshTen, setRefreshTen] = useState(false);
  const [refreshEleven, setRefreshEleven] = useState(false);
  const [refreshTwelve, setRefreshTwelve] = useState(false);
  const [refreshThirteen, setRefreshThirteen] = useState(false);
  const [refreshFourteen, setRefreshFourteen] = useState(false);
  const [refreshFifteen, setRefreshFifteen] = useState(false);

  const [checkedOption, setCheckedOption] = useState(true);

  return (
    <div className="page-content-wrapper ">
      {/* START PAGE CONTENT */}
      <div className="content sm-gutter">
        <div className="container-fluid padding-25 sm-padding-10">
          <div className="row">
            <div className="col-lg-6 col-xlg-5">
              <div className="row">
                <div className="col-md-12 m-b-10">
                  <div className="ar-3-2 widget-1-wrapper">
                    <div className="widget-1 card  bg-complete no-margin widget-loader-circle-lg">
                      <div className="card-header  top-right ">
                        <div className="card-controls">
                          <ul>
                            <li>
                              <a
                                data-toggle="refresh"
                                className={`card-refresh ${
                                  refreshOne ? "refreshing" : ""
                                } text-black`}
                                href="javascript:void(0);"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setRefreshOne(true);
                                  setTimeout(() => {
                                    setRefreshOne(false);
                                  }, 2000);
                                }}
                              >
                                <i
                                  className={`card-icon card-icon-refresh-lg-master ${
                                    refreshOne ? "fade" : ""
                                  }`}
                                ></i>
                                <i
                                  className={`card-icon-refresh-lg-white-animated ${
                                    refreshOne ? "active" : ""
                                  }`}
                                  style={{
                                    position: "absolute",
                                    top: "14px",
                                    left: "20px",
                                  }}
                                ></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="pull-bottom bottom-left bottom-right ">
                          <span className="label font-montserrat fs-11 all-caps">
                            explore
                          </span>
                          <br />
                          <h2 className="text-white">
                            Type anywhere to get Quick Search
                          </h2>
                          <p className="text-white hint-text">
                            Learn More at Project Pages
                          </p>
                          <div className="row stock-rates m-t-15">
                            <div className="company col-4">
                              <div>
                                <p className="font-montserrat text-success no-margin fs-16">
                                  <i className="pg-icon">arrow_up</i> +0.95%
                                  <span className="font-arial text-white fs-12 hint-text m-l-5">
                                    546.45
                                  </span>
                                </p>
                                <p className="bold text-white no-margin fs-11 font-montserrat lh-normal">
                                  AAPL
                                </p>
                              </div>
                            </div>
                            <div className="company col-4">
                              <div>
                                <p className="font-montserrat no-margin fs-16">
                                  <i className="pg-icon">arrow_down</i> -0.34%
                                  <span className="font-arial text-white fs-12 hint-text m-l-5">
                                    345.34
                                  </span>
                                </p>
                                <p className="bold text-white no-margin fs-11 font-montserrat lh-normal">
                                  YAHW
                                </p>
                              </div>
                            </div>
                            <div className="company col-4">
                              <div className="pull-right">
                                <p className="font-montserrat text-success no-margin fs-16">
                                  <i className="pg-icon">arrow_up</i> +0.95%
                                  <span className="font-arial text-white fs-12 hint-text m-l-5">
                                    278.87
                                  </span>
                                </p>
                                <p className="bold text-white no-margin fs-11 font-montserrat lh-normal">
                                  PAGES
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {refreshOne ? progress : null}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 m-b-10">
                  <div className="ar-2-1">
                    <GraphTitleWidget
                      progress={progress}
                      style={{ height: 250 }}
                    />
                  </div>
                </div>
                <div className="col-sm-6 m-b-10">
                  <div className="ar-2-1">
                    <div className="widget-5 card   widget-loader-bar">
                      <div className="card-header  pull-top top-right">
                        <div className="card-controls">
                          <ul>
                            <li>
                              <a
                                data-toggle="refresh"
                                className={`card-refresh ${
                                  refreshTwo ? "refreshing" : ""
                                } text-black`}
                                href="javascript:void(0);"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setRefreshTwo(true);
                                  setTimeout(() => {
                                    setRefreshTwo(false);
                                  }, 2000);
                                }}
                              >
                                <i
                                  className={`card-icon card-icon-refresh ${
                                    refreshTwo ? "fade" : ""
                                  }`}
                                ></i>
                                <i
                                  className={`card-icon-refresh-lg-white-animated ${
                                    refreshTwo ? "active" : ""
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
                      <div className="container-xs-height full-height">
                        <div className="row row-xs-height">
                          <div className="col-xs-5 col-xs-height col-middle relative">
                            <div className="padding-15 full-height d-flex flex-column justify-content-between">
                              <p className=" hint-text">Today's sales</p>
                              <div>
                                <h3 className="hint-text no-margin text-ellipsis">
                                  <sup>$</sup>9,534<sup>.58</sup>
                                </h3>
                                <p className="text-success text-ellipsis">
                                  +$423.5 (2.65%)
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-xs-7 col-xs-height col-bottom relative widget-5-chart-container">
                            <div className="widget-5-chart rickshaw_graph">
                              <SaleStackBar />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {refreshTwo ? progress : null}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xlg-4">
              <div className="row">
                <div className="col-sm-6 m-b-10">
                  <div className="ar-1-1">
                    <div className="widget-2 card  bg-primary widget widget-loader-circle-lg no-margin">
                      <div className="card-header ">
                        <div className="card-controls">
                          <ul>
                            <li>
                              <a
                                data-toggle="refresh"
                                className={`card-refresh ${
                                  refreshFifteen ? "refreshing" : ""
                                }`}
                                href="javascript:void(0);"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setRefreshFifteen(true);
                                  setTimeout(() => {
                                    setRefreshFifteen(false);
                                  }, 2000);
                                }}
                              >
                                <i
                                  className={`card-icon card-icon-refresh ${
                                    refreshFifteen ? "fade" : ""
                                  }`}
                                ></i>
                                <i
                                  className={`card-icon-refresh-lg-white-animated ${
                                    refreshFifteen ? "active" : ""
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
                        <div className="pull-bottom bottom-left bottom-right padding-25">
                          <span className="label font-montserrat fs-11">
                            NEWS
                          </span>
                          <br />
                          <h3 className="text-white">
                            So much more to see at a glance.
                          </h3>
                          <p className="text-white hint-text d-none d-lg-block d-xl-block d-none d-lg-block d-xl-block no-margin">
                            Learn More at Project Pages
                          </p>
                        </div>
                      </div>
                    </div>
                    {refreshFifteen ? progress : null}
                  </div>
                </div>
                <div className="col-sm-6 m-b-10">
                  <div className="ar-1-1">
                    <PlainLiveWidget />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 m-b-10">
                  <div className="ar-1-1">
                    <div className="card bg-contrast-medium widget widget-6 widget-loader-circle-lg no-margin">
                      <div className="card-header ">
                        <div className="card-controls">
                          <ul>
                            <li>
                              <a
                                data-toggle="refresh"
                                className={`card-refresh ${
                                  refreshThree ? "refreshing" : ""
                                }`}
                                href="javascript:void(0);"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setRefreshThree(true);
                                  setTimeout(() => {
                                    setRefreshThree(false);
                                  }, 2000);
                                }}
                              >
                                <i
                                  className={`card-icon card-icon-refresh ${
                                    refreshThree ? "fade" : ""
                                  }`}
                                ></i>
                                <i
                                  className={`card-icon-refresh-lg-white-animated ${
                                    refreshThree ? "active" : ""
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
                        <div className="pull-bottom bottom-left bottom-right padding-25">
                          <h1 className="semi-bold">30°</h1>
                          <span className="label font-montserrat fs-11">
                            TODAY
                          </span>
                          <p className="m-t-20">Feels like rainy</p>
                          <p className="hint-text m-t-30 no-margin">
                            January 2020, 5 Thusday{" "}
                          </p>
                        </div>
                        {refreshThree ? progress : null}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 m-b-10">
                  <div className="ar-1-1">
                    <GraphLiveWidget />
                  </div>
                </div>
              </div>
            </div>

            <div className="visible-xlg col-xlg-3">
              <div className="ar-2-3">
                <div className="widget-11 card   no-margin widget-loader-bar">
                  <div className="card-header">
                    <div className="card-title">Today's Table</div>
                    <div className="card-controls">
                      <ul>
                        <li>
                          <a
                            data-toggle="refresh"
                            className={`card-refresh ${
                              refreshFour ? "refreshing" : ""
                            }`}
                            href="javascript:void(0);"
                            onClick={(e) => {
                              e.preventDefault();
                              setRefreshFour(true);
                              setTimeout(() => {
                                setRefreshFour(false);
                              }, 2000);
                            }}
                          >
                            <i
                              className={`card-icon card-icon-refresh ${
                                refreshFour ? "fade" : ""
                              }`}
                            ></i>
                            <i
                              className={`card-icon-refresh-lg-white-animated ${
                                refreshFour ? "active" : ""
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
                  <div className="p-l-20 p-r-20 p-b-10 p-t-5">
                    <div className="pull-left">
                      <h3 className="text-primary no-margin">Pages</h3>
                    </div>
                    <h4 className="pull-right semi-bold no-margin">
                      <sup>
                        <small className="semi-bold">$</small>
                      </sup>{" "}
                      102,967
                    </h4>
                    <div className="clearfix"></div>
                  </div>
                  {refreshFour ? progress : null}
                  <div className="widget-11-table auto-overflow">
                    <table className="table table-condensed table-hover">
                      <tbody>
                        <tr>
                          <td className=" fs-12">Purchase CODE #2345</td>
                          <td className="text-right">
                            <span className="hint-text small">dewdrops</span>
                          </td>
                          <td className="text-right b-r b-dashed b-grey">
                            <span className="hint-text small">Qty 1</span>
                          </td>
                          <td>
                            <span className="font-montserrat fs-18">$27</span>
                          </td>
                        </tr>
                        <tr>
                          <td className=" fs-12">Purchase CODE #2345</td>
                          <td className="text-right">
                            <span className="hint-text small">johnsmith</span>
                          </td>
                          <td className="text-right b-r b-dashed b-grey">
                            <span className="hint-text small">Qty 1</span>
                          </td>
                          <td>
                            <span className="font-montserrat fs-18 text-primary">
                              $1000
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className=" fs-12">Purchase CODE #2345</td>
                          <td className="text-right">
                            <span className="hint-text small">janedrooler</span>
                          </td>
                          <td className="text-right b-r b-dashed b-grey">
                            <span className="hint-text small">Qty 1</span>
                          </td>
                          <td>
                            <span className="font-montserrat fs-18">$27</span>
                          </td>
                        </tr>
                        <tr>
                          <td className=" fs-12">Purchase CODE #2345</td>
                          <td className="text-right">
                            <span className="hint-text small">johnsmith</span>
                          </td>
                          <td className="text-right b-r b-dashed b-grey">
                            <span className="hint-text small">Qty 1</span>
                          </td>
                          <td>
                            <span className="font-montserrat fs-18 text-primary">
                              $1000
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className=" fs-12">Purchase CODE #2345</td>
                          <td className="text-right">
                            <span className="hint-text small">dewdrops</span>
                          </td>
                          <td className="text-right b-r b-dashed b-grey">
                            <span className="hint-text small">Qty 1</span>
                          </td>
                          <td>
                            <span className="font-montserrat fs-18">$27</span>
                          </td>
                        </tr>
                        <tr>
                          <td className=" fs-12">Purchase CODE #2345</td>
                          <td className="text-right">
                            <span className="hint-text small">johnsmith</span>
                          </td>
                          <td className="text-right b-r b-dashed b-grey">
                            <span className="hint-text small">Qty 1</span>
                          </td>
                          <td>
                            <span className="font-montserrat fs-18 text-primary">
                              $1000
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className=" fs-12">Purchase CODE #2345</td>
                          <td className="text-right">
                            <span className="hint-text small">dewdrops</span>
                          </td>
                          <td className="text-right b-r b-dashed b-grey">
                            <span className="hint-text small">Qty 1</span>
                          </td>
                          <td>
                            <span className="font-montserrat fs-18">$27</span>
                          </td>
                        </tr>
                        <tr>
                          <td className=" fs-12">Purchase CODE #2345</td>
                          <td className="text-right">
                            <span className="hint-text small">johnsmith</span>
                          </td>
                          <td className="text-right b-r b-dashed b-grey">
                            <span className="hint-text small">Qty 1</span>
                          </td>
                          <td>
                            <span className="font-montserrat fs-18 text-primary">
                              $1000
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className=" fs-12">Purchase CODE #2345</td>
                          <td className="text-right">
                            <span className="hint-text small">dewdrops</span>
                          </td>
                          <td className="text-right b-r b-dashed b-grey">
                            <span className="hint-text small">Qty 1</span>
                          </td>
                          <td>
                            <span className="font-montserrat fs-18">$27</span>
                          </td>
                        </tr>
                        <tr>
                          <td className=" fs-12">Purchase CODE #2345</td>
                          <td className="text-right">
                            <span className="hint-text small">johnsmith</span>
                          </td>
                          <td className="text-right b-r b-dashed b-grey">
                            <span className="hint-text small">Qty 1</span>
                          </td>
                          <td>
                            <span className="font-montserrat fs-18 text-primary">
                              $1000
                            </span>
                          </td>
                        </tr>

                        <tr>
                          <td className=" fs-12">Purchase CODE #2345</td>
                          <td className="text-right">
                            <span className="hint-text small">johnsmith</span>
                          </td>
                          <td className="text-right b-r b-dashed b-grey">
                            <span className="hint-text small">Qty 1</span>
                          </td>
                          <td>
                            <span className="font-montserrat fs-18 text-primary">
                              $1000
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className=" fs-12">Purchase CODE #2345</td>
                          <td className="text-right">
                            <span className="hint-text small">dewdrops</span>
                          </td>
                          <td className="text-right b-r b-dashed b-grey">
                            <span className="hint-text small">Qty 1</span>
                          </td>
                          <td>
                            <span className="font-montserrat fs-18">$27</span>
                          </td>
                        </tr>
                        <tr>
                          <td className=" fs-12">Purchase CODE #2345</td>
                          <td className="text-right">
                            <span className="hint-text small">johnsmith</span>
                          </td>
                          <td className="text-right b-r b-dashed b-grey">
                            <span className="hint-text small">Qty 1</span>
                          </td>
                          <td>
                            <span className="font-montserrat fs-18 text-primary">
                              $1000
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className=" fs-12">Purchase CODE #2345</td>
                          <td className="text-right">
                            <span className="hint-text small">dewdrops</span>
                          </td>
                          <td className="text-right b-r b-dashed b-grey">
                            <span className="hint-text small">Qty 1</span>
                          </td>
                          <td>
                            <span className="font-montserrat fs-18">$27</span>
                          </td>
                        </tr>
                        <tr>
                          <td className=" fs-12">Purchase CODE #2345</td>
                          <td className="text-right">
                            <span className="hint-text small">johnsmith</span>
                          </td>
                          <td className="text-right b-r b-dashed b-grey">
                            <span className="hint-text small">Qty 1</span>
                          </td>
                          <td>
                            <span className="font-montserrat fs-18 text-primary">
                              $1000
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="p-t-15 p-b-15 p-l-20 p-r-20">
                    <p className="small no-margin">
                      <a
                        href="javascript:void(0);"
                        className="btn-circle-arrow b-grey"
                      >
                        <i className="pg-icon">chevron_down</i>
                      </a>
                      <span className="hint-text ">
                        Show more details of{" "}
                        <a href="javascript:void(0);"> Revox pvt ltd </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-xl-3 col-xlg-2 ">
              <div className="row">
                <div className="col-md-12 m-b-10">
                  <div className="widget-8 card  bg-success no-margin widget-loader-bar">
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
                            data-point-color="success"
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
                                    width="181"
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
                                          <rect width="181" height="103"></rect>
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
                                                  width="181"
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
                <div className="col-md-12 m-b-10">
                  <div className="widget-9 card  bg-primary no-margin widget-loader-bar">
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
                        <div className="col-sm-12">
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
            <div className="col-lg-8 col-xl-5 col-xlg-6 m-b-10">
              <div className="row">
                <div className="col-md-12">
                  <div className="widget-12 card  widget-loader-circle no-margin">
                    <div className="row">
                      <div className="col-xlg-8 ">
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
                        <div className="col-xlg-8 col-lg-12">
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
                              className="nvd3-line line-chart text-center m-b-20"
                              data-x-grid="false"
                              style={{ height: "310px" }}
                            >
                              {/* START SVG GOES HERE */}
                              <GraphWidget />
                              {/* END SVG GOES HERE */}
                            </div>
                          </div>
                        </div>
                        <div className="col-xlg-4 visible-xlg p-l-15">
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
            <div className="col-lg-6 col-xl-4 m-b-10 hidden-xlg">
              <div className="widget-11-2 card  no-margin widget-loader-circle full-height d-flex flex-column">
                <div className="card-header">
                  <div className="card-title">Today's Table</div>
                  <div className="card-controls">
                    <ul>
                      <li>
                        <a
                          data-toggle="refresh"
                          className={`card-refresh ${
                            refreshFive ? "refreshing" : ""
                          }`}
                          href="javascript:void(0);"
                          onClick={(e) => {
                            e.preventDefault();
                            setRefreshFive(true);
                            setTimeout(() => {
                              setRefreshFive(false);
                            }, 2000);
                          }}
                        >
                          <i
                            className={`card-icon card-icon-refresh ${
                              refreshFive ? "fade" : ""
                            }`}
                          ></i>
                          <i
                            className={`card-icon-refresh-lg-white-animated ${
                              refreshFive ? "active" : ""
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
                <div className="p-l-20 p-r-20 p-b-10 p-t-5">
                  <div className="pull-left">
                    <h3 className="text-primary no-margin">Pages</h3>
                  </div>
                  <h4 className="pull-right semi-bold no-margin">
                    <sup>
                      <small className="semi-bold">$</small>
                    </sup>{" "}
                    102,967
                  </h4>
                  <div className="clearfix"></div>
                </div>
                <div className="widget-11-table auto-overflow">
                  <table className="table table-condensed table-hover">
                    <tbody>
                      <tr>
                        <td className="fs-12 w-50">
                          Purchase Pages Extended #2502
                        </td>
                        <td className="text-right b-r b-dashed b-grey w-25">
                          <span className="hint-text small">Qty 1</span>
                        </td>
                        <td className="w-25">
                          <span className="font-montserrat fs-18">$1000</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="fs-12 w-50">
                          Purchase Pages Support #2325
                        </td>
                        <td className="text-right b-r b-dashed b-grey w-25">
                          <span className="hint-text small">Qty 1</span>
                        </td>
                        <td className="w-25">
                          <span className="font-montserrat fs-18">$12</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="fs-12 w-50">Purchase CODE #2345</td>
                        <td className="text-right b-r b-dashed b-grey w-25">
                          <span className="hint-text small">Qty 1</span>
                        </td>
                        <td className="w-25">
                          <span className="font-montserrat fs-18">$27</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="fs-12 w-50">Purchase CODE #2345</td>
                        <td className="text-right b-r b-dashed b-grey w-25">
                          <span className="hint-text small">Qty 1</span>
                        </td>
                        <td className="w-25">
                          <span className="font-montserrat fs-18">$27</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="fs-12 w-50">
                          Purchase Pages Support #2325
                        </td>
                        <td className="text-right b-r b-dashed b-grey w-25">
                          <span className="hint-text small">Qty 1</span>
                        </td>
                        <td className="w-25">
                          <span className="font-montserrat fs-18">$12</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="fs-12 w-50">
                          Purchase Pages Extended #2502
                        </td>
                        <td className="text-right b-r b-dashed b-grey w-25">
                          <span className="hint-text small">Qty 1</span>
                        </td>
                        <td className="w-25">
                          <span className="font-montserrat fs-18">$1000</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="fs-12 w-50">
                          Purchase Pages Extended #2502
                        </td>
                        <td className="text-right b-r b-dashed b-grey w-25">
                          <span className="hint-text small">Qty 1</span>
                        </td>
                        <td className="w-25">
                          <span className="font-montserrat fs-18">$1000</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-t-15 p-b-15 p-l-20 p-r-20 mt-auto">
                  <p className="small no-margin">
                    <a
                      href="javascript:void(0);"
                      className="btn-circle-arrow b-grey"
                    >
                      <i className="pg-icon">chevron_down</i>
                    </a>
                    <span className="hint-text ">
                      Show more details of{" "}
                      <a href="javascript:void(0);"> Revox pvt ltd </a>
                    </span>
                  </p>
                </div>
              </div>
              {refreshFive ? progress : null}
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
                              color={["#0F8EFA", "#F4F4F4"]}
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
                        className="bg-success widget-13-map mapplic-element"
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
                    <div
                      className="col-xs-height relative bg-contrast-lowest"
                      style={{ height: 200 }}
                    >
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
                <div className="tab-content p-l-10 p-r-10 p-b-20 p-t-20">
                  <div
                    className="tab-pane no-padding active"
                    id="widget-15-2-tab-1"
                  >
                    <BarDoubleWidget
                      style={{
                        height: "300px",
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
                <div className="p-t-0 p-l-20 p-r-20 ">
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
            <div className="col-md-4 col-lg-3 col-xlg-3 m-b-10">
              <div className="widget-16 card   no-margin widget-loader-circle">
                <div className="card-header ">
                  <div className="card-title">Page Options</div>
                  <div className="card-controls">
                    <ul>
                      <li>
                        <a
                          data-toggle="refresh"
                          className={`card-refresh ${
                            refreshEleven ? "refreshing" : ""
                          } text-black`}
                          href="javascript:void(0);"
                          onClick={(e) => {
                            e.preventDefault();
                            setRefreshEleven(true);
                            setTimeout(() => {
                              setRefreshEleven(false);
                            }, 2000);
                          }}
                        >
                          <i
                            className={`card-icon card-icon-refresh ${
                              refreshEleven ? "fade" : ""
                            }`}
                          ></i>
                          <i
                            className={`card-icon-refresh-lg-white-animated ${
                              refreshEleven ? "active" : ""
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
                <div className="widget-16-header p-r-20 p-l-20 p-t-10 d-flex">
                  <span className="icon-thumbnail bg-contrast-low pull-left text-color pg-icon">
                    ws
                  </span>
                  <div className="flex-1 full-width overflow-ellipsis">
                    <p className="hint-text all-caps font-montserrat  small no-margin overflow-ellipsis ">
                      Pages name
                    </p>
                    <h6 className="no-margin overflow-ellipsis ">
                      Webarch Sales Analysis
                    </h6>
                  </div>
                </div>
                <div className="p-l-20 p-r-45 p-t-25 p-b-10">
                  <ul className="list-inline no-margin">
                    <li className="p-r-25">
                      <p className="hint-text all-caps font-montserrat small no-margin ">
                        Views
                      </p>
                      <p className="all-caps font-montserrat  no-margin text-success ">
                        14,256
                      </p>
                    </li>
                    <li className="p-r-25">
                      <p className="hint-text all-caps font-montserrat small no-margin ">
                        Today
                      </p>
                      <p className="all-caps font-montserrat  no-margin text-warning ">
                        24
                      </p>
                    </li>
                    <li className="p-r-25">
                      <p className="hint-text all-caps font-montserrat small no-margin ">
                        Week
                      </p>
                      <p className="all-caps font-montserrat  no-margin text-success ">
                        56
                      </p>
                    </li>
                  </ul>
                </div>
                <div
                  className="relative no-overflow"
                  style={{ height: "155px" }}
                >
                  <LineAreaGraphWidget />
                </div>
                <div className="b-b b-t b-grey p-l-20 p-r-20 p-b-15 p-t-15">
                  <div className="form-check switch switch-lg success full-width right d-flex m-b-0">
                    <input type="checkbox" id="pagesSwitch1" />
                    <label htmlFor="pagesSwitch1" className="full-width">
                      Post is Public
                    </label>
                  </div>
                </div>
                <div className="b-b b-grey p-l-20 p-r-20 p-b-15 p-t-15">
                  <div className="form-check switch switch-lg success full-width right d-flex m-b-0">
                    <input
                      type="checkbox"
                      id="pagesSwitch2"
                      checked={checkedOption}
                      onChange={() =>
                        setCheckedOption((prevState) => !prevState)
                      }
                    />
                    <label htmlFor="pagesSwitch2" className="full-width">
                      Maintenance mode
                    </label>
                  </div>
                  <div className="clearfix"></div>
                </div>
                <div className="p-l-20 p-r-20 p-t-10 p-b-10 ">
                  <p className="pull-left no-margin hint-text">
                    Super secret options
                  </p>
                  <a
                    href="javascript:void(0);"
                    className="btn-circle-arrow b-grey pull-right"
                  >
                    <i className="pg-icon">chevron_down</i>
                  </a>
                  <div className="clearfix"></div>
                </div>
              </div>
              {refreshEleven ? progress : null}
            </div>
            <div className="col-xlg-2 visible-xlg ">
              <div className="widget-18 card   no-margin ">
                <div className="padding-15">
                  <div className="item-header clearfix">
                    <div className="thumbnail-wrapper d32 circular">
                      <img
                        width="40"
                        height="40"
                        src="../assets/img/profiles/3x.jpg"
                        data-src="../assets/img/profiles/3.jpg"
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
                            src="../assets/img/profiles/3x.jpg"
                            data-src="../assets/img/profiles/3.jpg"
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
                          src="../assets/img/social-post-image.png"
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
            <div className="col-md-8 col-lg-5 col-xlg-5">
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
                  <div className="p-l-5">
                    <div className="row">
                      <div className="col-lg-12 col-xlg-6">
                        <div className="row m-t-10">
                          <div className="col-lg-5">
                            <h4 className="no-margin">Monday</h4>
                            <p className="small hint-text">9th August 2020</p>
                          </div>
                          <div className="col-lg-7">
                            <div className="d-flex justify-content-end">
                              <Skycons
                                color="black"
                                icon="CLEAR_DAY"
                                style={{
                                  width: "30%",
                                  height: "auto",
                                  marginRight: "-22px",
                                }}
                              />
                              <h2 className="text-danger bold no-margin p-l-10">
                                32°
                              </h2>
                            </div>
                          </div>
                        </div>
                        <div className="m-t-25 p-b-10">
                          <p className="pull-left no-margin hint-text">
                            Weather information
                          </p>
                          <a
                            href="javascript:void(0);"
                            className="btn-icon-link d-flex pull-right"
                          >
                            <i className="pg-icon">more_horizontal</i>
                          </a>
                          <div className="clearfix"></div>
                        </div>
                        <div className="widget-17-weather b-t b-grey p-t-20">
                          <div className="weather-info row">
                            <div className="col-6 p-r-15">
                              <div className="row">
                                <div className="col-lg-12">
                                  <p className="pull-left no-margin hint-text fs-13">
                                    Wind
                                  </p>
                                  <p className="pull-right no-margin fs-13">
                                    11km/h
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-12">
                                  <p className="pull-left no-margin hint-text fs-13">
                                    Sunrise
                                  </p>
                                  <p className="pull-right no-margin fs-13">
                                    05:20
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-12">
                                  <p className="pull-left no-margin hint-text fs-13">
                                    Humidity
                                  </p>
                                  <p className="pull-right no-margin fs-13">
                                    20%
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-12">
                                  <p className="pull-left no-margin hint-text fs-13">
                                    Precipitation
                                  </p>
                                  <p className="pull-right no-margin fs-13">
                                    60%
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-6 p-l-15">
                              <div className="row">
                                <div className="col-lg-12">
                                  <p className="pull-left no-margin hint-text fs-13">
                                    Sunset
                                  </p>
                                  <p className="pull-right no-margin fs-13">
                                    21:05
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-12">
                                  <p className="pull-left no-margin hint-text fs-13">
                                    Visibility
                                  </p>
                                  <p className="pull-right no-margin fs-13">
                                    21km
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row m-t-20 timeslot">
                          <div className="col-2 p-t-10 text-center b-r b-dashed b-grey">
                            <p className="small">13:30</p>
                            <Skycons
                              color="black"
                              icon="PARTLY_CLOUDY_DAY"
                              style={{ width: "75%", height: "auto" }}
                            />
                            <p className="text-danger bold">30°C</p>
                          </div>
                          <div className="col-2 p-t-10 text-center b-r b-dashed b-grey">
                            <p className="small">14:00</p>
                            <Skycons
                              color="black"
                              icon="CLOUDY"
                              style={{ width: "75%", height: "auto" }}
                            />
                            <p className="text-danger bold">30°C</p>
                          </div>
                          <div className="col-2 p-t-10 text-center b-r b-dashed b-grey">
                            <p className="small">14:30</p>
                            <Skycons
                              color="black"
                              icon="RAIN"
                              style={{ width: "75%", height: "auto" }}
                            />
                            <p className="text-danger bold">30°C</p>
                          </div>
                          <div className="col-2 p-t-10 text-center b-r b-dashed b-grey">
                            <p className="small">15:00</p>
                            <Skycons
                              color="black"
                              icon="SLEET"
                              style={{ width: "75%", height: "auto" }}
                            />
                            <p className="text-success bold">27°C</p>
                          </div>
                          <div className="col-2 p-t-10 text-center b-r b-dashed b-grey">
                            <p className="small">15:30</p>
                            <Skycons
                              color="black"
                              icon="SNOW"
                              style={{ width: "75%", height: "auto" }}
                            />
                            <p className="text-success bold">16°C</p>
                          </div>
                          <div className="col-2 p-t-10 text-center">
                            <p className="small">16:00</p>
                            <Skycons
                              color="black"
                              icon="WIND"
                              style={{ width: "75%", height: "auto" }}
                            />
                            <p className="text-success bold">21°C</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xlg-6 visible-xlg p-l-20">
                        <div className="row">
                          <div className="forecast-day col-lg-6 text-center m-t-10 ">
                            <div className="bg-contrast-lowest p-b-10 p-t-10">
                              <h5 className="p-t-10 no-margin">Tuesday</h5>
                              <p className="small hint-text m-b-20">
                                11th Augest 2020
                              </p>
                              <Skycons
                                color="black"
                                icon="RAIN"
                                style={{ width: "75%", height: "auto" }}
                              />
                              <h5 className="text-success">29°</h5>
                              <p>Feels like rainy </p>
                              <p className="small hint-text ">
                                Wind
                                <span className="f-13 p-l-20">11km/h</span>
                              </p>
                              <div className="m-t-20 block">
                                <div className="padding-10">
                                  <div className="row">
                                    <div className="col-lg-6 text-center">
                                      <p className="hint-text small">Noon</p>
                                      <Skycons
                                        color="black"
                                        icon="SLEET"
                                        style={{ width: "75%", height: "auto" }}
                                      />
                                      <p className="text-danger bold">30°C</p>
                                    </div>
                                    <div className="col-lg-6 text-center">
                                      <p className="hint-text small">Night</p>
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
                          <div className="col-lg-6 text-center m-t-10 m-t-10 b-l b-grey b-dashed">
                            <div className="bg-contrast-lowest p-b-10 p-t-10">
                              <h5 className="p-t-10 no-margin">Wednesday</h5>
                              <p className="small hint-text m-b-20">
                                11th Augest 2020
                              </p>
                              <Skycons
                                color="black"
                                icon="PARTLY_CLOUDY_DAY"
                                style={{ width: "75%", height: "auto" }}
                              />
                              <h5 className="text-danger">32°</h5>
                              <p>Feels like cloudy </p>
                              <p className="hint-text small">
                                Wind
                                <span className="f-13 p-l-20">11km/h</span>
                              </p>
                              <div className="m-t-20 block">
                                <div className="padding-10">
                                  <div className="row">
                                    <div className="col-lg-6 text-center">
                                      <p className="hint-text small">Noon</p>
                                      <Skycons
                                        color="black"
                                        icon="PARTLY_CLOUDY_DAY"
                                        style={{ width: "75%", height: "auto" }}
                                      />
                                      <p className="text-danger bold">30°C</p>
                                    </div>
                                    <div className="col-lg-6 text-center">
                                      <p className="hint-text small">Night</p>
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
