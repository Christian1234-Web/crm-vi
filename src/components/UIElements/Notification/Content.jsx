import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import Select from "react-select";

import PageContainer from "../Containers";
import Breadcrumb from "../Breadcrumb";
import Alert from "../Alert";
import Badge from "../Badge";
import CircleNotifyModule from "./CircleNotification/CircleNotifyModule";
import Copyright from "../../ui/Footer/Copyright";
import FlipBarNotifyModule from "./FlipBarNotification/FlipBarNotifyModule";
import SimpleNotifyModule from "./SimpleNotification/SimpleNotifyModule";
import BarNotifyModule from "./BarNotification/BarNotifyModule";
import Dropdown from "react-dropdown";

import "./style.css";

const content = ({ path }) => {
  const [activeTab, setActiveTab] = useState([true, false, false, false]);

  const [barAlert, setBarAlertPosition] = useState([true, false]);
  const [flipBarAlert, setFlipBarAlertPosition] = useState([
    false,
    true,
    false,
    false,
  ]);
  const [circleAlert, setCircleAlertPosition] = useState([
    false,
    true,
    false,
    false,
  ]);
  const [simpleAlert, setSimpleAlertPosition] = useState([
    false,
    true,
    false,
    false,
  ]);

  const [position, setPosition] = useState("top");
  const [positionStyle, setPositionStyle] = useState({});

  const [barNotifyArray, setBarNotifyArray] = useState([]);
  const [flipBarNotifyArray, setFlipBarNotifyArray] = useState([]);
  const [circleNotifyArray, setCircleNotifyArray] = useState([]);
  const [simpleNotifyArray, setSimpleNotifyArray] = useState([]);

  const notifyOptions = [
    { value: "info", label: "Info" },
    { value: "warning", label: "Warning" },
    { value: "success", label: "Success" },
    { value: "danger", label: "Danger" },
    { value: "default", label: "Default" },
  ];

  const [notifyType, setNotifyType] = useState(notifyOptions[2].value);
  const [description, setDescription] = useState(
    "This notification looks so perfect!"
  );

  return (
    <div className="page-content-wrapper ">
      {/* START PAGE CONTENT */}

      <div className="content">
        <div className="jumbotron" data-pages="parallax">
          <PageContainer
            className={
              path.includes("/executive") || path.includes("/casual")
                ? "container p-l-10"
                : " "
            }
          >
            <div className="inner">
              <Breadcrumb>
                <li className="breadcrumb-item">
                  <a href="javascript:void(0);">UI Elements</a>
                </li>
                <li className="breadcrumb-item active">Notifications</li>
              </Breadcrumb>

              <div className="container-md-height m-b-20">
                <div className="row m-md-0">
                  <div className="col-xl-7 col-lg-6 bg-white">
                    <div className="full-height">
                      <div className="card-body text-center">
                        <img
                          className="image-responsive-height demo-mw-500"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/img/demo/notifications_hero.gif"
                          }
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6 col-top">
                    <div className="card card-transparent">
                      <div className="card-header ">
                        <div className="card-title">Getting started</div>
                      </div>
                      <div className="card-body">
                        <h3>For Your Information - FYI</h3>
                        <p>
                          Breaking convention again, we have introduced a
                          notification system which variates based on the type
                          and level of importance of the message. Thanks to
                          this, an alert by the side of your screen would easily
                          catch your attention.
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
                              data-src-retina="assets/img/profiles/avatar_small2x.jpg"
                            />
                            <div className="chat-status available"></div>
                          </div>
                          <div className="inline m-l-10">
                            <p className="small hint-text m-t-5">
                              Informational, Temporary, Contextual
                              <br /> Get Notified
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </PageContainer>
        </div>

        <PageContainer
          className={
            path.includes("/executive") || path.includes("/casual")
              ? "container"
              : " "
          }
        >
          <div className="row">
            <div className="col-md-6">
              <div className="card card-transparent">
                <div className="card-header ">
                  <div className="card-title">Pages notification</div>
                </div>
                <div className="card-body">
                  <p>
                    Notifications provide alerts and related information for
                    pages Framework.As an important part of pages user
                    interface, we made a tool for much easier visualizations
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card card-transparent">
                <div className="card-header ">
                  <div className="card-title">Alert</div>
                </div>
                <div className="card-body">
                  <p>
                    Individual alerts will be visible and depending on the level
                    of its importance, will have dedicated colors and sized
                    indicating specified scenarios.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card card-transparent">
                <div className="card-header ">
                  <div className="card-title">Robust and lightweight</div>
                </div>
                <div className="card-body">
                  <p>
                    CSS3 powered transitions and animations for greater user
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>

        <PageContainer
          className={
            path.includes("/executive") || path.includes("/casual")
              ? "container bg-white"
              : "bg-white "
          }
        >
          <div className="row">
            <div className="col-md-6">
              <div className="card card-transparent">
                <div className="card-header ">
                  <div className="card-title">Select a notification style</div>
                </div>
                <div className="card-body">
                  <ul
                    className="nav nav-tabs no-border notification-tabs"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className={`btn btn-default btn-cons btn-rounded btn-notification-style m-b-10 ${
                          activeTab[0] ? "active" : ""
                        }`}
                        href="javascript:void(0);"
                        role="tab"
                        data-toggle="tab"
                        data-type="position-bar"
                        data-target="#loadingBar"
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveTab([true, false, false, false]);
                          setBarNotifyArray([]);
                          setFlipBarNotifyArray([]);
                          setCircleNotifyArray([]);
                          setSimpleNotifyArray([]);
                          setPosition(barAlert[0] ? "top" : "bottom");
                          setPositionStyle({});
                        }}
                        aria-selected={`${activeTab[0] ? "true" : "false"}`}
                      >
                        Bar
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`btn btn-default btn-cons btn-rounded btn-notification-style m-b-10 ${
                          activeTab[1] ? "active" : ""
                        }`}
                        href="javascript:void(0);"
                        role="tab"
                        data-toggle="tab"
                        data-type="position-flip"
                        data-target="#bouncyFlip"
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveTab([false, true, false, false]);
                          setBarNotifyArray([]);
                          setFlipBarNotifyArray([]);
                          setCircleNotifyArray([]);
                          setSimpleNotifyArray([]);
                          setPosition(() => {
                            if (flipBarAlert[0]) return "top-left";
                            if (flipBarAlert[1]) return "top-right";
                            if (flipBarAlert[2]) return "bottom-left";
                            if (flipBarAlert[3]) return "bottom-right";
                          });
                          setPositionStyle(() => {
                            if (flipBarAlert[0]) return { top: "59px" };
                            if (flipBarAlert[1]) return { top: "59px" };
                            if (flipBarAlert[2]) return {};
                            if (flipBarAlert[3]) return {};
                          });
                        }}
                        aria-selected={`${activeTab[1] ? "true" : "false"}`}
                      >
                        Flip Bar
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`btn btn-default btn-cons btn-rounded btn-notification-style m-b-10 ${
                          activeTab[2] ? "active" : ""
                        }`}
                        href="javascript:void(0);"
                        role="tab"
                        data-toggle="tab"
                        data-type="position-circle"
                        data-target="#circleNotification"
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveTab([false, false, true, false]);
                          setBarNotifyArray([]);
                          setFlipBarNotifyArray([]);
                          setCircleNotifyArray([]);
                          setSimpleNotifyArray([]);
                          setPosition(() => {
                            if (circleAlert[0]) return "top-left";
                            if (circleAlert[1]) return "top-right";
                            if (circleAlert[2]) return "bottom-left";
                            if (circleAlert[3]) return "bottom-right";
                          });
                          setPositionStyle(() => {
                            if (circleAlert[0]) return { top: "59px" };
                            if (circleAlert[1]) return { top: "59px" };
                            if (circleAlert[2]) return {};
                            if (circleAlert[3]) return {};
                          });
                        }}
                        aria-selected={`${activeTab[2] ? "true" : "false"}`}
                      >
                        Circle
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`btn btn-default btn-cons btn-rounded btn-notification-style m-b-10 ${
                          activeTab[3] ? "active" : ""
                        }`}
                        href="javascript:void(0);"
                        role="tab"
                        data-toggle="tab"
                        data-type="position-simple"
                        data-target="#simpleAlert"
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveTab([false, false, false, true]);
                          setBarNotifyArray([]);
                          setFlipBarNotifyArray([]);
                          setCircleNotifyArray([]);
                          setSimpleNotifyArray([]);
                          setPosition(() => {
                            if (simpleAlert[0]) return "top-left";
                            if (simpleAlert[1]) return "top-right";
                            if (simpleAlert[2]) return "bottom-left";
                            if (simpleAlert[3]) return "bottom-right";
                          });
                          setPositionStyle(() => {
                            if (simpleAlert[0]) return { top: "59px" };
                            if (simpleAlert[1]) return { top: "59px" };
                            if (simpleAlert[2]) return {};
                            if (simpleAlert[3]) return {};
                          });
                        }}
                        aria-selected={`${activeTab[3] ? "true" : "false"}`}
                      >
                        Simple Alert
                      </a>
                    </li>
                  </ul>
                  <div className="config-notification">
                    <div className="tab-content">
                      <div
                        className={`tab-pane ${activeTab[0] ? "active" : ""}`}
                        id="loadingBar"
                      >
                        <h4 className="semi-bold">Notification Bar</h4>
                        <h5 className="">Awesome Loading Circle Animation</h5>
                        <p className="small hint-text">
                          Highly Customizable, Change radius, Add Content Change
                          X , Y Axis, Change svg animation
                        </p>
                      </div>
                      <div
                        className={`tab-pane ${activeTab[1] ? "active" : ""}`}
                        id="bouncyFlip"
                      >
                        <h4 className="semi-bold">Flip Bar</h4>
                        <h5 className="">Awesome Loading Circle Animation</h5>
                        <p className="small hint-text">
                          Highly Customizable, Change radius, Add Content Change
                          X , Y Axis, Change svg animation
                        </p>
                      </div>
                      <div
                        className={`tab-pane ${activeTab[2] ? "active" : ""}`}
                        id="circleNotification"
                      >
                        <h4 className="semi-bold">Circle Notification</h4>
                        <h5 className="">Awesome Loading Circle Animation</h5>
                        <p className="small hint-text">
                          Highly Customizable, Change radius, Add Content Change
                          X , Y Axis, Change svg animation
                        </p>
                      </div>
                      <div
                        className={`tab-pane ${activeTab[3] ? "active" : ""}`}
                        id="simpleAlert"
                      >
                        <h4 className="semi-bold">Simple Alert</h4>
                        <h5 className="">Simple alert</h5>
                        <p className="small hint-text">
                          Highly Customizable, Change radius, Add Content Change
                          X , Y Axis, Change svg animation
                        </p>
                      </div>
                    </div>
                    <form action="">
                      <div className="form-group form-group-default required">
                        <label className="highlight">Message</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Type your message here"
                          defaultValue={description}
                          onChange={(e) => setDescription(e.target.value)}
                          maxLength={50}
                        />
                      </div>
                      <div className="d-flex align-items-center">
                        <Dropdown
                          options={notifyOptions}
                          defaultValue={notifyOptions[2]}
                          className="dropdown dropdown-default notification-dropdown"
                          onChange={(value) => {
                            setNotifyType(value.value);
                          }}
                        />

                        <button
                          aria-label=""
                          type="button"
                          className="btn btn-success btn-lg show-notification m-l-10"
                          onClick={() => {
                            // check active tab among four tabs, then change state accordingly
                            if (activeTab[0])
                              setBarNotifyArray((prevState) => [
                                ...prevState,
                                { type: notifyType, desc: description },
                              ]);
                            if (activeTab[1])
                              setFlipBarNotifyArray((prevState) => [
                                ...prevState,
                                { type: notifyType, desc: description },
                              ]);
                            if (activeTab[2])
                              setCircleNotifyArray((prevState) => [
                                ...prevState,
                                { type: notifyType, desc: description },
                              ]);
                            if (activeTab[3])
                              setSimpleNotifyArray((prevState) => [
                                ...prevState,
                                { type: notifyType, desc: description },
                              ]);
                          }}
                        >
                          Show
                        </button>
                      </div>
                      {/* &nbsp;&nbsp; */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-transparent">
                <div className="card-header ">
                  <div className="card-title">Select Position</div>
                </div>
                <div className="card-body">
                  <div className="hidden">
                    <ul
                      className="nav nav-tabs no-border position-tabs"
                      role="tablist"
                      id="preview-tab-position"
                    >
                      <li className="nav-item">
                        <a href="#position-bar" role="tab" data-toggle="tab">
                          Bar
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#position-flip" role="tab" data-toggle="tab">
                          Flip
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#position-circle" role="tab" data-toggle="tab">
                          Circle
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#position-simple" role="tab" data-toggle="tab">
                          Simple
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content position-tabs">
                    <div
                      className={`tab-pane fade ${
                        activeTab[0] ? "show active" : ""
                      }`}
                      id="position-bar"
                    >
                      <div className="notification-positions">
                        <div
                          className={`position pull-top ${
                            barAlert[0] ? "active" : ""
                          }`}
                          data-placement="top"
                        >
                          <img
                            alt="Loading bar"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/notifications/loading_bar.svg"
                            }
                            className=""
                            onClick={() => {
                              setBarAlertPosition([true, false]);
                              setBarNotifyArray([]);
                              setPosition("top");
                              setPositionStyle({});
                            }}
                          />
                        </div>
                        <div
                          className={`position pull-bottom ${
                            barAlert[1] ? "active" : ""
                          }`}
                          data-placement="bottom"
                        >
                          <img
                            alt="Loading bar"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/notifications/loading_bar.svg"
                            }
                            className=""
                            onClick={() => {
                              setBarAlertPosition([false, true]);
                              setBarNotifyArray([]);
                              setPosition("bottom");
                              setPositionStyle({});
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className={`tab-pane fade ${
                        activeTab[1] ? "show active" : ""
                      }`}
                      id="position-flip"
                    >
                      <div className="notification-positions">
                        <div className="pull-top full-width">
                          <div
                            className={`position pull-left ${
                              flipBarAlert[0] ? "active" : ""
                            }`}
                            data-placement="top-left"
                          >
                            <img
                              alt="Bounce progress"
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/img/notifications/bounce_progress.svg"
                              }
                              className=""
                              onClick={() => {
                                setFlipBarAlertPosition([
                                  true,
                                  false,
                                  false,
                                  false,
                                ]);
                                setFlipBarNotifyArray([]);
                                setPosition("top-left");
                                setPositionStyle({ top: "59px" });
                              }}
                            />
                          </div>
                          <div
                            className={`position pull-right ${
                              flipBarAlert[1] ? "active" : ""
                            }`}
                            data-placement="top-right"
                          >
                            <img
                              alt="Bounce progress"
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/img/notifications/bounce_progress.svg"
                              }
                              className=""
                              onClick={() => {
                                setFlipBarAlertPosition([
                                  false,
                                  true,
                                  false,
                                  false,
                                ]);
                                setFlipBarNotifyArray([]);
                                setPosition("top-right");
                                setPositionStyle({ top: "59px" });
                              }}
                            />
                          </div>
                        </div>
                        <div className="pull-bottom full-width">
                          <div
                            className={`position pull-left ${
                              flipBarAlert[2] ? "active" : ""
                            }`}
                            data-placement="bottom-left"
                          >
                            <img
                              alt="Bounce progress"
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/img/notifications/bounce_progress.svg"
                              }
                              className=""
                              onClick={() => {
                                setFlipBarAlertPosition([
                                  false,
                                  false,
                                  true,
                                  false,
                                ]);
                                setFlipBarNotifyArray([]);
                                setPosition("bottom-left");
                                setPositionStyle({});
                              }}
                            />
                          </div>
                          <div
                            className={`position pull-right ${
                              flipBarAlert[3] ? "active" : ""
                            }`}
                            data-placement="bottom-right"
                          >
                            <img
                              alt="Bounce progress"
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/img/notifications/bounce_progress.svg"
                              }
                              className=""
                              onClick={() => {
                                setFlipBarAlertPosition([
                                  false,
                                  false,
                                  false,
                                  true,
                                ]);
                                setFlipBarNotifyArray([]);
                                setPosition("bottom-right");
                                setPositionStyle({});
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`tab-pane fade ${
                        activeTab[2] ? "show active" : ""
                      }`}
                      id="position-circle"
                    >
                      <div className="notification-positions">
                        <div className="pull-top full-width">
                          <div
                            className={`position pull-left ${
                              circleAlert[0] ? "active" : ""
                            }`}
                            data-placement="top-left"
                          >
                            <img
                              alt="Circle progress"
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/img/notifications/circle_progress.svg"
                              }
                              className=""
                              onClick={() => {
                                setCircleAlertPosition([
                                  true,
                                  false,
                                  false,
                                  false,
                                ]);
                                setCircleNotifyArray([]);
                                setPosition("top-left");
                                setPositionStyle({ top: "59px" });
                              }}
                            />
                          </div>
                          <div
                            className={`position pull-right ${
                              circleAlert[1] ? "active" : ""
                            }`}
                            data-placement="top-right"
                          >
                            <img
                              alt="Circle progress"
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/img/notifications/circle_progress.svg"
                              }
                              className=""
                              onClick={() => {
                                setCircleAlertPosition([
                                  false,
                                  true,
                                  false,
                                  false,
                                ]);
                                setCircleNotifyArray([]);
                                setPosition("top-right");
                                setPositionStyle({ top: "59px" });
                              }}
                            />
                          </div>
                        </div>
                        <div className="pull-bottom full-width">
                          <div
                            className={`position pull-left ${
                              circleAlert[2] ? "active" : ""
                            }`}
                            data-placement="bottom-left"
                          >
                            <img
                              alt="Circle progress"
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/img/notifications/circle_progress.svg"
                              }
                              className=""
                              onClick={() => {
                                setCircleAlertPosition([
                                  false,
                                  false,
                                  true,
                                  false,
                                ]);
                                setCircleNotifyArray([]);
                                setPosition("bottom-left");
                                setPositionStyle({});
                              }}
                            />
                          </div>
                          <div
                            className={`position pull-right ${
                              circleAlert[3] ? "active" : ""
                            }`}
                            data-placement="bottom-right"
                          >
                            <img
                              alt="Circle progress"
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/img/notifications/circle_progress.svg"
                              }
                              className=""
                              onClick={() => {
                                setCircleAlertPosition([
                                  false,
                                  false,
                                  false,
                                  true,
                                ]);
                                setCircleNotifyArray([]);
                                setPosition("bottom-right");
                                setPositionStyle({});
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`tab-pane fade ${
                        activeTab[3] ? "show active" : ""
                      }`}
                      id="position-simple"
                    >
                      <div className="notification-positions">
                        <div className="pull-top full-width">
                          <div
                            className={`position pull-left ${
                              simpleAlert[0] ? "active" : ""
                            }`}
                            data-placement="top-left"
                          >
                            <img
                              alt="Simple alert"
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/img/notifications/simple_alert.svg"
                              }
                              className=""
                              onClick={() => {
                                setSimpleAlertPosition([
                                  true,
                                  false,
                                  false,
                                  false,
                                ]);
                                setSimpleNotifyArray([]);
                                setPosition("top-left");
                                setPositionStyle({ top: "59px" });
                              }}
                            />
                          </div>
                          <div
                            className={`position pull-right ${
                              simpleAlert[1] ? "active" : ""
                            }`}
                            data-placement="top-right"
                          >
                            <img
                              alt="Simple alert"
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/img/notifications/simple_alert.svg"
                              }
                              className=""
                              onClick={() => {
                                setSimpleAlertPosition([
                                  false,
                                  true,
                                  false,
                                  false,
                                ]);
                                setSimpleNotifyArray([]);
                                setPosition("top-right");
                                setPositionStyle({ top: "59px" });
                              }}
                            />
                          </div>
                        </div>
                        <div className="pull-bottom full-width">
                          <div
                            className={`position pull-left ${
                              simpleAlert[2] ? "active" : ""
                            }`}
                            data-placement="bottom-left"
                          >
                            <img
                              alt="Simple alert"
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/img/notifications/simple_alert.svg"
                              }
                              className=""
                              onClick={() => {
                                setSimpleAlertPosition([
                                  false,
                                  false,
                                  true,
                                  false,
                                ]);
                                setSimpleNotifyArray([]);
                                setPosition("bottom-left");
                                setPositionStyle({});
                              }}
                            />
                          </div>
                          <div
                            className={`position pull-right ${
                              simpleAlert[3] ? "active" : ""
                            }`}
                            data-placement="bottom-right"
                          >
                            <img
                              alt="Simple alert"
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/img/notifications/simple_alert.svg"
                              }
                              className=""
                              onClick={() => {
                                setSimpleAlertPosition([
                                  false,
                                  false,
                                  false,
                                  true,
                                ]);
                                setSimpleNotifyArray([]);
                                setPosition("bottom-right");
                                setPositionStyle({});
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
          <div className="card card-transparent">
            <div className="card-header " style={{ zIndex: "0" }}>
              <div className="card-title">Simple alerts</div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <h3>
                    Where ever you are we’ll keep you notified and up to date!
                  </h3>
                  <p>
                    Alerts help to gain user attention and give feedback for the
                    proccessed task. These alerts are built with different
                    backgrounds and borders to show.
                  </p>
                  <br />
                  <div>
                    <div className="profile-img-wrapper m-t-5 inline">
                      <img
                        alt="Avatar"
                        width="35"
                        height="35"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/img/profiles/avatar_small.jpg"
                        }
                        data-src={
                          process.env.PUBLIC_URL +
                          "/assets/img/profiles/avatar_small.jpg"
                        }
                        data-src-retina="assets/img/profiles/avatar_small2x.jpg"
                      />
                      <div className="chat-status available" />
                    </div>
                  </div>
                  <div className="inline m-l-10">
                    <p className="small hint-text m-t-5">
                      VIA senior product manage
                      <br /> for UI/UX at REVOX
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 sm-p-t-15">
                  <Alert type="danger">
                    <strong>Danger: </strong>The daily report has failed
                    <button
                      aria-label=""
                      className="close"
                      data-dismiss="alert"
                    ></button>
                  </Alert>
                  <Alert type="warning">
                    <strong>Warning: </strong>Bandwidth limit exceeded
                    <button
                      aria-label=""
                      className="close"
                      data-dismiss="alert"
                    ></button>
                  </Alert>
                  <Alert type="success">
                    <strong>Success: </strong>The page has been added.
                    <button
                      aria-label=""
                      className="close"
                      data-dismiss="alert"
                    ></button>
                  </Alert>
                  <Alert type="info">
                    <strong>Info: </strong>You have 198 messages
                    <button
                      aria-label=""
                      className="close"
                      data-dismiss="alert"
                    ></button>
                  </Alert>
                </div>
              </div>
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
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="card card-transparent">
                <div className="card-header ">
                  <div className="card-title">Descriptive alerts</div>
                </div>
                <div className="card-body">
                  <p>
                    Alerts can be multi-lined. Feel free to include any HTML
                    inside your alerts
                  </p>
                  <br />
                  <Alert type="info">
                    <p className="pull-left">Meeting rescheduled</p>
                    <button
                      aria-label=""
                      className="close"
                      data-dismiss="alert"
                    ></button>
                    <div className="clearfix"></div>
                    <br />
                    <p>
                      The STG Meeting has been resheduled to the following date
                      : 2014-12-17
                    </p>
                    <br />
                    <p>
                      Please complete the attendance form to confirm your
                      attendance
                    </p>
                  </Alert>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="card card-transparent">
                <div className="card-header ">
                  <div className="card-title">Alert with link</div>
                </div>
                <div className="card-body">
                  <p>
                    You can also use a link to show more information about the
                    notification. Use the .alert-link utility class to quickly
                    provide matching colored links within any alert.
                  </p>
                  <br />
                  <Alert type="info" className="d-flex">
                    <p className="mr-auto overflow-ellipsis col-6 no-padding">
                      Your data limit has exceeded
                    </p>
                    <p className="bold no-margin">
                      <a href="javascript:void(0);" className="text-complete">
                        See all now
                      </a>
                    </p>
                    <button
                      aria-label=""
                      className="close"
                      data-dismiss="alert"
                    ></button>
                    <div className="clearfix"></div>
                  </Alert>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="card card-transparent">
                <div className="card-header ">
                  <div className="card-title">Bordered alerts</div>
                </div>
                <div className="card-body">
                  <p>
                    By default all Pages alerts are borderless. To add a border,
                    simply append the class .bordered
                  </p>
                  <br />
                  <Alert type="info" className="bordered">
                    <p className="pull-left">
                      <strong>Info:</strong> You have 198 messages
                    </p>
                    <button
                      aria-label=""
                      className="close"
                      data-dismiss="alert"
                    ></button>
                    <div className="clearfix"></div>
                  </Alert>
                </div>
              </div>
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
          <div className="row">
            <div className="col-md-6">
              <div className="card card-transparent">
                <div className="card-header ">
                  <div className="card-title">Simple labels</div>
                </div>
                <div className="card-body">
                  <div className="row-fluid">
                    <p>
                      A label, with optional background colors. Use the
                      <code>label</code>class to create a label
                    </p>
                    <br />
                    <span className="label">DEFAULT</span>&nbsp;&nbsp;
                    <span className="label label-success">VIEW</span>
                    &nbsp;&nbsp;
                    <span className="label label-warning">HOLD</span>
                    &nbsp;&nbsp;
                    <span className="label label-important">ALERT</span>
                    &nbsp;&nbsp;
                    <span className="label label-info">SUCCESS</span>
                    &nbsp;&nbsp;
                    <span className="label label-inverse">SOLD</span>
                    &nbsp;&nbsp;
                    <br />
                    <br />
                    <h4>
                      Badge
                      <span className="semi-bold">Variations</span>
                    </h4>
                    <p>
                      A Badge, with optional background colors. Use the
                      <code>badge</code>class to create a Badge
                    </p>
                    <Badge>2</Badge>&nbsp;&nbsp;
                    <Badge type="success">8</Badge>&nbsp;&nbsp;
                    <Badge type="warning">12</Badge>&nbsp;&nbsp;
                    <Badge type="important">300</Badge>&nbsp;&nbsp;
                    <Badge type="info">25</Badge>&nbsp;&nbsp;
                    <Badge type="inverse">5</Badge>&nbsp;&nbsp;
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-transparent">
                <div className="card-header ">
                  <div className="card-title">Tooltips</div>
                </div>
                <div className="card-body">
                  <p>
                    Tooltips can be a helpful way to provide information to
                    visitors without creating clutter in a design. Tooltip
                    plugin lets you transform native tooltip’s into customizable
                    overlays. You can adjust their content, position and
                    appearance.
                  </p>
                  <br />
                  {/* START tooltip up */}
                  <button
                    data-tip="Up here"
                    data-htmlfor="btn-tip-up"
                    className="btn btn-default tip m-b-5 m-r-5"
                    type="button"
                  >
                    Top
                  </button>
                  <ReactTooltip id="btn-tip-up" type="dark">
                    <span>Up here!</span>
                  </ReactTooltip>
                  {/* END tooltip up */}
                  {/* START tooltip right */}
                  <button
                    data-tip="Hello there"
                    data-htmlfor="btn-tip-right"
                    className="btn btn-default tip m-b-5 m-r-5"
                    type="button"
                  >
                    Right
                  </button>
                  <ReactTooltip id="btn-tip-right" type="dark" place="right">
                    <span>Hello there!</span>
                  </ReactTooltip>
                  {/* END tooltip right */}
                  {/* START tooltip bottom */}
                  <button
                    data-tip="Look down"
                    data-htmlfor="btn-tip-down"
                    className="btn btn-default tip m-b-5 m-r-5"
                    type="button"
                  >
                    Down
                  </button>
                  <ReactTooltip place="bottom" id="btn-tip-down" type="dark">
                    <span>Look down!</span>
                  </ReactTooltip>
                  {/* END tooltip bottom */}
                  {/* START tooltip left */}
                  <button
                    data-tip="Over here"
                    data-htmlfor="btn-tip-left"
                    className="btn btn-default tip m-b-5 m-r-5"
                    type="button"
                  >
                    Left
                  </button>
                  <ReactTooltip id="btn-tip-left" type="dark" place="left">
                    <span>Over here!</span>
                  </ReactTooltip>
                  {/* END tooltip left */}
                  <br />
                </div>
              </div>
            </div>
          </div>
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
      <BarNotifyModule
        notifications={barNotifyArray}
        position={position}
        style={positionStyle}
      />
      <FlipBarNotifyModule
        notifications={flipBarNotifyArray}
        position={position}
        style={positionStyle}
      />
      <CircleNotifyModule
        notifications={circleNotifyArray}
        position={position}
        style={positionStyle}
      />
      <SimpleNotifyModule
        notifications={simpleNotifyArray}
        position={position}
        style={positionStyle}
      />
      {/* END PAGE CONTENT */}
    </div>
  );
};

export default content;
