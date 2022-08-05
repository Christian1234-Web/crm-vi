import React from "react";
import Swiper from "react-id-swiper";

import "swiper/css/swiper.css";

const Component = () => {
  const params = {
    direction: "vertical",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
  };

  return (
    <div className="widget-3 card  bg-complete no-margin widget-loader-bar">
      <div className="card-body no-padding full-height">
        <div
          className="metro live-tile carousel"
          data-mode="carousel"
          data-start-now="true"
          data-delay="3000"
        >
          <Swiper {...params}>
            <div className="slide-front tiles slide">
              <div className="padding-25">
                <div className="pull-top">
                  <div className="pull-left visible-lg visible-xlg">
                    <i className="pg-icon">map</i>
                  </div>
                  <div className="pull-right">
                    <ul className="list-inline ">
                      <li>
                        <a href="javascript:void(0);" className="no-decoration">
                          <i className="pg-icon">comment_alt</i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="widget-3-fav no-decoration"
                        >
                          <i className="pg-icon">heart_outline</i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="clearfix"></div>
                </div>
                <div className="pull-bottom p-b-30">
                  <p className="p-t-10 fs-12 p-b-5 hint-text">21 Jan</p>
                  <h3 className="no-margin">
                    Carefully
                    <br />
                    designed for a
                    <br />
                    great
                    <span className="semi-bold">experience</span>
                  </h3>
                </div>
              </div>
            </div>

            <div className="slide-back tiles slide">
              <div className="padding-25">
                <div className="pull-top">
                  <div className="pull-left visible-lg visible-xlg">
                    <i className="pg-icon">map</i>
                  </div>
                  <div className="pull-right">
                    <ul className="list-inline ">
                      <li>
                        <a href="javascript:void(0);" className="no-decoration">
                          <i className="pg-icon">comment_alt</i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="widget-3-fav no-decoration"
                        >
                          <i className="pg-icon">heart_outline</i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="clearfix"></div>
                </div>
                <div className="pull-bottom p-b-30">
                  <p className="p-t-10 fs-12 p-b-5 hint-text">21 Jan</p>
                  <h3 className="no-margin">
                    A whole new
                    <br />
                    <span className="semi-bold">page</span>
                  </h3>
                </div>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Component;
