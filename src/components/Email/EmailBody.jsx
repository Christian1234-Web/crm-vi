import React, { useState } from "react";
import parse from "html-react-parser";
import PerfectScrollbar from 'react-perfect-scrollbar';

import Button from "../UIElements/Button";
import QuillEditor from "./QuillEditor";

const EmailBody = ({ viewedEmail = null, emailGroups, onSlide = null }) => {
  const emailContent =
    viewedEmail !== null
      ? emailGroups[viewedEmail.groupIndex].list[viewedEmail.listIndex]
      : "";
  const [downDirectionDropDown, setDownDirectionDropDown] = useState(false);

  return (
    <React.Fragment>
      <div className="split-details" data-email="opened">
        <div
          className="no-result"
          style={viewedEmail === null ? {} : { display: "none" }}
        >
          <h1>No email has been selected</h1>
        </div>
		<PerfectScrollbar>
        <div
          className="email-content-wrapper"
          style={
            viewedEmail === null ? { display: "none" } : { height: "100vh" }
          }
        >
          <div className="actions-wrapper menuclipper bg-contrast-lowest">
            <button
              className="btn btn-link btn-sm d-lg-none d-xl-none sm-no-padding split-list-toggle"
              type="button"
              onClick={() => {
                if (onSlide !== null) {
                  onSlide("0px");
                }
              }}
            >
              <i className="pg-icon">chevron_left</i>
            </button>
            <button className="btn btn-link btn-sm" type="button">
              Reply
            </button>
            <button className="btn btn-link btn-sm" type="button">
              Reply all
            </button>
            <button className="btn btn-link btn-sm" type="button">
              Forward
            </button>
            <button className="btn btn-link btn-sm" type="button">
              Delete
            </button>
            <div className="clearfix"></div>
          </div>
          <div className="email-content-header">
            <div className="subject m-b-20 semi-bold mw-80">
              {emailContent.subject}
            </div>
            <div className="fromto row">
              <div className="col-lg-8 d-flex align-items-center">
                <div className="thumbnail-wrapper d48 circular flex-shrink-0">
                  <img
                    width="40"
                    height="40"
                    alt=""
                    data-src-retina={
                      process.env.PUBLIC_URL + emailContent.dpRetina
                    }
                    data-src={process.env.PUBLIC_URL + emailContent.dp}
                    src={process.env.PUBLIC_URL + emailContent.dpRetina}
                  />
                </div>
                <div>
                  <div
                    className={`dropdown dropdown-default ${
                      downDirectionDropDown ? "show" : ""
                    }  m-r-10 m-l-10`}
                  >
                    <Button
                      dropdowntoggle="true"
                      textalign="center"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded={downDirectionDropDown ? "true" : "false"}
                      onClick={() =>
                        setDownDirectionDropDown((prevState) => !prevState)
                      }
                    >
                      David Nester
                    </Button>
                    <div
                      className="dropdown-menu"
                      role="menu"
                      style={
                        downDirectionDropDown
                          ? {
                              width: "430px",
                              willChange: "transform",
                              position: "absolute",
                              transform: "translate3d(0px, 28px, 0px)",
                              top: "0px",
                              left: "0px",
                            }
                          : {}
                      }
                    >
                      <a
                        className="dropdown-item"
                        href="javascript:void(0);"
                        onClick={(e) => e.preventDefault()}
                      >
                        Action
                      </a>
                      <a
                        className="dropdown-item"
                        href="javascript:void(0);"
                        onClick={(e) => e.preventDefault()}
                      >
                        Friend{" "}
                      </a>
                      <a
                        className="dropdown-item"
                        href="javascript:void(0);"
                        onClick={(e) => e.preventDefault()}
                      >
                        Report
                      </a>
                    </div>
                  </div>
                  <label className="inline">
                    <span className="small-text">
                      <span aria-hidden="true">&lt;</span>johnsmith@skyace.com
                      <span aria-hidden="true">&gt;</span>
                    </span>
                  </label>
                </div>
              </div>
              <div className="col-lg-4 d-flex align-items-center text-right sm-text-left">
                <p className="datetime no-margin small-text full-width">
                  {emailContent.datetime}
                </p>
              </div>
            </div>
          </div>
          <div className="email-content" style={{ width: "96%" }}>
            <div className="clearfix"></div>
            <div className="email-content-body m-t-20 m-b-30">
              {parse(`${emailContent.body}`)}
            </div>
            <QuillEditor />
          </div>
        </div>
		</PerfectScrollbar>
      </div>
    </React.Fragment>
  );
};

export default EmailBody;
