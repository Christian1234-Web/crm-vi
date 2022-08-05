import React from "react";
import { useSelector } from "react-redux";

import HeaderContent from "./Content";

import "./style.css";

const Component = ({ location, inboxHeader, setInboxHeader }) => {
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
    <div
      className={`header simple-header ${
        sideBarStatus && location.pathname !== "/" ? "headerAlign" : ""
      }`}
      style={
        shouldViewHeader
          ? location.pathname === "/google_map"
            ? { backgroundColor: "transparent" }
            : {}
          : { display: "none" }
      }
    >
      {location.pathname.includes("boxed_layout") ? (
        <div className="container">
          <div className="header-inner">
            <HeaderContent
              location={location}
              inboxHeader={inboxHeader}
              setInboxHeader={setInboxHeader}
            />
          </div>
        </div>
      ) : (
        <HeaderContent
          location={location}
          inboxHeader={inboxHeader}
          setInboxHeader={setInboxHeader}
        />
      )}
    </div>
  );
};

export default Component;
