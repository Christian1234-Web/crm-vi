import React from "react";
import { SlideDown } from "react-slidedown";
import { connect } from "react-redux";
import PerfectScrollbar from 'react-perfect-scrollbar';

import "react-slidedown/lib/slidedown.css";

import SidebarItem from "./SidebarItem";
import "./style.scss";

class Component extends React.Component {
  state = {
    isVisible: false,
    shouldExpand: false,
    shouldExpandNest: false,
    clickedMenu: null,
    clickedMenuNest: null,
    shouldSideBarPin: false,
    shouldToggleSidebarHeader: false,
    shouldBoxedLayout: false,
  };

  handleMouseEnter = () => {
    this.setState({
      isVisible: true,
    });
  };
  handleMouseLeave = () => {
    this.setState({
      isVisible: false,
    });
  };
  handleMenuExpan = (value) => {
    let customShouldExpan = true;
    if (this.state.clickedMenu === value) {
      customShouldExpan = !this.state.shouldExpand;
    }
    this.setState({
      shouldExpand: customShouldExpan,
      clickedMenu: value,
      clickedMenuNest: null,
    });
  };
  handleMenuExpanNest = (value) => {
    this.setState({
      shouldExpandNest: !this.state.shouldExpandNest,
      clickedMenuNest: value,
    });
  };
  togglePin = () => {
    this.setState(
      {
        shouldSideBarPin: !this.state.shouldSideBarPin,
      },
      () => {
        if (this.state.shouldSideBarPin) {
          document.body.classList.add("menu-pin");
        } else {
          document.body.classList.remove("menu-pin");
        }
      }
    );
  };
  toggleSidebarHeader = () => {
    this.setState({
      shouldToggleSidebarHeader: !this.state.shouldToggleSidebarHeader,
    });
  };

  navBoxedLayout = () => {
    this.setState(
      {
        shouldBoxedLayout: !this.state.shouldBoxedLayout,
      },
      () => {
        if (this.state.shouldBoxedLayout) {
          document.body.classList.add(
            "box-layout menu-pin  mac desktop js-focus-visible"
          );
        } else {
          document.body.classList.remove(
            "box-layout menu-pin  mac desktop js-focus-visible"
          );
        }
      }
    );
  };

