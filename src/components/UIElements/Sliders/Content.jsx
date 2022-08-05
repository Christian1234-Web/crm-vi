import React from "react";

import PageContainer from "../Containers";
import PageScroll from "../PageScroll";
import Breadcrumb from "../Breadcrumb";
import Copyright from "../../ui/Footer/Copyright";

import IonRangeSlider from "react-ion-slider";
import Slider from "../NoUiSlider";

import "./ion_slide_style.css";
import "./style.scss";

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
            <PageScroll className="inner">
              <Breadcrumb>
                <li className="breadcrumb-item">
                  <a href="javascript:void(0);">UI Elements</a>
                </li>
                <li className="breadcrumb-item active">sliders</li>
              </Breadcrumb>
              <div className="container-md-height m-b-20">
                <div className="row">
                  <div className="col-xl-7 col-lg-6 bg-white">
                    <div className="full-height">
                      <div className="card-body text-center">
                        <img
                          className="image-responsive-height demo-mw-300"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/img/demo/slider_hero.gif"
                          }
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6">
                    <div className="card card-transparent">
                      <div className="card-header ">
                        <div className="card-title">Getting started</div>
                      </div>
                      <div className="card-body">
                        <h3>Sometimes small things matter the most in life!</h3>
                        <p>
                          A slider, also known as a track bar, allows users to
                          set or adjust a value. When the user changes the
                          value, it does not change the format of the interface
                          or other info on the screen.
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
          <div className="row">
            <div className="col-md-5">
              <div className="card card-transparent">
                <div className="card-header ">
                  <div className="card-title">noUISlider slider</div>
                </div>
                <div className="card-body">
                  <p className="m-b-20">
                    noUiSlider is a range slider without bloat. It offers a ton
                    off features, and it is as small, lightweight and minimal as
                    possible, which is great for mobile use on the many
                    supported devices.
                    <br />
                    <br />
                  </p>
                  <div className="col-lg-8 disable-hover-scale no-padding m-t-20">
                    <Slider
                      connect="lower"
                      behaviour="none"
                      toolTips={true}
                      min={0}
                      max={100}
                      start={40}
                      id="black"
                    ></Slider>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="row">
                <div className="col-md-6">
                  <div className="card card-transparent">
                    <div className="card-header ">
                      <div className="card-title">Responsive All Around</div>
                    </div>
                    <div className="card-body">
                      <p>
                        noUiSlider works with pretty much any device, mouse,
                        touchscreen or both, and it'll work beautifully in
                        responsive designs.
                      </p>
                      <br />
                      <div className="row">
                        <div className="col-md-12">
                          <a
                            href="http://refreshless.com/nouislider/"
                            target="_blank"
                            className="btn btn-complete"
                          >
                            See Plugin
                          </a>
                          <p className="small hint-text m-t-20 col-middle">
                            see the plugin for uiSlider <br />{" "}
                            http://refreshless.com/nouislider/
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card card-transparent">
                    <div className="card-header ">
                      <div className="card-title">
                        Compatible with all browsers
                      </div>
                    </div>
                    <div className="card-body">
                      <p>
                        noUiSlider supports IE9 and up, and of course the latest
                        versions of the 'evergreen' browsers: Chrome, Safari,
                        Firefox and Opera.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card card-transparent">
            <div className="card-header ">
              <div className="card-title">Nouilslider options</div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="card card-transparent">
                    <div className="card-body no-top-padding">
                      <h5>Connect</h5>
                      <p>
                        Basic slider with different color options, use of the
                        below classes to quickly create a styled slider. Uses
                        native boostrap colors scheme classes
                      </p>
                      <div className="row">
                        <div className="col-lg-5 col-xl-5 padding-20">
                          <Slider
                            connect="lower"
                            behaviour="none"
                            toolTips={false}
                            min={0}
                            max={100}
                            start={90}
                            id="black"
                          ></Slider>
                          <br />
                          <Slider
                            connect="lower"
                            behaviour="none"
                            toolTips={false}
                            min={0}
                            max={100}
                            start={70}
                            id="red"
                          ></Slider>
                          <br />
                          <Slider
                            connect="lower"
                            behaviour="none"
                            toolTips={false}
                            min={0}
                            max={100}
                            start={20}
                            id="yellow"
                          ></Slider>
                          <br />
                          <Slider
                            connect="lower"
                            behaviour="none"
                            toolTips={false}
                            min={0}
                            max={100}
                            start={50}
                            id="green"
                          ></Slider>
                          <br />
                          <Slider
                            connect="lower"
                            behaviour="none"
                            toolTips={false}
                            min={0}
                            max={100}
                            start={30}
                            id="blue"
                          ></Slider>
                          <br />
                          <Slider
                            connect="lower"
                            behaviour="none"
                            toolTips={false}
                            min={0}
                            max={100}
                            start={50}
                            id="purple"
                          ></Slider>
                          <br />
                        </div>
                        <div className="col-lg-5">
                          <p className="small hint-text">
                            All the colours included in pages color palette is
                            applied to the default pages slider.
                          </p>
                          <a
                            href="javascript:void(0);"
                            className="btn btn-warning"
                          >
                            See color Pallete
                          </a>
                        </div>
                      </div>
                      <br />
                      <p>All colors included except for the menu-color</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card card-transparent">
                    <div className="card-body no-top-padding">
                      <h5>Connect</h5>
                      <p>
                        The connect setting can be used to control the bar
                        between the handles, or the edges of the slider. Use
                        "lower" to connect to the lower side, or "upper" to
                        connect to the upper side. Setting true sets the bar
                        between the handles.
                      </p>
                      <div className="row">
                        <div className="col-md-5 padding-20">
                          <Slider
                            connect="lower"
                            behaviour="none"
                            toolTips={false}
                            min={0}
                            max={100}
                            start={0}
                            id="purple"
                          ></Slider>
                        </div>
                        <div className="col-lg-5"></div>
                      </div>
                    </div>
                  </div>
                  <div className="card card-transparent">
                    <div className="card-body no-top-padding">
                      <h5>Margin</h5>
                      <p>
                        When using two handles, the minimum distance between the
                        handles can be set using the margin option. The margin
                        value is relative to the value set in 'range'. This
                        option is only available on standard linear sliders.
                      </p>
                      <div className="row">
                        <div className="col-md-5 padding-20">
                          <Slider
                            connect={true}
                            margin={40}
                            behaviour="none"
                            toolTips={false}
                            min={0}
                            max={100}
                            start={[15, 75]}
                            id="blue"
                          ></Slider>
                        </div>
                        <div className="col-lg-5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="card card-transparent">
                    <div className="card-body no-top-padding">
                      <h5>Limit</h5>
                      <p>
                        The limit option is the oposite of the margin option,
                        limiting the maximum distance between two handles. As
                        with the margin option, the limit option can only be
                        used on linear sliders.
                      </p>
                      <div className="row">
                        <div className="col-md-5 padding-20">
                          <Slider
                            connect={true}
                            limit={35}
                            behaviour="drag"
                            toolTips={false}
                            min={0}
                            max={100}
                            start={[5, 50]}
                            showValue={true}
                            id="green"
                          ></Slider>
                        </div>
                        <div className="col-lg-5"></div>
                      </div>
                    </div>
                  </div>
                  <div className="card card-transparent">
                    <div className="card-body no-top-padding">
                      <h5>Step</h5>
                      <p>
                        By default, the slider slides fluently. In order to make
                        the handles jump between intervals, you can use this
                        option. The step option is relative to the values
                        provided to the range.
                      </p>
                      <div className="row">
                        <div className="col-md-5 padding-20">
                          <Slider
                            connect={true}
                            showValue={true}
                            behaviour="step"
                            step={10}
                            toolTips={false}
                            min={0}
                            max={100}
                            start={[20, 80]}
                            id="red"
                          ></Slider>
                        </div>
                        <div className="col-lg-5"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card card-transparent">
                    <div className="card-body no-top-padding">
                      <h5>Orientation</h5>
                      <p>
                        The orientation setting can be used to set the slider to
                        "vertical" or "horizontal".Set dimensions! Vertical
                        sliders don't assume a default height, so you'll need to
                        set one. You can use any unit you want, including % or
                        px.
                      </p>
                      <div className="row">
                        <div className="vertical-slider padding-20">
                          {/* ToDO */}
						  <Slider
                            connect={true}
                            behaviour="none"
							orientation="vertical"
                            toolTips={false}
                            min={0}
                            max={100}
                            start={[10, 70]}
                            id="green"
                          ></Slider>
                        </div>
                        <div className="col-lg-5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-5">
              <div className="card card-transparent">
                <div className="card-header ">
                  <div className="card-title">Ion.range Slider</div>
                </div>
                <div className="card-body">
                  <p>
                    Ion.RangeSlider is an easily customizable range slider that
                    supports events and public methods which have flexible
                    settings that can be completely altered with CSS.
                  </p>
                  <br />
                  <div className="row">
                    <div className="col-md-12">
                      <a
                        href="http://ionden.com/a/plugins/ion.rangeSlider/en.html"
                        target="_blank"
                        className="btn btn-complete"
                      >
                        See Plugin
                      </a>
                      <p className="small hinted-text inline p-l-10 no-margin col-middle">
                        see the plugin for uiSlider
                        <br />{" "}
                        http://ionden.com/a/plugins/ion.rangeSlider/en.html
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="row">
                <div className="col-md-6">
                  <div className="card card-transparent">
                    <div className="card-header ">
                      <div className="card-title">Advance Options</div>
                    </div>
                    <div className="card-body">
                      <p>
                        Ion.RangeSlider is the best when dealing with advanced
                        options. It has many features like, Ability to prettify
                        large numbers, Support of custom values diapason, etc..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card card-transparent">
                    <div className="card-header ">
                      <div className="card-title">Automatic Generated Grid</div>
                    </div>
                    <div className="card-body">
                      <p>
                        The sliders are made with an automatically generated
                        grid system that will adapt to any screen size.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card card-default">
            <div className="card-header ">
              <div className="card-title">Ion.range options</div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="card card-transparent">
                    <div className="card-header ">
                      <div className="card-title">ION.Range Options</div>
                    </div>
                    <div className="card-body">
                      <h5 className="semi-bold">Color Options</h5>
                      <p>
                        Basic slider with different color options, use of the
                        below classes to quickly create a styled slider. Uses
                        native boostrap colors scheme classes
                      </p>
                      <div className="irs-wrapper primary">
                        <IonRangeSlider
                          type="double"
                          skin="flat"
                          min={0}
                          max={5000}
                          from={0}
                          to={5000}
                          step={4}
                          keyboard={true}
                          grid={true}
                          prefix="$"
                        />
                      </div>
                      <br />
                      <div className="irs-wrapper complete">
                        <IonRangeSlider
                          type="double"
                          skin="flat"
                          min={0}
                          max={5000}
                          from={0}
                          to={5000}
                          step={4}
                          keyboard={true}
                          grid={true}
                          prefix="$"
                        />
                      </div>
                      <br />
                      <div className="irs-wrapper success">
                        <IonRangeSlider
                          type="double"
                          skin="flat"
                          min={0}
                          max={5000}
                          from={0}
                          to={5000}
                          step={4}
                          keyboard={true}
                          grid={true}
                          prefix="$"
                        />
                      </div>
                      <br />
                      <div className="irs-wrapper danger">
                        <IonRangeSlider
                          type="double"
                          skin="flat"
                          min={0}
                          max={5000}
                          from={0}
                          to={5000}
                          step={4}
                          keyboard={true}
                          grid={true}
                          prefix="$"
                        />
                      </div>
                      <br />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card card-transparent">
                    <div className="card-header ">
                      <div className="card-title"></div>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-10">
                          <div className="irs-wrapper danger">
                            <IonRangeSlider
                              type="double"
                              skin="flat"
                              min={0}
                              max={5000}
                              from={746}
                              to={5000}
                              step={4}
                              keyboard={true}
                              grid={true}
                              prefix="$"
                            />
                          </div>
                          <div className="row fs-13 m-t-20">
                            <div className="col-md-6">
                              Size set from <code>0</code>to <code>5000</code>
                            </div>
                            <div className="col-md-6">
                              Adding postfix <code>+</code>to max value
                            </div>
                          </div>
                          <div className="row fs-13">
                            <div className="col-md-6">
                              Set slider type to <code>double</code>
                            </div>
                            <div className="col-md-6">
                              symbol as prefix <code>$</code>
                            </div>
                          </div>
                          <div className="row fs-13">
                            <div className="col-md-6">
                              Set slider type to <code>double</code>
                            </div>
                            <div className="col-md-6">
                              Grid <code>TRUE</code>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card card-transparent">
                    <div className="card-header ">
                      <div className="card-title"></div>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-10">
                          <div className="irs-wrapper danger">
                            <IonRangeSlider
                              type="double"
                              skin="flat"
                              min={1000}
                              max={100000}
                              from={49000}
                              to={90000}
                              step={4}
                              keyboard={true}
                              grid={true}
                              postfix="€"
                            />
                          </div>
                          <div className="row fs-13 m-t-20">
                            <div className="col-md-6 m-b-10">
                              Size set from
                              <code>1000</code>to
                              <code>100 000</code>
                            </div>
                            <div className="col-md-6">
                              Value from
                              <code>30 000</code>to
                              <code>90 000</code>
                            </div>
                          </div>
                          <div className="row fs-13">
                            <div className="col-md-6">
                              Adding postfix
                              <code>EURO</code>to max value
                            </div>
                            <div className="col-md-6">
                              symbol as prefix <code>$</code>
                            </div>
                          </div>
                          <div className="row fs-13">
                            <div className="col-md-6">
                              Set slider type to
                              <code>double</code>
                            </div>
                            <div className="col-md-6">
                              symbol as prefix
                              <code>$</code>
                            </div>
                          </div>
                          <div className="row fs-13">
                            <div className="col-md-6">
                              Grid
                              <code>TRUE</code>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card card-transparent">
              <div className="card-header ">
                <div className="card-title"></div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="card card-transparent">
                      <div className="card-header ">
                        <div className="card-title"></div>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-lg-10">
                            <div className="irs-wrapper danger">
                              <IonRangeSlider
                                type="single"
                                skin="flat"
                                min={0}
                                max={10}
                                from={0}
                                step={4}
                                keyboard={true}
                                grid={true}
                                postfix="carats"
                              />
                            </div>
                            <div className="row fs-13 m-t-20">
                              <div className="col-md-6">
                                Size set from
                                <code>0</code>to
                                <code>10</code>
                              </div>
                              <div className="col-md-6">
                                Set fractional step
                                <code>0.1</code>
                              </div>
                            </div>
                            <div className="row fs-13">
                              <div className="col-md-6">
                                Grid
                                <code>TRUE</code>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card card-transparent">
                      <div className="card-header ">
                        <div className="card-title"></div>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-lg-10">
                            <div className="irs-wrapper danger">
                              <IonRangeSlider
                                type="single"
                                skin="flat"
                                min={-50}
                                max={50}
                                from={0}
                                keyboard={true}
                                grid={true}
                                postfix="°"
                              />
                            </div>
                            <div className="row fs-13 m-t-20">
                              <div className="col-md-6">
                                Size set from
                                <code>-50</code>+50
                                <code>5000</code>
                              </div>
                              <div className="col-md-6">
                                Set FROM value to
                                <code>0</code>
                              </div>
                            </div>
                            <div className="row fs-13">
                              <div className="col-md-6">
                                symbol as prefix
                                <code>Degress</code>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card card-transparent">
                      <div className="card-header ">
                        <div className="card-title"></div>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-lg-10">
                            <div className="irs-wrapper danger">
                              <IonRangeSlider
                                type="single"
                                skin="flat"
                                keyboard={true}
                                grid={true}
                                from={0}
                                values={[
                                  "January",
                                  "February",
                                  "March",
                                  "April",
                                  "May",
                                  "June",
                                  "July",
                                  "August",
                                  "September",
                                  "October",
                                  "November",
                                  "December",
                                ]}
                              />
                            </div>
                            <div className="row fs-13 m-t-20">
                              <div className="col-md-6">
                                Set values array to month names
                              </div>
                              <div className="col-md-6">
                                Adding postfix
                                <code>+</code>to max value
                              </div>
                            </div>
                            <div className="row fs-13">
                              <div className="col-md-6">
                                Everything else will be automatically adjusted
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card card-transparent">
                      <div className="card-header ">
                        <div className="card-title"></div>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-lg-10">
                            <div className="irs-wrapper blue">
                              <IonRangeSlider
                                type="single"
                                skin="flat"
                                min={10000}
                                max={100000}
                                from={55000}
                                keyboard={true}
                                postfix=" miles"
                              />
                            </div>
                            <div className="row fs-13 m-t-20">
                              <div className="col-md-6">
                                Set step value to
                                <code>1000</code>
                              </div>
                              <div className="col-md-6">
                                Slider value
                                <code>Hide</code>
                              </div>
                            </div>
                            <div className="row fs-13">
                              <div className="col-md-6">
                                Adding postfix
                                <code>Miles</code>
                              </div>
                            </div>
                          </div>
                        </div>
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
