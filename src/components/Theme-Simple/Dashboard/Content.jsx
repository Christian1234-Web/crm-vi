import React, { useState } from "react";

// import footer component
import Copyright from "../../ui/Footer/Copyright/Component";
import { ValidatorForm } from "react-form-validator-core";
//import ui widgets component
import InputWithLabel from "../../Landing/InputWithLabel";
import WithoutMsgValidation from '../../Landing/InputWithLabel'

import PageBreadcrumb from "../../UIElements/Breadcrumb";
import StickUpModal from "../Contact/StickUpModal";
import "./style.css";

const Content = () => {
  const progress = (
    <React.Fragment>
      <div
        className="card-progress"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", display: "block" }}
      ></div>
    </React.Fragment>
  );

  const [refreshOne, setRefreshOne] = useState(false);
  const [projectUrl, setProjectUrl] = useState("");
  const [projectName, setProjectName] = useState("");
  const [startingDate, setStartingDate] = useState("");
  const [website, setWebsite] = useState("");
  const [show, setShow] = useState(false);

  const [project, setProject] = useState("");
  const [investor, setInvestor] = useState("");
  const [deadline, setDeadline] = useState("");

  let handleFormSubmit = () => {
    //Call this function on form submit with no errors
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);


  return (
    <div className="page-content-wrapper ">
      {/* START PAGE CONTENT */}

      <StickUpModal
        visible={show}
        width={'600'}
        effect="fadeInUp"
      >
        <div className="modal-content-wrapper">
          <div className="modal-content">
            <div className="modal-top">

              <div className="pull-right" style={{ cursor: 'pointer' }} onClick={() => handleClose()}>
                <i className="pg-icon" >close</i>
              </div>

            </div>
            <div className="modal-body">

              <div>
                <ValidatorForm
                  instantValidate={true}
                  onSubmit={handleFormSubmit}
                >
                  <h3 className="mw-80">Contemporary and unique</h3>
                  <p className="mw-80 m-b-25">
                    Want it to be more Descriptive and User-Friendly, We Made
                    it possible, Use Separated Form Layouts Structure to
                    Presentation your Form Fields.
                  </p>

                  <div className="form-group-attached">
                    <div className="form-group form-group-default">
                      <InputWithLabel
                        label="Investor"
                        onChange={(e) => setInvestor(e.target.value)}
                        value={investor}
                        type="text"
                        className="form-control "
                        icon="fa-info"
                        required=""
                      />
                    </div>
                    <div className="row clearfix">
                      <div className="col-md-6">
                        <div className="form-group form-group-default">
                          <WithoutMsgValidation
                            onChange={(e) => setStartingDate(e.target.value)}
                            name="startDate"
                            type="text"
                            value={startingDate}
                            validators={["required"]}
                            errorMessages={["This field is required"]}
                            className={"form-control date"}
                            label={"Starting date"}
                            require="true"
                          />
                        </div>

                      </div>
                      <div className="col-md-6">
                        <div className="form-group form-group-default">
                          <InputWithLabel
                            label="Deadline"
                            onChange={(e) => setDeadline(e.target.value)}
                            value={deadline}
                            type="text"
                            id="end-date"
                            name="endDate"
                            className="form-control date "
                            required=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group form-group-default">
                          <WithoutMsgValidation
                            onChange={(e) => setWebsite(e.target.value)}
                            name="Website"
                            value={website}
                            validators={["required"]}
                            errorMessages={["This field is required"]}
                            className={"form-control"}
                            label={"Website"}
                            require="true"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group form-group-default form-check-group d-flex align-items-center">
                          <div className="form-check switch switch-lg success full-width right m-b-0">
                            <input type="checkbox" id="switchSample" />
                            <label htmlFor="switchSample">Availability</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group form-group-default input-group">
                          <div className="form-input-group">
                            <label>Budget</label>
                            <input
                              type="text"
                              className="form-control usd"
                              required=""
                              aria-required="true"
                            />
                          </div>
                          <div className="input-group-append ">
                            <span className="input-group-text">USD</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group form-group-default input-group">
                          <div className="form-input-group">
                            <label>Profit</label>
                            <input type="text" className="form-control usd" />
                          </div>
                          <div className="input-group-append ">
                            <span className="input-group-text">USD</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group form-group-default input-group">
                          <div className="form-input-group">
                            <label>Revenue</label>
                            <input type="text" className="form-control usd" />
                          </div>
                          <div className="input-group-append ">
                            <span className="input-group-text">USD</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-8">
                      <div className="form-check primary m-t-0">
                        <input
                          type="checkbox"
                          value="1"
                          id="checkbox-agree"
                        />
                        <label htmlFor="checkbox-agree">
                          I hereby certify that the information above is true
                          and accurate
                        </label>
                      </div>
                    </div>
                    <div className="col-4">
                      <button
                        aria-label=""
                        className="btn btn-primary pull-right"
                        type="submit"
                      >
                        Create Droplet
                      </button>
                    </div>
                  </div>
                </ValidatorForm>
              </div>
            </div>
          </div>
        </div>
      </StickUpModal>



      <div className="content sm-gutter">
        <div className="sm-padding-10">


          <div className="row">
            <div className="col-lg-9 m-b-10">
              <PageBreadcrumb className='jumbotron mb-4'>
                <li className="breadcrumb-item">
                  <a href="javascript:void(0);">Home</a>
                </li>
                <li className="breadcrumb-item active">Dashboard</li>
              </PageBreadcrumb>
              <div className="mx-2 widget-11 widget-11-3 card no-border  widget-loader-bar">
                <div className="card-header">
                  <div className="card-title">Today's Table</div>
                  <div className="card-controls">
                    <ul>
                      <li>
                        <a
                          data-toggle="refresh"
                          className={`card-refresh ${refreshOne ? "refreshing" : ""
                            }`}
                          href="javascript:void(0);"
                          onClick={(e) => {
                            e.preventDefault();
                            setRefreshOne(true);
                            setTimeout(() => {
                              setRefreshOne(false);
                            }, 2000);
                          }}
                        >
                          <i
                            className={`card-icon card-icon-refresh ${refreshOne ? "fade" : ""
                              }`}
                          ></i>
                          <i
                            className={`card-icon-refresh-lg-white-animated ${refreshOne ? "active" : ""
                              }`}
                            style={{
                              position: "absolute",
                              top: "14px",
                              right: "20px",
                            }}
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="auto-overflow">
                  <table className="table table-condensed table-hover">
                    <tbody>
                      <tr>
                        <td className=" fs-12">Purchase CODE #2345</td>
                        <td className="text-right">
                          <span className="hint-text small">dewdrops</span>
                        </td>
                        <td className="text-right b-r b-dashed b-grey">
                          <span className="hint-text small">Qty 1</span>
                        </td>
                        <td>
                          <span className="font-montserrat fs-18">$27</span>
                        </td>
                      </tr>
                      <tr>
                        <td className=" fs-12">Purchase CODE #2345</td>
                        <td className="text-right">
                          <span className="hint-text small">johnsmith</span>
                        </td>
                        <td className="text-right b-r b-dashed b-grey">
                          <span className="hint-text small">Qty 1</span>
                        </td>
                        <td>
                          <span className="font-montserrat fs-18 text-primary">
                            $1000
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className=" fs-12">Purchase CODE #2345</td>
                        <td className="text-right">
                          <span className="hint-text small">johnsmith</span>
                        </td>
                        <td className="text-right b-r b-dashed b-grey">
                          <span className="hint-text small">Qty 1</span>
                        </td>
                        <td>
                          <span className="font-montserrat fs-18 text-primary">
                            $1000
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-t-15 p-b-15 p-l-20 p-r-20">
                  <p className="small no-margin">
                    <a href="javascript:void(0);" className="btn-circle-arrow b-grey">
                      <i className="pg-icon">chevron_down</i>
                    </a>
                    <span className="hint-text ">
                      Show more details of <a href="javascript:void(0);"> Revox pvt ltd </a>
                    </span>
                  </p>
                </div>
                {refreshOne ? progress : null}
              </div>
            </div>


            <div className="col-lg-3">
              <div
                className="card social-card share  full-width no-margin no-border"
                data-social="item"
              >
                <div className="card-header">
                  <h5 className="text-primary pull-left fs-12 d-flex align-items-center">
                    Update <i className="pg-icon">circle_fill</i>
                  </h5>
                  <div className="pull-right small hint-text d-flex align-items-center">
                    5,345 <i className="pg-icon m-l-5">comment</i>
                  </div>
                  <div className="clearfix"></div>
                </div>

              </div>
              <div className="card no-border widget-loader-bar m-b-10">
                <div className="container-xs-height full-height">
                  <div className="row-xs-height">
                    <div className="col-xs-height col-top">
                      <div className="card-header  top-left top-right">
                        <div className="card-title">
                          <span className="font-montserrat all-caps d-flex align-items-center">
                            Weekly Sales{" "}
                            <i className="pg-icon">chevron_right</i>
                          </span>
                        </div>
                        <div className="card-controls">
                          <ul>
                            <li>
                              <a
                                href="javascript:void(0);"
                                className="portlet-refresh text-black"
                                data-toggle="refresh"
                              >
                                <i className="portlet-icon portlet-icon-refresh"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row-xs-height">
                    <div className="col-xs-height col-top">
                      <div className="p-l-20 p-t-50 p-b-40 p-r-20">
                        <h3 className="no-margin p-b-5">$24,000</h3>
                        <span className="small hint-text pull-left">
                          71% of total goal
                        </span>
                        <span className="pull-right small text-primary">
                          $23,000
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row-xs-height">
                    <div className="col-xs-height col-bottom">
                      <div className="progress progress-small m-b-0">
                        <div
                          className="progress-bar progress-bar-primary"
                          style={{ width: "71%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <form className="" role="form">
                      <div className="form-group ">
                        <select className="full-width select2-hidden-accessible" data-init-plugin="select2" tabindex="-1" aria-hidden="true">
                          <option value="AK">Alaska</option>
                          <option value="HI">Hawaii</option>
                          <option value="CA">California</option>
                          <option value="NV">Nevada</option>
                          <option value="OR">Oregon</option>
                          <option value="WA">Washington</option>
                        </select>
                        <span className="select2 select2-container select2-container--default select2-container--focus" dir="ltr">
                          <span className="selection">
                            <span className="select2-selection select2-selection--single" role="combobox"
                              aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-6f7b-container">
                              <span className="select2-selection__rendered" id="select2-6f7b-container" title="Alaska">
                                Alaska
                              </span>
                              <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>
                            </span>
                          </span>
                          <span className="dropdown-wrapper" aria-hidden="true"></span>
                        </span>
                      </div>
                      <div className="form-group form-group-default required">
                        <label>Project</label>
                        <input type="email" className="form-control" required="" />
                      </div>
                    
                      <div class="form-group form-group-default required">
                        <label>Placeholder</label>
                        <input type="email" className="form-control" placeholder="ex: some@example.com" required="" />
                      </div>
                      <div className="form-group form-group-default disabled">
                        <label>Disabled</label>
                        <input type="email" className="form-control" value="You can put anything here" disabled="" />
                      </div>
                      <div className="row">
                        <div class="col-6 pt-2">
                        </div>
                        <div className="col-6">
                          <button onClick={() => handleShow()} aria-label="" type="button" className="btn btn-block btn-default btn-lg btn-icon-right">
                            <span>Button Block</span>
                            <i className="pg-icon md-18">arrow_right</i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

              </div>

            </div>


          </div>
        </div>
      </div>
      {/* END PAGE CONTENT */}
      {/* START COPYRIGHT */}
      <Copyright
        year={"2014"}
        brand={"REVOX"}
        reserved={"All rights reserved."}
        terms={"Terms of use"}
        policy={"Privacy Policy"}
      />
      {/* END COPYRIGHT */}
    </div>
  );
};

export default Content;
