import React, { useState } from "react";
import { useDispatch } from "react-redux";

import QuickViewAction from "../../../redux/actions";

const Content = ({ location, inboxHeader, setInboxHeader }) => {
  let path = location.pathname;
  const customDropdown =
    path.includes("/email") || path.includes("/compose_email") ? (
      <a
        href="javascript:void(0);"
        className="toggle-secondary-sidebar"
        onClick={() => setInboxHeader(!inboxHeader)}
      >
        <span className="d-flex align-items-center">
          Inbox <span className="text-info">(12)</span>{" "}
          <span className="pg-icon">drop_down</span>
        </span>
      </a>
    ) : null;

  const emailEdit =
    path.includes("/email") || path.includes("/compose_email") ? (
      <a
        href="javascript:void(0);"
        id="mark-email"
        className="mark-email m-l-10 btn-icon-link"
      >
        <i className="pg-icon">edit</i>
      </a>
    ) : null;

  const [shouldShowProfile, setShouldShowProfile] = useState(false);
  const dispatch = useDispatch();
  const {
    toggleQuickViewOpen,
    toggleMobileSideBarOpen,
    toggleMobileSideBarClose,
  } = QuickViewAction;

  const [mobileSidebarToggle, setMobileSidebarToggle] = useState(false);

  React.useEffect(() => {
    if (mobileSidebarToggle) {
      dispatch(toggleMobileSideBarOpen());
    } else {
      dispatch(toggleMobileSideBarClose());
    }
  }, [mobileSidebarToggle]);

  if (mobileSidebarToggle) {
    document.body.classList.remove("dashboard");
    document.body.classList.add(
      "mac",
      "desktop",
      "js-focus-visible",
      "sidebar-open",
      "sidebar-visible"
    );
  } else {
    document.body.classList.remove(
      "mac",
      "desktop",
      "js-focus-visible",
      "sidebar-open",
      "sidebar-visible"
    );
    document.body.classList.add("dashboard");
  }

  return (
    <React.Fragment>
      <a
        href="javascript:void(0);"
        className="btn-link toggle-sidebar d-lg-none pg-icon btn-icon-link"
        data-toggle="sidebar"
        onClick={() => {
          setMobileSidebarToggle((prevState) => !prevState);
        }}
      >
        menu
      </a>

      <div className="">
        {customDropdown}
        <div className="brand inline ">
          <img
            src={process.env.PUBLIC_URL + "/assets/img/logo_2x.png"}
            alt="logo"
            data-src={process.env.PUBLIC_URL + "/assets/img/logo.png"}
            data-src-retina="/assets/img/logo_2x.png"
            width="66"
            height="20"
            style={{ marginLeft: "35px" }}
          />
        </div>
        <ul className="d-lg-inline-block d-none notification-list no-margin d-lg-inline-block b-grey b-l b-r no-style p-l-20 p-r-20">
          <li className="p-r-5 inline">
            <div className="dropdown">
              <a
                href="javascript:void(0);"
                id="notification-center"
                className="header-icon btn-icon-link"
                data-toggle="dropdown"
                onClick={(e) => e.preventDefault()}
              >
                <i className="pg-icon">world</i>
                <span className="bubble"></span>
              </a>

              <div
                className="dropdown-menu notification-toggle"
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
                            <span className="fs-12 m-l-10">David Nester</span>
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
                          <a href="javascript:void(0);" className="mark"></a>
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
                            <span className="fs-12 m-l-10">Take Action</span>
                          </a>
                          <span className="pull-right time">2 mins ago</span>
                        </div>

                        <div className="option">
                          <a href="javascript:void(0);" className="mark"></a>
                        </div>
                      </div>

                      <div className="notification-item clearfix">
                        <div className="heading">
                          <a
                            href="javascript:void(0);"
                            className="text-warning pull-left"
                          >
                            <i className="pg-icon m-r-10">alert_warning</i>
                            <span className="bold">Warning Notification</span>
                            <span className="fs-12 m-l-10">Buy Now</span>
                          </a>
                          <span className="pull-right time">yesterday</span>
                        </div>

                        <div className="option">
                          <a href="javascript:void(0);" className="mark"></a>
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
                          <a href="javascript:void(0);" className="mark"></a>
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
          <li className="p-r-5 inline">
            <a href="javascript:void(0);" className="header-icon btn-icon-link">
              <i className="pg-icon">link_alt</i>
            </a>
          </li>
          <li className="p-r-5 inline">
            <a href="javascript:void(0);" className="header-icon btn-icon-link">
              <i className="pg-icon">grid_alt</i>
            </a>
          </li>
          <li className="inline">{emailEdit}</li>
        </ul>

        <a
          href="javascript:void(0);"
          id="headerSearchInput"
          className="search-link d-lg-inline-block d-none"
          data-toggle="search"
        >
          <i className="pg-icon">search</i>Type anywhere to{" "}
          <span className="bold">search</span>
        </a>
      </div>
      <div className="d-flex align-items-center">
        <div
          className={`dropdown pull-right d-lg-block d-none ${
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
                src={process.env.PUBLIC_URL + "/assets/img/profiles/avatar.jpg"}
                alt=""
                data-src={
                  process.env.PUBLIC_URL + "/assets/img/profiles/avatar.jpg"
                }
                data-src-retina="/assets/img/profiles/avatar_small2x.jpg"
                width="32"
                height="32"
                onClick={() => setShouldShowProfile((prevState) => !prevState)}
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
          className="header-icon m-l-5 sm-no-margin d-inline-block"
          data-toggle="quickview"
          data-toggle-element="#quickview"
        >
          <i className="pg-icon btn-icon-link">menu_add</i>
        </a>
      </div>
    </React.Fragment>
  );
};

export default Content;