  render() {
    const { isVisible } = this.state;
    // TODO if rtl is enabled this value should be a minus one
    const style = {
      transform: `translate3d(${isVisible ? 280 - 70 : 0}px, 0,0)`,
    };

    let toggleHeader = this.state.shouldToggleSidebarHeader
      ? "sidebar-overlay-slide from-top show"
      : "sidebar-overlay-slide from-top";

    let shouldViewHeader =
      window.location.pathname !== "/extra/404" &&
        window.location.pathname !== "/extra/500" &&
        window.location.pathname !== "/extra/login" &&
        window.location.pathname !== "/extra/register" &&
        window.location.pathname !== "/extra/lock_screen"
        ? true
        : false;

    let isBoxedLayout = window.location.pathname.includes("/boxed_layout")
      ? true
      : false;
    if (isBoxedLayout) {
      document.body.classList.remove("dashboard");
      document.body.classList.add(
        "box-layout",
        "menu-pin",
        "mac",
        "desktop",
        "js-focus-visible"
      );
    } else {
      document.body.classList.add("dashboard");
    }
    return (
      <nav
        style={shouldViewHeader ? style : { display: "none" }}
        className={`page-sidebar page-sidebar-simple ${this.props.openState ? "visible" : ""
          }`}
        data-pages="sidebar"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {/* BEGIN SIDEBAR MENU TOP TRAY CONTENT*/}
        <div className={toggleHeader} id="appMenu">
          <div className="row">
            <div className="col-xs-6 no-padding">
              <a href="#" className="p-l-40">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/demo/social_app.svg"
                  }
                  alt="socail"
                />
              </a>
            </div>
            <div className="col-xs-6 no-padding">
              <a href="#" className="p-l-10">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/demo/email_app.svg"
                  }
                  alt="socail"
                />
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-6 m-t-20 no-padding">
              <a href="#" className="p-l-40">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/demo/calendar_app.svg"
                  }
                  alt="socail"
                />
              </a>
            </div>
            <div className="col-xs-6 m-t-20 no-padding">
              <a href="#" className="p-l-10">
                <img
                  src={process.env.PUBLIC_URL + "/assets/img/demo/add_more.svg"}
                  alt="socail"
                />
              </a>
            </div>
          </div>
        </div>
        {/* END SIDEBAR MENU TOP TRAY CONTENT*/}
        {/* BEGIN SIDEBAR MENU HEADER*/}
        <div className="sidebar-header">
          <img
            src={process.env.PUBLIC_URL + "/assets/img/logo_blue_2x.png"}
            alt="logo"
            style={this.props.openState ? { marginRight: "0px" } : {}}
            className="brand"
            data-src={process.env.PUBLIC_URL + "/assets/img/logo_blue_2x.png"}
            data-src-retina="/assets/img/logo_blue_2x.png"
            width="78"
            height="22"
          />
        </div>
        {/* END SIDEBAR MENU HEADER*/}
        {/* START SIDEBAR MENU */}
        <div className="sidebar-menu">
          {/* BEGIN SIDEBAR MENU ITEMS*/}
          <div className="scroll-wrapper menu-items">
            <PerfectScrollbar className="menu-items scroll-content scroll-scrolly_visible">
              <SidebarItem
                url="/simple/"
                title="Dashboard"
                subTitle="12 New Updates"
                icon={
                  <i className="pg-icon">
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
                      className="feather feather-shield"
                    >
                      <path d="M12 22s8-4 8-10V4l-8-2-8 2v8c0 6 8 10 8 10z"></path>
                    </svg>
                  </i>
                }
                topMargin="m-t-10"
              />
              {/* <SidebarItem 
                    url="http://pages.revox.io/dashboard/latest/html/widget.html"
                    title="Widgets" 
                    subTitle="22 items"
                    icon={"W"}
                /> */}
              <SidebarItem
                url="/simple/email"
                title="Messaging"
                subTitle="234 New Messages"
                icon={
                  <i className="pg-icon">
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
                      className="feather feather-mail"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </i>
                }
              />
              <SidebarItem
                url="/simple/contact"
                title="Contacts"
                subTitle="234 New Contacts"

                icon={
                  <i className="pg-icon">
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
                      className="feather feather-users"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </i>
                }
              />
              <SidebarItem
                url="/simple/call-log"
                title="Call Logs"
                subTitle="234 Missed Calls"

                icon={
                  <i className="pg-icon">
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
                      className="feather feather-users"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </i>
                }
              />
              <SidebarItem
                url="/simple/calendar/basic"
                title="Booking"
                subTitle="234 New Bookings"
                icon={
                  <i className="pg-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="feather feather-calendar"><rect x="3" y="4" width="18"
                        height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6">
                      </line><line x1="8" y1="2" x2="8" y2="6">
                      </line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg></i>

                }
              />
              <SidebarItem
                url="/simple/ticket"
                title="Tickets"
                subTitle="234 New Tickets"
                icon={
                  <i className="pg-icon">
                    page
                    </i>

                }
              />
              <SidebarItem
                url="/simple/settings"
                title="Settings"
                subTitle="Check Settings"
                icon={
                  <i className="pg-icon">
                    settings
                    </i>

                }
              />

              {/* <li className={(this.state.shouldExpand && this.state.clickedMenu === 'calendar') ? "open active" : ""}>
                                <a href="javascript:void(0);"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        this.handleMenuExpan('calendar')
                                    }}
                                >
                                    <span className="title">Calendar</span>
                                    <span
                                        className={(this.state.shouldExpand && this.state.clickedMenu === 'calendar') ? "arrow open active" : " arrow"}
                                    ></span>
                                </a>
                                <span className="icon-thumbnail"><i className="pg-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></i></span>
                                <SlideDown className={'my-dropdown-slidedown'} >
                                    {this.state.shouldExpand && this.state.clickedMenu === 'calendar' && (
                                        <ul className="sub-menu sub-menu-simple">

                                            <SidebarItem
                                                url="/simple/calendar/basic"
                                                title="Basic"
                                                icon="c"
                                            />
                                            <SidebarItem
                                                url="/simple/calendar/languages"
                                                title="Languages"
                                                icon="L"
                                            />
                                            <SidebarItem
                                                url="/simple/calendar/Month"
                                                title="Month"
                                                icon="M"
                                            />
                                            <SidebarItem
                                                url="/simple/calendar/lazyload"
                                                title="Lazy load"
                                                icon="La"
                                            />
                                            <SidebarItem
                                                url="/simple/calendar_docs"
                                                title="Documentation"
                                                icon="D"
                                            />
                                        </ul>
                                    )
                                    }
                                </SlideDown>
								</li>*/}
              {/* <SidebarItem
                url="/simple/builder"
                title="Booking"
                subTitle="234 New Bookings"

                icon={
                  <i className="pg-icon">
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
                      className="feather feather-cpu"
                    >
                      <rect
                        x="4"
                        y="4"
                        width="16"
                        height="16"
                        rx="2"
                        ry="2"
                      ></rect>
                      <rect x="9" y="9" width="6" height="6"></rect>
                      <line x1="9" y1="1" x2="9" y2="4"></line>
                      <line x1="15" y1="1" x2="15" y2="4"></line>
                      <line x1="9" y1="20" x2="9" y2="23"></line>
                      <line x1="15" y1="20" x2="15" y2="23"></line>
                      <line x1="20" y1="9" x2="23" y2="9"></line>
                      <line x1="20" y1="14" x2="23" y2="14"></line>
                      <line x1="1" y1="9" x2="4" y2="9"></line>
                      <line x1="1" y1="14" x2="4" y2="14"></line>
                    </svg>
                  </i>
                }
              />
            
              <li
                className={
                  this.state.shouldExpand &&
                  this.state.clickedMenu === "layouts"
                    ? "open active"
                    : ""
                }
              >
                <a
                  href="javascript:void(0);"
                  onClick={(e) => {
                    e.preventDefault();
                    this.handleMenuExpan("layouts");
                  }}
                >
                  <span className="title">Layouts</span>
                  <span
                    className={
                      this.state.shouldExpand &&
                      this.state.clickedMenu === "layouts"
                        ? "arrow open active"
                        : " arrow"
                    }
                  ></span>
                </a>
                <span className="icon-thumbnail">
                  <i className="pg-icon">
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
                      className="feather feather-layout"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="3" y1="9" x2="21" y2="9"></line>
                      <line x1="9" y1="21" x2="9" y2="9"></line>
                    </svg>
                  </i>
                </span>
                <SlideDown className={"my-dropdown-slidedown"}>
                  {this.state.shouldExpand &&
                    this.state.clickedMenu === "layouts" && (
                      <ul className="sub-menu sub-menu-simple">
                        <SidebarItem
                          subMenuItem
                          url="/simple/default_layout"
                          title="Default"
                          icon="dl"
                        />
                        <SidebarItem
                          subMenuItem
                          url="/simple/secondary_layout"
                          title="Secondary"
                          icon="sl"
                        />
                        <SidebarItem
                          subMenuItem
                          url="/simple/boxed_layout"
                          title="Boxed"
                          icon="bl"
                        />
                      </ul>
                    )}
                </SlideDown>
              </li>
              <li
                className={
                  this.state.shouldExpand &&
                  this.state.clickedMenu === "UIelements"
                    ? "open active"
                    : ""
                }
              >
                <a
                  href="javascript:void(0);"
                  onClick={(e) => {
                    e.preventDefault();
                    this.handleMenuExpan("UIelements");
                  }}
                >
                  <span className="title">UI Elements</span>
                  <span
                    className={
                      this.state.shouldExpand &&
                      this.state.clickedMenu === "UIelements"
                        ? "arrow open active"
                        : " arrow"
                    }
                  ></span>
                </a>
                <span className="icon-thumbnail">
                  <i className="pg-icon">
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
                      className="feather feather-triangle"
                    >
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    </svg>
                  </i>
                </span>
                <SlideDown className={"my-dropdown-slidedown"}>
                  {this.state.shouldExpand &&
                    this.state.clickedMenu === "UIelements" && (
                      <ul className="sub-menu sub-menu-simple">
                        <SidebarItem
                          subMenuItem
                          url="/simple/color"
                          title="Color"
                          icon="c"
                        />
                        <SidebarItem
                          subMenuItem
                          url="/simple/typography"
                          title="Typography"
                          icon="t"
                        />
                        <SidebarItem
                          subMenuItem
                          url="/simple/icons"
                          title="Icons"
                          icon="i"
                        />
                        <SidebarItem
                          subMenuItem
                          url="/simple/buttons"
                          title="Buttons"
                          icon="b"
                        />
                        <SidebarItem
                          subMenuItem
                          url="/simple/notifications"
                          title="Notifications"
                          icon="n"
                        />
                        <SidebarItem
                          subMenuItem
                          url="/simple/modals"
                          title="Modals"
                          icon="m"
                        />
                        <SidebarItem
                          subMenuItem
                          url="/simple/progress"
                          title="Progress &amp; Activity"
                          icon="pa"
                        />
                        <SidebarItem
                          subMenuItem
                          url="/simple/tabs_accordian"
                          title="Tabs &amp; Accordions"
                          icon="ta"
                        />
                        <SidebarItem
                          subMenuItem
                          url="/simple/sliders"
                          title="Sliders"
                          icon="s"
                        />
                        <SidebarItem
                          subMenuItem
                          url="/simple/tree_view"
                          title="Tree View"
                          icon="tv"
                        />
                        <SidebarItem
                          subMenuItem
                          url="/simple/nestables"
                          title="Nestable"
                          icon="ns"
                        />
                      </ul>
                    )}
                </SlideDown>
              </li>
              <li
                className={
                  this.state.shouldExpand && this.state.clickedMenu === "Forms"
                    ? "open active"
                    : ""
                }
              >
                <a
                  href="javascript:void(0);"
                  onClick={(e) => {
                    e.preventDefault();
                    this.handleMenuExpan("Forms");
                  }}
                >
                  <span className="title">Forms</span>
                  <span
                    className={
                      this.state.shouldExpand &&
                      this.state.clickedMenu === "Forms"
                        ? "arrow open active"
                        : " arrow"
                    }
                  ></span>
                </a>
                <span className="icon-thumbnail">
                  <i className="pg-icon">
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
                      className="feather feather-list"
                    >
                      <line x1="8" y1="6" x2="21" y2="6"></line>
                      <line x1="8" y1="12" x2="21" y2="12"></line>
                      <line x1="8" y1="18" x2="21" y2="18"></line>
                      <line x1="3" y1="6" x2="3" y2="6"></line>
                      <line x1="3" y1="12" x2="3" y2="12"></line>
                      <line x1="3" y1="18" x2="3" y2="18"></line>
                    </svg>
                  </i>
                </span>
                <SlideDown className={"my-dropdown-slidedown"}>
                  {this.state.shouldExpand &&
                    this.state.clickedMenu === "Forms" && (
                      <ul className="sub-menu sub-menu-simple">
                        <SidebarItem
                          subMenuItem
                          url="/simple/form_elements"
                          title="Form Elements"
                          icon="fe"
                        />
                        <SidebarItem
                          subMenuItem
                          url="/simple/form_layouts"
                          title="Form Layouts"
                          icon="fl"
                        />
                        <SidebarItem
                          subMenuItem
                          url="/simple/form_wizard"
                          title="Form Wizard"
                          icon="fw"
                        />
                      </ul>
                    )}
                </SlideDown>
              </li>
              <SidebarItem
                url="/simple/cards"
                title="Cards"
                icon={
                  <i className="pg-icon">
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
                      className="feather feather-grid"
                    >
                      <rect x="3" y="3" width="7" height="7"></rect>
                      <rect x="14" y="3" width="7" height="7"></rect>
                      <rect x="14" y="14" width="7" height="7"></rect>
                      <rect x="3" y="14" width="7" height="7"></rect>
                    </svg>
                  </i>
                }
              />
              <SidebarItem
                url="/simple/views"
                title="Views"
                icon={
                  <i className="pg-icon">
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
                      className="feather feather-airplay"
                    >
                      <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
                      <polygon points="12 15 17 21 7 21 12 15"></polygon>
                    </svg>
                  </i>
                }
              />
              <li
                className={
                  this.state.shouldExpand && this.state.clickedMenu === "Tables"
                    ? "open active"
                    : ""
                }
              >
                <a
                  href="javascript:void(0);"
                  onClick={(e) => {
                    e.preventDefault();
                    this.handleMenuExpan("Tables");
                  }}
                >
                  <span className="title">Tables</span>
                  <span
                    className={
                      this.state.shouldExpand &&
                      this.state.clickedMenu === "Tabl1es"
                        ? "arrow open active"
                        : " arrow"
                    }
                  ></span>
                </a>
                <span className="icon-thumbnail">
                  <i className="pg-icon">
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
                      className="feather feather-square"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                    </svg>
                  </i>
                </span>
                <SlideDown className={"my-dropdown-slidedown"}>
                  {this.state.shouldExpand &&
                    this.state.clickedMenu === "Tables" && (
                      <ul className="sub-menu sub-menu-simple">
                        <SidebarItem
                          subMenuItem
                          url="/simple/basic_tables"
                          title="Basic Tables"
                          icon="bt"
                        />
                        <SidebarItem
                          subMenuItem
                          url="/simple/data_tables"
                          title="Data Tables"
                          icon="dt"
                        />
                      </ul>
                    )}
                </SlideDown>
              </li>
              <li
                className={
                  this.state.shouldExpand && this.state.clickedMenu === "Maps"
                    ? "open active"
                    : ""
                }
              >
                <a
                  href="javascript:void(0);"
                  onClick={(e) => {
                    e.preventDefault();
                    this.handleMenuExpan("Maps");
                  }}
                >
                  <span className="title">Maps</span>
                  <span
                    className={
                      this.state.shouldExpand &&
                      this.state.clickedMenu === "Maps"
                        ? "arrow open active"
                        : " arrow"
                    }
                  ></span>
                </a>
                <span className="icon-thumbnail">
                  <i className="pg-icon">
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
                      className="feather feather-map-pin"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </i>
                </span>
                <SlideDown className={"my-dropdown-slidedown"}>
                  {this.state.shouldExpand &&
                    this.state.clickedMenu === "Maps" && (
                      <ul className="sub-menu sub-menu-simple">
                        <SidebarItem
                          subMenuItem
                          url="/simple/google_map"
                          title="Google Maps"
                          icon="gm"
                        />
						<SidebarItem
						  subMenuItem
						  url="/simple/vector_map"
						  title="Vector Maps"
						  icon="vm"
						/>
                      </ul>
                    )}
                </SlideDown>
              </li>
              <SidebarItem
                url="/simple/charts"
                title="Charts"
                icon={
                  <i className="pg-icon">
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
                      className="feather feather-bar-chart"
                    >
                      <rect x="18" y="3" width="4" height="18"></rect>
                      <rect x="10" y="8" width="4" height="13"></rect>
                      <rect x="2" y="13" width="4" height="8"></rect>
                    </svg>
                  </i>
                }
              />
              <li
                className={
                  this.state.shouldExpand && this.state.clickedMenu === "Extra"
                    ? "open active"
                    : ""
                }
              >
                <a
                  href="javascript:void(0);"
                  onClick={(e) => {
                    e.preventDefault();
                    this.handleMenuExpan("Extra");
                  }}
                >
                  <span className="title">Extra</span>
                  <span
                    className={
                      this.state.shouldExpand &&
                      this.state.clickedMenu === "Extra"
                        ? "arrow open active"
                        : " arrow"
                    }
                  ></span>
                </a>
                <span className="icon-thumbnail">
                  <i className="pg-icon">
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
                      className="feather feather-box"
                    >
                      <path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z"></path>
                      <polyline points="2.32 6.16 12 11 21.68 6.16"></polyline>
                      <line x1="12" y1="22.76" x2="12" y2="11"></line>
                    </svg>
                  </i>
                </span>
                <SlideDown className={"my-dropdown-slidedown"}>
                  {this.state.shouldExpand &&
                    this.state.clickedMenu === "Extra" && (
                      <ul className="sub-menu sub-menu-simple">
                        <SidebarItem
                          subMenuItem
                          url="/simple/extra/invoice"
                          title="Invoice"
                          icon="in"
                        />
                        <SidebarItem
                          subMenuItem
                          url="/simple/extra/404"
                          title="404 Page"
                          icon="pg"
                        />
                        <SidebarItem
                          subMenuItem
                          url="/simple/extra/500"
                          title="500 Page"
                          icon="pg"
                        />
                        <SidebarItem
                          subMenuItem
                          url="/simple/extra/blank_template"
                          title="Blank Page"
                          icon="bp"
                        />
                        <SidebarItem
                          subMenuItem
                          url="/simple/extra/login"
                          title="Login"
                          icon="l"
                        />
                        <SidebarItem
                          subMenuItem
                          url="/simple/extra/register"
                          title="Register"
                          icon="re"
                        />
                        <SidebarItem
                          subMenuItem
                          url="/simple/extra/lock_screen"
                          title="Lockscreen"
                          icon="ls"
                        />
                        <SidebarItem
                          subMenuItem
                          url="/simple/extra/gallery"
                          title="Gallery"
                          icon="gl"
                        />
                        <SidebarItem
                          subMenuItem
                          url="/simple/extra/timeline"
                          title="Timeline"
                          icon="t"
                        />
                      </ul>
                    )}
                </SlideDown>
              </li>
              <li
                className={
                  this.state.shouldExpand &&
                  this.state.clickedMenu === "MenuLevels"
                    ? "open active"
                    : ""
                }
              >
                <a
                  href="javascript:void(0);"
                  onClick={(e) => {
                    e.preventDefault();
                    this.handleMenuExpan("MenuLevels");
                  }}
                >
                  <span className="title">Menu Levels</span>
                  <span
                    className={
                      this.state.shouldExpand &&
                      this.state.clickedMenu === "MenuLevels"
                        ? "arrow open active"
                        : " arrow"
                    }
                  ></span>
                </a>
                <span className="icon-thumbnail">
                  <i className="pg-icon">
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
                      className="feather feather-menu"
                    >
                      <line x1="3" y1="12" x2="21" y2="12"></line>
                      <line x1="3" y1="6" x2="21" y2="6"></line>
                      <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                  </i>
                </span>
                <SlideDown className={"my-dropdown-slidedown"}>
                  {this.state.shouldExpand &&
                    this.state.clickedMenu === "MenuLevels" && (
                      <ul className="sub-menu sub-menu-simple">
                        <SidebarItem
                          subMenuItem
                          url="/simple/levelOne"
                          title="Level 1"
                          icon="l1"
                        />
                        <li
                          className={
                            this.state.shouldExpandNest &&
                            this.state.clickedMenu === "MenuLevelsTwo"
                              ? "open active"
                              : ""
                          }
                        >
                          <a
                            href="javascript:void(0);"
                            onClick={(e) => {
                              e.preventDefault();
                              this.handleMenuExpanNest("MenuLevelsTwo");
                            }}
                          >
                            <span className="title">Level 2</span>
                            <span
                              className={
                                this.state.shouldExpandNest &&
                                this.state.clickedMenu === "MenuLevels" &&
                                this.state.clickedMenuNest === "MenuLevelsTwo"
                                  ? "arrow open active"
                                  : " arrow"
                              }
                            ></span>
                          </a>
                          <span className="icon-thumbnail">L2</span>
                          <SlideDown className={"my-dropdown-slidedown"}>
                            {this.state.shouldExpandNest &&
                              this.state.clickedMenuNest ===
                                "MenuLevelsTwo" && (
                                <ul className="sub-menu sub-menu-simple">
                                  <SidebarItem
                                    subMenuItem
                                    url="/simple/submenu"
                                    title="Sub Menu"
                                    icon="sm"
                                  />
                                  <SidebarItem
                                    subMenuItem
                                    url="/simple/submenu"
                                    title="Sub Menu"
                                    icon="sm"
                                  />
                                </ul>
                              )}
                          </SlideDown>
                        </li>
                      </ul>
                    )}
                </SlideDown>
              </li>
              <li className="">
                <a
                  href="https://reactdocs.revox.io/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="title">Docs</span>
                </a>
                <span className="icon-thumbnail">
                  <i className="pg-icon">
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
                      className="feather feather-life-buoy"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="4"></circle>
                      <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
                      <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
                      <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
                      <line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line>
                      <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
                    </svg>
                  </i>
                </span>
              </li>
              <li className="">
                <a
                  href="http://changelog.pages.revox.io/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="title">Changelog</span>
                </a>
                <span className="icon-thumbnail">
                  <i className="pg-icon">CG</i>
                </span>
              </li> */}
            </PerfectScrollbar>
            <a
              href="#"
              className="search-link d-flex justify-content-between align-items-center d-lg-none"
              data-toggle="horizontal-menu"
              id="headerSearchInputSimple"
            >
              Tap here to search
              <i className="pg-icon float-right">search</i>
            </a>
          </div>
          <div className="clearfix"></div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    openState: state.QuickView.openMobileSideBar,
  };
};
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
