import React, { useState } from "react";
import Collapse from "@kunukn/react-collapse";
import { Responsive, WidthProvider } from "react-grid-layout";

import Copyright from "../ui/Footer/Copyright";
import PageContainer from "../UIElements/Containers";
import PageBreadcrumb from "../UIElements/Breadcrumb";
import Card from "./Card";
import CardBody from "./CardBody";
import PerfectScrollbar from "react-perfect-scrollbar";

import "./style.scss";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const content = ({ path }) => {
  const [advanceToolCollapse, setAdvanceToolCollapse] = useState(false);
  const [advanceToolDropDown, setAdvanceToolDropDown] = useState(false);
  const [advanceToolRefresh, setAdvanceToolRefresh] = useState(false);
  const [advanceToolMaximize, setAdvanceToolMaximize] = useState(false);
  const [advanceToolClose, setAdvanceToolClose] = useState(false);

  const [basicToolCollapse, setBasicToolCollapse] = useState(false);
  const [basicToolRefresh, setBasicToolRefresh] = useState(false);
  const [basicToolClose, setBasicToolClose] = useState(false);

  const [withoutScrollClose, setWithoutScrollClose] = useState(false);

  const [withScrollClose, setWithScrollClose] = useState(false);

  const [minimalProgressRefresh, setMinimalProgressRefresh] = useState(false);

  const [linearProgressCollapse, setLinearProgressCollapse] = useState(false);
  const [linearProgressRefresh, setLinearProgressRefresh] = useState(false);
  const [linearProgressClose, setLinearProgressClose] = useState(false);

  const [circularProgressCollapse, setCircularProgressCollapse] =
    useState(false);
  const [circularProgressRefresh, setCircularProgressRefresh] = useState(false);
  const [circularProgressClose, setCircularProgressClose] = useState(false);

  const [linearProgressColorCollapse, setLinearProgressColorCollapse] =
    useState(false);
  const [linearProgressColorRefresh, setLinearProgressColorRefresh] =
    useState(false);
  const [linearProgressColorClose, setLinearProgressColorClose] =
    useState(false);

  const [circularProgressColorCollapse, setCircularProgressColorCollapse] =
    useState(false);
  const [circularProgressColorRefresh, setCircularProgressColorRefresh] =
    useState(false);
  const [circularProgressColorClose, setCircularProgressColorClose] =
    useState(false);

  const [
    circularProgressColorErrorCollapse,
    setCircularProgressColorErrorCollapse,
  ] = useState(false);
  const [
    circularProgressColorErrorRefresh,
    setCircularProgressColorErrorRefresh,
  ] = useState(false);
  const [circularProgressColorErrorClose, setCircularProgressColorErrorClose] =
    useState(false);
  const [circularProgressColorErrorAlert, setCircularProgressColorErrorAlert] =
    useState(false);

  const [dragRedCollapse, setDragRedCollapse] = useState(false);
  const [dragRedClose, setDragRedClose] = useState(false);

  const [dragPurpleCollapse, setDragPurpleCollapse] = useState(false);
  const [dragPurpleClose, setDragPurpleClose] = useState(false);

  const [dragBlueCollapse, setDragBlueCollapse] = useState(false);
  const [dragBlueClose, setDragBlueClose] = useState(false);

  const [dragGreenCollapse, setDragGreenCollapse] = useState(false);
  const [dragGreenClose, setDragGreenClose] = useState(false);

  const xssLayout = [
    {
      i: "a",
      x: 0,
      y: 0,
      w: 6,
      h: 2,
      isResizable: false,
      isDraggable: true,
      margin: [10, 10],
      minW: 1,
      minH: 3,
    },
    {
      i: "b",
      x: 3,
      y: 4,
      w: 6,
      h: 2,
      isResizable: false,
      isDraggable: true,
      margin: [10, 10],
      minW: 1,
      minH: 1,
    },
    {
      i: "c",
      x: 6,
      y: 7,
      w: 6,
      h: 2,
      isResizable: false,
      isDraggable: true,
      margin: [10, 10],
      minW: 1,
      minH: 1,
    },
    {
      i: "d",
      x: 9,
      y: 10,
      w: 6,
      h: 2,
      isResizable: false,
      isDraggable: true,
      margin: [10, 10],
      minW: 1,
      minH: 1,
    },
  ];

  const xsLayout = [
    {
      i: "a",
      x: 0,
      y: 0,
      w: 6,
      h: 2,
      isResizable: false,
      isDraggable: true,
      minW: 1,
      minH: 1,
    },
    {
      i: "b",
      x: 0,
      y: 2,
      w: 6,
      h: 2,
      isResizable: false,
      isDraggable: true,
      minW: 1,
      minH: 1,
    },
    {
      i: "c",
      x: 0,
      y: 4,
      w: 6,
      h: 2,
      isResizable: false,
      isDraggable: true,
      minW: 1,
      minH: 1,
    },
    {
      i: "d",
      x: 0,
      y: 6,
      w: 6,
      h: 2,
      isResizable: false,
      isDraggable: true,
      minW: 1,
      minH: 1,
    },
  ];

  const smLayout = [
    {
      i: "a",
      x: 0,
      y: 0,
      w: 6,
      h: 2,
      isResizable: false,
      isDraggable: true,
      minW: 1,
      minH: 1,
    },
    {
      i: "b",
      x: 6,
      y: 0,
      w: 6,
      h: 2,
      isResizable: false,
      isDraggable: true,
      minW: 1,
      minH: 1,
    },
    {
      i: "c",
      x: 0,
      y: 2,
      w: 6,
      h: 2,
      isResizable: false,
      isDraggable: true,
      minW: 1,
      minH: 1,
    },
    {
      i: "d",
      x: 6,
      y: 2,
      w: 6,
      h: 2,
      isResizable: false,
      isDraggable: true,
      minW: 1,
      minH: 1,
    },
  ];

  const mdLayout = [
    {
      i: "a",
      x: 0,
      y: 0,
      w: 6,
      h: 2,
      isResizable: false,
      isDraggable: true,
      minW: 1,
      minH: 1,
    },
    {
      i: "b",
      x: 6,
      y: 0,
      w: 6,
      h: 2,
      isResizable: false,
      isDraggable: true,
      minW: 1,
      minH: 1,
    },
    {
      i: "c",
      x: 0,
      y: 2,
      w: 6,
      h: 2,
      isResizable: false,
      isDraggable: true,
      minW: 1,
      minH: 1,
    },
    {
      i: "d",
      x: 6,
      y: 2,
      w: 6,
      h: 2,
      isResizable: false,
      isDraggable: true,
      minW: 1,
      minH: 1,
    },
  ];

  const lgLayout = [
    {
      i: "a",
      x: 0,
      y: 0,
      w: 6,
      h: 2,
      isResizable: false,
      isDraggable: true,
      minW: 1,
      minH: 1,
    },
    {
      i: "b",
      x: 6,
      y: 0,
      w: 6,
      h: 2,
      isResizable: false,
      isDraggable: true,
      minW: 1,
      minH: 1,
    },
    {
      i: "c",
      x: 0,
      y: 2,
      w: 6,
      h: 2,
      isResizable: false,
      isDraggable: true,
      minW: 1,
      minH: 1,
    },
    {
      i: "d",
      x: 6,
      y: 2,
      w: 6,
      h: 2,
      isResizable: false,
      isDraggable: true,
      minW: 1,
      minH: 1,
    },
  ];

  const ResponsiveGridLayout = WidthProvider(Responsive);

  return (
    <div className="page-content-wrapper ">
      {/* START PAGE CONTENT */}

      <div className="content ">
        <PageContainer
          className={
            path.includes("/executive") || path.includes("/casual")
              ? "container p-l-10"
              : " "
          }
        >
          <PageBreadcrumb>
            <li className="breadcrumb-item">
              <a href="javascript:void(0);">Home</a>
            </li>
            <li className="breadcrumb-item active">Cards</li>
          </PageBreadcrumb>

          <Card type={"transparent"} title="Pages Cards" style={{zIndex:600}}>
            <div className="m-0 row card-body">
              <div className="col-lg-4 no-padding">
                <div className="p-r-30">
                  <h3>Effortless Customization</h3>
                  <br />
                  <p>
                    Cards are pluggable UI components that are managed and
                    displayed in a web portal. Cards in Pages are created by
                    reusing the{" "}
                    <a href="https://getbootstrap.com/components/#cards">
                      cards
                    </a>{" "}
                    introduced in Bootstrap to enable effortless customization.
                  </p>
                </div>
              </div>
              <div className="col-lg-8 sm-no-padding">
                <Card type={"transparent"}>
                  <CardBody
                    className=" no-padding"
                    style={advanceToolClose ? { display: "none" } : {}}
                  >
                    <Card
                      id="card-advance"
                      title={"Portlet Title"}
                      className={` ${
                        advanceToolCollapse ? "card-collapsed" : ""
                      } ${advanceToolMaximize ? "card-maximized" : ""}`}
                      style={
                        advanceToolMaximize ? { left: "70px", top: "59px" } : {}
                      }
                    >
                      <div className="card-controls">
                        <ul>
                          <li>
                            <div
                              className={`dropdown ${
                                advanceToolDropDown ? "show" : ""
                              }`}
                            >
                              <a
                                id="card-settings"
                                onClick={() => {
                                  setAdvanceToolDropDown(
                                    (prevState) => !prevState
                                  );
                                }}
                                data-target="#"
                                href="javascript:void(0);"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                role="button"
                                aria-expanded={`${
                                  advanceToolDropDown ? "true" : "false"
                                }`}
                              >
                                <i className="card-icon card-icon-settings "></i>
                              </a>
                              <div
                                className={`dropdown-menu dropdown-menu-right ${
                                  advanceToolDropDown ? "show" : ""
                                }`}
                                role="menu"
                                aria-labelledby="card-settings"
                                style={
                                  advanceToolDropDown
                                    ? {
                                        "will-change": "transform",
                                        position: "absolute",
                                        transform:
                                          "translate3d(-95px, 32px, 0px)",
                                        top: "0px",
                                        left: "0px",
                                        width: "100px",
                                      }
                                    : {}
                                }
                                x-placement="bottom-end"
                              >
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  API
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  Preferences
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  About
                                </a>
                              </div>
                            </div>
                          </li>
                          <li>
                            <a
                              href="javascript:void(0);"
                              className="card-collapse"
                              data-toggle="collapse"
                              onClick={() => {
                                setAdvanceToolCollapse(
                                  (prevState) => !prevState
                                );
                              }}
                            >
                              <i className="card-icon card-icon-collapse"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:void(0);"
                              className="card-refresh"
                              data-toggle="refresh"
                              onClick={() => {
                                setAdvanceToolRefresh(
                                  (prevState) => !prevState
                                );
                                setTimeout(() => {
                                  setAdvanceToolRefresh(
                                    (prevState) => !prevState
                                  );
                                }, 2000);
                              }}
                            >
                              <i className="card-icon card-icon-refresh"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:void(0);"
                              className="card-maximize"
                              data-toggle="maximize"
                              onClick={() => {
                                setAdvanceToolMaximize(
                                  (prevState) => !prevState
                                );
                              }}
                            >
                              <i className="card-icon card-icon-maximize"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:void(0);"
                              className="card-close"
                              data-toggle="close"
                              onClick={() => {
                                setAdvanceToolClose((prevState) => !prevState);
                              }}
                            >
                              <i className="card-icon card-icon-close"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <Collapse
                        transition={`height 290ms cubic-bezier(.4, 0, .2, 1)`}
                        isOpen={!advanceToolCollapse}
                      >
                        <CardBody>
                          <h3>
                            <span className="semi-bold">Advance</span> Tools
                          </h3>
                          <p>
                            We have crafted Pages Cards to suit any use case.
                            Add a maximize button{" "}
                            <i className="pg-fullscreen"></i> into your Cards
                            controls bar to make the Cards go full-screen. This
                            will come handy if you want to show lot of content
                            inside a Cards and want to give the content some
                            room to breath
                          </p>
                          <br />
                          <div>
                            <div className="profile-img-wrapper m-t-5 inline">
                              <img
                                width="35"
                                height="35"
                                data-src-retina="assets/img/profiles/avatar_small2x.jpg"
                                data-src={
                                  process.env.PUBLIC_URL +
                                  "/assets/img/profiles/avatar_small.jpg"
                                }
                                alt=""
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/img/profiles/avatar_small.jpg"
                                }
                              />
                              <div className="chat-status available"></div>
                            </div>
                            <div className="inline m-l-10">
                              <p className="small hint-text m-t-5">
                                VIA senior product manage
                                <br />
                                for UI/UX at REVOX
                              </p>
                            </div>
                          </div>
                        </CardBody>
                      </Collapse>
                      {advanceToolRefresh ? (
                        <div
                          className="card-progress"
                          style={{
                            "background-color": "rgba(255, 255, 255, 0.8)",
                            display: "block",
                          }}
                        >
                          <div className="progress-circle-indeterminate progress-circle-master"></div>
                        </div>
                      ) : null}
                    </Card>
                  </CardBody>
                </Card>
              </div>
            </div>
          </Card>
        </PageContainer>

        <PageContainer
          className={
            path.includes("/executive") || path.includes("/casual")
              ? "container"
              : " "
          }
        >
          <div className="row">
            <div className="col-lg-12">
              <Card
                type={"transparent"}
                title={"Portlet Title"}
                style={basicToolClose ? { display: "none" } : {}}
              >
                <CardBody>
                  <div className="row">
                    <div className="col-lg-4">
                      <Card
                        title={"Portlet Title"}
                        data-pages="card"
                        className={` ${
                          basicToolCollapse ? "card-collapsed" : ""
                        }`}
                        id="card-basic"
                      >
                        <div className="card-controls">
                          <ul>
                            <li>
                              <a
                                data-toggle="collapse"
                                className="card-collapse"
                                href="javascript:void(0);"
                                onClick={() => {
                                  setBasicToolCollapse(
                                    (prevState) => !prevState
                                  );
                                }}
                              >
                                <i className="card-icon card-icon-collapse"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                data-toggle="refresh"
                                className="card-refresh"
                                href="javascript:void(0);"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setBasicToolRefresh(
                                    (prevState) => !prevState
                                  );
                                  setTimeout(() => {
                                    setBasicToolRefresh(
                                      (prevState) => !prevState
                                    );
                                  }, 2000);
                                }}
                              >
                                <i className="card-icon card-icon-refresh"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                data-toggle="close"
                                className="card-close"
                                href="javascript:void(0);"
                                onClick={() => {
                                  setBasicToolClose((prevState) => !prevState);
                                }}
                              >
                                <i className="card-icon card-icon-close"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <Collapse
                          transition={`height 290ms cubic-bezier(.4, 0, .2, 1)`}
                          isOpen={!basicToolCollapse}
                        >
                          <CardBody>
                            <h3>
                              <span className="semi-bold">Basic</span> Tools
                            </h3>
                            <p>
                              Basic Portlet tools include a slide toggle button
                              <i className="card-icon card-icon-collapse"></i>,
                              refresh button{" "}
                              <i className="card-icon card-icon-refresh"></i>{" "}
                              and a close button{" "}
                              <i className="card-icon card-icon-close"></i> All
                              these are fully customizable and come with
                              callback functions to integrate with your code.
                              Clicking on the refresh button will simulate an
                              AJAX call.
                            </p>
                          </CardBody>
                        </Collapse>
                        {basicToolRefresh ? (
                          <div
                            className="card-progress"
                            style={{
                              "background-color": "rgba(255, 255, 255, 0.8)",
                              display: "block",
                            }}
                          >
                            <div className="progress-circle-indeterminate progress-circle-master"></div>
                          </div>
                        ) : null}
                      </Card>
                    </div>
                    <div className="col-lg-4">
                      <Card
                        title={"Portlet One"}
                        style={withoutScrollClose ? { display: "none" } : {}}
                      >
                        <div className="card-controls">
                          <ul>
                            <li>
                              <a
                                data-toggle="close"
                                className="card-close"
                                href="javascript:void(0);"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setWithoutScrollClose(
                                    (prevState) => !prevState
                                  );
                                }}
                              >
                                <i className="card-icon card-icon-close"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <CardBody>
                          <h3>
                            <span className="semi-bold">Without</span> Scroll
                          </h3>
                          <p>
                            When it comes to digital design, the lines between
                            functionality, aesthetics, and psychology are
                            inseparably blurred. Without the constraints of the
                            physical world, there’s no natural form to fall back
                            on, and every bit of constraint and affordance
                          </p>
                        </CardBody>
                      </Card>
                    </div>
                    <div className="col-lg-4">
                      <Card
                        title={"Portlet Two"}
                        style={withScrollClose ? { display: "none" } : {}}
                      >
                        <div className="card-controls">
                          <ul>
                            <li>
                              <a
                                data-toggle="close"
                                className="card-close"
                                href="javascript:void(0);"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setWithScrollClose((prevState) => !prevState);
                                }}
                              >
                                <i className="card-icon card-icon-close"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <CardBody>
                          <div
                            className="scroll-wrapper scrollable"
                            style={{ position: "relative" }}
                          >
                            <div
                              className="scrollable scroll-content scroll-scrolly_visible"
                              style={{
                                height: "auto",
                                marginBottom: "0px",
                                marginRight: "0px",
                                maxHeight: "168px",
                              }}
                            >
                              <PerfectScrollbar className="demo-card-scrollable scroll-bar">
                                <h3>
                                  <span className="semi-bold">With</span> Scroll
                                </h3>
                                <p>
                                  When it comes to digital design, the lines
                                  between functionality, aesthetics, and
                                  psychology are inseparably blurred. Without
                                  the constraints of the physical world, there’s
                                  no natural form to fall back on, and every bit
                                  of constraint and affordance must be
                                  introduced intentionally. Good design makes a
                                  product useful. A product is bought to be
                                  used. It has to satisfy certain criteria, not
                                  only functional, but also psychological and
                                  aesthetic. Good design emphasizes the
                                  usefulness of a product whilst disregarding
                                  anything that could possibly detract from it.
                                  It’s always obvious when design is an
                                  afterthought. The hallmarks of the
                                  engineering-first approach are everywhere:
                                  inscrutable interfaces, convoluted workflows,
                                  user guides the size of The Iliad. This was
                                  the dominant approach for the first several
                                  decades of personal computing, and it’s left
                                  its mark in the form of software designed with
                                  its creators in mind, rather than its users.
                                </p>
                              </PerfectScrollbar>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </PageContainer>

        <PageContainer
          className={
            path.includes("/executive") || path.includes("/casual")
              ? "container"
              : " "
          }
        >
          <Card type={"transparent"} title={"Style Options"}>
            <CardBody>
              <div className="row">
                <div className="col-lg-4">
                  <Card title={"Portlet Three"} headerOption={"separator"}>
                    <CardBody>
                      <h3>
                        <span className="semi-bold">With</span> Separator
                      </h3>
                      <p>
                        When it comes to digital design, the lines between
                        functionality, aesthetics, and psychology are
                        inseparably blurred. Without the constraints of the
                        physical world, there’s no natural form to fall back on,
                        and every bit of constraint and affordance must be
                        introduced intentionally. Good design makes a product
                        useful. A product is bought to be used.{" "}
                      </p>
                    </CardBody>
                  </Card>
                </div>
                <div className="col-lg-4">
                  <Card type={"transparent"} title={"Portlet Four"}>
                    <CardBody>
                      <h3>
                        <span className="semi-bold">Transparent</span>
                      </h3>
                      <p>
                        When it comes to digital design, the lines between
                        functionality, aesthetics, and psychology are
                        inseparably blurred. Without the constraints of the
                        physical world, there’s no natural form to fall back on,
                        and every bit of constraint and affordance must be
                        introduced intentionally. Good design makes a product
                        useful. A product is bought to be used.
                      </p>
                    </CardBody>
                  </Card>
                </div>
                <div className="col-lg-4">
                  <Card
                    className=" bg-success"
                    title={"Portlet Three"}
                    headerOption={"separator"}
                  >
                    <CardBody>
                      <h3>
                        <span className="semi-bold">With</span> Separator
                      </h3>
                      <p>
                        When it comes to digital design, the lines between
                        functionality, aesthetics, and psychology are
                        inseparably blurred. Without the constraints of the
                        physical world, there’s no natural form to fall back on,
                        and every bit of constraint and affordance must be
                        introduced intentionally. Good design makes a product
                        useful. A product is bought to be used.
                      </p>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </CardBody>
          </Card>
        </PageContainer>

        <PageContainer
          className={
            path.includes("/executive") || path.includes("/casual")
              ? "container"
              : " "
          }
        >
          <Card type={"transparent"}>
            <CardBody>
              <div className="row">
                <div className="col-lg-4 no-padding">
                  <div className="p-l-30 p-r-30">
                    <h3>SVG animated progress indicators</h3>
                    <br />
                    <p>
                      Pages comes with two types of inderminate progress
                      indicators: linear and circular. These have been created
                      using animated SVGs to support various screen sizes and
                      retina displays. We have integrated them into Cards too.
                    </p>
                    <div className="inline">
                      <p className="small hint-text">
                        <br />{" "}
                        <a href="progress.html">
                          More about progress &amp; activity indicators
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 sm-no-padding">
                  <Card type={"transparent"}>
                    <CardBody className=" no-padding">
                      <Card title={"Portlet Title"} id="card-circular-minimal">
                        <div className="card-controls">
                          <ul>
                            <li>
                              <a
                                href="javascript:void(0);"
                                className="card-refresh"
                                data-toggle="refresh"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setMinimalProgressRefresh(
                                    (prevState) => !prevState
                                  );
                                  setTimeout(() => {
                                    setMinimalProgressRefresh(
                                      (prevState) => !prevState
                                    );
                                  }, 2000);
                                }}
                              >
                                {!minimalProgressRefresh ? (
                                  <i className="card-icon card-icon-refresh-lg-master"></i>
                                ) : (
                                  <div
                                    className="progress-circle-indeterminate progress-circle-master"
                                    style={{ width: 15 }}
                                  ></div>
                                )}
                              </a>
                            </li>
                          </ul>
                        </div>
                        <CardBody>
                          <h3>
                            <span className="semi-bold">Minimal</span> Portlet
                          </h3>
                          <p>
                            Click on the refresh icon to simulate an AJAX call
                            and to see an animated circular progress
                            indicatorabove the portlet. This is the Pages
                            default progress indicator for Cards. Don't like
                            this style? Simply change the style by setting
                            portlet options.
                          </p>
                        </CardBody>
                        {minimalProgressRefresh && (
                          <div
                            className="card-progress"
                            style={{
                              "background-color": "rgba(255, 255, 255, 0.8)",
                              display: "block",
                              marginTop: 50,
                            }}
                          ></div>
                        )}
                      </Card>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </CardBody>
          </Card>
        </PageContainer>

        <PageContainer
          className={
            path.includes("/executive") || path.includes("/casual")
              ? "container"
              : " "
          }
        >
          <Card type={"transparent"} title={"Portlet Progress indicators"}>
            <CardBody>
              <div className="row">
                <div className="col-lg-6">
                  <Card
                    title={"Portlet Title"}
                    id="card-linear"
                    className={` ${
                      linearProgressCollapse ? "card-collapsed" : ""
                    }`}
                    style={linearProgressClose ? { display: "none" } : {}}
                  >
                    <div className="card-controls">
                      <ul>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="card-collapse"
                            data-toggle="collapse"
                            onClick={(e) => {
                              e.preventDefault();
                              setLinearProgressCollapse(
                                (prevState) => !prevState
                              );
                            }}
                          >
                            <i className="card-icon card-icon-collapse"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="card-refresh"
                            data-toggle="refresh"
                            onClick={(e) => {
                              e.preventDefault();
                              setLinearProgressRefresh(
                                (prevState) => !prevState
                              );
                              setTimeout(() => {
                                setLinearProgressRefresh(
                                  (prevState) => !prevState
                                );
                              }, 2000);
                            }}
                          >
                            <i className="card-icon card-icon-refresh"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="card-close"
                            data-toggle="close"
                            onClick={(e) => {
                              e.preventDefault();
                              setLinearProgressClose((prevState) => !prevState);
                            }}
                          >
                            <i className="card-icon card-icon-close"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <Collapse
                      transition={`height 290ms cubic-bezier(.4, 0, .2, 1)`}
                      isOpen={!linearProgressCollapse}
                    >
                      <CardBody>
                        <h3>
                          <span className="semi-bold">Linear</span> Progress
                        </h3>
                        <p>
                          Click on the refresh icon to simulate an AJAX call and
                          to see an animated progress bar indicator above the
                          portlet. These progress bars come in seven different
                          colors that are available in the Pages contextual
                          color scheme.
                        </p>
                      </CardBody>
                    </Collapse>
                    {linearProgressRefresh ? (
                      <div
                        className="card-progress"
                        style={{
                          "background-color": "rgba(255, 255, 255, 0.8)",
                          display: "block",
                        }}
                      >
                        <div className="progress progress-small">
                          <div className="progress-bar-indeterminate progress-bar-master"></div>
                        </div>
                      </div>
                    ) : null}
                  </Card>
                </div>
                <div className="col-lg-6">
                  <Card
                    title={"Portlet Title"}
                    id="card-circular"
                    className={` ${
                      circularProgressCollapse ? "card-collapsed" : ""
                    }`}
                    style={circularProgressClose ? { display: "none" } : {}}
                  >
                    <div className="card-controls">
                      <ul>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="card-collapse"
                            data-toggle="collapse"
                            onClick={(e) => {
                              e.preventDefault();
                              setCircularProgressCollapse(
                                (prevState) => !prevState
                              );
                            }}
                          >
                            <i className="card-icon card-icon-collapse"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="card-refresh"
                            data-toggle="refresh"
                            onClick={(e) => {
                              e.preventDefault();
                              setCircularProgressRefresh(
                                (prevState) => !prevState
                              );
                              setTimeout(() => {
                                setCircularProgressRefresh(
                                  (prevState) => !prevState
                                );
                              }, 2000);
                            }}
                          >
                            <i className="card-icon card-icon-refresh"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="card-close"
                            data-toggle="close"
                            onClick={(e) => {
                              e.preventDefault();
                              setCircularProgressClose(
                                (prevState) => !prevState
                              );
                            }}
                          >
                            <i className="card-icon card-icon-close"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <Collapse
                      transition={`height 290ms cubic-bezier(.4, 0, .2, 1)`}
                      isOpen={!circularProgressCollapse}
                    >
                      <CardBody>
                        <h3>
                          <span className="semi-bold">Circular</span> Progress
                        </h3>
                        <p>
                          Click on the refresh icon to simulate an AJAX call and
                          to see an animated circular progress indicatorabove
                          the portlet. This is the Pages default progress
                          indicator for Cards. Don't like this style? Simply
                          change the style by setting portlet options.
                        </p>
                      </CardBody>
                    </Collapse>
                    {circularProgressRefresh ? (
                      <div
                        className="card-progress"
                        style={{
                          "background-color": "rgba(255, 255, 255, 0.8)",
                          display: "block",
                        }}
                      >
                        <div className="progress-circle-indeterminate progress-circle-master"></div>
                      </div>
                    ) : null}
                  </Card>
                </div>
              </div>
            </CardBody>
          </Card>
        </PageContainer>

        <PageContainer
          className={
            path.includes("/executive") || path.includes("/casual")
              ? "container"
              : " "
          }
        >
          <Card
            type={"transparent"}
            title={"Portlet Progress Indicator colors"}
          >
            <CardBody>
              <div className="row">
                <div className="col-lg-4">
                  <Card
                    title={"Portlet Title"}
                    id="card-linear-color"
                    className={` ${
                      linearProgressColorCollapse ? "card-collapsed" : ""
                    }`}
                    style={linearProgressColorClose ? { display: "none" } : {}}
                  >
                    <div className="card-controls">
                      <ul>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="card-collapse"
                            data-toggle="collapse"
                            onClick={(e) => {
                              e.preventDefault();
                              setLinearProgressColorCollapse(
                                (prevState) => !prevState
                              );
                            }}
                          >
                            <i className="card-icon card-icon-collapse"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="card-refresh"
                            data-toggle="refresh"
                            onClick={(e) => {
                              e.preventDefault();
                              setLinearProgressColorRefresh(
                                (prevState) => !prevState
                              );
                              setTimeout(() => {
                                setLinearProgressColorRefresh(
                                  (prevState) => !prevState
                                );
                              }, 2000);
                            }}
                          >
                            <i className="card-icon card-icon-refresh"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="card-close"
                            data-toggle="close"
                            onClick={(e) => {
                              e.preventDefault();
                              setLinearProgressColorClose(
                                (prevState) => !prevState
                              );
                            }}
                          >
                            <i className="card-icon card-icon-close"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <Collapse
                      transition={`height 290ms cubic-bezier(.4, 0, .2, 1)`}
                      isOpen={!linearProgressColorCollapse}
                    >
                      <CardBody>
                        <h3>
                          <span className="semi-bold">Linear</span> Progress
                        </h3>
                        <p>
                          Click on the refresh icon to simulate an AJAX call and
                          to see an animated progress bar indicator above the
                          portlet. These progress bars come in seven different
                          colors that are available in the Pages contextual
                          color scheme.
                        </p>
                      </CardBody>
                    </Collapse>
                    {linearProgressColorRefresh ? (
                      <div
                        className="card-progress"
                        style={{
                          "background-color": "rgba(255, 255, 255, 0.8)",
                          display: "block",
                        }}
                      >
                        <div className="progress progress-small">
                          <div className="progress-bar-indeterminate progress-bar-success"></div>
                        </div>
                      </div>
                    ) : null}
                  </Card>
                </div>
                <div className="col-lg-4">
                  <Card
                    title={"Portlet Title"}
                    id="card-circular-color"
                    className={` ${
                      circularProgressColorCollapse ? "card-collapsed" : ""
                    }`}
                    style={
                      circularProgressColorClose ? { display: "none" } : {}
                    }
                  >
                    <div className="card-controls">
                      <ul>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="card-collapse"
                            data-toggle="collapse"
                            onClick={(e) => {
                              e.preventDefault();
                              setCircularProgressColorCollapse(
                                (prevState) => !prevState
                              );
                            }}
                          >
                            <i className="card-icon card-icon-collapse"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="card-refresh"
                            data-toggle="refresh"
                            onClick={(e) => {
                              e.preventDefault();
                              setCircularProgressColorRefresh(
                                (prevState) => !prevState
                              );
                              setTimeout(() => {
                                setCircularProgressColorRefresh(
                                  (prevState) => !prevState
                                );
                              }, 2000);
                            }}
                          >
                            <i className="card-icon card-icon-refresh"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="card-close"
                            data-toggle="close"
                            onClick={(e) => {
                              e.preventDefault();
                              setCircularProgressColorClose(
                                (prevState) => !prevState
                              );
                            }}
                          >
                            <i className="card-icon card-icon-close"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <Collapse
                      transition={`height 290ms cubic-bezier(.4, 0, .2, 1)`}
                      isOpen={!circularProgressColorCollapse}
                    >
                      <CardBody
                        style={
                          circularProgressColorCollapse
                            ? { display: "none" }
                            : {}
                        }
                      >
                        <h3>
                          <span className="semi-bold">Circular</span> Progress
                        </h3>
                        <p>
                          Click on the refresh icon to simulate an AJAX call and
                          to see an animated circular progress indicatorabove
                          the portlet. This is the Pages default progress
                          indicator for Cards. Don't like this style? Simply
                          change the style by setting portlet options.
                        </p>
                      </CardBody>
                    </Collapse>
                    {circularProgressColorRefresh ? (
                      <div
                        className="card-progress"
                        style={{
                          "background-color": "rgba(255, 255, 255, 0.8)",
                          display: "block",
                        }}
                      >
                        <div className="progress-circle-indeterminate progress-circle-success"></div>
                      </div>
                    ) : null}
                  </Card>
                </div>
                <div className="col-lg-4">
                  <Card
                    title={"Portlet Title"}
                    id="card-error"
                    className={` ${
                      circularProgressColorCollapse ? "card-collapsed" : ""
                    }`}
                    style={
                      circularProgressColorErrorClose ? { display: "none" } : {}
                    }
                  >
                    <div className="card-controls">
                      <ul>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="card-collapse"
                            data-toggle="collapse"
                            onClick={(e) => {
                              e.preventDefault();
                              setCircularProgressColorErrorCollapse(
                                (prevState) => !prevState
                              );
                            }}
                          >
                            <i className="card-icon card-icon-collapse"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="card-refresh"
                            data-toggle="refresh"
                            onClick={(e) => {
                              e.preventDefault();
                              setCircularProgressColorErrorRefresh(
                                (prevState) => !prevState
                              );
                              setTimeout(() => {
                                setCircularProgressColorErrorAlert(
                                  (prevState) => !prevState
                                );
                              }, 1000);
                              setTimeout(() => {
                                setCircularProgressColorErrorRefresh(
                                  (prevState) => !prevState
                                );
                              }, 2000);
                            }}
                          >
                            <i className="card-icon card-icon-refresh"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="card-close"
                            data-toggle="close"
                            onClick={(e) => {
                              e.preventDefault();
                              setCircularProgressColorErrorClose(
                                (prevState) => !prevState
                              );
                            }}
                          >
                            <i className="card-icon card-icon-close"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <Collapse
                      transition={`height 290ms cubic-bezier(.4, 0, .2, 1)`}
                      isOpen={!circularProgressColorErrorCollapse}
                    >
                      <CardBody>
                        <h3>
                          Portlet with <span className="semi-bold">Errors</span>
                        </h3>
                        <p>
                          Anything that can go wrong will go wrong. Click on the
                          refresh icon in the portlet controls to the top right
                          to see how an error message can be displayed inside a
                          portlet. Recommended to use with failed AJAX callbacks
                          that are triggered from a portlet.
                        </p>
                      </CardBody>
                    </Collapse>
                    {circularProgressColorErrorRefresh ? (
                      <div
                        className="card-progress"
                        style={{
                          "background-color": "rgba(255, 255, 255, 0.8)",
                          display: "block",
                        }}
                      >
                        <div className="progress-circle-indeterminate progress-circle-success"></div>
                      </div>
                    ) : null}
                    {circularProgressColorErrorAlert ? (
                      <React.Fragment>
                        <div
                          className="card-progress"
                          style={{
                            "background-color": "rgba(255, 255, 255, 0.8)",
                            display: "block",
                          }}
                        ></div>
                        <div
                          className="pgn-wrapper"
                          data-position="top"
                          style={{ top: "59px" }}
                        >
                          <div className="pgn push-on-sidebar-open pgn-bar">
                            <div className="alert alert-danger">
                              <button
                                type="button"
                                className="close"
                                onClick={() =>
                                  setCircularProgressColorErrorAlert(
                                    (prevState) => !prevState
                                  )
                                }
                                data-dismiss="alert"
                              >
                                <span aria-hidden="true">×</span>
                                <span className="sr-only">Close</span>
                              </button>
                              Something went terribly wrong
                            </div>
                          </div>
                        </div>
                      </React.Fragment>
                    ) : null}
                  </Card>
                </div>
              </div>
            </CardBody>
          </Card>
        </PageContainer>

        <PageContainer
          className={
            path.includes("/executive") || path.includes("/casual")
              ? "container"
              : " "
          }
        >
          <Card type={"transparent"} title={"Draggable Cards"}>
            <CardBody className=" sortable">
              <ResponsiveGridLayout
                className="layout"
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                layouts={{
                  lg: lgLayout,
                  md: mdLayout,
                  sm: smLayout,
                  xs: xsLayout,
                  xxs: xssLayout,
                }}
              >
                <div key="a">
                  <Card
                    title={"Draggable Portlet"}
                    headerOption={"ui-sortable-handle"}
                    className=" bg-danger"
                    data-pages="card"
                    style={dragRedClose ? { display: "none" } : {}}
                  >
                    <div className="card-controls">
                      <ul>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="card-collapse"
                            data-toggle="collapse"
                            onClick={(e) => {
                              e.preventDefault();
                              setDragRedCollapse((prevState) => !prevState);
                            }}
                          >
                            <i className="card-icon card-icon-collapse"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="card-refresh"
                            data-toggle="refresh"
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                          >
                            <i className="card-icon card-icon-refresh"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="card-close"
                            data-toggle="close"
                            onClick={(e) => {
                              e.preventDefault();
                              setDragRedClose((prevState) => !prevState);
                            }}
                          >
                            <i className="card-icon card-icon-close"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <Collapse
                      transition={`height 290ms cubic-bezier(.4, 0, .2, 1)`}
                      isOpen={!dragRedCollapse}
                    >
                      <CardBody>
                        <h3>
                          <span className="semi-bold">Drag</span> me!
                        </h3>
                        <p>
                          When it comes to digital design, the lines between
                          functionality, aesthetics, and psychology are
                          inseparably blurred. Without the constraints of the
                          physical world, there’s no natural form to fall back
                          on, and every bit of constraint and affordance must be
                          introduced intentionally. Good design makes a product
                          useful. A product is bought to be used. It has to
                          satisfy certain criteria, not only functional, but
                          also psychological and aesthetic.{" "}
                        </p>
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
                <div key="b">
                  <Card
                    title={"Draggable Portlet"}
                    headerOption={"ui-sortable-handle"}
                    className=" bg-complete"
                    data-pages="card"
                    style={dragPurpleClose ? { display: "none" } : {}}
                  >
                    <div className="card-controls">
                      <ul>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="card-collapse"
                            data-toggle="collapse"
                            onClick={(e) => {
                              e.preventDefault();
                              setDragPurpleCollapse((prevState) => !prevState);
                            }}
                          >
                            <i className="card-icon card-icon-collapse"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="card-refresh"
                            data-toggle="refresh"
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                          >
                            <i className="card-icon card-icon-refresh"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="card-close"
                            data-toggle="close"
                            onClick={(e) => {
                              e.preventDefault();
                              setDragPurpleClose((prevState) => !prevState);
                            }}
                          >
                            <i className="card-icon card-icon-close"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <Collapse
                      transition={`height 290ms cubic-bezier(.4, 0, .2, 1)`}
                      isOpen={!dragPurpleCollapse}
                    >
                      <CardBody>
                        <h3>
                          <span className="semi-bold">Drag</span> me!
                        </h3>
                        <p>
                          When it comes to digital design, the lines between
                          functionality, aesthetics, and psychology are
                          inseparably blurred. Without the constraints of the
                          physical world, there’s no natural form to fall back
                          on, and every bit of constraint and affordance must be
                          introduced intentionally. Good design makes a product
                          useful. A product is bought to be used. It has to
                          satisfy certain criteria, not only functional, but
                          also psychological and aesthetic.{" "}
                        </p>
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
                <div key="c">
                  <Card
                    title={"Draggable Portlet"}
                    headerOption={"ui-sortable-handle"}
                    className=" bg-primary"
                    data-pages="card"
                    style={dragBlueClose ? { display: "none" } : {}}
                  >
                    <div className="card-controls">
                      <ul>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="card-collapse "
                            data-toggle="collapse"
                            onClick={(e) => {
                              e.preventDefault();
                              setDragBlueCollapse((prevState) => !prevState);
                            }}
                          >
                            <i className="card-icon card-icon-collapse"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="card-refresh "
                            data-toggle="refresh"
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                          >
                            <i className="card-icon card-icon-refresh"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="card-close "
                            data-toggle="close"
                            onClick={(e) => {
                              e.preventDefault();
                              setDragBlueClose((prevState) => !prevState);
                            }}
                          >
                            <i className="card-icon card-icon-close"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <Collapse
                      transition={`height 290ms cubic-bezier(.4, 0, .2, 1)`}
                      isOpen={!dragBlueCollapse}
                    >
                      <CardBody>
                        <h3>
                          <span className="semi-bold">Drag</span> me!
                        </h3>
                        <p>
                          When it comes to digital design, the lines between
                          functionality, aesthetics, and psychology are
                          inseparably blurred. Without the constraints of the
                          physical world, there’s no natural form to fall back
                          on, and every bit of constraint and affordance must be
                          introduced intentionally. Good design makes a product
                          useful. A product is bought to be used. It has to
                          satisfy certain criteria, not only functional, but
                          also psychological and aesthetic.{" "}
                        </p>
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
                <div key="d">
                  <Card
                    title={"Draggable Portlet"}
                    headerOption={"ui-sortable-handle"}
                    className=" bg-success"
                    data-pages="card"
                    style={dragGreenClose ? { display: "none" } : {}}
                  >
                    <div className="card-controls">
                      <ul>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="card-collapse"
                            data-toggle="collapse"
                            onClick={(e) => {
                              e.preventDefault();
                              setDragGreenCollapse((prevState) => !prevState);
                            }}
                          >
                            <i className="card-icon card-icon-collapse"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="card-refresh"
                            data-toggle="refresh"
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                          >
                            <i className="card-icon card-icon-refresh"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="card-close"
                            data-toggle="close"
                            onClick={(e) => {
                              e.preventDefault();
                              setDragGreenClose((prevState) => !prevState);
                            }}
                          >
                            <i className="card-icon card-icon-close"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <Collapse
                      transition={`height 290ms cubic-bezier(.4, 0, .2, 1)`}
                      isOpen={!dragGreenCollapse}
                    >
                      <CardBody>
                        <h3>
                          <span className="semi-bold">Drag</span> me!
                        </h3>
                        <p>
                          When it comes to digital design, the lines between
                          functionality, aesthetics, and psychology are
                          inseparably blurred. Without the constraints of the
                          physical world, there’s no natural form to fall back
                          on, and every bit of constraint and affordance must be
                          introduced intentionally. A product is bought to be
                          used. It has to satisfy certain criteria, not only
                          functional, but also psychological and aesthetic.
                        </p>
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
              </ResponsiveGridLayout>
            </CardBody>
          </Card>
        </PageContainer>
      </div>

      {/* START COPYRIGHT */}
      <Copyright
        year={"2014"}
        brand={"REVOX"}
        reserved={"All rights reserved."}
        terms={"Terms of use"}
        policy={"Privacy Policy"}
      />
      {/* END COPYRIGHT */}
      {/* END PAGE CONTENT */}
    </div>
  );
};

export default content;
