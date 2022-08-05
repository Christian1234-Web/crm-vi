import React from "react";

import Copyright from "../ui/Footer/Copyright";
import PageContainer from "../UIElements/Containers";
import PageBreadcrumb from "../UIElements/Breadcrumb";
import PageScroll from "../UIElements/PageScroll";

const content = ({ path }) => {
  return (
    <div className="page-content-wrapper ">
      {/* START PAGE CONTENT */}
      <div className="content ">
        <div className="jumbotron" data-pages="parallax">
          <PageContainer
            className={
              path.includes("/executive") || path.includes("/casual")
                ? "container p-l-10"
                : " "
            }
          >
            <PageScroll>
              <PageBreadcrumb>
                <li>
                  <a href="javascript:void(0);" className="active">
                    Views
                  </a>
                </li>
              </PageBreadcrumb>
              <div className="container-md-height m-b-20">
                <div className="row">
                  <div className="col-xl-7 col-lg-6 bg-white">
                    <div className="full-height">
                      <div className="card-body text-center">
                        <img
                          className="demo-mw-350"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/img/demo/views_animation.gif"
                          }
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6 col-top">
                    <div className="card card-transparent">
                      <div className="card-header ">
                        <div className="card-title">Getting started</div>
                      </div>
                      <div className="card-body">
                        <h3>Sometimes small things matter the most in life!</h3>
                        <p>
                          Views are pre-made view ports which comes in handy for
                          HTML5 mobile hybrid apps, These elements help in the
                          navigation of your app with a touch of some cool
                          pre-built animations, see the demo below
                        </p>
                        <br />
                        <div>
                          <div className="profile-img-wrapper m-t-5 inline">
                            <img
                              width="35"
                              height="35"
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/img/profiles/avatar_small.jpg"
                              }
                              alt=""
                              data-src={
                                process.env.PUBLIC_URL +
                                "/assets/img/profiles/avatar_small.jpg"
                              }
                              data-src-retina="assets/img/profiles/avatar_small2x.jpg"
                            />
                            <div className="chat-status available"></div>
                          </div>
                          <div className="inline m-l-10">
                            <p className="small hint-text m-t-5">
                              VIA senior product manage
                              <br /> for UI/UX at REVOX
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </PageScroll>
          </PageContainer>
        </div>
        <PageContainer
          className={
            path.includes("/executive") || path.includes("/casual")
              ? "container"
              : " "
          }
        >
          <div className="card card-transparent">
            <div className="card-header ">
              <div className="card-title">Getting started</div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4">
                  <div className="card card-transparent">
                    <div className="card-body no-padding">
                      <div className="view-iframe-wrapper">
                        <iframe
                          className="no-border"
                          src="https://pages.revox.io/dashboard/latest/html/condensed/views_push_parallax.html"
                        >
                          Iframes are not supported.{" "}
                        </iframe>
                      </div>
                      <h5 className="font-montserrat text-uppercase hint-text fs-12 m-t-35">
                        Push with Paralax
                      </h5>
                      <p>
                        Set <code>data-view-animation</code> property to{" "}
                        <code>push-parrallax</code> to simulate the native
                        push-segue animation available in iOS.{" "}
                        <a href="https://reactdocs.revox.io/views">More info</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-transparent">
                    <div className="card-body no-padding">
                      <div className="view-iframe-wrapper">
                        <iframe
                          className="no-border"
                          src="https://pages.revox.io/dashboard/latest/html/condensed/views_push.html"
                        >
                          Iframes are not supported.{" "}
                        </iframe>
                      </div>
                      <h5 className="font-montserrat  text-uppercase hint-text fs-12 m-t-35">
                        Push screen
                      </h5>
                      <p>
                        Set <code>data-view-animation</code> property to{" "}
                        <code>push</code> to simulate the native push-segue
                        animation available in iOS.{" "}
                        <a href="https://reactdocs.revox.io/views">More info</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-transparent">
                    <div className="card-body no-padding">
                      <div className="view-iframe-wrapper">
                        <iframe
                          className="no-border"
                          src="https://pages.revox.io/dashboard/latest/html/condensed/views_from_top.html"
                        >
                          Iframes are not supported.{" "}
                        </iframe>
                      </div>
                      <h5 className="font-montserrat text-uppercase hint-text fs-12 m-t-35">
                        Screen on top
                      </h5>
                      <p>
                        Set <code>data-view-animation</code> property to{" "}
                        <code>from-top</code> to simulate the native push-segue
                        animation available in iOS.{" "}
                        <a href="https://reactdocs.revox.io/views">More info</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
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
