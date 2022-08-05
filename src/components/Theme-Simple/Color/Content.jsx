import React from "react";

import PageScroll from "../../UIElements/PageScroll";
import PageContainer from "../../UIElements/Containers";

import Copyright from "../../ui/Footer/Copyright";

const content = ({ path }) => {
  return (
    <div className="page-content-wrapper ">
      {/* START PAGE CONTENT */}
      <div className="content">
        {/* <!--START JUMBOTRON --> */}
        <div className="jumbotron page-cover bg-black m-b-0">
          <PageContainer
            className={
              path.includes("/executive") || path.includes("/casual")
                ? "sm-p-l-0 sm-p-r-0 p-l-10 p-r-0 container"
                : "sm-p-l-0 sm-p-r-0 p-l-0 p-r-0 "
            }
          >
            <PageScroll className="inner">
              <div className="container-md-height">
                <div className="row m-lg-0">
                  <div className="col-xl-7 col-lg-6">
                    {/* <!--START card --> */}
                    <div className="full-height">
                      <div className="card-body text-center justify-content-center align-items-center d-flex full-height">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/img/demo/color_banner.gif"
                          }
                          src2x={
                            process.env.PUBLIC_URL +
                            "/assets/img/demo/color_banner@2x.gif"
                          }
                          src1x={
                            process.env.PUBLIC_URL +
                            "/assets/img/demo/color_banner.gif"
                          }
                          alt=""
                          width="240"
                        />
                      </div>
                    </div>
                    {/* <!--END card --> */}
                  </div>
                  <div className="col-xl-5 col-lg-5 d-flex align-items-center p-b-20">
                    {/* <!--START card --> */}
                    <div className="card card-transparent">
                      <div className="card-header p-l-10">
                        <div className="card-title">Getting started</div>
                      </div>
                      <div className=" p-r-10 p-l-10">
                        <h3 className="">
                          Introducing pages adaptive color system.
                        </h3>
                        <p>
                          Color is a core building block of any design system.
                          Pages color system help create scalable color themes,
                          ensures accessible text, and distinguishes UI elements
                          and surfaces from one another.
                        </p>
                        <br />
                        <div>
                          <div className="inline">
                            <p className="small  hint-text m-t-5">
                              Have an Improvement or a suggestion?
                              <br />
                              goto request box
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!--END card --> */}
                  </div>
                </div>
              </div>
            </PageScroll>
          </PageContainer>
        </div>
        {/* <!--END JUMBOTRON --> */}
        <div className="bg-white">
          <div
            className={
              path.includes("/executive") || path.includes("/casual")
                ? "container-fluid container-fixed-lg p-t-40 p-b-50 p-t-40 p-b-50 container"
                : "container-fluid container-fixed-lg p-t-40 p-b-50 p-t-40 p-b-50 "
            }
          >
            <div className="row">
              <div className="col-md-6 col-lg-7">
                {/* <!--START card --> */}
                <div className="card card-transparent">
                  <div className="card-header ">
                    <div className="card-title">Tints and shades</div>
                  </div>
                  <div className="card-body">
                    <h3>Pages color spectrum</h3>
                    <p>
                      Color should be used consistently in any product so that
                      certain colors always mean the same thing. For example,
                      Pages red is used to show alerts and warnings. The Pages
                      color spectrum ensures all possible context for use of
                      color is covered with each base color having its shades
                      and tints generated automatically.
                    </p>
                  </div>
                </div>
                {/* <!--END card --> */}
              </div>
              <div className="col-md-6 col-lg-5">
                <div className="col-xl-8 pull-right">
                  {/* <!--START card --> */}
                  <div
                    className="border b-grey rounded-sm m-t-10"
                    style={{ border: "1px solid #dee2e6" }}
                  >
                    <div className="padding-10">
                      <div className="d-flex m-b-10">
                        <div className="">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/demo/palette.png"
                            }
                            alt="Pages color swatcher"
                            src1x={
                              process.env.PUBLIC_URL +
                              "/assets/img/demo/palette.png"
                            }
                            src2x={
                              process.env.PUBLIC_URL +
                              "/assets/img/demo/palette@2x.png"
                            }
                            width="56"
                            height="56"
                          />
                        </div>
                        <div className="m-l-20">
                          <p className="m-t-0 bold m-b-5">
                            Pages color swatches
                          </p>
                          <p className="m-b-5">
                            Download pages dashboard compleate spectrum color
                            palette for photoshop
                          </p>
                        </div>
                      </div>
                      <div>
                        <a
                          href="http://pages.revox.io/swatches.zip"
                          className="btn btn-sm no-border no-padding hint-text fs-12 btn-block text-left"
                        >
                          <span>Download swatcher</span>
                          <i className="pg-icon">arrow_top_right</i>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!--END card --> */}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                {/* <!--START card --> */}
                <div className="card  card-transparent">
                  <div className="card-body">
                    <div className="bg-primary  padding-15">
                      <div className="pull-left">
                        <p className="m-b-0">Primary color - Pages purple</p>
                        <p className="p-b-15">color-primary</p>
                      </div>
                      <div className="pull-right">0</div>
                      <div className="clearfix"></div>
                    </div>
                    <div className="d-flex">
                      <div className="flex-1 bg-primary-lighter">
                        <span className="pull-right p-t-10 p-r-15 p-b-35">
                          -2
                        </span>
                      </div>
                      <div className="flex-1 bg-primary-light">
                        <span className=" pull-right p-t-10 p-r-15 p-b-35">
                          -1
                        </span>
                      </div>
                      <div className="flex-1 bg-primary-dark">
                        <span className=" pull-right p-t-10 p-r-15 p-b-35">
                          1
                        </span>
                      </div>
                      <div className="flex-1 bg-primary-darker">
                        <span className=" pull-right p-t-10 p-r-15 p-b-35">
                          2
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                {/* <!--START card --> */}
                <div className="card  card-transparent">
                  <div className="card-body">
                    <div className="bg-complete  padding-15">
                      <div className="pull-left">
                        <p className="m-b-0">Complete color - Pages blue</p>
                        <p className="p-b-15">color-complete</p>
                      </div>
                      <div className="pull-right">0</div>
                      <div className="clearfix"></div>
                    </div>
                    <div className="d-flex">
                      <div className="flex-1 bg-complete-lighter">
                        <span className="pull-right p-t-10 p-r-15 p-b-35">
                          -2
                        </span>
                      </div>
                      <div className="flex-1 bg-complete-light">
                        <span className=" pull-right p-t-10 p-r-15 p-b-35">
                          -1
                        </span>
                      </div>
                      <div className="flex-1 bg-complete-dark">
                        <span className=" pull-right p-t-10 p-r-15 p-b-35">
                          1
                        </span>
                      </div>
                      <div className="flex-1 bg-complete-darker">
                        <span className=" pull-right p-t-10 p-r-15 p-b-35">
                          2
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                {/* <!--START card --> */}
                <div className="card  card-transparent">
                  <div className="card-body">
                    <div className="bg-success  padding-15">
                      <div className="pull-left">
                        <p className="m-b-0">Success color - Pages green</p>
                        <p className="p-b-15">color-success</p>
                      </div>
                      <div className="pull-right">0</div>
                      <div className="clearfix"></div>
                    </div>
                    <div className="d-flex">
                      <div className="flex-1 bg-success-lighter">
                        <span className="pull-right p-t-10 p-r-15 p-b-35">
                          -2
                        </span>
                      </div>
                      <div className="flex-1 bg-success-light">
                        <span className=" pull-right p-t-10 p-r-15 p-b-35">
                          -1
                        </span>
                      </div>
                      <div className="flex-1 bg-success-dark">
                        <span className=" pull-right p-t-10 p-r-15 p-b-35">
                          1
                        </span>
                      </div>
                      <div className="flex-1 bg-success-darker">
                        <span className=" pull-right p-t-10 p-r-15 p-b-35">
                          2
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                {/* <!--START card --> */}
                <div className="card  card-transparent">
                  <div className="card-body">
                    <div className="bg-warning  padding-15">
                      <div className="pull-left">
                        <p className="m-b-0">Warning color - Pages yellow</p>
                        <p className="p-b-15">color-warning</p>
                      </div>
                      <div className="pull-right">0</div>
                      <div className="clearfix"></div>
                    </div>
                    <div className="d-flex">
                      <div className="flex-1 bg-warning-lighter">
                        <span className="pull-right p-t-10 p-r-15 p-b-35">
                          -2
                        </span>
                      </div>
                      <div className="flex-1 bg-warning-light">
                        <span className=" pull-right p-t-10 p-r-15 p-b-35">
                          -1
                        </span>
                      </div>
                      <div className="flex-1 bg-warning-dark">
                        <span className=" pull-right p-t-10 p-r-15 p-b-35">
                          1
                        </span>
                      </div>
                      <div className="flex-1 bg-warning-darker">
                        <span className=" pull-right p-t-10 p-r-15 p-b-35">
                          2
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                {/* <!--START card --> */}
                <div className="card  card-transparent">
                  <div className="card-body">
                    <div className="bg-danger  padding-15">
                      <div className="pull-left">
                        <p className="m-b-0">Danger color - Pages red</p>
                        <p className="p-b-15">color-danger</p>
                      </div>
                      <div className="pull-right">0</div>
                      <div className="clearfix"></div>
                    </div>
                    <div className="d-flex">
                      <div className="flex-1 bg-danger-lighter">
                        <span className="pull-right p-t-10 p-r-15 p-b-35">
                          -2
                        </span>
                      </div>
                      <div className="flex-1 bg-danger-light">
                        <span className=" pull-right p-t-10 p-r-15 p-b-35">
                          -1
                        </span>
                      </div>
                      <div className="flex-1 bg-danger-dark">
                        <span className=" pull-right p-t-10 p-r-15 p-b-35">
                          1
                        </span>
                      </div>
                      <div className="flex-1 bg-danger-darker">
                        <span className=" pull-right p-t-10 p-r-15 p-b-35">
                          2
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                {/* <!--START card --> */}
                <div className="card  card-transparent">
                  <div className="card-body">
                    <div className="bg-info  padding-15">
                      <div className="pull-left">
                        <p className="m-b-0">Info color - Pages gray</p>
                        <p className="p-b-15">color-info</p>
                      </div>
                      <div className="pull-right">0</div>
                      <div className="clearfix"></div>
                    </div>
                    <div className="d-flex">
                      <div className="flex-1 bg-info-lighter">
                        <span className="pull-right p-t-10 p-r-15 p-b-35">
                          -2
                        </span>
                      </div>
                      <div className="flex-1 bg-info-light">
                        <span className=" pull-right p-t-10 p-r-15 p-b-35">
                          -1
                        </span>
                      </div>
                      <div className="flex-1 bg-info-dark">
                        <span className=" pull-right p-t-10 p-r-15 p-b-35">
                          1
                        </span>
                      </div>
                      <div className="flex-1 bg-info-darker">
                        <span className=" pull-right p-t-10 p-r-15 p-b-35">
                          2
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row p-b-40">
              <div className="col-md-4">
                {/* <!--START card --> */}
                <div className="card  card-transparent">
                  <div className="card-body">
                    <div className="bg-menu  padding-15">
                      <div className="pull-left">
                        <p className="m-b-0">Menu color - Pages gray</p>
                        <p className="p-b-15">color-menu</p>
                      </div>
                      <div className="pull-right"></div>
                      <div className="clearfix"></div>
                    </div>
                    <div className="d-flex">
                      <div className="flex-1 bg-menu-light">
                        <span className="pull-right p-t-10 p-r-15 p-b-35"></span>
                      </div>
                      <div className="flex-1 bg-menu-dark">
                        <span className=" pull-right p-t-10 p-r-15 p-b-35"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-7">
                {/* <!--START card --> */}
                <div className="card card-transparent">
                  <div className="card-body">
                    <h3>Neutral color spectrum</h3>
                    <p>
                      The neutral color palette is made with two contrasting
                      colors on either side, usually white and black. The rest
                      of the colors in the middle are auto-generated to be used
                      for various UI elements and surfaces, for example,
                      color-contrast-lower is used for background and
                      color-contrast-high is used for regular paragraphs.
                    </p>
                  </div>
                </div>
                {/* <!--END card --> */}
              </div>
            </div>
            <div className="d-flex">
              <div className="flex-1 bg-contrast-lowest">
                <div className=" padding-15">
                  <div className="pull-left">
                    <p className="m-b-0">color-contrast-lowest</p>
                    <p className="p-b-15">Background</p>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
              <div className="flex-1 bg-contrast-lower">
                <div className=" padding-15">
                  <div className="pull-left">
                    <p className="m-b-0">color-contrast-lower</p>
                    <p className="p-b-15">Background light</p>
                  </div>

                  <div className="clearfix"></div>
                </div>
              </div>
              <div className="flex-1 bg-contrast-low">
                <div className="  padding-15">
                  <div className="pull-left">
                    <p className="m-b-0">color-contrast-low</p>
                    <p className="p-b-15">Borderds</p>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
              <div className="flex-1 bg-contrast-medium">
                <div className="  padding-15">
                  <div className="pull-left">
                    <p className="m-b-0">color-contrast-medium</p>
                    <p className="p-b-15">Muted/helper text</p>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
              <div className="flex-1 bg-contrast-high">
                <div className="  padding-15">
                  <div className="pull-left">
                    <p className="m-b-0">color-contrast-high</p>
                    <p className="p-b-15">Regular paragraphs</p>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
              <div className="flex-1 bg-contrast-higher">
                <div className="  padding-15">
                  <div className="pull-left">
                    <p className="m-b-0">color-contrast-higher</p>
                    <p className="p-b-15">Headings</p>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            path.includes("/executive") || path.includes("/casual")
              ? "container-fluid container-fixed-lg m-t-20 m-t-20 container"
              : "container-fluid container-fixed-lg m-t-20 m-t-20 "
          }
        >
          <div className="row">
            <div className="col-md-4">
              {/* <!--START card --> */}
              <div className="card no-border">
                <div className="card-header ">
                  <div className="card-title">ACCESSABILITY</div>
                </div>
                <div className="card-body">
                  <h4>Legibility standards</h4>
                  <p>
                    We believe any user of diverse abilities should be able to
                    navigate and understand and use UI, especially when the
                    content a user is dealing with is sensitive and important.
                    Making every text accessible from almost 17 million colors
                    in the hexadecimal scale is a big challenge for anyone.{" "}
                  </p>
                  <p className="m-b-15">
                    Pages color system automatically picks the best legible text
                    color for a given background maintaining a AA contrast
                    ration according to Web Content Accessibility Guidelines or
                    WCAG.
                  </p>
                  <img
                    className="image-responsive-height demo-mw-AA"
                    src={
                      process.env.PUBLIC_URL + "/assets/img/demo/legibility.gif"
                    }
                    alt="text legibility"
                    src1x={
                      process.env.PUBLIC_URL + "/assets/img/demo/legibility.gif"
                    }
                    src2x={
                      process.env.PUBLIC_URL +
                      "/assets/img/demo/legibility@2x.gif"
                    }
                    width="485"
                  />
                </div>
              </div>
              {/* <!--END card --> */}
            </div>
            <div className="col-md-8">
              {/* <!--START card --> */}
              <div className="card no-border">
                <div className="card-header ">
                  <div className="card-title">SYSTEM</div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <h4>Color calibration</h4>
                      <p>
                        Pages color system is equipped with a set of modifiers
                        to give you the total control and freedom on how colors
                        should apply and adapt accordingly. Color calibration
                        helps to give flat shades and tints more vibrance while
                        making sure we perceive the difference between the
                        colors from shades to tints.
                      </p>
                      <p className="small hint-text">
                        Hue shift takes a color's relative luminance into
                        consideration in order to determine the direction of the
                        hue rotation.{" "}
                      </p>
                      <p className="fs-13 m-t-30">
                        Pages purple - color-primary shades
                      </p>
                      <img
                        className="image-responsive-height demo-mw-calib"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/img/demo/color_calib.gif"
                        }
                        alt="Pages color calibration"
                        src1x={
                          process.env.PUBLIC_URL +
                          "/assets/img/demo/color_calib.gif"
                        }
                        src2x={
                          process.env.PUBLIC_URL +
                          "/assets/img/demo/color_calib@2x.gif"
                        }
                        width="310"
                      />
                    </div>
                    <div className="col-md-6">
                      <h5>Global color variables</h5>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="b-b b-grey">
                            <p className="pull-left no-margin p-t-10 p-b-10 fs-13">
                              $mix-percentage-lighter
                            </p>
                            <p className="pull-right no-margin p-t-10 p-b-10 fs-13">
                              20%
                            </p>
                            <div className="clearfix"></div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="b-b b-grey">
                            <p className="pull-left no-margin p-t-10 p-b-10 fs-13">
                              $mix-percentage-lighter
                            </p>
                            <p className="pull-right no-margin p-t-10 p-b-10 fs-13">
                              90%
                            </p>
                            <div className="clearfix"></div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="b-b b-grey">
                            <p className="pull-left no-margin p-t-10 p-b-10 fs-13">
                              $mix-percentage-dark
                            </p>
                            <p className="pull-right no-margin p-t-10 p-b-10 fs-13">
                              60%
                            </p>
                            <div className="clearfix"></div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="b-b b-grey">
                            <p className="pull-left no-margin p-t-10 p-b-10 fs-13">
                              $mix-percentage-darker
                            </p>
                            <p className="pull-right no-margin p-t-10 p-b-10 fs-13">
                              30%
                            </p>
                            <div className="clearfix"></div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="b-b b-grey">
                            <p className="pull-left no-margin p-t-10 p-b-10 fs-13">
                              $saturation-shift{" "}
                            </p>
                            <p className="pull-right no-margin p-t-10 p-b-10 fs-13">
                              14%
                            </p>
                            <div className="clearfix"></div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <p className="pull-left no-margin p-t-10 p-b-10 fs-13">
                            $hue-shift
                          </p>
                          <p className="pull-right no-margin p-t-10 p-b-10 fs-13">
                            8%
                          </p>
                          <div className="clearfix"></div>
                        </div>
                      </div>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-default m-t-30"
                      >
                        See documentation
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--END card --> */}
            </div>
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
