import React from "react";

import PageContainer from "../Containers";
import PageScroll from "../PageScroll";

import Breadcrumb from "../Breadcrumb";
import ProgressBar from "../ProgressBar";
import ProgressCircle from "../ProgressCircle";
import Copyright from "../../ui/Footer/Copyright";

const content = ({ path }) => {
  return (
    <div className="page-content-wrapper ">
      {/* START PAGE CONTENT */}
      <div className="content">
        {/* START CONTAINER FLUID */}
        <div className="jumbotron" data-pages="parallax">
          <PageContainer
            className={
              path.includes("/executive") || path.includes("/casual")
                ? "container"
                : " "
            }
          >
            <PageScroll className="inner">
              <Breadcrumb>
                <li className="breadcrumb-item">
                  <a href="javascript:void(0);">UI Elements</a>
                </li>
                <li className="breadcrumb-item active">Progress Bars</li>
              </Breadcrumb>
              <div className="m-b-20">
                <div className="row m-0">
                  <div className="col-xl-5 col-lg-6">
                    <div className="card card-transparent">
                      <div className="card-header ">
                        <div className="card-title">Getting started</div>
                      </div>
                      <div className="card-body">
                        <h3>Custom built for anyone, anywhere.</h3>
                        <p>
                          As always, in keeping with our policy of making UX
                          easier and more user-friendly, we have customized this
                          feature with a lightweight SVG indicator. Also this is
                          highly adaptable and offers a range of progress bar
                          options to suit your preference.{" "}
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
                              alt="Avatar"
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
                  <div className="col-xl-7 col-lg-6 bg-white">
                    <div className="full-height d-flex justify-content-center align-items-center">
                      <div className="card-body text-center">
                        <img
                          className="image-responsive-height demo-mw-50"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/img/demo/progress.svg"
                          }
                          alt="Progress"
                        />
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
              <div className="card-title">Linear progress</div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-4">
                  <p>
                    A progress bar is a visual way of showing how much of a
                    curtain task has been completed. We made it light weighted
                    and simple as possible just for better user experience.
                    Progress can be indeterminate or determinate according to
                    the length of a task.{" "}
                  </p>
                  <br />
                  <br />
                  <div className="row">
                    <div className="col-lg-6">
                      <p className="small hint-text">Indeterminate progress</p>
                      <div className="progress">
                        <div className="progress-bar-indeterminate"></div>
                      </div>
                      <br />
                      <p className="small hint-text">Determinate progress</p>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          style={{ width: "45%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card card-default">
                    <div className="card-body text-center no-padding">
                      <img
                        alt="Determinate bar"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/img/demo/determinate_bar.gif"
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card card-default">
                    <div className="card-body text-center no-padding">
                      <img
                        alt="Indeterminate bar"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/img/demo/indeterminate_bar.gif"
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>

        <PageContainer
          className={
            path.includes("/executive") || path.includes("/casual")
              ? "container"
              : " "
          }
        >
          <div className="card card-transparent">
            <div className="card-header ">
              <div className="card-title">Linear progress options</div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-4">
                  <h5>Indeterminate progress bar</h5>
                  <p>
                    This progress is used when the length of the task is
                    unknown. Thus shows a repetitive cycle. With the use of a
                    scalable vector graphic we made it light weighted and simple
                    for a better UX.
                  </p>
                  <h5>Determinate progress bar</h5>
                  <p>
                    This progress is used when the length of the task can be
                    measured and visually shown. Thus for linear progress
                    determinate is used frequently. To use simply use
                    .progress-bar-determinate
                  </p>
                </div>
                <div className="col-lg-4">
                  <h5>Colour options</h5>
                  <p>
                    You can also apply any color suited according to the nature
                    of the task.{" "}
                  </p>
                  <br />
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="progress ">
                        <ProgressBar
                          type="primary"
                          style={{ width: "35%" }}
                        ></ProgressBar>
                      </div>
                      <div className="progress ">
                        <ProgressBar
                          type="complete"
                          style={{ width: "45%" }}
                        ></ProgressBar>
                      </div>
                      <div className="progress ">
                        <ProgressBar
                          type="success"
                          style={{ width: "55%" }}
                        ></ProgressBar>
                      </div>
                      <div className="progress ">
                        <ProgressBar
                          type="bar-warning"
                          style={{ width: "65%" }}
                        ></ProgressBar>
                      </div>
                      <div className="progress ">
                        <ProgressBar
                          type="danger"
                          style={{ width: "75%" }}
                        ></ProgressBar>
                      </div>
                    </div>
                  </div>
                  <p className="small hint-text">
                    All the colors included in pages color palette are
                    applicable.
                  </p>
                </div>
                <div className="col-lg-4">
                  <h5>Bar sizes</h5>
                  <p>
                    You can also use a thinner version of the default progress
                    by simple changing .progress-small{" "}
                  </p>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="progress progress-small ">
                        <ProgressBar
                          type="success"
                          style={{ width: "45%" }}
                        ></ProgressBar>
                      </div>
                      <div className="progress">
                        <ProgressBar
                          type="success"
                          style={{ width: "45%" }}
                        ></ProgressBar>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>

        <PageContainer
          className={
            path.includes("/executive") || path.includes("/casual")
              ? "container"
              : " "
          }
        >
          <div className="card card-transparent">
            <div className="card-header ">
              <div className="card-title">Circular progress</div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-4">
                  <p>
                    Circular progress is frequently used to show a repetitive
                    cycle for its shape. But breaking convention a circular
                    progress can be indeterminate or determinate according to a
                    task. Developed mainly for better Visual Experience.{" "}
                  </p>
                  <br />
                  <br />
                  <div className="row">
                    <div className="col-md-6 text-center">
                      <div className="progress-circle-indeterminate m-t-45"></div>
                      <br />
                      <p className="small hint-text">Indeterminate Progress</p>
                    </div>
                    <div className="col-md-6 text-center">
                      <div className="m-t-45">
                        <ProgressCircle
                          value={40}
                          rightSideHalfCircleStyle={{
                            transform: "rotate(144deg)",
                          }}
                        ></ProgressCircle>
                      </div>
                      <br />
                      <p className="small hint-text">Determinate Progress</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card card-default">
                    <div className="card-body text-center no-padding">
                      <img
                        alt="Determinate circle"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/img/demo/determinate_circle.gif"
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card card-default">
                    <div className="card-body text-center no-padding">
                      <img
                        alt="Indeterminate circle"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/img/demo/indeterminate_circle.gif"
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>

        <PageContainer
          className={
            path.includes("/executive") || path.includes("/casual")
              ? "container"
              : " "
          }
        >
          <div className="card card-transparent">
            <div className="card-header ">
              <div className="card-title">Circular progress options</div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-4">
                  <h5>Indeterminate progress</h5>
                  <p>
                    This is mostly used for its repetitive circular shape for
                    tasks in which the time cannot be measured. With the use of
                    SVG, the size can be scaled to any preferred amount by the
                    user without any quality loss. We developed a custom
                    animation with different timescales and animation curves for
                    natural look and feel.{" "}
                  </p>
                  <br />
                  <h5>Determinate progress</h5>
                  <p>
                    Similar to the determinate progress bar, circular progress
                    can also be used to show the length of a task. The
                    determinate circular progress indicator can be initialized
                    without writing a single line of Javascript code.{" "}
                  </p>
                </div>
                <div className="col-lg-4">
                  <h5>Color options</h5>
                  <div className="row">
                    <div className="col-md-4 text-center">
                      <ProgressCircle
                        value="75"
                        dataColor="complete"
                        circleStyle={{ clip: "rect(auto, auto, auto, auto)" }}
                        leftSideHalfCircleStyle={{
                          transform: "rotate(270deg)",
                        }}
                        rightSideHalfCircleStyle={{
                          transform: "rotate(180deg)",
                        }}
                      ></ProgressCircle>
                    </div>
                    <div className="col-md-8">
                      <p>Complete Progress bar color</p>
                      <p className="small hint-text">
                        Set data attribute <code>data-color</code> to "complete"
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 text-center">
                      <ProgressCircle
                        value="75"
                        dataColor="complete"
                        circleStyle={{ clip: "rect(auto, auto, auto, auto)" }}
                        leftSideHalfCircleStyle={{
                          transform: "rotate(270deg)",
                        }}
                        rightSideHalfCircleStyle={{
                          transform: "rotate(180deg)",
                        }}
                      ></ProgressCircle>
                    </div>
                    <div className="col-md-8">
                      <p>Complete Progress bar color</p>
                      <p className="small hint-text">
                        Set data attribute <code>data-color</code> to "primary"
                      </p>
                    </div>
                  </div>
                  <p className="small hint-text">
                    All the colors included in pages color palette is applicable
                  </p>
                  <br />
                  <button aria-label="" className="btn btn-success">
                    See color palette
                  </button>
                </div>
                <div className="col-lg-4">
                  <h5>Circular progress sizes</h5>
                  <p>In circular progress, you can change the stroke width</p>
                  <div className="row">
                    <div className="col-md-4 text-center">
                      <ProgressCircle
                        value="75"
                        circleStyle={{ clip: "rect(auto, auto, auto, auto)" }}
                        leftSideHalfCircleStyle={{
                          transform: "rotate(270deg)",
                        }}
                        rightSideHalfCircleStyle={{
                          transform: "rotate(180deg)",
                        }}
                      ></ProgressCircle>
                    </div>
                    <div className="col-md-8">
                      <p className="small hint-text">
                        Default progress with a stroke of 3px
                      </p>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-md-4 text-center">
                      <ProgressCircle
                        value="75"
                        dataThick="true"
                        circleStyle={{ clip: "rect(auto, auto, auto, auto)" }}
                        leftSideHalfCircleStyle={{
                          transform: "rotate(270deg)",
                        }}
                        rightSideHalfCircleStyle={{
                          transform: "rotate(180deg)",
                        }}
                      ></ProgressCircle>
                    </div>
                    <div className="col-md-8">
                      <p className="small hint-text">
                        Progress with a stroke of 3px
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>

        {/* END CONTAINER FLUID */}
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
