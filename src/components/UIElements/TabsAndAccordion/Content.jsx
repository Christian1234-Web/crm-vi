import React, { useState } from "react";

import Breadcrumb from "../Breadcrumb";
import PageContainer from "../Containers";
import PageScroll from "../PageScroll";
import Copyright from "../../ui/Footer/Copyright";
import TabMobileDropDown from "./TabMobileSelect";
import Dropdown from "react-dropdown";

import "./style.css";

import { tabSelectOne, tabSelectTwo } from "./dropdownData";

const content = ({ path }) => {
  const [simpleTabs, setSimpleTabs] = useState([true, false, false]);
  const [leftHorizontalTabs, setLeftHorizontalTabs] = useState([
    true,
    false,
    false,
  ]);
  const [rightHorizontalTabs, setRightHorizontalTabs] = useState([
    true,
    false,
    false,
  ]);
  const [lineTriangleTabs, setLineTriangleTabs] = useState([
    true,
    false,
    false,
  ]);
  const [fillInTabs, setFillInTabs] = useState([true, false, false]);
  const [fadeEffectTabs, setFadeEffectTabs] = useState([true, false, false]);
  const [slideEffectTabs, setSlideEffectTabs] = useState([true, false, false]);

  return (
    <div className="page-content-wrapper ">
      {/* START PAGE CONTENT */}
      <div className="content ">
        <div className="jumbotron" data-pages="parallax">
          <PageContainer
            className={
              path.includes("/executive") || path.includes("/casual")
                ? "container p-l-10"
                : " "
            }
          >
            <PageScroll className="inner">
              <Breadcrumb>
                <li className="breadcrumb-item">
                  <a href="javascript:void(0);">UI Elements</a>
                </li>
                <li className="breadcrumb-item active">
                  Tabs &amp; Accordians
                </li>
              </Breadcrumb>
              <div className="row">
                <div className="col-xl-7 col-lg-6 ">
                  <div className="full-height">
                    <div className="card-body text-center">
                      <img
                        className="image-responsive-height demo-mw-600"
                        src={
                          process.env.PUBLIC_URL + "/assets/img/demo/tab.png"
                        }
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-6 ">
                  <div className="card card-transparent">
                    <div className="card-header ">
                      <div className="card-title">Getting started</div>
                    </div>
                    <div className="card-body">
                      <h3>Simply organized</h3>
                      <p>
                        Seemingly unimportant but our range of simple and
                        effective Tab choices, allows the user to select the
                        manner in which to categorize, store and obtain content.
                        All this can be done by clicking on the preferred type
                        of tab.{" "}
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
                            VIA senior product manage
                            <br /> for UI/UX at REVOX
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </PageScroll>
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
            <div className="col-lg-6">
              <div className="sm-m-l-5 sm-m-r-5">
                <div
                  className="card-group horizontal"
                  id="accordion"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <div className="card card-default m-b-0">
                    <div className="card-header " role="tab" id="headingOne">
                      <div className="card-title">
                        <a
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Collapsible Group Item
                        </a>
                      </div>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      role="alert"
                      aria-labelledby="headingOne"
                    >
                      <div className="card-body">
                        Click headers to expand/collapse content that is broken
                        into logical sections, much like tabs. Optionally,
                        toggle sections open/closed on mouseover.
                      </div>
                    </div>
                  </div>
                  <div className="card card-default m-b-0">
                    <div className="card-header " role="tab" id="headingTwo">
                      <div className="card-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Typography Variables
                        </a>
                      </div>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      role="alert"
                      aria-labelledby="headingTwo"
                    >
                      <div className="card-body">
                        <h1 className="light">
                          go explore the{" "}
                          <span className="semi-bold">world</span>
                        </h1>
                        <h4>small things in life matters the most</h4>
                        <h2>
                          Big Heading <span className="semi-bold">Body</span>,
                          <i>Variations</i>
                        </h2>
                        <h4>
                          <span className="semi-bold">Open Me</span>, Light ,{" "}
                          <span className="semi-bold">Bold</span>,{" "}
                          <i>Everything</i>
                        </h4>
                        <p>
                          is the art and technique of arranging type in order to
                          make language visible. The arrangement of type
                          involves the selection of typefaces, point size, line
                          length, leading (line spacing), adjusting the spaces
                          between groups of letters (tracking)
                        </p>
                        <p>
                          and adjusting the Case space between pairs of letters
                          (kerning). Type design is a closely related craft,
                          which some consider distinct and others a part of
                          typography
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card card-default m-b-0">
                    <div className="card-header " role="tab" id="headingThree">
                      <div className="card-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Easy Edit
                        </a>
                      </div>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      role="alert"
                      aria-labelledby="headingThree"
                    >
                      <div className="card-body">
                        Click headers to expand/collapse content that is broken
                        into logical sections, much like tabs. Optionally,
                        toggle sections open/closed on mouseover.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card card-borderless">
                <ul
                  className="nav nav-tabs nav-tabs-simple d-none d-md-flex d-lg-flex d-xl-flex"
                  role="tablist"
                  data-init-reponsive-tabs="dropdownfx"
                >
                  <li
                    className="nav-item"
                    onClick={() => setSimpleTabs([true, false, false])}
                  >
                    <a
                      className={simpleTabs[0] ? "active" : ""}
                      data-toggle="tab"
                      role="tab"
                      data-target="#tab2hellowWorld"
                      aria-selected={simpleTabs[0] ? "true" : ""}
                      href="javascript:void(0);"
                      onClick={(e) => e.preventDefault()}
                    >
                      Hello World
                    </a>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => setSimpleTabs([false, true, false])}
                  >
                    <a
                      className={simpleTabs[1] ? "active" : ""}
                      href="javascript:void(0);"
                      data-toggle="tab"
                      role="tab"
                      data-target="#tab2FollowUs"
                      aria-selected={simpleTabs[1] ? "true" : ""}
                      onClick={(e) => e.preventDefault()}
                    >
                      Hello Two
                    </a>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => setSimpleTabs([false, false, true])}
                  >
                    <a
                      className={simpleTabs[2] ? "active" : ""}
                      href="javascript:void(0);"
                      data-toggle="tab"
                      role="tab"
                      data-target="#tab2Inspire"
                      aria-selected={simpleTabs[2] ? "true" : ""}
                      onClick={(e) => e.preventDefault()}
                    >
                      Hello Three
                    </a>
                  </li>
                </ul>
                <div className="nav-tab-dropdown cs-wrapper full-width d-lg-none d-xl-none d-md-none">
                  <Dropdown
                    options={tabSelectOne}
                    defaultValue={tabSelectOne[0]}
                    className="dropdown dropdown-default tabs-dropdown"
                    onChange={(value) => {
                      if (value.value === "0") {
                        return setSimpleTabs([true, false, false]);
                      }
                      if (value.value === "1") {
                        return setSimpleTabs([false, true, false]);
                      }
                      if (value.value === "2") {
                        return setSimpleTabs([false, false, true]);
                      }
                    }}
                  />
                </div>
                <div className="tab-content">
                  <div
                    className={`tab-pane ${simpleTabs[0] ? "active" : ""}`}
                    id="tab2hellowWorld"
                  >
                    <div className="row column-seperation">
                      <div className="col-lg-6">
                        <h3>
                          <span className="semi-bold">Sometimes</span> Small
                          things in life means the most
                        </h3>
                      </div>
                      <div className="col-lg-6">
                        <h3 className="semi-bold">great tabs</h3>
                        <p>
                          Native boostrap tabs customized to Pages look and
                          feel, simply changing class name you can change color
                          as well as its animations
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`tab-pane ${simpleTabs[1] ? "active" : ""}`}
                    id="tab2FollowUs"
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <h3>
                          “ Nothing is{" "}
                          <span className="semi-bold">impossible</span>, the
                          word itself says 'I'm{" "}
                          <span className="semi-bold">possible</span>'! ”
                        </h3>
                        <p>
                          A style represents visual customizations on top of a
                          layout. By editing a style, you can use Squarespace's
                          visual interface to customize your...
                        </p>
                        <br />
                        <p className="pull-right">
                          <button
                            aria-label=""
                            type="button"
                            className="btn btn-default btn-cons"
                          >
                            White
                          </button>
                          <button
                            aria-label=""
                            type="button"
                            className="btn btn-success btn-cons"
                          >
                            Success
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`tab-pane ${simpleTabs[2] ? "active" : ""}`}
                    id="tab2Inspire"
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <h3>Follow us &amp; get updated!</h3>
                        <p>
                          Instantly connect to what's most important to you.
                          Follow your friends, experts, favorite celebrities,
                          and breaking news.
                        </p>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card card-transparent">
            <div className="card-header ">
              <div className="card-title">Tab Orientations</div>
            </div>
            <div className="card-body no-padding">
              <div className="row">
                <div className="col-xl-6">
                  <div className="card card-transparent flex-row">
                    <ul
                      className="nav nav-tabs nav-tabs-simple nav-tabs-left bg-white"
                      id="tab-3"
                    >
                      <li
                        className="nav-item"
                        onClick={() =>
                          setLeftHorizontalTabs([true, false, false])
                        }
                      >
                        <a
                          href="javascript:void(0);"
                          className={leftHorizontalTabs[0] ? "active" : ""}
                          data-toggle="tab"
                          data-target="#tab3hellowWorld"
                          aria-selected={leftHorizontalTabs[0] ? "true" : ""}
                          onClick={(e) => e.preventDefault()}
                        >
                          One
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={() =>
                          setLeftHorizontalTabs([false, true, false])
                        }
                      >
                        <a
                          href="javascript:void(0);"
                          className={leftHorizontalTabs[1] ? "active" : ""}
                          data-toggle="tab"
                          data-target="#tab3FollowUs"
                          aria-selected={leftHorizontalTabs[1] ? "true" : ""}
                          onClick={(e) => e.preventDefault()}
                        >
                          Two
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={() =>
                          setLeftHorizontalTabs([false, false, true])
                        }
                      >
                        <a
                          href="javascript:void(0);"
                          className={leftHorizontalTabs[2] ? "active" : ""}
                          data-toggle="tab"
                          data-target="#tab3Inspire"
                          aria-selected={leftHorizontalTabs[2] ? "true" : ""}
                          onClick={(e) => e.preventDefault()}
                        >
                          Three
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content bg-white">
                      <div
                        className={`tab-pane ${
                          leftHorizontalTabs[0] ? "active" : ""
                        }`}
                        id="tab3hellowWorld"
                      >
                        <div className="row column-seperation">
                          <div className="col-lg-6">
                            <h3>
                              <span className="semi-bold">Sometimes </span>Small
                              things in life means the most
                            </h3>
                          </div>
                          <div className="col-lg-6">
                            <h3 className="semi-bold">great tabs</h3>
                            <p>
                              Native boostrap tabs customized to Pages look and
                              feel, simply changing class name you can change
                              color as well as its animations
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`tab-pane ${
                          leftHorizontalTabs[1] ? "active" : ""
                        }`}
                        id="tab3FollowUs"
                      >
                        <h3>
                          “ Nothing is{" "}
                          <span className="semi-bold">impossible</span>, the
                          word itself says 'I'm{" "}
                          <span className="semi-bold">possible</span>'! ”
                        </h3>
                        <p>
                          A style represents visual customizations on top of a
                          layout. By editing a style, you can use Squarespace's
                          visual interface to customize your...
                        </p>
                        <br />
                        <p className="pull-right">
                          <button
                            aria-label=""
                            className="btn btn-default btn-cons"
                            type="button"
                          >
                            White
                          </button>
                          <button
                            aria-label=""
                            className="btn btn-success btn-cons"
                            type="button"
                          >
                            Success
                          </button>
                        </p>
                      </div>
                      <div
                        className={`tab-pane ${
                          leftHorizontalTabs[2] ? "active" : ""
                        }`}
                        id="tab3Inspire"
                      >
                        <h3>Follow us &amp; get updated!</h3>
                        <p>
                          Instantly connect to what's most important to you.
                          Follow your friends, experts, favorite celebrities,
                          and breaking news.
                        </p>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="card card-transparent flex-row-reverse">
                    <ul
                      className="nav nav-tabs nav-tabs-simple nav-tabs-right bg-white"
                      id="tab-4"
                      role="tablist"
                    >
                      <li
                        className="nav-item"
                        onClick={() =>
                          setRightHorizontalTabs([true, false, false])
                        }
                      >
                        <a
                          href="javascript:void(0);"
                          className={rightHorizontalTabs[0] ? "active" : ""}
                          data-toggle="tab"
                          role="tab"
                          data-target="#tab4hellowWorld"
                          aria-selected={() =>
                            rightHorizontalTabs[0] ? "true" : ""
                          }
                          onClick={(e) => e.preventDefault()}
                        >
                          One
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={() =>
                          setRightHorizontalTabs([false, true, false])
                        }
                      >
                        <a
                          href="javascript:void(0);"
                          className={rightHorizontalTabs[1] ? "active" : ""}
                          data-toggle="tab"
                          role="tab"
                          data-target="#tab4FollowUs"
                          aria-selected={rightHorizontalTabs[1] ? "true" : ""}
                          onClick={(e) => e.preventDefault()}
                        >
                          Two
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={() =>
                          setRightHorizontalTabs([false, false, true])
                        }
                      >
                        <a
                          href="javascript:void(0);"
                          className={rightHorizontalTabs[2] ? "active" : ""}
                          data-toggle="tab"
                          role="tab"
                          data-target="#tab4Inspire"
                          aria-selected={rightHorizontalTabs[2] ? "true" : ""}
                          onClick={(e) => e.preventDefault()}
                        >
                          Three
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content bg-white">
                      <div
                        className={`tab-pane ${
                          rightHorizontalTabs[0] ? "active" : ""
                        }`}
                        id="tab4hellowWorld"
                      >
                        <div className="row column-seperation">
                          <div className="col-lg-6">
                            <h3>
                              <span className="semi-bold">Sometimes</span> Small
                              things in life means the most
                            </h3>
                          </div>
                          <div className="col-lg-6">
                            <h3 className="semi-bold">great tabs</h3>
                            <p>
                              Native boostrap tabs customized to Pages look and
                              feel, simply changing class name you can change
                              color as well as its animations
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`tab-pane ${
                          rightHorizontalTabs[1] ? "active" : ""
                        }`}
                        id="tab4FollowUs"
                      >
                        <div className="row">
                          <div className="col-lg-12">
                            <h3>
                              “ Nothing is
                              <span className="semi-bold">impossible</span>, the
                              word itself says 'I'm
                              <span className="semi-bold">possible</span>'! ”
                            </h3>
                            <p>
                              A style represents visual customizations on top of
                              a layout. By editing a style, you can use
                              Squarespace's visual interface to customize
                              your...
                            </p>
                            <br />
                            <p className="pull-right">
                              <button
                                aria-label=""
                                type="button"
                                className="btn btn-default btn-cons"
                              >
                                White
                              </button>
                              <button
                                aria-label=""
                                type="button"
                                className="btn btn-success btn-cons"
                              >
                                Success
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`tab-pane ${
                          rightHorizontalTabs[2] ? "active" : ""
                        }`}
                        id="tab4Inspire"
                      >
                        <div className="row">
                          <div className="col-lg-12">
                            <h3>Follow us &amp; get updated!</h3>
                            <p>
                              Instantly connect to what's most important to you.
                              Follow your friends, experts, favorite
                              celebrities, and breaking news.
                            </p>
                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card card-transparent">
            <div className="card-header ">
              <div className="card-title">Tabs Styles</div>
            </div>
            <div className="card-body">
              <div
                className="alert alert-info d-lg-none d-xl-none d-md-none"
                role="alert"
              >
                <button
                  aria-label=""
                  className="close"
                  data-dismiss="alert"
                ></button>
                <strong>Info: </strong> For mobile optimization the tab will
                become a Dropdown
              </div>
              <div className="row">
                <div className="col-md-6">
                  <h5>Line Triangle Tabs</h5> Add the class
                  <code>nav-tabs-linetriangle</code> to the main wrapper of the
                  tabs
                  <br />
                  <br />
                  <div className="card card-transparent">
                    <ul
                      className="nav nav-tabs nav-tabs-linetriangle d-none d-md-flex d-lg-flex d-xl-flex"
                      data-init-reponsive-tabs="dropdownfx"
                    >
                      <li
                        className="nav-item"
                        onClick={() =>
                          setLineTriangleTabs([true, false, false])
                        }
                      >
                        <a
                          className={lineTriangleTabs[0] ? "active" : ""}
                          data-toggle="tab"
                          data-target="#home"
                          href="javascript:void(0);"
                          aria-selected={lineTriangleTabs[0] ? "true" : ""}
                          onClick={(e) => e.preventDefault()}
                        >
                          <span>Hello World</span>
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={() =>
                          setLineTriangleTabs([false, true, false])
                        }
                      >
                        <a
                          className={lineTriangleTabs[1] ? "active" : ""}
                          data-toggle="tab"
                          data-target="#profile"
                          href="javascript:void(0);"
                          aria-selected={lineTriangleTabs[1] ? "true" : ""}
                          onClick={(e) => e.preventDefault()}
                        >
                          <span>Hello Two</span>
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={() =>
                          setLineTriangleTabs([false, false, true])
                        }
                      >
                        <a
                          className={lineTriangleTabs[2] ? "active" : ""}
                          data-toggle="tab"
                          data-target="#messages"
                          href="javascript:void(0);"
                          aria-selected={lineTriangleTabs[2] ? "true" : ""}
                          onClick={(e) => e.preventDefault()}
                        >
                          <span>Hello Three</span>
                        </a>
                      </li>
                    </ul>
                    <div
                      className="nav-tab-dropdown cs-wrapper full-width d-lg-none d-xl-none d-md-none"
                      style={{ marginBottom: "-5px" }}
                    >
                      <Dropdown
                        defaultValue={tabSelectOne[0]}
                        options={tabSelectOne}
                        className="dropdown dropdown-default tabs-dropdown"
                        onChange={(value) => {
                          if (value.value === "0") {
                            return setLineTriangleTabs([true, false, false]);
                          }
                          if (value.value === "1") {
                            return setLineTriangleTabs([false, true, false]);
                          }
                          if (value.value === "2") {
                            return setLineTriangleTabs([false, false, true]);
                          }
                        }}
                      />
                    </div>

                    <div className="tab-content">
                      <div
                        className={`tab-pane ${
                          lineTriangleTabs[0] ? "active" : ""
                        }`}
                        id="home"
                      >
                        <div className="row column-seperation">
                          <div className="col-lg-6">
                            <h3>
                              <span className="semi-bold">Sometimes</span> Small
                              things in life means the most
                            </h3>
                          </div>
                          <div className="col-lg-6">
                            <h3 className="semi-bold">great tabs</h3>
                            <p>
                              Native boostrap tabs customized to Pages look and
                              feel, simply changing class name you can change
                              color as well as its animations
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`tab-pane ${
                          lineTriangleTabs[1] ? "active" : ""
                        }`}
                        id="profile"
                      >
                        <div className="row">
                          <div className="col-lg-12">
                            <h3>
                              “ Nothing is
                              <span className="semi-bold">impossible</span>, the
                              word itself says 'I'm
                              <span className="semi-bold">possible</span>'! ”
                            </h3>
                            <p>
                              A style represents visual customizations on top of
                              a layout. By editing a style, you can use
                              Squarespace's visual interface to customize
                              your...
                            </p>
                            <br />
                            <p className="pull-right">
                              <button
                                aria-label=""
                                type="button"
                                className="btn btn-default btn-cons"
                              >
                                White
                              </button>
                              <button
                                aria-label=""
                                type="button"
                                className="btn btn-success btn-cons"
                              >
                                Success
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`tab-pane ${
                          lineTriangleTabs[2] ? "active" : ""
                        }`}
                        id="messages"
                      >
                        <div className="row">
                          <div className="col-lg-12">
                            <h3>Follow us &amp; get updated!</h3>
                            <p>
                              Instantly connect to what's most important to you.
                              Follow your friends, experts, favorite
                              celebrities, and breaking news.
                            </p>
                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <h5>Fill In Tabs</h5> Add the class
                  <code>nav-tabs-fillup</code> to the main wrapper of the tabs
                  <br />
                  <br />
                  <div className="card card-transparent ">
                    <ul
                      className="nav nav-tabs nav-tabs-fillup d-none d-md-flex d-lg-flex d-xl-flex"
                      data-init-reponsive-tabs="dropdownfx"
                    >
                      <li
                        className="nav-item"
                        onClick={() => setFillInTabs([true, false, false])}
                      >
                        <a
                          href="javascript:void(0);"
                          className={fillInTabs[0] ? "active" : ""}
                          data-toggle="tab"
                          aria-selected={fillInTabs[0] ? "true" : ""}
                          onClick={(e) => e.preventDefault()}
                        >
                          <span>Home</span>
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={() => setFillInTabs([false, true, false])}
                      >
                        <a
                          href="javascript:void(0);"
                          className={fillInTabs[1] ? "active" : ""}
                          data-toggle="tab"
                          data-target="#tab-fillup2"
                          aria-selected={fillInTabs[1] ? "true" : ""}
                          onClick={(e) => e.preventDefault()}
                        >
                          <span>Profile</span>
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={() => setFillInTabs([false, false, true])}
                      >
                        <a
                          href="javascript:void(0);"
                          className={fillInTabs[2] ? "active" : ""}
                          data-toggle="tab"
                          data-target="#tab-fillup3"
                          aria-selected={fillInTabs[2] ? "true" : ""}
                          onClick={(e) => e.preventDefault()}
                        >
                          <span>Messages</span>
                        </a>
                      </li>
                    </ul>
                    <div
                      className="nav-tab-dropdown cs-wrapper full-width d-lg-none d-xl-none d-md-none"
                      style={{ marginBottom: "-5px" }}
                    >
                      <Dropdown
                        defaultValue={tabSelectTwo[0]}
                        options={tabSelectTwo}
                        className="dropdown dropdown-default tabs-dropdown"
                        onChange={(value) => {
                          if (value.value === "0") {
                            return setFillInTabs([true, false, false]);
                          }
                          if (value.value === "1") {
                            return setFillInTabs([false, true, false]);
                          }
                          if (value.value === "2") {
                            return setFillInTabs([false, false, true]);
                          }
                        }}
                      />
                    </div>

                    <div className="tab-content">
                      <div
                        className={`tab-pane ${fillInTabs[0] ? "active" : ""}`}
                      >
                        <div className="row column-seperation">
                          <div className="col-lg-6">
                            <h3>
                              <span className="semi-bold">Sometimes</span> Small
                              things in life means the most
                            </h3>
                          </div>
                          <div className="col-lg-6">
                            <h3 className="semi-bold">great tabs</h3>
                            <p>
                              Native boostrap tabs customized to Pages look and
                              feel, simply changing class name you can change
                              color as well as its animations
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`tab-pane ${fillInTabs[1] ? "active" : ""}`}
                        id="tab-fillup2"
                      >
                        <div className="row">
                          <div className="col-lg-12">
                            <h3>
                              “ Nothing is
                              <span className="semi-bold">impossible</span>, the
                              word itself says 'I'm
                              <span className="semi-bold">possible</span>'! ”
                            </h3>
                            <p>
                              A style represents visual customizations on top of
                              a layout. By editing a style, you can use
                              Squarespace's visual interface to customize
                              your...
                            </p>
                            <br />
                            <p className="pull-right">
                              <button
                                aria-label=""
                                type="button"
                                className="btn btn-default btn-cons"
                              >
                                White
                              </button>
                              <button
                                aria-label=""
                                type="button"
                                className="btn btn-success btn-cons"
                              >
                                Success
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`tab-pane ${fillInTabs[2] ? "active" : ""}`}
                        id="tab-fillup3"
                      >
                        <div className="row">
                          <div className="col-lg-12">
                            <h3>Follow us &amp; get updated!</h3>
                            <p>
                              Instantly connect to what's most important to you.
                              Follow your friends, experts, favorite
                              celebrities, and breaking news.
                            </p>
                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card card-transparent">
            <div className="card-header ">
              <div className="card-title">Tabs Pane Transitions</div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h5>Fade effect</h5> Add the class
                  <code>fade</code> to the tab panes
                  <br />
                  <br />
                  <div className="card card-transparent">
                    <ul
                      className="nav nav-tabs nav-tabs-linetriangle d-none d-md-flex d-lg-flex d-xl-flex"
                      data-init-reponsive-tabs="dropdownfx"
                    >
                      <li
                        className="nav-item"
                        onClick={() => setFadeEffectTabs([true, false, false])}
                      >
                        <a
                          href="javascript:void(0);"
                          className={fadeEffectTabs[0] ? "active" : ""}
                          data-toggle="tab"
                          data-target="#fade1"
                          onClick={(e) => e.preventDefault()}
                        >
                          <span>Hello World</span>
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={() => setFadeEffectTabs([false, true, false])}
                      >
                        <a
                          href="javascript:void(0);"
                          className={fadeEffectTabs[1] ? "active" : ""}
                          data-toggle="tab"
                          data-target="#fade2"
                          onClick={(e) => e.preventDefault()}
                        >
                          <span>Hello Two</span>
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={() => setFadeEffectTabs([false, false, true])}
                      >
                        <a
                          href="javascript:void(0);"
                          className={fadeEffectTabs[2] ? "active" : ""}
                          data-toggle="tab"
                          data-target="#fade3"
                          onClick={(e) => e.preventDefault()}
                        >
                          <span>Hello Three</span>
                        </a>
                      </li>
                    </ul>
                    <div
                      className="nav-tab-dropdown cs-wrapper full-width d-lg-none d-xl-none d-md-none"
                      style={{ marginBottom: "-5px" }}
                    >
                      <Dropdown
                        className="dropdown dropdown-default tabs-dropdown"
                        defaultValue={tabSelectOne[0]}
                        options={tabSelectOne}
                        onChange={(value) => {
                          if (value.value === "0") {
                            return setFadeEffectTabs([true, false, false]);
                          }
                          if (value.value === "1") {
                            return setFadeEffectTabs([false, true, false]);
                          }
                          if (value.value === "2") {
                            return setFadeEffectTabs([false, false, true]);
                          }
                        }}
                      />
                    </div>

                    <div className="tab-content">
                      <div
                        className={`tab-pane fade ${
                          fadeEffectTabs[0] ? "show active" : ""
                        }`}
                        id="fade1"
                      >
                        <div className="row column-seperation">
                          <div className="col-lg-6">
                            <h3>
                              <span className="semi-bold">Sometimes</span> Small
                              things in life means the most
                            </h3>
                          </div>
                          <div className="col-lg-6">
                            <h3 className="semi-bold">great tabs</h3>
                            <p>
                              Native boostrap tabs customized to Pages look and
                              feel, simply changing class name you can change
                              color as well as its animations
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`tab-pane fade ${
                          fadeEffectTabs[1] ? "show active" : ""
                        }`}
                        id="fade2"
                      >
                        <div className="row">
                          <div className="col-lg-12">
                            <h3>
                              “ Nothing is
                              <span className="semi-bold">impossible</span>, the
                              word itself says 'I'm
                              <span className="semi-bold">possible</span>'! ”
                            </h3>
                            <p>
                              A style represents visual customizations on top of
                              a layout. By editing a style, you can use
                              Squarespace's visual interface to customize
                              your...
                            </p>
                            <br />
                            <p className="pull-right">
                              <button
                                aria-label=""
                                type="button"
                                className="btn btn-default btn-cons"
                              >
                                White
                              </button>
                              <button
                                aria-label=""
                                type="button"
                                className="btn btn-success btn-cons"
                              >
                                Success
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`tab-pane fade ${
                          fadeEffectTabs[2] ? "show active" : ""
                        }`}
                        id="fade3"
                      >
                        <div className="row">
                          <div className="col-lg-12">
                            <h3>Follow us &amp; get updated!</h3>
                            <p>
                              Instantly connect to what's most important to you.
                              Follow your friends, experts, favorite
                              celebrities, and breaking news.
                            </p>
                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <h5>Slide effect</h5> Add the class
                  <code>slide-left</code> or <code>slide-right</code> to the tab
                  panes
                  <br />
                  <br />
                  <div className="card card-transparent ">
                    <ul
                      className="nav nav-tabs nav-tabs-fillup d-none d-md-flex d-lg-flex d-xl-flex"
                      data-init-reponsive-tabs="dropdownfx"
                    >
                      <li
                        className="nav-item"
                        onClick={() => setSlideEffectTabs([true, false, false])}
                      >
                        <a
                          href="javascript:void(0);"
                          className={slideEffectTabs[0] ? "active" : ""}
                          data-toggle="tab"
                          data-target="#slide1"
                          onClick={(e) => e.preventDefault()}
                        >
                          <span>Home</span>
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={() => setSlideEffectTabs([false, true, false])}
                      >
                        <a
                          href="javascript:void(0);"
                          className={slideEffectTabs[1] ? "active" : ""}
                          data-toggle="tab"
                          data-target="#slide2"
                          onClick={(e) => e.preventDefault()}
                        >
                          <span>Profile</span>
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={() => setSlideEffectTabs([false, false, true])}
                      >
                        <a
                          href="javascript:void(0);"
                          className={slideEffectTabs[2] ? "active" : ""}
                          data-toggle="tab"
                          data-target="#slide3"
                          onClick={(e) => e.preventDefault()}
                        >
                          <span>Messages</span>
                        </a>
                      </li>
                    </ul>
                    <div
                      className="nav-tab-dropdown cs-wrapper full-width d-lg-none d-xl-none d-md-none"
                      style={{ marginBottom: "-5px" }}
                    >
                      <Dropdown
                        className="dropdown dropdown-default tabs-dropdown"
                        defaultValue={tabSelectTwo[0]}
                        options={tabSelectTwo}
                        onChange={(value) => {
                          if (value.value === "0") {
                            return setSlideEffectTabs([true, false, false]);
                          }
                          if (value.value === "1") {
                            return setSlideEffectTabs([false, true, false]);
                          }
                          if (value.value === "2") {
                            return setSlideEffectTabs([false, false, true]);
                          }
                        }}
                      />
                    </div>

                    <div className="tab-content">
                      <div
                        className={`tab-pane ${
                          slideEffectTabs[0] ? "slide-left active" : ""
                        }`}
                        id="slide1"
                      >
                        <div className="row column-seperation">
                          <div className="col-lg-6">
                            <h3>
                              <span className="semi-bold">Sometimes</span> Small
                              things in life means the most
                            </h3>
                          </div>
                          <div className="col-lg-6">
                            <h3 className="semi-bold">great tabs</h3>
                            <p>
                              Native boostrap tabs customized to Pages look and
                              feel, simply changing class name you can change
                              color as well as its animations
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`tab-pane slide-left ${
                          slideEffectTabs[1] ? "active" : ""
                        }`}
                        id="slide2"
                      >
                        <div className="row">
                          <div className="col-lg-12">
                            <h3>
                              “ Nothing is
                              <span className="semi-bold">impossible</span>, the
                              word itself says 'I'm
                              <span className="semi-bold">possible</span>'! ”
                            </h3>
                            <p>
                              A style represents visual customizations on top of
                              a layout. By editing a style, you can use
                              Squarespace's visual interface to customize
                              your...
                            </p>
                            <br />
                            <p className="pull-right">
                              <button
                                aria-label=""
                                type="button"
                                className="btn btn-default btn-cons"
                              >
                                White
                              </button>
                              <button
                                aria-label=""
                                type="button"
                                className="btn btn-success btn-cons"
                              >
                                Success
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`tab-pane slide-left ${
                          slideEffectTabs[2] ? "active" : ""
                        }`}
                        id="slide3"
                      >
                        <div className="row">
                          <div className="col-lg-12">
                            <h3>Follow us &amp; get updated!</h3>
                            <p>
                              Instantly connect to what's most important to you.
                              Follow your friends, experts, favorite
                              celebrities, and breaking news.
                            </p>
                            <br />
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
