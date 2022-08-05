import React from "react";
import { useSelector } from "react-redux";

import HeaderContent from "./Content";

import "./style.css";

const Component = ({ location, inboxHeader, openMobileToggle }) => {
  let shouldViewHeader =
    location.pathname !== "/extra/404" &&
    location.pathname !== "/extra/500" &&
    location.pathname !== "/extra/login" &&
    location.pathname !== "/extra/register" &&
    location.pathname !== "/extra/lock_screen"
      ? true
      : false;

  const sideBarStatus = useSelector(
    (state) => state.QuickView.openMobileSideBar
  );

  return (
    <HeaderContent
      location={location}
      inboxHeader={inboxHeader}
      openMobileToggle={openMobileToggle}
    />
  );
};

export default Component;
