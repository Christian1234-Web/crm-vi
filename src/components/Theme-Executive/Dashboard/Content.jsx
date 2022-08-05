import React, { useState } from "react";

// import footer component
import Copyright from "../../ui/Footer/Copyright/Component";

//import ui widgets component
import GraphWidget from "../../ui/widget/GraphWidget/Component";

//image imports
import avatar from "../../../assets/img/profiles/avatar.jpg";
import plusSVG from "../../../assets/img/plus.svg";

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

  const [refreshEight, setRefreshEight] = useState(false);
  const [refreshNine, setRefreshNine] = useState(false);

  return (
    <div className="page-content-wrapper ">
      {/* START PAGE CONTENT */}
      <div className="content sm-gutter p-t-60">
        <div data-pages="parallax m-t-50">
          <div className=" container no-padding container-fixed-lg ">
            <div
              className="inner"
              style={{ transform: "translateY(0px)", opacity: 1 }}
            >
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="javascript:void(0);">Home</a>
                </li>
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="container no-padding  sm-padding-10">
          <div className="row">
            <div className="col-lg-3 col-sm-6 d-flex flex-column">
              <div className="card social-card share  full-width m-b-10 no-border">
                <div className="card-header ">
                  <h5 className="text-complete pull-left fs-12">
                    News <i className="fa fa-circle text-complete fs-11"></i>
                  </h5>
                  <div className="pull-right small hint-text">
                    5,345 <i className="fa fa-comment-o"></i>
                  </div>
                  <div className="clearfix"></div>
                </div>
                <div className="card-description">
                  <h3>
                    Ebola outbreak: Clinical drug trials to start next month as
                    death toll mounts
                  </h3>
                </div>
                <div className="card-footer clearfix">
                  <div className="pull-left">
                    via <span className="text-complete">CNN</span>
                  </div>
                  <div className="pull-right hint-text">Apr 23</div>
                  <div className="clearfix"></div>
                </div>
              </div>
              <div className="card no-border widget-loader-bar m-b-10">
                <div className="container-xs-height full-height">
                  <div className="row-xs-height">
                    <div className="col-xs-height col-top">
                      <div className="card-header  top-left top-right">
                        <div className="card-title">
                          <span className="font-montserrat fs-11 all-caps">
                            Weekly Sales <i className="fa fa-chevron-right"></i>
                          </span>
                        </div>
                        <div className="card-controls">
                          <ul>
                            <li>
                              <a
                                href="javascript:void(0);"
                                className="portlet-refresh text-black"
                                data-toggle="refresh"
                              >
                                <i className="portlet-icon portlet-icon-refresh"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row-xs-height">
                    <div className="col-xs-height col-top">
                      <div className="p-l-20 p-t-50 p-b-40 p-r-20">
                        <h3 className="no-margin p-b-5">$24,000</h3>
                        <span className="small hint-text pull-left">
                          71% of total goal
                        </span>
                        <span className="pull-right small text-primary">
                          $23,000
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row-xs-height">
                    <div className="col-xs-height col-bottom">
                      <div className="progress progress-small m-b-0">
                        <div
                          className="progress-bar progress-bar-primary"
                          style={{ width: "71%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card no-border widget-loader-bar m-b-10">
                <div className="container-xs-height full-height">
                  <div className="row-xs-height">
                    <div className="col-xs-height col-top">
                      <div className="card-header  top-left top-right">
                        <div className="card-title">
                          <span className="font-montserrat fs-11 all-caps">
                            Page Visits <i className="fa fa-chevron-right"></i>
                          </span>
                        </div>
                        <div className="card-controls">
                          <ul>
                            <li>
                              <a
                                href="javascript:void(0);"
                                className="portlet-refresh text-black"
                                data-toggle="refresh"
                              >
                                <i className="portlet-icon portlet-icon-refresh"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row-xs-height">
                    <div className="col-xs-height col-top">
                      <div className="p-l-20 p-t-50 p-b-40 p-r-20">
                        <h3 className="no-margin p-b-5">423</h3>
                        <span className="small hint-text pull-left">
                          22% higher
                        </span>
                        <span className="pull-right small text-danger">
                          $23,000
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row-xs-height">
                    <div className="col-xs-height col-bottom">
                      <div className="progress progress-small m-b-0">
                        <div
                          className="progress-bar progress-bar-danger"
                          style={{ width: "15%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 d-flex flex-column">
              <div
                className="card social-card share  full-width m-b-10 no-border"
                data-social="item"
              >
                <div className="card-header clearfix">
                  <h5 className="text-success pull-left fs-12">
                    Stock Market{" "}
                    <i className="fa fa-circle text-success fs-11"></i>
                  </h5>
                  <div className="pull-right small hint-text">
                    5,345 <i className="fa fa-comment-o"></i>
                  </div>
                  <div className="clearfix"></div>
                </div>
                <div className="card-description">
                  <h5 className="no-margin">Apple Inc.</h5>
                  <h5 className="small hint-text no-margin">
                    NASDAQ: AAPL - Nov 13 8:37 AM ET
                  </h5>
                  <h3 className="m-b-0">
                    111.25{" "}
                    <span className="text-success">
                      <i className="fa fa-sort-up small text-success"></i> 0.15
                    </span>
                  </h3>
                </div>
                <div className="card-footer clearfix">
                  <div className="pull-left">
                    by <span className="text-success">John Smith</span>
                  </div>
                  <div className="pull-right hint-text">Apr 23</div>
                  <div className="clearfix"></div>
                </div>
              </div>

              <div
                className="card social-card share share-other full-width m-b-10 d-flex flex-1 full-height no-border sm-vh-75"
                data-social="item"
              >
                <div
                  className="circle"
                  data-toggle="tooltip"
                  title=""
                  data-container="body"
                  data-original-title="Label"
                ></div>
                <div
                  className="card-content flex-1 "
                  data-src-retina={
                    process.env.PUBLIC_URL +
                    "/assets/img/profiles/avatar_small2x.jpg"
                  }
                  data-src={
                    process.env.PUBLIC_URL + "/assets/img/profiles/avatar.jpg"
                  }
                  style={{
                    backgroundImage:
                      "url(" +
                      process.env.PUBLIC_URL +
                      "/assets/img/dashboard/pages_hero.jpg)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <ul className="buttons ">
                    <li>
                      <a href="javascript:void(0);">
                        <i className="fa fa-expand"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <i className="fa fa-heart-o"></i>
                      </a>
                    </li>
                  </ul>
                  <div className="bg-overlay" style={{ opacity: 0 }}></div>
                </div>
                <div className="card-description">
                  <p>
                    <a href="javascript:void(0);">#TBT</a> :D
                  </p>
                </div>
                <div className="card-footer clearfix">
                  <div className="time">few seconds ago</div>
                  <ul className="reactions">
                    <li>
                      <a href="javascript:void(0);">
                        5,345 <i className="fa fa-comment-o"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        23K <i className="fa fa-heart-o"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-header clearfix">
                  <div className="user-pic">
                    <img alt="Avatar" width="33" height="33" src={avatar} />
                  </div>
                  <h5>David Nester</h5>
                  <h6>Shared a link on your wall</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-6 m-b-10 d-flex flex-column">
              <div className="widget-12 card no-border widget-loader-circle no-margin col ar-1-1 sm-vh-75">
                <div className="row">
                  <div className="col-xlg-8 ">
                    <div className="card-header pull-up top-right ">
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
                                <i className="portlet-icon portlet-icon-settings"></i>
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
                              className="portlet-refresh text-black"
                              href="javascript:void(0);"
                            >
                              <i className="portlet-icon portlet-icon-refresh"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body d-flex flex-column">
                  <div className="">
                    <div className="d-flex flex-row">
                      <h2 className="m-t-5 m-b-5">Apple Inc.</h2>
                      <h2 className="m-l-50 m-t-5 m-b-5 text-danger">
                        <span className="">448.97</span>
                        <span className="text-danger fs-12">-318.24</span>
                      </h2>
                    </div>
                    <div className="full-width">
                      <ul className="list-inline m-b-0">
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="font-montserrat text-color"
                          >
                            1D
                          </a>
                        </li>
                        <li className="active">
                          <a
                            href="javascript:void(0);"
                            className="font-montserrat  bg-master-light text-color"
                          >
                            5D
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="font-montserrat text-color"
                          >
                            1M
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="font-montserrat text-color"
                          >
                            1Y
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="nvd3-line line-chart text-center flex-1 relative"
                    data-x-grid="false"
                  >
                    {" "}
                    <GraphWidget specifiedHeight={470} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row m-b-30">
            <div className="col-lg-7">
              <div className="row md-m-b-10">
                <div className="col-sm-6">
                  <div className=" card   no-margin widget-loader-circle todolist-widget pending-projects-widget">
                    <div className="card-header ">
                      <div className="card-title">
                        <span className="d-flex align-items-center font-montserrat all-caps">
                          Recent projects{" "}
                          <i className="pg-icon">chevron_right</i>
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
                    <div className="card-body">
                      <h5 className="">
                        Ongoing projects at{" "}
                        <span className="semi-bold">pages</span>
                      </h5>
                      <ul
                        className="nav nav-tabs nav-tabs-simple m-b-20"
                        role="tablist"
                        data-init-reponsive-tabs="collapse"
                      >
                        <li className="nav-item">
                          <a
                            href="#pending"
                            className="active"
                            data-toggle="tab"
                            role="tab"
                            aria-expanded="true"
                          >
                            Pending
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#completed"
                            data-toggle="tab"
                            role="tab"
                            aria-expanded="false"
                          >
                            Completed
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content no-padding">
                        <div className="tab-pane active" id="pending">
                          <div className="p-t-10">
                            <div className="d-flex">
                              <span className="icon-thumbnail bg-contrast-low pull-left">
                                kp
                              </span>
                              <div className="flex-1 full-width overflow-ellipsis">
                                <p className="hint-text all-caps font-montserrat fs-11 no-margin overflow-ellipsis ">
                                  Revox Ltd
                                </p>
                                <h5 className="no-margin overflow-ellipsis ">
                                  Kepler - wordpress builder
                                </h5>
                              </div>
                            </div>
                            <div className="m-t-15">
                              <p className="hint-text small pull-left no-margin">
                                71% completed from total
                              </p>
                              <a
                                href="javascript:void(0);"
                                className="pull-right "
                              >
                                <i className="pg-icon">more_horizontal</i>
                              </a>
                              <div className="clearfix"></div>
                            </div>
                            <div className="progress progress-small m-b-15 m-t-10">
                              <div
                                className="progress-bar progress-bar-info"
                                style={{ width: "71%" }}
                              ></div>
                            </div>
                          </div>
                          <div className="p-t-15">
                            <div className="d-flex">
                              <span className="icon-thumbnail bg-warning-light pull-left ">
                                cr
                              </span>
                              <div className="flex-1 full-width overflow-ellipsis">
                                <p className="hint-text all-caps font-montserrat fs-11 no-margin overflow-ellipsis ">
                                  Nike Ltd
                                </p>
                                <h5 className="no-margin overflow-ellipsis ">
                                  Corporate rebranding
                                </h5>
                              </div>
                            </div>
                            <div className="m-t-15">
                              <p className="hint-text small pull-left no-margin">
                                20% completed from total
                              </p>
                              <a
                                href="javascript:void(0);"
                                className="pull-right "
                              >
                                <i className="pg-icon">more_horizontal</i>
                              </a>
                              <div className="clearfix"></div>
                            </div>
                            <div className="progress progress-small m-b-15 m-t-10">
                              <div
                                className="progress-bar progress-bar-warning"
                                style={{ width: "20%" }}
                              ></div>
                            </div>
                          </div>
                          <a
                            href="javascript:void(0);"
                            className="btn btn-block m-t-30"
                          >
                            See all projects
                          </a>
                        </div>
                        <div className="tab-pane" id="completed">
                          <div className="p-t-10">
                            <div className="d-flex">
                              <span className="icon-thumbnail bg-contrast-higher pull-left ">
                                ws
                              </span>
                              <div className="flex-1 full-width overflow-ellipsis">
                                <p className="hint-text all-caps font-montserrat fs-11 no-margin overflow-ellipsis ">
                                  Apple Corp
                                </p>
                                <h5 className="no-margin overflow-ellipsis ">
                                  Marketing Campaign for revox
                                </h5>
                              </div>
                              <div className="clearfix"></div>
                            </div>
                            <div className="m-t-15">
                              <p className="hint-text  small pull-left no-margin">
                                45% completed from total
                              </p>
                              <a
                                href="javascript:void(0);"
                                className="pull-right "
                              >
                                <i className="pg-icon">more_horizontal</i>
                              </a>
                              <div className="clearfix"></div>
                            </div>
                            <div className="progress progress-small m-b-15 m-t-10">
                              <div
                                className="progress-bar progress-bar-info"
                                style={{ width: "45%" }}
                              ></div>
                            </div>
                          </div>
                          <div className="p-t-15">
                            <div className="d-flex">
                              <span className="icon-thumbnail bg-primary-light pull-left ">
                                cr
                              </span>
                              <div className="flex-1 full-width overflow-ellipsis">
                                <p className="hint-text all-caps font-montserrat fs-11 no-margin overflow-ellipsis ">
                                  Yahoo Inc
                                </p>
                                <h5 className="no-margin overflow-ellipsis ">
                                  Corporate rebranding
                                </h5>
                              </div>
                              <div className="clearfix"></div>
                            </div>
                            <div className="m-t-15">
                              <p className="hint-text  small pull-left no-margin">
                                20% completed from total
                              </p>
                              <a
                                href="javascript:void(0);"
                                className="pull-right "
                              >
                                <i className="pg-icon">more_horizontal</i>
                              </a>
                              <div className="clearfix"></div>
                            </div>
                            <div className="progress progress-small m-b-15 m-t-10">
                              <div
                                className="progress-bar progress-bar-warning"
                                style={{ width: "20%" }}
                              ></div>
                            </div>
                          </div>
                          <a
                            href="javascript:void(0);"
                            className="btn btn-block m-t-30"
                          >
                            See all projects
                          </a>
                        </div>
                      </div>
                      {refreshEight ? progress : null}
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 sm-m-t-10 d-flex align-items-stretch">
                  <div className=" card no-border  no-margin widget-loader-circle todolist-widget align-self-stretch">
                    <div className="card-header">
                      <div className="card-title">TODOLIST</div>
                      <div className="card-controls">
                        <ul>
                          <li>
                            <a
                              href="javascript:void(0);"
                              className="portlet-refresh text-black"
                              data-toggle="refresh"
                            >
                              <i className="portlet-icon portlet-icon-refresh"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <ul className="list-unstyled p-l-20 p-r-20 p-t-10 m-b-20">
                      <li>
                        <h5 className="pull-left normal no-margin">
                          28th September
                        </h5>
                        {/* <a
													href="javascript:void(0);"
													className="text-black pull-right m-l-5"
													data-toggle="refresh"
												>
													<i className="fa fa-angle-right"></i>
												</a>
												<a
													href="javascript:void(0);"
													className="text-black pull-right m-r-5"
													data-toggle="refresh"
												>
													<i className="fa fa-angle-left"></i>
												</a> */}
                      </li>
                      <div className="clearfix"></div>
                    </ul>
                    <div className="task-list p-t-0 p-r-20 p-b-20 p-l-20 clearfix flex-1">
                      <div className="task clearfix row completed">
                        <div className="task-list-title col-10 justify-content-between">
                          <a
                            href="javascript:void(0);"
                            className="text-color strikethrough"
                            data-task="name"
                          >
                            Purchase Pages before 10am
                          </a>
                          <i className="fs-14 pg-close hidden"></i>
                        </div>
                        <div className="form-check checkbox-circle no-margin text-center col-2 d-flex justify-content-center align-items-center">
                          <input
                            type="checkbox"
                            checked="checked"
                            value="1"
                            id="todocheckbox"
                            data-toggler="task"
                            className="hidden"
                          />
                          <label
                            htmlFor="todocheckbox"
                            className=" no-margin no-padding absolute"
                          ></label>
                        </div>
                      </div>

                      <div className="task clearfix row">
                        <div className="task-list-title col-10 justify-content-between">
                          <a
                            href="javascript:void(0);"
                            className="text-color"
                            data-task="name"
                          >
                            Meeting with CFO
                          </a>
                          <i className="fs-14 pg-close hidden"></i>
                        </div>
                        <div className="form-check checkbox-circle no-margin text-center col-2 d-flex justify-content-center align-items-center">
                          <input
                            type="checkbox"
                            value="1"
                            id="todocheck2"
                            data-toggler="task"
                            className="hidden"
                          />
                          <label
                            htmlFor="todocheck2"
                            className=" no-margin no-padding absolute"
                          ></label>
                        </div>
                      </div>

                      <div className="task clearfix row">
                        <div className="task-list-title col-10 justify-content-between">
                          <a
                            href="javascript:void(0);"
                            className="text-color"
                            data-task="name"
                          >
                            AGM Conference at 1pm
                          </a>
                          <i className="fs-14 pg-close hidden"></i>
                        </div>
                        <div className="form-check checkbox-circle no-margin text-center col-2 d-flex justify-content-center align-items-center">
                          <input
                            type="checkbox"
                            value="1"
                            id="todocheck3"
                            data-toggler="task"
                            className="hidden"
                          />
                          <label
                            htmlFor="todocheck3"
                            className=" no-margin no-padding absolute"
                          ></label>
                        </div>
                      </div>

                      <div className="task clearfix row">
                        <div className="task-list-title col-10 justify-content-between">
                          <a
                            href="javascript:void(0);"
                            className="text-color"
                            data-task="name"
                          >
                            Revise Annual Reports
                          </a>
                          <i className="fs-14 pg-close hidden"></i>
                        </div>
                        <div className="form-check checkbox-circle no-margin text-center col-2 d-flex justify-content-center align-items-center">
                          <input
                            type="checkbox"
                            value="1"
                            id="todocheck4"
                            data-toggler="task"
                            className="hidden"
                          />
                          <label
                            htmlFor="todocheck4"
                            className=" no-margin no-padding absolute"
                          ></label>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="bg-master-light padding-20 full-width ">
                      <div className="row">
                        <div className="col-10">
                          <p className="no-margin normal text-black">
                            Type Event Here
                          </p>
                          <div className="input-group transparent no-border full-width">
                            <input
                              className="form-control transparent p-l-0"
                              type="text"
                              placeholder="What do you need to remeber?"
                            />
                          </div>
                        </div>
                        <div className="col-2 text-center">
                          <a
                            href="javascript:void(0);"
                            className="block m-t-15"
                          >
                            <img src={plusSVG} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 sm-m-t-10 d-flex align-items-stretch">
              <div className="widget-11-2 card no-border card-condensed no-margin widget-loader-circle d-flex flex-column align-self-stretch">
                <div className="card-header top-right">
                  <div className="card-controls">
                    <ul>
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
                <div className="padding-25">
                  <div className="pull-left">
                    <h2 className="text-success no-margin">webarch</h2>
                    <p className="no-margin">Today's sales</p>
                  </div>
                  <h3 className="pull-right semi-bold">
                    <sup>
                      <small className="semi-bold">$</small>
                    </sup>{" "}
                    102,967
                  </h3>
                  <div className="clearfix"></div>
                </div>
                <div className="auto-overflow widget-11-2-table">
                  <table className="table table-condensed table-hover">
                    <tbody>
                      <tr>
                        <td className="font-montserrat all-caps fs-12 w-50">
                          Purchase CODE #2345
                        </td>
                        <td className="text-right hidden-lg">
                          <span className="hint-text small">dewdrops</span>
                        </td>
                        <td className="text-right b-r b-dashed b-grey w-25">
                          <span className="hint-text small">Qty 1</span>
                        </td>
                        <td className="w-25">
                          <span className="font-montserrat fs-18">$27</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-montserrat all-caps fs-12 w-50">
                          Purchase CODE #2345
                        </td>
                        <td className="text-right hidden-lg">
                          <span className="hint-text small">dewdrops</span>
                        </td>
                        <td className="text-right b-r b-dashed b-grey w-25">
                          <span className="hint-text small">Qty 1</span>
                        </td>
                        <td className="w-25">
                          <span className="font-montserrat fs-18">$27</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-montserrat all-caps fs-12 w-50">
                          Purchase CODE #2345
                        </td>
                        <td className="text-right hidden-lg">
                          <span className="hint-text small">dewdrops</span>
                        </td>
                        <td className="text-right b-r b-dashed b-grey w-25">
                          <span className="hint-text small">Qty 1</span>
                        </td>
                        <td className="w-25">
                          <span className="font-montserrat fs-18">$27</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-montserrat all-caps fs-12 w-50">
                          Purchase CODE #2345
                        </td>
                        <td className="text-right hidden-lg">
                          <span className="hint-text small">dewdrops</span>
                        </td>
                        <td className="text-right b-r b-dashed b-grey w-25">
                          <span className="hint-text small">Qty 1</span>
                        </td>
                        <td className="w-25">
                          <span className="font-montserrat fs-18">$27</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-montserrat all-caps fs-12 w-50">
                          Purchase CODE #2345
                        </td>
                        <td className="text-right hidden-lg">
                          <span className="hint-text small">dewdrops</span>
                        </td>
                        <td className="text-right b-r b-dashed b-grey w-25">
                          <span className="hint-text small">Qty 1</span>
                        </td>
                        <td className="w-25">
                          <span className="font-montserrat fs-18">$27</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-montserrat all-caps fs-12 w-50">
                          Purchase CODE #2345
                        </td>
                        <td className="text-right hidden-lg">
                          <span className="hint-text small">dewdrops</span>
                        </td>
                        <td className="text-right b-r b-dashed b-grey w-25">
                          <span className="hint-text small">Qty 1</span>
                        </td>
                        <td className="w-25">
                          <span className="font-montserrat fs-18">$27</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-montserrat all-caps fs-12 w-50">
                          Purchase CODE #2345
                        </td>
                        <td className="text-right hidden-lg">
                          <span className="hint-text small">dewdrops</span>
                        </td>
                        <td className="text-right b-r b-dashed b-grey w-25">
                          <span className="hint-text small">Qty 1</span>
                        </td>
                        <td className="w-25">
                          <span className="font-montserrat fs-18">$27</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-montserrat all-caps fs-12 w-50">
                          Purchase CODE #2345
                        </td>
                        <td className="text-right hidden-lg">
                          <span className="hint-text small">dewdrops</span>
                        </td>
                        <td className="text-right b-r b-dashed b-grey w-25">
                          <span className="hint-text small">Qty 1</span>
                        </td>
                        <td className="w-25">
                          <span className="font-montserrat fs-18">$27</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-montserrat all-caps fs-12 w-50">
                          Purchase CODE #2345
                        </td>
                        <td className="text-right hidden-lg">
                          <span className="hint-text small">dewdrops</span>
                        </td>
                        <td className="text-right b-r b-dashed b-grey w-25">
                          <span className="hint-text small">Qty 1</span>
                        </td>
                        <td className="w-25">
                          <span className="font-montserrat fs-18">$27</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-montserrat all-caps fs-12 w-50">
                          Purchase CODE #2345
                        </td>
                        <td className="text-right hidden-lg">
                          <span className="hint-text small">dewdrops</span>
                        </td>
                        <td className="text-right b-r b-dashed b-grey w-25">
                          <span className="hint-text small">Qty 1</span>
                        </td>
                        <td className="w-25">
                          <span className="font-montserrat fs-18">$27</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="padding-25 mt-auto">
                  <p className="small no-margin">
                    <a href="javascript:void(0);">
                      <i className="fa fs-16 fa-arrow-circle-o-down text-success m-r-10"></i>
                    </a>
                    <span className="hint-text ">
                      Show more details of APPLE . INC
                    </span>
                  </p>
                </div>
                {refreshNine ? progress : null}
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
