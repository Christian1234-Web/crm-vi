import React from "react";
import { useSelector } from "react-redux";

import HeaderContent from "./Content";

import "./style.scss";

const Component = ({ location, inboxHeader, setInboxHeader }) => {
  let shouldViewHeader =
    location.pathname !== "/extra/404" &&
    !location.pathname.includes("/extra/500") &&
    !location.pathname.includes("/extra/login") &&
    !location.pathname.includes("/extra/register") &&
    !location.pathname.includes("/extra/lock_screen")
      ? true
      : false;

  const sideBarStatus = useSelector(
    (state) => state.QuickView.openMobileSideBar
  );

  return (
    <div
      className={`header header-corporate ${
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
      {location.pathname.includes("/boxed_layout") ? (
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
