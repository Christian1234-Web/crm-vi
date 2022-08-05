import React, { useRef, useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import PageContainer from "../UIElements/Containers";
import PageScroll from "../UIElements/PageScroll";
import Copyright from "../ui/Footer/Copyright";
import Card from "./Card";
import Description from "./CardDesc";
import Reactions from "./Reactions";
import ActionButtons from "./ActionButtons";

import "./style.css";

const content = ({ path }) => {
  const breakpointColumnsObj = {
    default: 2,
    2600: 4,
    1500: 3,
    1100: 2,
    1024: 2,
    780: 1,
    700: 1,
    500: 1,
  };
  const breakpointColumnsObjStatusUpdate = {
    default: 1,
    1100: 1,
    1024: 1,
    700: 1,
    500: 1,
  };

  const [formStep, setFormStep] = useState("home");
  const [progressWidth, setProgressWidth] = useState("0px");
  const [progressOpacity, setProgressOpacity] = useState("1");

  const profileRef = useRef(null);
  const contactRef = useRef(null);
  const personRef = useRef(null);

  useEffect(() => {
    if (formStep === "profile") profileRef.current.focus();
    if (formStep === "contact") contactRef.current.focus();
    if (formStep === "person") personRef.current.focus();
  });

  return (
    <div className="page-content-wrapper ">
      {/* START PAGE CONTENT */}
      <div className="content ">
        <div className="social-wrapper">
          <div className="social " data-pages="social">
            <div
              className="jumbotron"
              data-social="cover"
              data-pages="parallax"
            >
              <div
                className="cover-photo"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/social/cover.jpg)`,
                  transform: "translateY(0px)",
                }}
              ></div>
              <PageContainer className=" sm-p-l-0 sm-p-r-0">
                <PageScroll>
                  <div className="social-text-heading pull-bottom bottom-left m-b-40 sm-p-l-15">
                    <h5 className="text-white no-margin">
                      welcome to pages socials
                    </h5>
                    <h1 className="text-white no-margin">
                      <span className="semi-bold">social</span> cover
                    </h1>
                  </div>
                </PageScroll>
              </PageContainer>
            </div>
            <PageContainer className=" sm-p-l-0 sm-p-r-0">
              <div className="feed" id="feed-social">
                <div className="day" data-social="day">
                  <div
                    className="card card-borderless no-border bg-transparent full-width"
                    data-social="item"
                  >
                    <div className="container-fluid p-t-30 p-b-30 ">
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="container-xs-height">
                            <div className="row-xs-height">
                              <div className="social-user-profile col-xs-height text-center col-top">
                                <div className="thumbnail-wrapper d48 circular bordered b-white">
                                  <img
                                    alt=""
                                    width="55"
                                    height="55"
                                    data-src-retina={`${process.env.PUBLIC_URL}/assets/img/profiles/avatar_small2x.jpg`}
                                    data-src={`${process.env.PUBLIC_URL}/assets/img/profiles/avatar.jpg`}
                                    src={`${process.env.PUBLIC_URL}/assets/img/profiles/avatar.jpg`}
                                  />
                                </div>
                                <br />
                                <i className="pg-icon text-success m-t-10">
                                  tick_circle
                                </i>
                              </div>
                              <div className="col-xs-height p-l-20">
                                <h3 className="no-margin p-b-5">
                                  David Nester
                                </h3>
                                <p className="no-margin fs-16">
                                  is excited about the new pages design
                                  framework
                                </p>
                                <p className="hint-text m-t-5 small">
                                  San Fransisco Bay | CEO at Pages.inc
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <p className="no-margin fs-16">
                            Hi My Name is David Nester, &amp; heres my new pages
                            user profile page
                          </p>
                          <p className="hint-text m-t-5 small">
                            I love reading people's about page especially those
                            who are in the same industry as me.
                          </p>
                        </div>
                        <div className="col-lg-4">
                          <p className="m-b-5 small">1,435 Mutual Friends</p>
                          <ul className="list-unstyled ">
                            <li className="m-r-10">
                              <div className="thumbnail-wrapper d32 circular b-white m-r-5 b-a b-white">
                                <img
                                  width="35"
                                  height="35"
                                  data-src-retina={`${process.env.PUBLIC_URL}assets/img/profiles/1x.jpg`}
                                  data-src={`${process.env.PUBLIC_URL}/assets/img/profiles/1.jpg`}
                                  alt=""
                                  src={`${process.env.PUBLIC_URL}/assets/img/profiles/1.jpg`}
                                />
                              </div>
                            </li>
                            <li>
                              <div className="thumbnail-wrapper d32 circular b-white m-r-5 b-a b-white">
                                <img
                                  width="35"
                                  height="35"
                                  data-src-retina={`${process.env.PUBLIC_URL}assets/img/profiles/2x.jpg`}
                                  data-src={`${process.env.PUBLIC_URL}/assets/img/profiles/2.jpg`}
                                  alt=""
                                  src={`${process.env.PUBLIC_URL}/assets/img/profiles/2.jpg`}
                                />
                              </div>
                            </li>
                            <li>
                              <div className="thumbnail-wrapper d32 circular b-white m-r-5 b-a b-white">
                                <img
                                  width="35"
                                  height="35"
                                  data-src-retina={`${process.env.PUBLIC_URL}/assets/img/profiles/3x.jpg`}
                                  data-src={`${process.env.PUBLIC_URL}/assets/img/profiles/3.jpg`}
                                  alt=""
                                  src={`${process.env.PUBLIC_URL}/assets/img/profiles/3.jpg`}
                                />
                              </div>
                            </li>
                            <li>
                              <div className="thumbnail-wrapper d32 circular b-white m-r-5 b-a b-white">
                                <img
                                  width="35"
                                  height="35"
                                  data-src-retina={`${process.env.PUBLIC_URL}/assets/img/profiles/4x.jpg`}
                                  data-src={`${process.env.PUBLIC_URL}/assets/img/profiles/4.jpg`}
                                  alt=""
                                  src={`${process.env.PUBLIC_URL}/assets/img/profiles/4.jpg`}
                                />
                              </div>
                            </li>
                            <li>
                              <div className="thumbnail-wrapper d32 circular b-white m-r-5 b-a b-white">
                                <img
                                  width="35"
                                  height="35"
                                  data-src-retina={`${process.env.PUBLIC_URL}/assets/img/profiles/5x.jpg`}
                                  data-src={`${process.env.PUBLIC_URL}/assets/img/profiles/5.jpg`}
                                  alt=""
                                  src={`${process.env.PUBLIC_URL}/assets/img/profiles/5.jpg`}
                                />
                              </div>
                            </li>
                            <li>
                              <div className="thumbnail-wrapper d32 circular b-white m-r-5 b-a b-white">
                                <img
                                  width="35"
                                  height="35"
                                  data-src-retina={`${process.env.PUBLIC_URL}/assets/img/profiles/6x.jpg`}
                                  data-src={`${process.env.PUBLIC_URL}/assets/img/profiles/6.jpg`}
                                  alt=""
                                  src={`${process.env.PUBLIC_URL}/assets/img/profiles/6.jpg`}
                                />
                              </div>
                            </li>
                            <li>
                              <div className="thumbnail-wrapper d32 circular b-white m-r-5 b-a b-white">
                                <img
                                  width="35"
                                  height="35"
                                  data-src-retina={`${process.env.PUBLIC_URL}assets/img/profiles/7x.jpg`}
                                  data-src={`${process.env.PUBLIC_URL}/assets/img/profiles/7.jpg`}
                                  alt=""
                                  src={`${process.env.PUBLIC_URL}/assets/img/profiles/7.jpg`}
                                />
                              </div>
                            </li>
                            <li>
                              <div className="thumbnail-wrapper d32 circular b-white">
                                <div className="bg-contrast-high text-center text-white">
                                  <span>+34</span>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <br />
                          <p className="m-t-5 small">More friends</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Masonry
                    breakpointCols={breakpointColumnsObjStatusUpdate}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                  >
                    <Card
                      type="social"
                      className="col2 masonry"
                      id="step-form-card"
                      style={{ position: "relative" }}
                    >
                      <div
                        style={{
                          borderTop: "1.5px solid",
                          width: progressWidth,
                          transition: "width 1s ease",
                          opacity: progressOpacity,
                        }}
                      ></div>
                      <Tabs
                        defaultActiveKey="home"
                        id="steps-form-id"
                        activeKey={formStep}
                      >
                        <Tab eventKey="home" title="Home">
                          <div
                            className="form-group form-group-default"
                            style={{ border: "0px" }}
                          >
                            <span>
                              <label className="step-form-input-label">
                                What is on your mind?
                              </label>
                            </span>
                            <input
                              type="text"
                              className="form-control"
                              autoFocus
                              onKeyPress={(e) => {
                                if (e.key === "Enter") {
                                  setFormStep("profile");
                                  setProgressWidth("25%");
                                }
                              }}
                            />
                          </div>
                        </Tab>
                        <Tab eventKey="profile" title="Profile">
                          <div
                            className="form-group form-group-default"
                            style={{ border: "0px" }}
                          >
                            <span>
                              <label className="step-form-input-label">
                                What are you feeling?
                              </label>
                            </span>
                            <input
                              type="text"
                              className="form-control"
                              ref={profileRef}
                              onKeyPress={(e) => {
                                if (e.key === "Enter") {
                                  setFormStep("contact");
                                  setProgressWidth("50%");
                                }
                              }}
                            />
                          </div>
                        </Tab>
                        <Tab eventKey="contact" title="Contact">
                          <div
                            className="form-group form-group-default"
                            style={{ border: "0px" }}
                          >
                            <span>
                              <label className="step-form-input-label">
                                What is your location?
                              </label>
                            </span>
                            <input
                              type="text"
                              className="form-control"
                              ref={contactRef}
                              onKeyPress={(e) => {
                                if (e.key === "Enter") {
                                  setFormStep("person");
                                  setProgressWidth("75%");
                                }
                              }}
                            />
                          </div>
                        </Tab>
                        <Tab eventKey="person" title="Contact">
                          <div
                            className="form-group form-group-default"
                            style={{ border: "0px" }}
                          >
                            <span>
                              <label className="step-form-input-label">
                                Who are you with?
                              </label>
                            </span>
                            <input
                              type="text"
                              className="form-control"
                              ref={personRef}
                              onKeyPress={(e) => {
                                if (e.key === "Enter") {
                                  setFormStep("status");
                                  setProgressWidth("100%");
                                  setTimeout(
                                    () => setProgressOpacity("0"),
                                    1100
                                  );
                                }
                              }}
                            />
                          </div>
                        </Tab>
                        <Tab eventKey="status" title="Contact">
                          <div
                            className="form-group form-group-default"
                            style={{ border: "0px" }}
                          >
                            <span className="final-message d-flex visible">
                              <i className="pg-icon m-r-5">tick_circle</i>{" "}
                              Status updated
                            </span>
                          </div>
                        </Tab>
                      </Tabs>
                    </Card>
                  </Masonry>
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                  >
                    <Card
                      type="social"
                      className="status col1 masonry"
                      id="salary-card"
                    >
                      <div
                        className="circle"
                        data-toggle="tooltip"
                        title=""
                        data-container="body"
                        data-original-title="Label"
                      ></div>
                      <h5>
                        David Nester updated his status
                        <span className="hint-text">few seconds ago</span>
                      </h5>
                      <h2>
                        Earned my first salary bonus for the best design of the
                        year award.
                      </h2>
                      <Reactions
                        type="reactions"
                        comment={{ count: "5,345", icon: "comment_alt" }}
                        reaction={{ count: "23K", icon: "heart" }}
                      />
                    </Card>
                    <Card type="social" className="share  col1 masonry">
                      <div
                        className="circle"
                        data-toggle="tooltip"
                        title=""
                        data-container="body"
                        data-original-title="Label"
                      ></div>
                      <div className="card-header clearfix">
                        <div className="user-pic">
                          <img
                            alt=""
                            width="33"
                            height="33"
                            data-src-retina={`${process.env.PUBLIC_URL}/assets/img/profiles/5x.jpg`}
                            data-src={`${process.env.PUBLIC_URL}/assets/img/profiles/5.jpg`}
                            src={`${process.env.PUBLIC_URL}/assets/img/profiles/5.jpg`}
                          />
                        </div>
                        <h5>Shannon Williams</h5>
                        <h6 className="d-flex align-items-center">
                          Shared a photo
                          <i className="pg-icon">map</i>
                          <span className="location semi-bold">
                            {" "}
                            NYC, New York
                          </span>
                        </h6>
                      </div>
                      <Description>
                        <p>
                          Inspired by : good design is obvious, great design is
                          transparent
                        </p>
                        <div className="via">via themeforest</div>
                      </Description>
                      <div className="card-content">
                        <ActionButtons
                          isExpand={true}
                          expandIcon="expand"
                          isFavorite={true}
                          favoriteIcon="heart"
                        />
                        <img
                          alt="Social post"
                          src={`${process.env.PUBLIC_URL}/assets/img/social-post-image.png`}
                        />
                      </div>
                      <div className="card-footer clearfix">
                        <div className="time">few seconds ago</div>
                        <Reactions
                          type="reactions"
                          comment={{ count: "5,345", icon: "comment_alt" }}
                          reaction={{ count: "23K", icon: "heart" }}
                        />
                      </div>
                    </Card>
                    <Card type="social" className="share  col1 masonry">
                      <div
                        className="circle"
                        data-toggle="tooltip"
                        title=""
                        data-container="body"
                        data-original-title="Label"
                      ></div>
                      <div className="card-header clearfix">
                        <div className="user-pic">
                          <img
                            alt=""
                            width="33"
                            height="33"
                            data-src-retina={`${process.env.PUBLIC_URL}/assets/img/profiles/8x.jpg`}
                            data-src={`${process.env.PUBLIC_URL}/assets/img/profiles/8.jpg`}
                            src={`${process.env.PUBLIC_URL}/assets/img/profiles/8.jpg`}
                          />
                        </div>
                        <h5>Jeff Curtis</h5>
                        <h6 className="d-flex align-items-center">
                          Shared a Tweet
                          <i className="pg-icon">map</i>
                          <span className="location semi-bold">
                            SF, California
                          </span>
                        </h6>
                      </div>
                      <Description>
                        <p>
                          What you think, you become. What you feel, you
                          attract. What you imagine, you create - Buddha.{" "}
                          <a href="javascript:void(0);">#quote</a>
                        </p>
                        <div className="via">via Twitter</div>
                      </Description>
                    </Card>
                    <Card type="social" className="share  col1 masonry">
                      <div
                        className="circle"
                        data-toggle="tooltip"
                        title=""
                        data-container="body"
                        data-original-title="Label"
                      ></div>
                      <div className="card-header clearfix">
                        <div className="user-pic">
                          <img
                            alt=""
                            width="33"
                            height="33"
                            data-src-retina={`${process.env.PUBLIC_URL}/assets/img/profiles/4x.jpg`}
                            data-src={`${process.env.PUBLIC_URL}/assets/img/profiles/4.jpg`}
                            src={`${process.env.PUBLIC_URL}/assets/img/profiles/4.jpg`}
                          />
                        </div>
                        <h5>Andy Young</h5>
                        <h6 className="d-flex align-items-center">
                          Updated his status
                          <i className="pg-icon">map</i>
                          <span className="location semi-bold">
                            {" "}
                            NYC, New York
                          </span>
                        </h6>
                      </div>
                      <Description>
                        <p>
                          What a lovely day! I think I should go and play
                          outside.
                        </p>
                      </Description>
                    </Card>
                    <Card
                      type="social"
                      className="share share-other col1 masonry"
                    >
                      <div
                        className="circle"
                        data-toggle="tooltip"
                        title=""
                        data-container="body"
                        data-original-title="Label"
                      ></div>
                      <div className="card-content" style={{ height: "auto" }}>
                        <ActionButtons
                          isExpand={true}
                          expandIcon="expand"
                          isFavorite={true}
                          favoriteIcon="heart_outline"
                        />
                        <img
                          alt=""
                          src={`${process.env.PUBLIC_URL}/assets/img/social/quote.jpg`}
                        />
                      </div>
                      <Description>
                        <p>Like if you agree</p>
                      </Description>
                      <div className="card-footer clearfix">
                        <div className="time">few seconds ago</div>
                        <Reactions
                          type="reactions"
                          comment={{ count: "5,345", icon: "comment_alt" }}
                          reaction={{ count: "23K", icon: "heart" }}
                        />
                      </div>
                      <div className="card-header clearfix last">
                        <div className="user-pic">
                          <img
                            alt=""
                            width="33"
                            height="33"
                            data-src-retina={`${process.env.PUBLIC_URL}/assets/img/profiles/7x.jpg`}
                            data-src={`${process.env.PUBLIC_URL}/assets/img/profiles/7.jpg`}
                            src={`${process.env.PUBLIC_URL}/assets/img/profiles/7.jpg`}
                          />
                        </div>
                        <h5>Tracy Brooks</h5>
                        <h6>Shared a photo on your wall</h6>
                      </div>
                    </Card>
                    <Card
                      type="social"
                      className="share share-other col1 masonry"
                    >
                      <div
                        className="circle"
                        data-toggle="tooltip"
                        title=""
                        data-container="body"
                        data-original-title="Label"
                      ></div>
                      <div className="card-content" style={{ height: "auto" }}>
                        <ActionButtons
                          isExpand={true}
                          expandIcon="expand"
                          isFavorite={true}
                          favoriteIcon="heart"
                        />
                        <img
                          alt=""
                          src={`${process.env.PUBLIC_URL}/assets/img/social/person-1.jpg`}
                        />
                      </div>
                      <Description>
                        <p>
                          <a href="javascript:void(0);">#TBT</a> :D
                        </p>
                      </Description>
                      <div className="card-footer clearfix">
                        <div className="time">few seconds ago</div>
                        <Reactions
                          type="reactions"
                          comment={{ count: "5,345", icon: "comment_alt" }}
                          reaction={{ count: "23K", icon: "heart" }}
                        />
                      </div>
                      <div className="card-header clearfix last">
                        <div className="user-pic">
                          <img
                            alt=""
                            width="33"
                            height="33"
                            data-src-retina={`${process.env.PUBLIC_URL}/assets/img/profiles/avatar_small2x.jpg`}
                            data-src={`${process.env.PUBLIC_URL}/assets/img/profiles/avatar.jpg`}
                            src={`${process.env.PUBLIC_URL}/assets/img/profiles/avatar.jpg`}
                          />
                        </div>
                        <h5>David Nester</h5>
                        <h6>Shared a link on your wall</h6>
                      </div>
                    </Card>
                    <Card type="social" className="share  col1 masonry">
                      <div
                        className="circle"
                        data-toggle="tooltip"
                        title=""
                        data-container="body"
                        data-original-title="Label"
                      ></div>
                      <div className="card-header clearfix">
                        <div className="user-pic">
                          <img
                            alt=""
                            width="33"
                            height="33"
                            data-src-retina={`${process.env.PUBLIC_URL}/assets/img/profiles/6x.jpg`}
                            data-src={`${process.env.PUBLIC_URL}/assets/img/profiles/6.jpg`}
                            src={`${process.env.PUBLIC_URL}/assets/img/profiles/6.jpg`}
                          />
                        </div>
                        <h5>Nathaniel Hamilton</h5>
                        <h6 className="d-flex align-items-center">
                          Shared a Tweet
                          <i className="pg-icon">map</i>
                          <span className="location semi-bold">
                            {" "}
                            NYC, New York
                          </span>
                        </h6>
                      </div>
                      <Description>
                        <p>
                          Testing can show the presense of bugs, but not their
                          absence.
                        </p>
                        <div className="via">via Twitter</div>
                      </Description>
                    </Card>
                    <Card type="social" className="share  col1 masonry">
                      <div
                        className="circle"
                        data-toggle="tooltip"
                        title=""
                        data-container="body"
                        data-original-title="Label"
                      ></div>
                      <div className="card-header clearfix">
                        <div className="user-pic">
                          <img
                            alt=""
                            width="33"
                            height="33"
                            data-src-retina={`${process.env.PUBLIC_URL}/assets/img/profiles/6x.jpg`}
                            data-src={`${process.env.PUBLIC_URL}/assets/img/profiles/6.jpg`}
                            src={`${process.env.PUBLIC_URL}/assets/img/profiles/6.jpg`}
                          />
                        </div>
                        <h5>Nathaniel Hamilton</h5>
                        <h6 className="d-flex align-items-center">
                          Shared a Tweet
                          <i className="pg-icon">map</i>
                          <span className="location semi-bold">
                            {" "}
                            NYC, New York
                          </span>
                        </h6>
                      </div>
                      <Description>
                        <p>
                          There is nothing new under the sun, but there are lots
                          of old things we don't know yet.
                        </p>
                        <div className="via">via Twitter</div>
                      </Description>
                    </Card>
                    <Card type="social" className="share  col1 masonry">
                      <div className="card-header ">
                        <h5 className="text-complete pull-left fs-12 d-flex">
                          News{" "}
                          <i className="pg-icon text-complete">circle_fill</i>
                        </h5>
                        <div className="pull-right small hint-text d-flex">
                          5,345 <i className="pg-icon">comment_alt</i>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                      <Description>
                        <h3>
                          Ebola outbreak: Clinical drug trials to start next
                          month as death toll mounts
                        </h3>
                      </Description>
                      <div className="card-footer clearfix">
                        <div className="pull-left">
                          via <span className="text-complete">CNN</span>
                        </div>
                        <div className="pull-right hint-text">Apr 23</div>
                        <div className="clearfix"></div>
                      </div>
                    </Card>
                    <Card type="social" className="share  col1 masonry">
                      <div className="card-header clearfix">
                        <h5 className="text-success pull-left fs-12 d-flex">
                          Stock Market{" "}
                          <i className="pg-icon text-success">circle_fill</i>
                        </h5>
                        <div className="pull-right small hint-text d-flex">
                          5,345 <i className="pg-icon">comment_alt</i>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                      <Description>
                        <h5 className="no-margin">Apple Inc.</h5>
                        <h5 className="small hint-text no-margin">
                          NASDAQ: AAPL - Nov 13 8:37 AM ET
                        </h5>
                        <h3>
                          111.25{" "}
                          <span className="text-success">
                            <i className="fa fa-sort-up small text-success"></i>{" "}
                            0.15 (0.13%)
                          </span>
                        </h3>
                      </Description>
                      <div className="card-footer clearfix">
                        <div className="pull-left">
                          by <span className="text-success">John Smith</span>
                        </div>
                        <div className="pull-right hint-text">Apr 23</div>
                        <div className="clearfix"></div>
                      </div>
                    </Card>
                  </Masonry>
                </div>
              </div>
            </PageContainer>
          </div>
        </div>
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
