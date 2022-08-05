import React from "react";

import PageContainer from "../Containers";
import PageScroll from "../PageScroll";

import Icon from "../Icon";
import Copyright from "../../ui/Footer/Copyright";

import "./style.css";
import { useState, useEffect } from "react";

const content = ({ path }) => {
  return (
    <div className="page-content-wrapper ">
      {/* START PAGE CONTENT */}
      <div className="content">
        {/* START CONTAINER FLUID */}
        {/* START JUMBOTRON */}

        <div
          className="jumbotron lg vertical center bg-white column-w4 vertical-bottom"
          data-pages="parallax"
        >
          <PageContainer
            className={
              path.includes("/executive") || path.includes("/casual")
                ? "p-l-10 sm-p-r-0 full-height container"
                : "sm-p-l-0 sm-p-r-0 full-height"
            }
          >
            <PageScroll className="d-flex flex-column justify-content-center inner full-height sm-p-l-25 sm-p-r-25 sm-p-t-25">
              <div className="row">
                <div className="col-md-7 col-lg-4">
                  <div className="m-b-0">
                    <h2 className="p-b-15 p-t-10 inline">
                      Meaningful, easy, and more accessible icons
                    </h2>
                    <p>
                      Pages icons take advantage of the typographic rendering
                      capabilities of modern browsers allowing to call icons
                      with common that terms screen readers and search engines
                      can read while users see icons.
                    </p>
                    <p className="p-t-45 bold">Test run the icon font</p>
                  </div>
                  <div className="transparent no-padding">
                    <input
                      type="text"
                      className="form-control pg-icon p-l-0 transparent icon-text-search"
                      placeholder="Try typing, magic, earth"
                      id="icon-filter"
                      name="icon-filter"
                    />
                  </div>
                  <div className="m-t-20 m-b-40">
                    <p className="no-margin">Yes, it's purely the font only!</p>
                    <p className="hint-text d-flex align-items-center">
                      Try — person, eye, draw, love, bin
                      <a
                        href="javascript:void(0);"
                        className="btn btn-icon-link hint-text m-l-5"
                      >
                        <Icon>more</Icon>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </PageScroll>
          </PageContainer>
        </div>

        <PageContainer
          className={
            path.includes("/executive") || path.includes("/casual")
              ? " container"
              : ""
          }
        >
          <br />
          <div className="row icon-set-preview">
            <div className="col-lg-6">
              <div className="card card-default overflow-hidden">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-11">
                      <h2 className="p-b-40 mw-500">
                        Pixel perfect hand hinted <br /> material icons
                        exclusive for pages UI
                      </h2>
                      <img
                        className="sm-image-responsive-height m-b-40"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/img/demo/icons_hero.png"
                        }
                        data-src={
                          process.env.PUBLIC_URL +
                          "/assets/img/demo/icons_hero.png"
                        }
                        data-src-retina={
                          process.env.PUBLIC_URL +
                          "/assets/img/demo/icons_hero2x.png"
                        }
                        alt=""
                        width="612"
                        height="69"
                      />
                      <p className="p-b-30">
                        Ever noticed that material design icons are
                        comparatively large? and when you resize them to suit
                        your web app, it gets blurred? Material design icons are
                        made for phone apps.They don’t work with web dashboard
                        apps. We re-made the icons pixel-perfect to fit a 20px
                        grid that works perfectly for web apps.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3 col-lg-4 m-t-10">
                      <a href="javascript:void(0);" className="btn btn-default">
                        Request an icon
                      </a>
                    </div>
                    <div className="col-md-6 col-lg-8">
                      <p className="hint-text small m-t-10">
                        We continuously work hard to improve the quality and
                        performance of Pages . We value every bit of customer
                        input. We have a special box for any icon requests.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card card-transparent card-bordless">
                <div className="card-header ">
                  <div className="card-title">Explore all icons</div>
                </div>
                <div className="card-body">
                  <p>
                    Pages icon is the easiest way to incorporate icons into your
                    app or dashboard. We have packaged all the icons into a
                    single compressed font file which will load faster and looks
                    great at any scale, retina displays, low-dpi display
                    screens.
                  </p>
                  <div className="row b-t b-l b-grey m-t-35 m-l-0 m-r-0 m-b-25">
                    <div className="col-sm-2 b-r b-b b-grey text-center padding-15">
                      <Icon className="m-20">person</Icon>
                    </div>
                    <div className="col-sm-2 b-r b-b b-grey text-center padding-15">
                      <Icon>bin</Icon>
                    </div>
                    <div className="col-sm-2 b-r b-b b-grey text-center padding-15">
                      <div>
                        {" "}
                        <Icon>user</Icon>{" "}
                      </div>
                    </div>
                    <div className="col-sm-2 b-r b-b b-grey text-center padding-15">
                      <Icon>users</Icon>
                    </div>
                    <div className="col-sm-2 b-r b-b b-grey text-center padding-15">
                      <Icon>spam</Icon>
                    </div>
                    <div className="col-sm-2 b-r b-b b-grey text-center padding-15">
                      <Icon>grid</Icon>
                    </div>
                    <div className="col-sm-2 b-r b-b b-grey text-center padding-15">
                      <Icon className="m-20">paint_bucket</Icon>
                    </div>
                    <div className="col-sm-2 b-r b-b b-grey text-center padding-15">
                      <Icon>paint_brush</Icon>
                    </div>
                    <div className="col-sm-2 b-r b-b b-grey text-center padding-15">
                      <Icon>effects</Icon>
                    </div>
                    <div className="col-sm-2 b-r b-b b-grey text-center padding-15">
                      <Icon>draw</Icon>
                    </div>
                    <div className="col-sm-2 b-r b-b b-grey text-center padding-15">
                      <Icon>drop</Icon>
                    </div>
                    <div className="col-sm-2 b-r b-b b-grey text-center padding-15">
                      <Icon>image</Icon>
                    </div>
                    <div className="col-sm-2 b-r b-b b-grey text-center padding-15">
                      <Icon className="m-20">lock</Icon>
                    </div>
                    <div className="col-sm-2 b-r b-b b-grey text-center padding-15">
                      <Icon>flag</Icon>
                    </div>
                    <div className="col-sm-2 b-r b-b b-grey text-center padding-15">
                      <Icon>inbox</Icon>
                    </div>
                    <div className="col-sm-2 b-r b-b b-grey text-center padding-15">
                      <Icon>inbox_all</Icon>
                    </div>
                    <div className="col-sm-2 b-r b-b b-grey text-center padding-15">
                      <Icon>world</Icon>
                    </div>
                    <div className="col-sm-2 b-r b-b b-grey text-center padding-15">
                      <Icon>grid_alt</Icon>
                    </div>
                    <div className="col-sm-2 b-r b-b b-grey text-center padding-15">
                      <Icon className="m-20">heart</Icon>
                    </div>
                    <div className="col-sm-2 b-r b-b b-grey text-center padding-15">
                      <Icon>keyboard</Icon>
                    </div>
                    <div className="col-sm-2 b-r b-b b-grey text-center padding-15">
                      <Icon>map_alt</Icon>
                    </div>
                    <div className="col-sm-2 b-r b-b b-grey text-center padding-15">
                      <Icon>map</Icon>
                    </div>
                    <div className="col-sm-2 b-r b-b b-grey text-center padding-15">
                      <Icon>eye</Icon>
                    </div>
                    <div className="col-sm-2 b-r b-b b-grey text-center padding-15">
                      <Icon>mic</Icon>
                    </div>
                  </div>
                  <div className="col-md-3 col-lg-4 no-padding">
                    <a
                      href="http://pages.revox.io/dashboard/cheatsheet"
                      target="_blank"
                      className="btn btn-default"
                    >
                      See icon cheatsheet
                    </a>
                    <p className="hint-text small m-t-10">
                      Go to icon cheatsheet to see all the icons in the font
                      with its corresponding name.
                    </p>
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
