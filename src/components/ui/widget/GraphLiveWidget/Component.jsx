import React from "react";
import Swiper from "react-id-swiper";

import "swiper/css/swiper.css";

const Component = () => {
  const params = {
    direction: "vertical",
    autoplay: {
      delay: 2700,
      disableOnInteraction: false,
    },
    loop: true,
  };

  return (
    <div className="widget-7 card  bg-success no-margin">
      <div className="card-body no-padding full-height ">
        <div
          className="metro live-tile carousel "
          data-delay="3500"
          data-mode="carousel"
        >
          <Swiper {...params}>
            <div className="slide-front tiles slide">
              <div className="padding-5">
                <div className="pull-bottom bottom-right bottom-left padding-25">
                  <h5 className="no-margin semi-bold p-b-5">Apple Inc.</h5>
                  <p className="no-margin hint-text text-ellipsis">
                    NASDAQ : AAPL - NOV 018:40 AM ET
                  </p>
                  <h3 className="semi-bold">
                    <i className="pg-icon">arrow_up</i> 0.15 (0.13%)
                  </h3>
                  <p>
                    Open
                    <span className="m-l-20">117.52</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="slide-back tiles slide">
              <div className="container-sm-height full-height ">
                <div className="row-sm-height">
                  <div className="col-sm-height padding-25">
                    <p className="">Pre-market: 116.850.50(0.43%)</p>
                    <p className="p-t-25 fs-16 hint-text ">AAPL - Apple inc.</p>
                    <div className="p-t-5 d-flex align-items-center">
                      <p className="inline">
                        +0.42% <span className="m-l-20">217.51</span>
                      </p>
                      <div className="inline">
                        {" "}
                        <i className="pg-icon m-l-5">arrow_up</i>
                      </div>
                    </div>
                    <p className="p-t-15 fs-16 hint-text ">
                      GOOG - Google inc.
                    </p>
                    <div className="p-t-5 d-flex align-items-center">
                      <p className="inline">
                        +0.22% <span className="m-l-20">-2.28</span>
                      </p>
                      <div className="inline">
                        {" "}
                        <i className="pg-icon m-l-5">arrow_down</i>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="row-sm-height">
                                    <div className="col-sm-height relative">
                                        <div className="widget-7-chart line-chart" data-line-color="white" data-points="true" data-point-color="white" data-stroke-width="3">
                                            <SimpleLineGraph />
                                        </div>
                                    </div>
                                </div> */}
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Component;
