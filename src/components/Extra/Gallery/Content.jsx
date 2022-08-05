import React, { useState } from "react";
import Swiper from "react-id-swiper";
import { Responsive, WidthProvider } from "react-grid-layout";

import Copyright from "../../ui/Footer/Copyright";
import Slider from "../../UIElements/NoUiSlider";
import ImageDetailModal from "./ImageDetail";
import OverLayer from "./OverLayer";
import GalleryItem from "./GalleryItem";

import "swiper/css/swiper.css";
import "./style.css";
// import "./galleryStyle.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const content = ({ path }) => {
  const [toggleFilters, setToggleFilters] = useState(false);
  const [cardDetailView, setCardDetailView] = useState(false);
  const params = {
    direction: "vertical",
    autoplay: {
      delay: 2700,
      disableOnInteraction: false,
    },
    loop: true,
  };

  const xssLayout = [
    { i: "a", x: 0, y: 0, w: 2, h: 3, isResizable: false, minW: 1 },
    { i: "b", x: 0, y: 3, w: 2, h: 1.5, isResizable: false, minW: 1 },
    { i: "c", x: 0, y: 4.5, w: 2, h: 1.5, isResizable: false, minW: 1 },
    { i: "d", x: 0, y: 6, w: 2, h: 1.5, isResizable: false, minW: 1 },
    { i: "e", x: 0, y: 7.5, w: 2, h: 1.5, isResizable: false, minW: 1 },
    { i: "f", x: 0, y: 9, w: 2, h: 1.5, isResizable: false, minW: 1 },
    { i: "g", x: 0, y: 10.5, w: 2, h: 1.5, isResizable: false, minW: 1 },
    { i: "h", x: 0, y: 12, w: 2, h: 1.5, isResizable: false, minW: 1 },
    { i: "i", x: 0, y: 13.5, w: 2, h: 1.5, isResizable: false, minW: 1 },
    { i: "j", x: 0, y: 15, w: 2, h: 1.5, isResizable: false, minW: 1 },
    { i: "k", x: 0, y: 16.5, w: 2, h: 1.5, isResizable: false, minW: 1 },
    { i: "l", x: 0, y: 18, w: 2, h: 1.5, isResizable: false, minW: 1 },
    { i: "m", x: 0, y: 19.5, w: 2, h: 1.5, isResizable: false, minW: 1 },
    { i: "n", x: 0, y: 21, w: 2, h: 1.5, isResizable: false, minW: 1 },
  ];

  const smLayout = [
    { i: "a", x: 2, y: 0, w: 4, h: 3, isResizable: false, minW: 1 },
    { i: "b", x: 0, y: 0, w: 2, h: 1.5, isResizable: false, minW: 1 },
    { i: "c", x: 0, y: 1.5, w: 2, h: 1.5, isResizable: false, minW: 1 },
    { i: "d", x: 0, y: 3, w: 2, h: 1.5, isResizable: false, minW: 1 },
    { i: "e", x: 2, y: 3, w: 2, h: 1.5, isResizable: false, minW: 1 },
    { i: "f", x: 4, y: 3, w: 2, h: 1.5, isResizable: false, minW: 1 },
    { i: "g", x: 0, y: 4.5, w: 2, h: 1.5, isResizable: false, minW: 1 },
    { i: "h", x: 2, y: 4.5, w: 2, h: 1.5, isResizable: false, minW: 1 },
    { i: "i", x: 4, y: 4.5, w: 2, h: 1.5, isResizable: false, minW: 1 },
    { i: "j", x: 0, y: 6, w: 2, h: 1.5, isResizable: false, minW: 1 },
    { i: "k", x: 2, y: 6, w: 2, h: 1.5, isResizable: false, minW: 1 },
    { i: "l", x: 4, y: 6, w: 2, h: 1.5, isResizable: false, minW: 1 },
    { i: "m", x: 0, y: 7.5, w: 2, h: 1.5, isResizable: false, minW: 1 },
    { i: "n", x: 2, y: 7.5, w: 2, h: 1.5, isResizable: false, minW: 1 },
  ];

  const mdLayout = [
    { i: "a", x: 2.5, y: 0, w: 5, h: 3, isResizable: false, minW: 1 },
    { i: "b", x: 0, y: 0, w: 2.5, h: 1.5, isResizable: false, minW: 1 },
    { i: "c", x: 0, y: 1.5, w: 2.5, h: 1.5, isResizable: false, minW: 1 },
    { i: "d", x: 7.5, y: 0, w: 2.5, h: 1.5, isResizable: false, minW: 1 },
    { i: "e", x: 7.5, y: 1.5, w: 2.5, h: 1.5, isResizable: false, minW: 1 },
    { i: "f", x: 0, y: 3, w: 2.5, h: 1.5, isResizable: false, minW: 1 },
    { i: "g", x: 2.5, y: 3, w: 2.5, h: 1.5, isResizable: false, minW: 1 },
    { i: "h", x: 5, y: 3, w: 2.5, h: 1.5, isResizable: false, minW: 1 },
    { i: "i", x: 7.5, y: 3, w: 2.5, h: 1.5, isResizable: false, minW: 1 },
    { i: "j", x: 0, y: 4.5, w: 2.5, h: 1.5, isResizable: false, minW: 1 },
    { i: "k", x: 2.5, y: 4.5, w: 2.5, h: 1.5, isResizable: false, minW: 1 },
    { i: "l", x: 5, y: 4.5, w: 2.5, h: 1.5, isResizable: false, minW: 1 },
    { i: "m", x: 7.5, y: 4.5, w: 2.5, h: 1.5, isResizable: false, minW: 1 },
    { i: "n", x: 0, y: 6, w: 2.5, h: 1.5, isResizable: false, minW: 1 },
  ];

  const lgLayout = [
    { i: "a", x: 2, y: 0, w: 4, h: 3, isResizable: false, minW: 1 },
    { i: "b", x: 0, y: 0, w: 2, h: 1.5, isResizable: false, minW: 1 },
    { i: "c", x: 6, y: 0, w: 2, h: 1.5, isResizable: false, minW: 1 },
    { i: "d", x: 8, y: 0, w: 2, h: 1.5, isResizable: false, minW: 1 },
    { i: "e", x: 0, y: 1.5, w: 2, h: 1.5, isResizable: false, minW: 1 },
    { i: "f", x: 6, y: 1.5, w: 2, h: 1.5, isResizable: false, minW: 1 },
    { i: "g", x: 8, y: 1.5, w: 2, h: 1.5, isResizable: false, minW: 1 },
    { i: "h", x: 0, y: 3, w: 2, h: 1.5, isResizable: false, minW: 1 },
    { i: "i", x: 2, y: 3, w: 2, h: 1.5, isResizable: false, minW: 1 },
    { i: "j", x: 4, y: 3, w: 2, h: 1.5, isResizable: false, minW: 1 },
    { i: "k", x: 6, y: 3, w: 2, h: 1.5, isResizable: false, minW: 1 },
    { i: "l", x: 8, y: 3, w: 2, h: 1.5, isResizable: false, minW: 1 },
    { i: "m", x: 0, y: 4.5, w: 2, h: 1.5, isResizable: false, minW: 1 },
    { i: "n", x: 2, y: 4.5, w: 2, h: 1.5, isResizable: false, minW: 1 },
  ];

  const ResponsiveGridLayout = WidthProvider(Responsive);

  return (
    <div className="page-content-wrapper">
      <div className="content ">
        <div
          className={
            path.includes("/executive") || path.includes("/casual")
              ? "container-fluid   container-fixed-lg p-l-10 sm-p-r-0 container"
              : "container-fluid   container-fixed-lg sm-p-l-0 sm-p-r-0"
          }
        >
          <div className="gallery">
            <div className="gallery-filters p-t-20 p-b-10">
              <ul className="list-inline text-right">
                <li className="hint-text">Sort by: </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    className="active text-color p-r-5 p-l-5"
                  >
                    Name
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    className="text-color hint-text p-r-5 p-l-5"
                  >
                    Views
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    className="text-color hint-text p-r-5 p-l-5"
                  >
                    Cost
                  </a>
                </li>
                <li>
                  <button
                    aria-label=""
                    className="btn btn-primary m-l-10"
                    data-toggle="filters"
                    onClick={() => setToggleFilters(true)}
                  >
                    More filters
                  </button>
                </li>
              </ul>
            </div>
            <ResponsiveGridLayout
              isDraggable={false}
              layouts={{
                lg: lgLayout,
                md: mdLayout,
                sm: smLayout,
                xxs: xssLayout,
              }}
            >
              <div
                className="gallery-item "
                id="gallery-item-two"
                data-width="2"
                data-height="2"
                onClick={() => setCardDetailView(true)}
                key="a"
              >
                <div
                  className="live-tile slide carousel"
                  data-speed="750"
                  data-delay="4000"
                  data-mode="carousel"
                >
                  <Swiper {...params}>
                    <div className="slide-front slide">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/assets/img/gallery/2_1.jpg"
                        }
                        alt=""
                        className="image-responsive-height res-image"
                      />
                    </div>
                    <div className="slide-back slide">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/assets/img/gallery/2_2.jpg"
                        }
                        alt=""
                        className="image-responsive-height res-image"
                      />
                    </div>
                  </Swiper>
                </div>
                <div className="overlayer bottom-left full-width">
                  <div className="overlayer-wrapper item-info more-content">
                    <div className="gradient-grey p-l-20 p-r-20 p-t-20 p-b-5">
                      <div className="">
                        <h3 className="pull-left bold text-white no-margin">
                          Happy Ninja
                        </h3>
                        <h3 className="pull-right semi-bold text-white font-montserrat bold no-margin">
                          $25.00
                        </h3>
                        <div className="clearfix"></div>
                        <span className="hint-text pull-left text-white">
                          Hand and mind crafted
                        </span>
                        <div className="clearfix"></div>
                      </div>
                      <div className="">
                        <h5 className="text-white light">
                          Most Sold Item in the marketplace
                        </h5>
                      </div>
                      <div className="m-t-10">
                        <div className="thumbnail-wrapper d32 circular m-t-5">
                          <img
                            width="40"
                            height="40"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/profiles/avatar.jpg"
                            }
                            data-src={
                              process.env.PUBLIC_URL +
                              "/assets/img/profiles/avatar.jpg"
                            }
                            data-src-retina="/assets/img/profiles/avatar2x.jpg"
                            alt=""
                          />
                        </div>
                        <div className="inline m-l-10">
                          <p className="no-margin text-white fs-12">
                            Designed by Alex Nester
                          </p>
                          <p className="rating">
                            <i className="fa fa-star rated"></i>
                            <i className="fa fa-star rated"></i>
                            <i className="fa fa-star rated"></i>
                            <i className="fa fa-star rated"></i>
                            <i className="fa fa-star"></i>
                          </p>
                        </div>
                        <div className="pull-right m-t-10">
                          <button
                            aria-label=""
                            className="btn btn-white btn-xs btn-mini bold fs-14"
                            type="button"
                          >
                            +
                          </button>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <GalleryItem
                id="gallery-item-one"
                onClick={() => setCardDetailView(true)}
                key="b"
              >
                <img
                  src={process.env.PUBLIC_URL + "/assets/img/gallery/1.jpg"}
                  alt=""
                  className="image-responsive-height res-image"
                />
                <OverLayer
                  title="Happy Ninja"
                  price="$25.00"
                  author="Designed by Alex Nester"
                />
              </GalleryItem>
              <GalleryItem
                id="gallery-item-three"
                onClick={() => setCardDetailView(true)}
                key="c"
              >
                <img
                  src={process.env.PUBLIC_URL + "/assets/img/gallery/3.jpg"}
                  alt=""
                  className="image-responsive-height res-image"
                />
                <OverLayer
                  title="Happy Ninja"
                  price="$25.00"
                  author="Designed by Alex Nester"
                />
              </GalleryItem>

              <GalleryItem
                id="gallery-item-four"
                onClick={() => setCardDetailView(true)}
                key="d"
              >
                <img
                  src={process.env.PUBLIC_URL + "/assets/img/gallery/4.jpg"}
                  alt=""
                  className="image-responsive-height res-image"
                />
                <OverLayer
                  title="Happy Ninja"
                  price="$25.00"
                  author="Designed by Alex Nester"
                />
              </GalleryItem>

              <GalleryItem
                id="gallery-item-five"
                onClick={() => setCardDetailView(true)}
                key="e"
              >
                <img
                  src={process.env.PUBLIC_URL + "/assets/img/gallery/5.jpg"}
                  alt=""
                  className="image-responsive-height res-image"
                />
                <OverLayer
                  title="Happy Ninja"
                  price="$25.00"
                  author="Designed by Alex Nester"
                />
              </GalleryItem>

              <GalleryItem
                id="gallery-item-six"
                onClick={() => setCardDetailView(true)}
                key="f"
              >
                <img
                  src={process.env.PUBLIC_URL + "/assets/img/gallery/6.jpg"}
                  alt=""
                  className="image-responsive-height res-image"
                />
                <OverLayer
                  title="Happy Ninja"
                  price="$25.00"
                  author="Designed by Alex Nester"
                />
              </GalleryItem>

              <GalleryItem
                id="gallery-item-seven"
                onClick={() => setCardDetailView(true)}
                key="g"
              >
                <img
                  src={process.env.PUBLIC_URL + "/assets/img/gallery/7.jpg"}
                  alt=""
                  className="image-responsive-height res-image"
                />
                <OverLayer
                  title="Happy Ninja"
                  price="$25.00"
                  author="Designed by Alex Nester"
                />
              </GalleryItem>

              <GalleryItem
                id="gallery-item-eight"
                onClick={() => setCardDetailView(true)}
                key="h"
              >
                <img
                  src={process.env.PUBLIC_URL + "/assets/img/gallery/8.jpg"}
                  alt=""
                  className="image-responsive-height res-image"
                />
                <OverLayer
                  title="Happy Ninja"
                  price="$25.00"
                  author="Designed by Alex Nester"
                />
              </GalleryItem>

              <GalleryItem
                id="gallery-item-nine"
                onClick={() => setCardDetailView(true)}
                key="i"
              >
                <img
                  src={process.env.PUBLIC_URL + "/assets/img/gallery/9.jpg"}
                  alt=""
                  className="image-responsive-height res-image"
                />
                <OverLayer
                  title="Happy Ninja"
                  price="$25.00"
                  author="Designed by Alex Nester"
                />
              </GalleryItem>

              <GalleryItem
                id="gallery-item-ten"
                onClick={() => setCardDetailView(true)}
                key="j"
              >
                <img
                  src={process.env.PUBLIC_URL + "/assets/img/gallery/10.jpg"}
                  alt=""
                  className="image-responsive-height res-image"
                />
                <OverLayer
                  title="Happy Ninja"
                  price="$25.00"
                  author="Designed by Alex Nester"
                />
              </GalleryItem>

              <GalleryItem
                id="gallery-item-eleven"
                onClick={() => setCardDetailView(true)}
                key="k"
              >
                <img
                  src={process.env.PUBLIC_URL + "/assets/img/gallery/11.jpg"}
                  alt=""
                  className="image-responsive-height res-image"
                />
                <OverLayer
                  title="Happy Ninja"
                  price="$25.00"
                  author="Designed by Alex Nester"
                />
              </GalleryItem>

              <GalleryItem
                id="gallery-item-twelve"
                onClick={() => setCardDetailView(true)}
                key="l"
              >
                <img
                  src={process.env.PUBLIC_URL + "/assets/img/gallery/12.jpg"}
                  alt=""
                  className="image-responsive-height res-image"
                />
                <OverLayer
                  title="Happy Ninja"
                  price="$25.00"
                  author="Designed by Alex Nester"
                />
              </GalleryItem>

              <GalleryItem
                id="gallery-item-thirteen"
                onClick={() => setCardDetailView(true)}
                key="m"
              >
                <img
                  src={process.env.PUBLIC_URL + "/assets/img/gallery/13.jpg"}
                  alt=""
                  className="image-responsive-height res-image"
                />
                <OverLayer
                  title="Happy Ninja"
                  price="$25.00"
                  author="Designed by Alex Nester"
                />
              </GalleryItem>

              <GalleryItem
                id="gallery-item-fourteen"
                onClick={() => setCardDetailView(true)}
                key="n"
              >
                <img
                  src={process.env.PUBLIC_URL + "/assets/img/gallery/14.jpg"}
                  alt=""
                  className="image-responsive-height res-image"
                />
                <OverLayer
                  title="Happy Ninja"
                  price="$25.00"
                  author="Designed by Alex Nester"
                />
              </GalleryItem>
            </ResponsiveGridLayout>
          </div>
        </div>

        <ImageDetailModal
          show={cardDetailView}
          onHide={() => setCardDetailView(false)}
        />

        <div
          className={`quickview-wrapper ${toggleFilters ? "open" : ""}`}
          id="filters"
        >
          <div className="padding-40 ">
            <a
              className="builder-close quickview-toggle"
              data-toggle="quickview"
              data-toggle-element="#filters"
              href="javascript:void(0);"
              onClick={(e) => {
                e.preventDefault();
                setToggleFilters(false);
              }}
            >
              <i className="pg-icon">close</i>
            </a>
            <form className="" role="form">
              <h5 className="all-caps font-montserrat fs-12 m-b-20">
                Advance filters
              </h5>
              <div className="form-group form-group-default ">
                <label>Project</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Type of select a label"
                />
              </div>
              <h5 className="all-caps font-montserrat fs-12 m-b-20 m-t-25">
                Advance filters
              </h5>
              <div className="form-check danger">
                <input type="radio" value="1" name="filter" id="asc" />
                <label htmlFor="asc">Ascending order</label>
              </div>
              <div className="form-check danger">
                <input type="radio" value="2" name="filter" id="views" />
                <label htmlFor="views">Most viewed</label>
              </div>
              <div className="form-check danger">
                <input type="radio" value="3" name="filter" id="cost" />
                <label htmlFor="cost">Cost</label>
              </div>
              <div className="form-check danger">
                <input type="radio" value="4" name="filter" id="latest" />
                <label htmlFor="latest">Latest</label>
              </div>
              <h5 className="all-caps font-montserrat fs-12 m-b-20 m-t-25">
                Price range
              </h5>
              <Slider
                connect={true}
                margin={40}
                behaviour="none"
                toolTips={false}
                min={0}
                max={100}
                start={[15, 75]}
                id="red"
              />
              <button
                aria-label=""
                className="pull-right btn btn-danger btn-cons m-t-40"
              >
                Apply
              </button>
            </form>
          </div>
        </div>
      </div>

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
