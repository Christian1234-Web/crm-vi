import React from "react";

import TimeLinePoint from "./TimeLinePoint";
import EventDate from "./EventDate";
import Copyright from "../../ui/Footer/Copyright";
import Card from "./Card";
import CardFooter from "./CardFooter";

const content = ({ path }) => {
  return (
    <div className="page-content-wrapper ">
      {/* START PAGE CONTENT */}
      <div className="content ">
        <div className="container-fluid sm-p-l-5 bg-contrast-lower ">
          <div className="timeline-container top-circle">
            <section className="timeline">
              <div className="timeline-block">
                <TimeLinePoint type="success">
                  <i className="pg-icon">map</i>
                </TimeLinePoint>
                <div className="timeline-content">
                  <Card type="social-card">
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
                          alt="Profile"
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
                        <span className="location semi-bold d-flex align-items-center">
                          <i className="pg-icon">map</i> SF, California
                        </span>
                      </h6>
                    </div>
                    <div className="card-description">
                      <p>
                        What you think, you become. What you feel, you attract.
                        What you imagine, you create - Buddha.{" "}
                        <a href="javascript:void(0);">#quote</a>{" "}
                      </p>
                      <div className="via">via Twitter</div>
                    </div>
                  </Card>
                  <EventDate
                    title="Apple Inc"
                    date="15 January 2015, 06:50 PM"
                  />
                </div>
              </div>

              <div className="timeline-block">
                <TimeLinePoint type="small"></TimeLinePoint>
                <div className="timeline-content">
                  <Card type="social-card">
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
                          alt="Profile"
                          width="33"
                          height="33"
                          data-src-retina={`${process.env.PUBLIC_URL}/assets/img/profiles/5x.jpg`}
                          data-src={`${process.env.PUBLIC_URL}/assets/img/profiles/5.jpg`}
                          src={`${process.env.PUBLIC_URL}/assets/img/profiles/5.jpg`}
                        />
                      </div>
                      <h5>Shannon Williams</h5>
                      <h6 className="d-flex align-items-center">
                        <span>Shared a photo</span>
                        <span className="location semi-bold d-flex align-items-center">
                          <i className="pg-icon">map</i> NYC, New York
                        </span>
                      </h6>
                    </div>
                    <div className="card-description">
                      <p>
                        Inspired by : good design is obvious, great design is
                        transparent
                      </p>
                      <div className="via">via themeforest</div>
                    </div>
                    <div className="card-content">
                      <ul className="buttons ">
                        <li>
                          <a href="javascript:void(0);">
                            <i className="pg-icon">expand</i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <i className="pg-icon">heart_outline</i>
                          </a>
                        </li>
                      </ul>
                      <img
                        alt="Social post"
                        src={`${process.env.PUBLIC_URL}/assets/img/social-post-image.png`}
                      />
                    </div>
                    <CardFooter>
                      <div className="time">few seconds ago</div>
                      <ul className="reactions">
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="d-flex align-items-center"
                          >
                            5,345 <i className="pg-icon">comment</i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="d-flex align-items-center"
                          >
                            23K <i className="pg-icon">heart</i>
                          </a>
                        </li>
                      </ul>
                    </CardFooter>
                  </Card>
                  <EventDate date="15 January 2015, 06:50 PM" />
                </div>
              </div>

              <div className="timeline-block">
                <TimeLinePoint type="warning bounce-in">
                  <i className="pg-icon">chat</i>
                </TimeLinePoint>
                <div className="timeline-content bounce-in">
                  <Card type="social-card">
                    <div className="card-header clearfix">
                      <h5 className="text-warning pull-left fs-12">
                        Stock Market{" "}
                        <i className="pg-icon text-warning fs-11">circle</i>
                      </h5>
                      <div className="pull-right small hint-text d-flex align-items-center">
                        5,345 <i className="pg-icon">comment</i>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                    <div className="card-description">
                      <h5 className="no-margin">Apple Inc.</h5>
                      <h5 className="small hint-text no-margin">
                        NASDAQ: AAPL - Nov 13 8:37 AM ET
                      </h5>
                      <h3>
                        111.25{" "}
                        <span className="text-warning">
                          <i className="pg-icon text-warning">drop_up</i> 0.15
                          (0.13%)
                        </span>
                      </h3>
                    </div>
                    <CardFooter>
                      <div className="pull-left">
                        by <span className="text-warning">John Smith</span>
                      </div>
                      <div className="pull-right hint-text">Apr 23</div>
                      <div className="clearfix"></div>
                    </CardFooter>
                  </Card>
                  <EventDate title="Shared" date="15 January 2015, 06:50 PM" />
                </div>
              </div>

              <div className="timeline-block">
                <TimeLinePoint type="small bounce-in"></TimeLinePoint>
                <div className="timeline-content bounce-in">
                  <Card type="social-card">
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
                          alt="Profile"
                          width="33"
                          height="33"
                          data-src-retina={`${process.env.PUBLIC_URL}/assets/img/profiles/6x.jpg`}
                          data-src={`${process.env.PUBLIC_URL}/assets/img/profiles/6.jpg`}
                          src={`${process.env.PUBLIC_URL}/assets/img/profiles/6.jpg`}
                        />
                      </div>
                      <h5>Nathaniel Hamilton</h5>
                      <div className="d-flex align-items-center">
                        <h6>
                          Shared a Tweet
                          <span className="location semi-bold">
                            <i className="icon-map"></i> NYC, New York
                          </span>
                        </h6>
                      </div>
                    </div>
                    <div className="card-description">
                      <p>
                        Testing can show the presense of bugs, but not their
                        absence.
                      </p>
                      <div className="via">via Twitter</div>
                    </div>
                  </Card>
                  <EventDate date="15 January 2015, 06:50 PM" />
                </div>
              </div>

              <div className="timeline-block">
                <TimeLinePoint type="small bounce-in"></TimeLinePoint>
                <div className="timeline-content bounce-in">
                  <Card type="social-card">
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
                          alt="Profile"
                          width="33"
                          height="33"
                          data-src-retina={`${process.env.PUBLIC_URL}/assets/img/profiles/4x.jpg`}
                          data-src={`${process.env.PUBLIC_URL}/assets/img/profiles/4.jpg`}
                          src={`${process.env.PUBLIC_URL}/assets/img/profiles/4.jpg`}
                        />
                      </div>
                      <h5>Andy Young</h5>
                      <h6>
                        Updated his status
                        <span className="location semi-bold">
                          <i className="icon-map"></i> NYC, New York
                        </span>
                      </h6>
                    </div>
                    <div className="card-description">
                      <p>
                        What a lovely day! I think I should go and play outside.
                      </p>
                    </div>
                  </Card>
                  <EventDate date="15 January 2015, 06:50 PM" />
                </div>
              </div>
            </section>
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
