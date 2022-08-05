import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import QuickViewAction from "../../../redux/actions";

const Content = ({ location, inboxHeader = null, openMobileToggle }) => {
  const { innerWidth: width } = window;
  const path = location.pathname;
  const customDropdown =
    location.pathname === "/email" || location.pathname === "/compose_email" ? (
      <a
        href="javascript:void(0);"
        className="toggle-secondary-sidebar"
        onClick={() =>
          inboxHeader !== null ? inboxHeader((prevState) => !prevState) : null
        }
      >
        <span className="d-flex align-items-center">
          Inbox <span className="text-info">(12)</span>{" "}
          <span className="pg-icon">drop_down</span>
        </span>
      </a>
    ) : null;
  const [shouldShowProfile, setShouldShowProfile] = useState(false);
  const [showUiDropdown, setShowUiDropdown] = useState(false);
  const [showExtraDropdown, setShowExtraDropdown] = useState(false);
  const [showCalDropdown, setShowCalDropdown] = useState(false);
  const [showFormDropdown, setShowFormDropdown] = useState(false);
  const [showTableDropdown, setShowTableDropdown] = useState(false);
  const [showMapDropdown, setShowMapDropdown] = useState(false);

  const dispatch = useDispatch();
  const {
    toggleQuickViewOpen,
    toggleMobileSideBarOpen,
    toggleMobileSideBarClose,
  } = QuickViewAction;

  const [mobileSidebarToggle, setMobileSidebarToggle] = useState(false);

  React.useEffect(() => {
    openMobileToggle(mobileSidebarToggle);
    if (mobileSidebarToggle) {
      dispatch(toggleMobileSideBarOpen());
    } else {
      dispatch(toggleMobileSideBarClose());
    }
  }, [mobileSidebarToggle]);

  if(path.includes("/casual")){
	  document.body.classList.add(
		"horizontal-menu",
		"js-focus-visible",
		"mac",
		"desktop"
	  );
  }
  if (mobileSidebarToggle) {
    document.body.classList.remove("dashboard");
    document.body.classList.add(
      "mobile",
	  "pace-running"
    );
  } else {
    document.body.classList.remove(
      "mobile",
	  "pace-running"
    );
    document.body.classList.add("dashboard");
  }

  function expand(item) {
    // console.log(item);
    if (item == "calendar") {
      setShowCalDropdown(!showCalDropdown);
      setShowFormDropdown(false);
      setShowUiDropdown(false);
      setShowExtraDropdown(false);
      setShowMapDropdown(false);
      setShowTableDropdown(false);
    } else if (item == "ui_elements") {
      setShowCalDropdown(false);
      setShowFormDropdown(false);
      setShowUiDropdown(!showUiDropdown);
      setShowExtraDropdown(false);
      setShowMapDropdown(false);
      setShowTableDropdown(false);
    } else if (item == "forms") {
      setShowCalDropdown(false);
      setShowFormDropdown(!showFormDropdown);
      setShowUiDropdown(false);
      setShowExtraDropdown(false);
      setShowMapDropdown(false);
      setShowTableDropdown(false);
    } else if (item == "extra") {
      setShowCalDropdown(false);
      setShowFormDropdown(false);
      setShowUiDropdown(false);
      setShowExtraDropdown(!showExtraDropdown);
      setShowMapDropdown(false);
      setShowTableDropdown(false);
    } else if (item == "maps") {
      setShowCalDropdown(false);
      setShowFormDropdown(false);
      setShowUiDropdown(false);
      setShowExtraDropdown(false);
      setShowMapDropdown(!showMapDropdown);
      setShowTableDropdown(false);
    } else if (item == "tables") {
      setShowCalDropdown(false);
      setShowFormDropdown(false);
      setShowUiDropdown(false);
      setShowExtraDropdown(false);
      setShowMapDropdown(false);
      setShowTableDropdown(!showTableDropdown);
    }
  }

  return (
    <React.Fragment>
      <div className="d-flex flex-column w-100">
        <div className="header-inner header-md-height casual-header bg-primary p-l-20 p-r-20">
          <a
            href="javascript:void(0);"
            className="btn-link toggle-sidebar d-lg-none pg-icon btn-icon-link"
            data-toggle="sidebar"
            onClick={() => {
              setMobileSidebarToggle((prevState) => !prevState);
            }}
            style={{ color: "white" }}
          >
            menu
          </a>

          <div className="">
            {customDropdown}
            <div
              className="brand inline no-border d-sm-inline-block"
              style={{ width: "100px", marginLeft: 10 }}
            >
              <img
                src={process.env.PUBLIC_URL + "/assets/img/logo_white_2x.png"}
                alt="logo"
                data-src={process.env.PUBLIC_URL + "/assets/img/logo.png"}
                data-src-retina="/assets/img/logo_2x.png"
                width="66"
                height="20"
              />
            </div>
            <ul className="d-lg-inline-block d-none notification-list no-margin d-lg-inline-block no-style p-l-20 p-r-20">
              <li className="p-r-10 inline">
                <div className="dropdown">
                  <a
                    href="javascript:void(0);"
                    id="notification-center"
                    className="header-icon btn-icon-link text-white"
                    data-toggle="dropdown"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="pg-icon">world</i>
                    <span className="bubble"></span>
                  </a>

                  <div
                    className="dropdown-menu notification-toggle "
                    role="menu"
                    aria-labelledby="notification-center"
                  >
                    <div className="notification-panel">
                      <div
                        className="scroll-wrapper notification-body scrollable"
                        style={{ position: "relative" }}
                      >
                        <div
                          className="notification-body scrollable scroll-content"
                          style={{
                            height: "auto",
                            marginBottom: "0px",
                            marginRight: "0px",
                          }}
                        >
                          <div className="notification-item unread clearfix">
                            <div className="heading open">
                              <a
                                href="javascript:void(0);"
                                className="text-complete pull-left d-flex align-items-center"
                              >
                                <i className="pg-icon m-r-10">map</i>
                                <span className="bold">Carrot Design</span>
                                <span className="fs-12 m-l-10">
                                  David Nester
                                </span>
                              </a>
                              <div className="pull-right">
                                <div className="thumbnail-wrapper d16 circular inline m-t-15 m-r-10 toggle-more-details">
                                  <div>
                                    <i className="pg-icon">chevron_down</i>
                                  </div>
                                </div>
                                <span className=" time">few sec ago</span>
                              </div>
                              <div className="more-details">
                                <div className="more-details-inner">
                                  <h5 className="semi-bold fs-16">
                                    “Apple’s Motivation - Innovation
                                    <br />
                                    distinguishes between <br />A leader and a
                                    follower.”
                                  </h5>
                                  <p className="small hint-text">
                                    Commented on john Smiths wall.
                                    <br /> via pages framework.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              className="option"
                              data-toggle="tooltip"
                              data-placement="left"
                              title=""
                              data-original-title="mark as read"
                            >
                              <a
                                href="javascript:void(0);"
                                className="mark"
                              ></a>
                            </div>
                          </div>
                          <div className="notification-item clearfix">
                            <div className="heading">
                              <a
                                href="javascript:void(0);"
                                className="text-danger pull-left"
                              >
                                <i className="pg-icon m-r-10">alert_warning</i>
                                <span className="bold">98% Server Load</span>
                                <span className="fs-12 m-l-10">
                                  Take Action
                                </span>
                              </a>
                              <span className="pull-right time">
                                2 mins ago
                              </span>
                            </div>

                            <div className="option">
                              <a
                                href="javascript:void(0);"
                                className="mark"
                              ></a>
                            </div>
                          </div>

                          <div className="notification-item clearfix">
                            <div className="heading">
                              <a
                                href="javascript:void(0);"
                                className="text-warning pull-left"
                              >
                                <i className="pg-icon m-r-10">alert_warning</i>
                                <span className="bold">
                                  Warning Notification
                                </span>
                                <span className="fs-12 m-l-10">Buy Now</span>
                              </a>
                              <span className="pull-right time">yesterday</span>
                            </div>

                            <div className="option">
                              <a
                                href="javascript:void(0);"
                                className="mark"
                              ></a>
                            </div>
                          </div>

                          <div className="notification-item unread clearfix">
                            <div className="heading">
                              <div className="thumbnail-wrapper d24 circular b-white m-r-5 b-a b-white m-t-10 m-r-10">
                                <img
                                  width="30"
                                  height="30"
                                  data-src-retina="/assets/img/profiles/1x.jpg"
                                  data-src={
                                    process.env.PUBLIC_URL +
                                    "/assets/img/profiles/1.jpg"
                                  }
                                  alt=""
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/assets/img/profiles/1.jpg"
                                  }
                                />
                              </div>
                              <a
                                href="javascript:void(0);"
                                className="text-complete pull-left"
                              >
                                <span className="bold">Revox Design Labs</span>
                                <span className="fs-12 m-l-10">Owners</span>
                              </a>
                              <span className="pull-right time">11:00pm</span>
                            </div>

                            <div
                              className="option"
                              data-toggle="tooltip"
                              data-placement="left"
                              title=""
                              data-original-title="mark as read"
                            >
                              <a
                                href="javascript:void(0);"
                                className="mark"
                              ></a>
                            </div>
                          </div>
                        </div>
                        <div className="scroll-element scroll-x">
                          <div className="scroll-element_outer">
                            <div className="scroll-element_size"></div>
                            <div className="scroll-element_track"></div>
                            <div className="scroll-bar"></div>
                          </div>
                        </div>
                        <div className="scroll-element scroll-y">
                          <div className="scroll-element_outer">
                            <div className="scroll-element_size"></div>
                            <div className="scroll-element_track"></div>
                            <div className="scroll-bar"></div>
                          </div>
                        </div>
                      </div>

                      <div className="notification-footer text-center">
                        <a href="javascript:void(0);" className="">
                          Read all notifications
                        </a>
                        <a
                          data-toggle="refresh"
                          className="portlet-refresh text-black pull-right"
                          href="javascript:void(0);"
                        >
                          <i className="pg-refresh_new"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="p-r-10 inline">
                <a
                  href="javascript:void(0);"
                  className="header-icon btn-icon-link"
                >
                  <i className="pg-icon text-white">link_alt</i>
                </a>
              </li>
              <li className="p-r-10 inline">
                <a
                  href="javascript:void(0);"
                  className="header-icon btn-icon-link"
                >
                  <i className="pg-icon text-white">grid_alt</i>
                </a>
              </li>
            </ul>

            <a
              href="javascript:void(0);"
              id="headerSearchInputCasual"
              className="search-link d-lg-inline-block d-none text-white"
              data-toggle="search"
            >
              <i className="pg-icon">search</i>Type anywhere to{" "}
              <span className="bold">search</span>
            </a>
          </div>
          <div className="d-flex align-items-center">
            <div
              className={`dropdown pull-right ${
                shouldShowProfile ? "show" : ""
              }`}
            >
              <button
                className="profile-dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded={shouldShowProfile ? "true" : "false"}
                aria-label="profile dropdown"
              >
                <span className="thumbnail-wrapper d32 circular inline">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/img/profiles/avatar.jpg"
                    }
                    alt=""
                    data-src={
                      process.env.PUBLIC_URL + "/assets/img/profiles/avatar.jpg"
                    }
                    data-src-retina="/assets/img/profiles/avatar_small2x.jpg"
                    width="32"
                    height="32"
                    onClick={() =>
                      setShouldShowProfile((prevState) => !prevState)
                    }
                  />
                </span>
              </button>
              <div
                style={{ width: "fit-content" }}
                className={`dropdown-menu dropdown-menu-right profile-dropdown ${
                  shouldShowProfile ? "show" : ""
                }`}
                role="menu"
              >
                <a href="javascript:void(0);" className="dropdown-item">
                  <span>
                    Signed in as <br />
                    <b>David Aunsberg</b>
                  </span>
                </a>
                <div className="dropdown-divider"></div>
                <a href="javascript:void(0);" className="dropdown-item">
                  Your Profile
                </a>
                <a href="javascript:void(0);" className="dropdown-item">
                  Your Activity
                </a>
                <a href="javascript:void(0);" className="dropdown-item">
                  Your Archive
                </a>
                <div className="dropdown-divider"></div>
                <a href="javascript:void(0);" className="dropdown-item">
                  Features
                </a>
                <a href="javascript:void(0);" className="dropdown-item">
                  Help
                </a>
                <a href="javascript:void(0);" className="dropdown-item">
                  Settings
                </a>
                <a href="javascript:void(0);" className="dropdown-item">
                  Logout
                </a>
                <div className="dropdown-divider"></div>
                <span className="dropdown-item fs-12 hint-text">
                  Last edited by David
                  <br />
                  on Friday at 5:27PM
                </span>
              </div>
            </div>

            <a
              href="javascript:void(0);"
              onClick={() => dispatch(toggleQuickViewOpen())}
              className="header-icon m-l-5 sm-no-margin d-inline-block "
              data-toggle="quickview"
              data-toggle-element="#quickview"
            >
              <i className="pg-icon btn-icon-link text-white">menu_add</i>
            </a>
          </div>
        </div>
        <div className="horizontal-app-menu">
          <div className="container">
            <div
              className={
                mobileSidebarToggle
                  ? `menu-bar  header-sm-height open p-t-10`
                  : `menu-bar  casual-menu header-sm-height p-t-10`
              }
              data-pages-init="horizontal-menu"
              data-hide-extra-li="4"
            >
              <a
                href="javascript:void(0);"
                className="btn-link header-icon toggle-sidebar d-lg-none"
                data-toggle="horizontal-menu"
                onClick={() => setMobileSidebarToggle(false)}
              >
                <i className="pg-icon">close</i>
              </a>
              <ul>
                <li
                  className={
                    path.includes("/Dashboard") || path === "/casual"
                      ? "menu-link active"
                      : "menu-link"
                  }
                >
                  <Link to="/casual">Dashboard</Link>
                </li>
                <li
                  className={
                    path.includes("/social") ? "menu-link active" : "menu-link"
                  }
                >
                  <Link to="/casual/social">
                    <span className="title">Social</span>
                  </Link>
                </li>
                {/* <li
									className={
										showCalDropdown
											? "open opening menu-link"
											: path.includes("calender")
												? "menu-link active"
												: "menu-link"
									}
								>
									<a
										href="javascript:void(0);"
										onClick={() => expand("calendar")}
									>
										<span className="title">Calendar</span>
										<span className=" arrow"></span>
									</a>
									<ul className="">
										<li className="">
											<a href="calendar">Basic</a>
										</li>
										<li className="">
											<a href="calendar_lang">Languages</a>
										</li>
										<li className="">
											<a href="calendar_month">Month</a>
										</li>
										<li className="">
											<a href="calendar_lazy">Lazy load</a>
										</li>
										<li className="">
											<a
												href="https://reactdocs.revox.io/apps/calendar"
												rel="noreferrer"
												target="_blank"
											>
												Documentation
											</a>
										</li>
									</ul>
								</li> */}
                <li
                  className={
                    showUiDropdown
                      ? "open opening menu-link"
                      : path.includes("/color") ||
                        path.includes("/typography") ||
                        path.includes("/icons") ||
                        path.includes("/buttons") ||
                        path.includes("/notifications") ||
                        path.includes("/modals") ||
                        path.includes("/progress") ||
                        path.includes("/tabs") ||
                        path.includes("/sliders") ||
                        path.includes("/tree") ||
                        path.includes("/nestables")
                      ? "menu-link active"
                      : "menu-link"
                  }
                >
                  <a
                    href="javascript:void(0);"
                    onClick={() => expand("ui_elements")}
                  >
                    <span className="title">UI Elements</span>
                    <span
                      className={showUiDropdown ? "arrow open" : "arrow"}
                    ></span>
                  </a>
                  <ul className="ui-elements-dropdown">
                    <li className="">
                      <Link to="/casual/color">Color</Link>
                    </li>
                    <li className="">
                      <Link to="/casual/typography">Typography</Link>
                    </li>
                    <li className="">
                      <Link to="/casual/icons">Icons</Link>
                    </li>
                    <li className="">
                      <Link to="/casual/buttons">Buttons</Link>
                    </li>
                    <li className="">
                      <Link to="/casual/notifications">Notifications</Link>
                    </li>
                    <li className="">
                      <Link to="/casual/modals">Modals</Link>
                    </li>
                    <li className="">
                      <Link to="/casual/progress">Progress &amp; Activity</Link>
                    </li>
                    <li className="">
                      <Link to="/casual/tabs_accordian">
                        Tabs &amp; Accordions
                      </Link>
                    </li>
                    <li className="">
                      <Link to="/casual/sliders">Sliders</Link>
                    </li>
                    <li className="">
                      <Link to="/casual/tree_view">Tree View</Link>
                    </li>
                    <li className="">
                      <Link to="/casual/nestables">Nestable</Link>
                    </li>
                  </ul>
                  <div
                    className="ghost-nav-dropdown"
                    style={{ visibility: "hidden" }}
                  ></div>
                </li>
                <li
                  className={
                    showFormDropdown
                      ? " open opening menu-link"
                      : path.includes("/form")
                      ? "menu-link active"
                      : "menu-link"
                  }
                >
                  <a href="javascript:void(0);" onClick={() => expand("forms")}>
                    <span className="title">Forms</span>
                    <span
                      className={showFormDropdown ? "arrow open" : "arrow"}
                    ></span>
                  </a>
                  <ul className="forms-dropdown">
                    <li className="">
                      <Link to="/casual/form_elements">Form Elements</Link>
                    </li>
                    <li className="">
                      <Link to="/casual/form_layouts">Form Layouts</Link>
                    </li>
                    <li className="">
                      <Link to="/casual/form_wizard">Form Wizard</Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={
                    path.includes("/builder") ? "menu-link active" : "menu-link"
                  }
                >
                  <Link to="/casual/builder">
                    <span className="title">Builder</span>
                  </Link>
                </li>
                <li
                  className={
                    path.includes("/cards") ? "menu-link active" : "menu-link"
                  }
                >
                  <Link to="/casual/cards">
                    <span className="title">Cards</span>
                  </Link>
                </li>
                <li
                  className={
                    path.includes("/views") ? "menu-link active" : "menu-link"
                  }
                >
                  <Link to="/casual/views">
                    <span className="title">Views</span>
                  </Link>
                </li>
                <li
                  className={
                    path.includes("/charts") ? "menu-link active" : "menu-link"
                  }
                >
                  <Link to="/casual/charts">
                    <span className="title">Charts</span>
                  </Link>
                </li>
                {width < 991 ? (
                  <>
                    <li className={showTableDropdown ? " open opening" : ""}>
                      <a
                        href="javascript:void(0);"
                        onClick={() => expand("tables")}
                      >
                        <span className="title">Tables</span>
                        <span
                          className={showTableDropdown ? "arrow open" : "arrow"}
                        ></span>
                      </a>
                      <ul className="">
                        <li className="">
                          <Link to="/casual/basic_tables">Basic Tables</Link>
                        </li>
                        <li className="">
                          <Link to="/casual/data_tables">Data Tables</Link>
                        </li>
                      </ul>
                    </li>
                    <li className={showMapDropdown ? " open opening" : ""}>
                      <a
                        href="javascript:void(0);"
                        onClick={() => expand("maps")}
                      >
                        <span className="title">Maps</span>
                        <span
                          className={showMapDropdown ? "arrow open" : "arrow"}
                        ></span>
                      </a>
                      <ul className="">
                        <li className="">
                          <Link to="/casual/google_map">Google Maps</Link>
                        </li>
                        <li className="">
                          <Link to="/casual/vector_map">Vector Maps</Link>
                        </li>
                      </ul>
                    </li>

                    <li className={showExtraDropdown ? " open opening" : ""}>
                      <a
                        href="javascript:void(0);"
                        onClick={() => expand("extra")}
                      >
                        <span className="title">Extra</span>
                        <span
                          className={showExtraDropdown ? "arrow open" : "arrow"}
                        ></span>
                      </a>
                      <ul className="">
                        <li className="">
                          <Link to="/casual/extra/invoice">Invoice</Link>
                        </li>
                        <li className="">
                          <Link to="/casual/extra/404">404 Page</Link>
                        </li>
                        <li className="">
                          <Link to="/casual/extra/500">500 Page</Link>
                        </li>
                        <li className="">
                          <Link to="/casual/extra/blank_template">
                            Blank Page
                          </Link>
                        </li>
                        <li className="">
                          <Link to="/casual/extra/login">Login</Link>
                        </li>
                        <li className="">
                          <Link to="/casual/extra/register">Register</Link>
                        </li>
                        <li className="">
                          <Link to="/casual/extra/lock_screen">Lockscreen</Link>
                        </li>
                        <li className="">
                          <Link to="/casual/extra/gallery">Gallery</Link>
                        </li>
                        <li className="">
                          <Link to="/casual/extra/timeline">Timeline</Link>
                        </li>
                      </ul>
                    </li>
                  </>
                ) : (
                  <li
                    className={
                      showExtraDropdown
                        ? " open opening more menu-link"
                        : "menu-link more"
                    }
                  >
                    <a
                      href="javascript:void(0);"
                      onClick={() => expand("extra")}
                    >
                      <span className="title d-flex">
                        <i className="pg-icon">more_horizontal</i>
                      </span>
                    </a>
                    <ul className="more-dropdown">
                      <li>
                        <a href="javascript:void(0);">
                          <span className="title">Tables</span>
                          <span className=" arrow"></span>
                        </a>
                        <ul className="sub-menu">
                          <li className="">
                            <Link to="/casual/basic_tables">Basic Tables</Link>
                          </li>
                          <li className="">
                            <Link to="/casual/data_tables">Data Tables</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <span className="title">Maps</span>
                          <span className=" arrow"></span>
                        </a>
                        <ul className="sub-menu">
                          <li className="">
                            <Link to="/casual/google_map">Google Maps</Link>
                          </li>
                          <li className="">
                            <Link to="/casual/vector_map">Vector Maps</Link>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a href="javascript:void(0);">
                          <span className="title">Extra</span>
                          <span className=" arrow"></span>
                        </a>
                        <ul className="sub-menu">
                          <li className="">
                            <Link to="/casual/extra/invoice">Invoice</Link>
                          </li>
                          <li className="">
                            <Link to="/casual/extra/404">404 Page</Link>
                          </li>
                          <li className="">
                            <Link to="/casual/extra/500">500 Page</Link>
                          </li>
                          <li className="">
                            <Link to="/casual/extra/blank_template">
                              Blank Page
                            </Link>
                          </li>
                          <li className="">
                            <Link to="/casual/extra/login">Login</Link>
                          </li>
                          <li className="">
                            <Link to="/casual/extra/register">Register</Link>
                          </li>
                          <li className="">
                            <Link to="/casual/extra/lock_screen">
                              Lockscreen
                            </Link>
                          </li>
                          <li className="">
                            <Link to="/casual/extra/gallery">Gallery</Link>
                          </li>
                          <li className="">
                            <Link to="/casual/extra/timeline">Timeline</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                )}
              </ul>
              <a
                href="javascript:void(0);"
                className="search-link d-flex justify-content-between align-items-center d-lg-none"
                data-toggle="search"
                id="headerSearchInput"
              >
                Tap here to search
                <i className="pg-search float-right"></i>
                <i className="pg-icon">search</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Content;
