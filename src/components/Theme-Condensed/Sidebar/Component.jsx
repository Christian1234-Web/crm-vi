import React from "react";
import { SlideDown } from "react-slidedown";
import { connect } from "react-redux";
import PerfectScrollbar from "react-perfect-scrollbar";

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
  componentDidMount() {}
  handleMouseEnter = () => {
    document.body.classList.add("sidebar-show");
    this.setState({
      isVisible: true,
    });
  };
  handleMouseLeave = () => {
    document.body.classList.remove("sidebar-show");
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
        className={`page-sidebar ${this.props.openState ? "visible" : ""}`}
        data-pages="sidebar"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {/* BEGIN SIDEBAR MENU TOP TRAY CONTENT*/}
        <div className={toggleHeader} id="appMenu">
          <div className="row">
            <div className="col-xs-6 no-padding">
              <a href="javascript:void(0);" className="p-l-40">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/demo/social_app.svg"
                  }
                  alt="socail"
                />
              </a>
            </div>
            <div className="col-xs-6 no-padding">
              <a href="javascript:void(0);" className="p-l-10">
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
              <a href="javascript:void(0);" className="p-l-40">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/demo/calendar_app.svg"
                  }
                  alt="socail"
                />
              </a>
            </div>
            <div className="col-xs-6 m-t-20 no-padding">
              <a href="javascript:void(0);" className="p-l-10">
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
            src={process.env.PUBLIC_URL + "/assets/img/logo_white_2x.png"}
            alt="logo"
            style={this.props.openState ? { marginRight: "0px" } : {}}
            className="brand"
            data-src={process.env.PUBLIC_URL + "/assets/img/logo_white.png"}
            data-src-retina="/assets/img/logo_white_2x.png"
            width="66"
            height="20"
          />
          {this.state.isVisible || this.state.shouldSideBarPin ? (
            <div className="sidebar-header-controls">
              <button
                aria-label="Toggle Drawer"
                onClick={this.toggleSidebarHeader}
                type="button"
                className={`btn btn-icon-link invert sidebar-slide-toggle m-l-20 m-r-10 ${
                  this.state.shouldToggleSidebarHeader ? "active" : ""
                }`}
                data-pages-toggle="#appMenu"
              >
                <i className="pg-icon">chevron_down</i>
              </button>
              <button
                aria-label="Pin Menu"
                type="button"
                onClick={this.togglePin}
                className="btn btn-icon-link invert d-lg-inline-block d-xlg-inline-block d-md-inline-block d-sm-none d-none"
                data-toggle-pin="sidebar"
              >
                <i className="pg-icon"></i>
              </button>
            </div>
          ) : null}
        </div>
        {/* END SIDEBAR MENU HEADER*/}
        {/* START SIDEBAR MENU */}
        <div className="sidebar-menu">
          {/* BEGIN SIDEBAR MENU ITEMS*/}
          <PerfectScrollbar className="menu-items scroll-content scroll-scrolly_visible">
            {/* <ul className="menu-items scroll-content scroll-scrolly_visible"> */}
            <SidebarItem
              url="/condensed/"
              title="Dashboard"
              subTitle="12 New Updates"
              icon={<i className="pg-icon">home</i>}
              topMargin="m-t-20"
            />
            {/* <SidebarItem 
                    url="http://pages.revox.io/dashboard/latest/html/widget.html"
                    title="Widgets" 
                    subTitle="22 items"
                    icon={"W"}
                /> */}
            <SidebarItem
              url="/condensed/email"
              title="Email"
              subTitle="234 New Emails"
              icon={<i className="pg-icon">inbox</i>}
            />
            <SidebarItem
              url="/condensed/social"
              title="Social"
              icon={<i className="pg-icon">social</i>}
            />
            <SidebarItem
              url="/condensed/builder"
              title="Builder"
              icon={<i className="pg-icon">brush</i>}
            />
            <li
              className={
                this.state.shouldExpand && this.state.clickedMenu === "layouts"
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
                <i className="pg-icon">grid</i>
              </span>
              <SlideDown className={"my-dropdown-slidedown"}>
                {this.state.shouldExpand &&
                  this.state.clickedMenu === "layouts" && (
                    <ul className="sub-menu">
                      <SidebarItem
                        subMenuItem
                        url="/condensed/default_layout"
                        title="Default"
                        icon="dl"
                      />
                      <SidebarItem
                        subMenuItem
                        url="/condensed/secondary_layout"
                        title="Secondary"
                        icon="sl"
                      />
                      <SidebarItem
                        subMenuItem
                        url="/condensed/boxed_layout"
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
                <i className="pg-icon">shapes</i>
              </span>
              <SlideDown className={"my-dropdown-slidedown"}>
                {this.state.shouldExpand &&
                  this.state.clickedMenu === "UIelements" && (
                    <ul className="sub-menu">
                      <SidebarItem
                        subMenuItem
                        url="/condensed/color"
                        title="Color"
                        icon="c"
                      />
                      <SidebarItem
                        subMenuItem
                        url="/condensed/typography"
                        title="Typography"
                        icon="t"
                      />
                      <SidebarItem
                        subMenuItem
                        url="/condensed/icons"
                        title="Icons"
                        icon="i"
                      />
                      <SidebarItem
                        subMenuItem
                        url="/condensed/buttons"
                        title="Buttons"
                        icon="b"
                      />
                      <SidebarItem
                        subMenuItem
                        url="/condensed/notifications"
                        title="Notifications"
                        icon="n"
                      />
                      <SidebarItem
                        subMenuItem
                        url="/condensed/modals"
                        title="Modals"
                        icon="m"
                      />
                      <SidebarItem
                        subMenuItem
                        url="/condensed/progress"
                        title="Progress &amp; Activity"
                        icon="pa"
                      />
                      <SidebarItem
                        subMenuItem
                        url="/condensed/tabs_accordian"
                        title="Tabs &amp; Accordions"
                        icon="ta"
                      />
                      <SidebarItem
                        subMenuItem
                        url="/condensed/sliders"
                        title="Sliders"
                        icon="s"
                      />
                      <SidebarItem
                        subMenuItem
                        url="/condensed/tree_view"
                        title="Tree View"
                        icon="tv"
                      />
                      <SidebarItem
                        subMenuItem
                        url="/condensed/nestables"
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
                <i className="pg-icon">note</i>
              </span>
              <SlideDown className={"my-dropdown-slidedown"}>
                {this.state.shouldExpand && this.state.clickedMenu === "Forms" && (
                  <ul className="sub-menu">
                    <SidebarItem
                      subMenuItem
                      url="/condensed/form_elements"
                      title="Form Elements"
                      icon="fe"
                    />
                    <SidebarItem
                      subMenuItem
                      url="/condensed/form_layouts"
                      title="Form Layouts"
                      icon="fl"
                    />
                    <SidebarItem
                      subMenuItem
                      url="/condensed/form_wizard"
                      title="Form Wizard"
                      icon="fw"
                    />
                  </ul>
                )}
              </SlideDown>
            </li>
            <SidebarItem
              url="/condensed/cards"
              title="Cards"
              icon={<i className="pg-icon">card</i>}
            />
            <SidebarItem
              url="/condensed/views"
              title="Views"
              icon={<i className="pg-icon">layout</i>}
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
                <i className="pg-icon">table</i>
              </span>
              <SlideDown className={"my-dropdown-slidedown"}>
                {this.state.shouldExpand &&
                  this.state.clickedMenu === "Tables" && (
                    <ul className="sub-menu">
                      <SidebarItem
                        subMenuItem
                        url="/condensed/basic_tables"
                        title="Basic Tables"
                        icon="bt"
                      />
                      <SidebarItem
                        subMenuItem
                        url="/condensed/data_tables"
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
                    this.state.shouldExpand && this.state.clickedMenu === "Maps"
                      ? "arrow open active"
                      : " arrow"
                  }
                ></span>
              </a>
              <span className="icon-thumbnail">
                <i className="pg-icon">map</i>
              </span>
              <SlideDown className={"my-dropdown-slidedown"}>
                {this.state.shouldExpand && this.state.clickedMenu === "Maps" && (
                  <ul className="sub-menu">
                    <SidebarItem
                      subMenuItem
                      url="/condensed/google_map"
                      title="Google Maps"
                      icon="gm"
                    />
					<SidebarItem
                      subMenuItem
                      url="/condensed/vector_map"
                      title="Vector Maps"
                      icon="vm"
                    />
                  </ul>
                )}
              </SlideDown>
            </li>
            <SidebarItem
              url="/condensed/charts"
              title="Charts"
              icon={<i className="pg-icon">chart</i>}
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
                <i className="pg-icon">effects</i>
              </span>
              <SlideDown className={"my-dropdown-slidedown"}>
                {this.state.shouldExpand && this.state.clickedMenu === "Extra" && (
                  <ul className="sub-menu">
                    <SidebarItem
                      subMenuItem
                      url="/condensed/extra/invoice"
                      title="Invoice"
                      icon="in"
                    />
                    <SidebarItem
                      subMenuItem
                      url="/condensed/extra/404"
                      title="404 Page"
                      icon="pg"
                    />
                    <SidebarItem
                      subMenuItem
                      url="/condensed/extra/500"
                      title="500 Page"
                      icon="pg"
                    />
                    <SidebarItem
                      subMenuItem
                      url="/condensed/extra/blank_template"
                      title="Blank Page"
                      icon="bp"
                    />
                    <SidebarItem
                      subMenuItem
                      url="/condensed/extra/login"
                      title="Login"
                      icon="l"
                    />
                    <SidebarItem
                      subMenuItem
                      url="/condensed/extra/register"
                      title="Register"
                      icon="re"
                    />
                    <SidebarItem
                      subMenuItem
                      url="/condensed/extra/lock_screen"
                      title="Lockscreen"
                      icon="ls"
                    />
                    <SidebarItem
                      subMenuItem
                      url="/condensed/extra/gallery"
                      title="Gallery"
                      icon="gl"
                    />
                    <SidebarItem
                      subMenuItem
                      url="/condensed/extra/timeline"
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
                <i className="pg-icon">menu_level</i>
              </span>
              <SlideDown className={"my-dropdown-slidedown"}>
                {this.state.shouldExpand &&
                  this.state.clickedMenu === "MenuLevels" && (
                    <ul className="sub-menu">
                      <SidebarItem
                        subMenuItem
                        url="/condensed/levelOne"
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
                              this.state.clickedMenuNest === "MenuLevelsTwo"
                                ? "arrow open active"
                                : "arrow"
                            }
                          ></span>
                        </a>
                        <span className="icon-thumbnail">L2</span>
                        <SlideDown className={"my-dropdown-slidedown"}>
                          {this.state.shouldExpandNest &&
                            this.state.clickedMenuNest === "MenuLevelsTwo" && (
                              <ul className="sub-menu">
                                <SidebarItem
                                  subMenuItem
                                  url="/condensed/submenu"
                                  title="Sub Menu"
                                  icon="sm"
                                />
                                <SidebarItem
                                  subMenuItem
                                  url="/condensed/submenu"
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
                <i className="pg-icon">flag</i>
              </span>
            </li>
            <li className="m-b-40">
              <a
                href="http://changelog.pages.revox.io/"
                rel="noreferrer"
                target="_blank"
              >
                <span className="title">Changelog</span>
              </a>
              <span className="icon-thumbnail">
                <i className="pg-icon">clipboard</i>
              </span>
            </li>
            {/* </ul> */}
          </PerfectScrollbar>
          <a
            href="javascript:void(0);"
            className="search-link d-flex justify-content-between align-items-center d-lg-none"
            data-toggle="horizontal-menu"
            id="headerSearchInputCondensed"
          >
            Tap here to search
            <i className="pg-icon float-right">search</i>
          </a>
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
