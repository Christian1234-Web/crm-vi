import React from "react";

import { Modal, Carousel } from "react-bootstrap";

import "./imageDetailStyle.css";

const ImageDetail = (props) => {
  return (
    <Modal
      {...props}
      dialogClassName="modal-90w bg-white"
      aria-labelledby="example-custom-modal-styling-title"
      centered={true}
      backdropClassName="modal-backdrop-opacity"
      id="extra-gallery-modal"
    >
      <Modal.Body>
        <div id="itemDetails" className="dialog item-details">
          <div className="dialog__overlay"></div>
          <div className="dialog__content no-border">
            <div className="container-fluid">
              <div className="row dialog__overview">
                <div className="col-md-7 p-l-0 p-r-0 item-slideshow-wrapper full-height">
                  <div className="item-slideshow full-height owl-carousel owl-loaded owl-drag">
                    <Carousel>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/img/gallery/item-square.jpg"
                          }
                          alt="square1"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/img/gallery/item-square.jpg"
                          }
                          alt="square2"
                        />
                      </Carousel.Item>
                    </Carousel>
                  </div>
                </div>

                <div className="col-md-12 d-md-none d-lg-none d-xl-none bg-info-dark">
                  <div className="container-xs-height">
                    <div className="row row-xs-height">
                      <div className="col-8 col-xs-height col-middle no-padding">
                        <div className="thumbnail-wrapper d32 circular inline">
                          <img
                            width="32"
                            height="32"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/profiles/2.jpg"
                            }
                            data-src={
                              process.env.PUBLIC_URL +
                              "/assets/img/profiles/2.jpg"
                            }
                            data-src-retina="/assets/img/profiles/2x.jpg"
                            alt=""
                          />
                        </div>
                        <div className="inline m-l-15">
                          <p className="text-white no-margin">Alex Nester</p>
                          <p className="hint-text text-white no-margin fs-12">
                            Senior UI/UX designer
                          </p>
                        </div>
                      </div>
                      <div className="col-4 col-xs-height col-middle text-right  no-padding">
                        <h2 className="bold text-white price font-montserrat">
                          $20.00
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 p-r-35 p-t-35 p-l-35 full-height item-description">
                  <h2 className="semi-bold font-montserrat m-b-10 m-t-0 m-r-0 m-l-0">
                    Happy Ninja
                  </h2>
                  {/* <p className="rating fs-12 m-t-5">
                    <i className="fa fa-star "></i>
                    <i className="fa fa-star "></i>
                    <i className="fa fa-star "></i>
                    <i className="fa fa-star-o"></i>
                    <i className="fa fa-star-o"></i>
                  </p> */}
                  <p className="fs-13">
                    When it comes to digital design, the lines between
                    functionality, aesthetics, and psychology are inseparably
                    blurred. Without the constraints of the physical world,
                    there’s no natural form to fall back on, and every bit of
                    constraint and affordance must be introduced intentionally.
                    Good design makes a product useful.
                  </p>
                  <div className="row m-b-20 m-t-20">
                    <div className="col-6">
                      <span className="font-montserrat all-caps fs-11">
                        Price ranges
                      </span>
                    </div>
                    <div className="col-6 text-right">$20.00 - $40.00</div>
                  </div>
                  <div className="row m-t-20 m-b-10">
                    <div className="col-6">
                      <span className="font-montserrat all-caps fs-11">
                        Paint sizes
                      </span>
                    </div>
                  </div>
                  <button aria-label="" className="btn btn-white">
                    S
                  </button>
                  <button aria-label="" className="btn btn-white">
                    M
                  </button>
                  <button aria-label="" className="btn btn-white">
                    L
                  </button>
                  <button aria-label="" className="btn btn-white">
                    XL
                  </button>
                  <br />
                  <button aria-label="" className="btn btn-primary buy-now">
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="row dialog__footer bg-info-dark d-sm-none d-none d-sm-flex d-lg-flex d-xl-flex">
                <div className="col-md-7 full-height separator">
                  <div className="container-xs-height">
                    <div className="row row-xs-height">
                      <div className="col-7 col-xs-height col-middle no-padding">
                        <div className="thumbnail-wrapper d48 circular inline">
                          <img
                            width="48"
                            height="48"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/profiles/2.jpg"
                            }
                            data-src={
                              process.env.PUBLIC_URL +
                              "/assets/img/profiles/2.jpg"
                            }
                            data-src-retina="/assets/img/profiles/2x.jpg"
                            alt=""
                          />
                        </div>
                        <div className="inline m-l-15">
                          <p className="text-white no-margin">Alex Nester</p>
                          <p className="hint-text text-white no-margin fs-12">
                            Senior UI/UX designer
                          </p>
                        </div>
                      </div>
                      <div className="col-5 col-xs-height col-middle text-right  no-padding">
                        <h2 className="bold text-white price font-montserrat">
                          $20.00
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 full-height">
                  <ul className="recommended list-inline pull-right m-t-10 m-b-0">
                    <li>
                      <a href="javascript:void(0);">
                        <img
                          alt="gallery"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/img/gallery/thumb-1.jpg"
                          }
                        />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <img
                          alt="gallery"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/img/gallery/thumb-2.jpg"
                          }
                        />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <img
                          alt="gallery"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/img/gallery/thumb-3.jpg"
                          }
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <button
              aria-label=""
              className="close action top-right"
              data-dialog-close=""
            >
              <i className="pg-close fs-14"></i>
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ImageDetail;
