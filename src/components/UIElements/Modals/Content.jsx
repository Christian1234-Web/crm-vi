import React, { useState, useEffect } from "react";
import SlidingPanel from "react-sliding-side-panel";
import { Modal } from "react-responsive-modal";

import PageContainer from "../../UIElements/Containers";
import PageScroll from "../../UIElements/PageScroll";
import PageBreadcrumb from "../../UIElements/Breadcrumb";
import SlideUpModal from "./SlideUpModal";
import StickUpModal from "./StickUpModal";
import Copyright from "../../ui/Footer/Copyright";

import "./style.css";
import "react-responsive-modal/styles.css";
import "./FullWindowModalStyle.css";

const content = ({ path }) => {
  //slide-up modal
  const [slideUpVisible, setSlideUpVisible] = useState(false);
  const [slideUpModalSize, setSlideUpModalSize] = useState(false);
  const [slideUpWidth, setSlideUpWidth] = useState("500");
  useEffect(() => {
    if (slideUpModalSize[0]) setSlideUpWidth("600");
    if (slideUpModalSize[1]) setSlideUpWidth("500");
    if (slideUpModalSize[2]) setSlideUpWidth("300");
  }, [slideUpModalSize]);

  //stick-up modal
  const [stickUpVisible, setStickUpVisible] = useState(false);
  const [stickUpModalSize, setStickUpModalSize] = useState([
    false,
    true,
    false,
  ]);
  const [stickUpWidth, setStickUpWidth] = useState("lg");
  useEffect(() => {
    if (stickUpModalSize[0]) setStickUpWidth("lg");
    if (stickUpModalSize[1]) setStickUpWidth("md");
    if (stickUpModalSize[2]) setStickUpWidth("sm");
  }, [stickUpModalSize]);

  //sliding-pane-modal right side
  const [openPanel, setOpenPanel] = useState(false);

  const size = useWindowSize();
  // Hook
  function useWindowSize() {
    const isClient = typeof window === "object";

    function getSize() {
      return {
        width: isClient ? window.innerWidth : undefined,
      };
    }

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
      if (!isClient) {
        return false;
      }

      function handleResize() {
        setWindowSize(getSize());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return windowSize;
  }

  //full-window-modal
  const [isWindowModalOpen, setIsWindowModalOpen] = useState(false);

  return (
    <div className="page-content-wrapper ">
      {/* START PAGE CONTENT */}
      <div className="content ">
        <SlideUpModal
          visible={slideUpVisible}
          width={slideUpWidth}
          effect="fadeInUp"
          onClickAway={() => setSlideUpVisible(false)}
        >
          {slideUpModalSize[2] ? (
            <div className="modal-content-wrapper">
              <div className="modal-content">
                <div className="modal-body text-center p-t-25">
                  <h4 className="no-margin p-b-10">You have subscribed</h4>
                  <button
                    aria-label=""
                    type="button"
                    className="btn btn-primary btn-cons"
                    data-dismiss="modal"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="modal-content-wrapper">
              <div className="modal-content">
                <div className="modal-top">
                  <button
                    aria-label=""
                    type="button"
                    className="close"
                    onClick={() => setSlideUpVisible(false)}
                    data-dismiss="modal"
                    aria-hidden="true"
                  >
                    <i className="pg-icon">close</i>
                  </button>
                  <h5>
                    Payment <span className="semi-bold">Information</span>
                  </h5>
                  <p className="p-b-10">
                    We need payment information inorder to process your order
                  </p>
                </div>
                <div className="modal-body">
                  <form role="form">
                    <div className="form-group-attached">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group form-group-default">
                            <label>Company Name</label>
                            <input type="email" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-8">
                          <div className="form-group form-group-default">
                            <label>Card Number</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group form-group-default">
                            <label>Card Holder</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="row">
                    <div className="col-md-8">
                      <div className="p-t-20 clearfix p-l-10 p-r-10">
                        <div className="pull-left">
                          <p className="bold font-montserrat text-uppercase">
                            TOTAL
                          </p>
                        </div>
                        <div className="pull-right">
                          <p className="bold font-montserrat text-uppercase">
                            $20.00
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 m-t-10 sm-m-t-10">
                      <button
                        aria-label=""
                        type="button"
                        className="btn btn-primary btn-block m-t-5"
                      >
                        Pay Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </SlideUpModal>

        <StickUpModal
          show={stickUpVisible}
          onHide={() => setStickUpVisible(false)}
          size={stickUpWidth}
          className="stickUpModalClass"
        >
          {stickUpModalSize[2] ? (
            <div className="modal-content-wrapper">
              <div className="modal-content">
                <div className="modal-header clearfix text-left p-l-0 p-r-0">
                  <button
                    aria-label=""
                    type="button"
                    className="close"
                    onClick={() => setStickUpVisible(false)}
                    data-dismiss="modal"
                    aria-hidden="true"
                    style={{ right: 0, top: 20 }}
                  >
                    <i className="pg-icon">close</i>
                  </button>
                  <h5>Reset all settings</h5>
                </div>
                <div className="modal-body no-padding p-b-25">
                  <p className="no-margin">
                    This will restore all system settings to factory defaults.
                    Are you sure that you want to proceed?
                  </p>
                </div>
                <div className="modal-footer no-padding">
                  <button
                    aria-label=""
                    type="button"
                    className="btn btn-primary pull-left inline"
                    data-dismiss="modal"
                  >
                    Continue
                  </button>
                  <button
                    aria-label=""
                    type="button"
                    className="btn btn-default no-margin pull-left inline"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="modal-content-wrapper">
              <div className="modal-content">
                <div className="modal-top no-padding p-r-25 p-t-25">
                  <button
                    aria-label=""
                    type="button"
                    className="close"
                    onClick={() => setStickUpVisible(false)}
                    data-dismiss="modal"
                    aria-hidden="true"
                    style={{ right: 0, top: 20 }}
                  >
                    <i className="pg-icon">close</i>
                  </button>
                  <h5>
                    Payment <span className="semi-bold">Information</span>
                  </h5>
                  <p className="">
                    We need payment information inorder to process your order
                  </p>
                </div>
                <div className="modal-body no-padding">
                  <form role="form">
                    <div className="form-group-attached">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group form-group-default">
                            <label>Company Name</label>
                            <input type="email" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-8">
                          <div className="form-group form-group-default">
                            <label>Card Number</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group form-group-default">
                            <label>Card Holder</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="row">
                    <div className="col-md-8">
                      <div className="p-t-20 clearfix p-l-10 p-r-10">
                        <div className="pull-left">
                          <p className="bold font-montserrat text-uppercase">
                            TOTAL
                          </p>
                        </div>
                        <div className="pull-right">
                          <p className="bold font-montserrat text-uppercase">
                            $20.00
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 m-t-10 sm-m-t-10">
                      <button
                        aria-label=""
                        type="button"
                        className="btn btn-primary btn-block m-t-5"
                      >
                        Pay Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </StickUpModal>

        <SlidingPanel
          type={"right"}
          isOpen={openPanel}
          size={
            size.width < 480
              ? 100
              : size.width < 780
              ? 30
              : size.width < 1450
              ? 20
              : size.width > 1450
              ? 15
              : 20
          }
          backdropClicked={() => setOpenPanel(false)}
        >
          <div className="modal-content-wrapper full-height">
            <div className="modal-content full-height">
              <button
                aria-label=""
                type="button"
                onClick={() => setOpenPanel(false)}
                className="close p-t-10 text-right m-r-15"
                data-dismiss="modal"
                aria-hidden="true"
              >
                <i className="pg-icon">close</i>
              </button>
              <div className="container-xs-height full-height">
                <div className="row-xs-height">
                  <div className="modal-body col-xs-height col-middle text-center   ">
                    <h5 className="text-primary ">
                      Before you <span className="semi-bold">proceed</span>, you
                      have to login to make the necessary changes
                    </h5>
                    <br />
                    <button
                      aria-label=""
                      type="button"
                      className="btn btn-primary btn-block"
                      data-dismiss="modal"
                    >
                      Continue
                    </button>
                    <button
                      aria-label=""
                      type="button"
                      className="btn btn-default btn-block"
                      data-dismiss="modal"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SlidingPanel>

        <Modal
          open={isWindowModalOpen}
          onClose={() => setIsWindowModalOpen(false)}
          showCloseIcon={false}
          center
          classNames={{
            overlay: "customOverlay",
            modal: "customModal",
          }}
        >
          <React.Fragment>
            <div className="modal-header">
              <h5 className="text-left no-margin">
                <span className="semi-bold">News letter</span> signup
              </h5>
            </div>
            <div className="modal-body p-t-0">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9">
                  <input
                    type="text"
                    placeholder="Your email address here"
                    className="form-control"
                    id="icon-filter"
                    name="icon-filter"
                  />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 no-padding sm-m-t-10 sm-text-center fill-win-m-t-10">
                  <button
                    aria-label=""
                    type="button"
                    className="btn btn-primary btn-lg"
                  >
                    Sign up
                  </button>
                </div>
              </div>
              <p className="text-right sm-text-center hinted-text p-t-10 p-r-10">
                What is it? Terms and conditions
              </p>
            </div>
          </React.Fragment>
        </Modal>

        <div
          className="modal fade stick-up"
          id="modalStickUpSmall"
          tabIndex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-sm">
            <div className="modal-content-wrapper">
              <div className="modal-content">
                <div className="modal-header clearfix text-left">
                  <button
                    aria-label=""
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                    style={{ right: 0, top: 20 }}
                  >
                    <i className="pg-icon">close</i>
                  </button>
                  <h5>Reset all settings</h5>
                </div>
                <div className="modal-body no-padding">
                  <p className="no-margin">
                    This will restore all system settings to factory defults.
                    Are you sure that you want to proceed?
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    aria-label=""
                    type="button"
                    className="btn btn-primary pull-left inline"
                    data-dismiss="modal"
                  >
                    Continue
                  </button>
                  <button
                    aria-label=""
                    type="button"
                    className="btn btn-default no-margin pull-left inline"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="jumbotron" data-pages="parallax">
          <PageContainer
            className={
              path.includes("/executive") || path.includes("/casual")
                ? "container"
                : " "
            }
          >
            <PageScroll>
              <PageBreadcrumb>
                <li className="breadcrumb-item">
                  <a href="javascript:void(0);">UI Elements</a>
                </li>
                <li className="breadcrumb-item active">Modals</li>
              </PageBreadcrumb>
              <div className="container-md-height m-b-20">
                <div className="row">
                  <div className="col-xl-7 col-lg-6 bg-white">
                    <div className="full-height">
                      <div className="card-body text-center">
                        <img
                          className="image-responsive-height demo-mw-400"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/img/demo/modal_hero.gif"
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
                        <h3>
                          A modal helps to displays content that temporarily
                          blocks interactions with a web site
                        </h3>
                        <p>
                          These are native boostrap modals and work as the same
                          way as it does but more awesome with the added styles
                          and animation giving the user more options to go to
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
                              Pages Design Framework
                              <br />
                              @revoxltd
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
          <div className="row">
            <div className="col-md-4">
              <div className="card card-transparent">
                <div className="card-header ">
                  <div className="card-title">Boostrap Native Modals</div>
                </div>
                <div className="card-body">
                  Boostrap modals are something very functional and we began to
                  think about how to make something better even better. The
                  modals were styled to suite pages color scheme and animation,
                  we did not stop here we added more, Read more.
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-transparent">
                <div className="card-header ">
                  <div className="card-title">Style and Animation</div>
                </div>
                <div className="card-body">
                  These modals are customized with new animations and style, now
                  pages modals support up to 3 different versions and each
                  version have small, medium and large modals. This helps you to
                  make your app look even better
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-transparent">
                <div className="card-header ">
                  <div className="card-title">Functional</div>
                </div>
                <div className="card-body">
                  We did not just go for the looks and compromise functionality,
                  since they are boostrap modals they are responsive and fast
                  and works on all screens.
                </div>
              </div>
            </div>
          </div>
        </PageContainer>

        <PageContainer
          className={
            path.includes("/executive") || path.includes("/casual")
              ? "container bg-white"
              : " bg-white"
          }
        >
          <div className="card card-transparent">
            <div className="card-header ">
              <div className="card-title">Boostrap Native Modals</div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-xl-4 col-md-6">
                  <div className="card card-transparent">
                    <div className="card-header  no-padding">
                      <div className="card-title">Slide Up</div>
                    </div>
                    <div className="card-body no-padding">
                      <div className="m-b-15">
                        <img
                          alt=""
                          src={
                            process.env.PUBLIC_URL + "/assets/img/demo/1.svg"
                          }
                          className="full-width"
                        />
                      </div>
                      <p>
                        This modal slides in from the bottom and rests on the
                        middle of the screen, to add this simply add the class{" "}
                        <code>slide-up</code> to the <code>modal</code> div
                      </p>
                      <div className="form-check success">
                        <input
                          id="slideup_full"
                          name="slideup_toggler"
                          type="radio"
                          value="full"
                          onClick={() =>
                            setSlideUpModalSize([true, false, false])
                          }
                        />
                        <label htmlFor="slideup_full">Large</label>
                      </div>
                      <div className="form-check success">
                        <input
                          id="slideup_default"
                          name="slideup_toggler"
                          type="radio"
                          value="default"
                          onChange={() => {}}
                          checked={slideUpModalSize[1] ? true : false}
                          onClick={() =>
                            setSlideUpModalSize([false, true, false])
                          }
                        />
                        <label htmlFor="slideup_default">Default</label>
                      </div>
                      <div className="form-check success">
                        <input
                          id="slideup_small"
                          name="slideup_toggler"
                          type="radio"
                          value="mini"
                          onClick={() =>
                            setSlideUpModalSize([false, false, true])
                          }
                        />
                        <label htmlFor="slideup_small">Small</label>
                      </div>
                      <button
                        aria-label=""
                        onClick={() => setSlideUpVisible(true)}
                        className="btn btn-green btn-lg pull-right bottom-right"
                        id="btnToggleSlideUpSize"
                      >
                        Generate
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="column-body">
                    <div className="card card-transparent">
                      <div className="card-header  no-padding">
                        <div className="card-title">Stick Up</div>
                      </div>
                      <div className="card-body no-padding">
                        <div className="m-b-15">
                          <img
                            alt=""
                            src={
                              process.env.PUBLIC_URL + "/assets/img/demo/2.svg"
                            }
                            className="full-width"
                          />
                        </div>
                        <p>
                          This modal slides in from the top and rests on the top
                          of the screen, to add this simply add the class{" "}
                          <code>stick-up</code> to the <code>modal</code> div
                        </p>
                        <div className="form-check success inline m-r-10">
                          <input
                            id="stickup_full"
                            name="stickup_toggler"
                            type="radio"
                            value="full"
                            onClick={() =>
                              setStickUpModalSize([true, false, false])
                            }
                          />
                          <label htmlFor="stickup_full">Large</label>
                        </div>
                        <div className="form-check success inline m-r-10">
                          <input
                            id="stickup_default"
                            name="stickup_toggler"
                            type="radio"
                            value="default"
                            onChange={() => {}}
                            checked={stickUpModalSize[1] ? true : false}
                            onClick={() =>
                              setStickUpModalSize([false, true, false])
                            }
                          />
                          <label htmlFor="stickup_default">Default</label>
                        </div>
                        <div className="form-check success inline m-r-10">
                          <input
                            id="stickup_small"
                            name="stickup_toggler"
                            type="radio"
                            value="mini"
                            onClick={() =>
                              setStickUpModalSize([false, false, true])
                            }
                          />
                          <label htmlFor="stickup_small">Small</label>
                        </div>
                        <button
                          aria-label=""
                          onClick={() => setStickUpVisible(true)}
                          className="btn btn-green btn-lg bottom-right"
                          id="btnStickUpSizeToggler"
                        >
                          Generate
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 d-none d-xl-block">
                  <div className="card card-transparent">
                    <div className="card-header  no-padding">
                      <div className="card-title">Slide Right</div>
                    </div>
                    <div className="card-body no-padding">
                      <div className="m-b-15">
                        <img
                          alt=""
                          src={
                            process.env.PUBLIC_URL + "/assets/img/demo/4.svg"
                          }
                          className="full-width"
                        />
                      </div>
                      <p>
                        This modal slides from the right side{" "}
                        <code>slide-right</code> to the <code>modal</code> div
                      </p>
                      <button
                        aria-label=""
                        className="btn btn-green btn-lg pull-right"
                        data-toggle="modal"
                        onClick={() => {
                          setOpenPanel(true);
                        }}
                      >
                        Generate
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 d-xl-none">
                  <div className="card card-transparent">
                    <div className="card-header  no-padding">
                      <div className="card-title">Fill in Modal</div>
                    </div>
                    <div className="card-body no-padding">
                      <div className="m-b-15">
                        <img
                          alt=""
                          src={
                            process.env.PUBLIC_URL + "/assets/img/demo/3.svg"
                          }
                          className="full-width"
                        />
                      </div>
                      <p>
                        This modal zooms from the middle and fills in{" "}
                        <code>fill-in</code> to the <code>modal</code> div
                      </p>
                      <button
                        aria-label=""
                        className="btn btn-green btn-lg pull-right"
                        onClick={() => setIsWindowModalOpen(true)}
                        data-target="#modalFillIn"
                        data-toggle="modal"
                        id="btnFillSizeToggler"
                      >
                        Generate
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-xl-none">
                  <div className="card card-transparent">
                    <div className="card-header  no-padding">
                      <div className="card-title">Slide Right</div>
                    </div>
                    <div className="card-body no-padding">
                      <div className="m-b-15">
                        <img
                          alt=""
                          src={
                            process.env.PUBLIC_URL + "/assets/img/demo/4.svg"
                          }
                          className="full-width"
                        />
                      </div>
                      <p>
                        This modal slides from the right side{" "}
                        <code>slide-right</code> to the <code>modal</code> div
                      </p>
                      <button
                        aria-label=""
                        className="btn btn-green btn-lg pull-right"
                        onClick={() => setOpenPanel(true)}
                      >
                        Generate
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card card-transparent d-none d-xl-block">
              <div className="card-header ">
                <div className="card-title"></div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-4 ">
                    <div className="card card-transparent">
                      <div className="card-header  no-padding">
                        <div className="card-title">Fill in Modal</div>
                      </div>
                      <div className="card-body no-padding">
                        <div className="m-b-15">
                          <img
                            alt=""
                            src={
                              process.env.PUBLIC_URL + "/assets/img/demo/3.svg"
                            }
                            className="full-width"
                          />
                        </div>
                        <p>
                          This modal zooms from the middle and fills in{" "}
                          <code>fill-in</code> to the <code>modal</code> div
                        </p>
                        <button
                          aria-label=""
                          onClick={() => setIsWindowModalOpen(true)}
                          className="btn btn-green btn-lg pull-right"
                          data-target="#modalFillIn"
                          data-toggle="modal"
                          id="btnFillSizeToggler2"
                        >
                          Generate
                        </button>
                      </div>
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
