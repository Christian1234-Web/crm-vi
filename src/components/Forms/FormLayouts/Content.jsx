import React, { useState } from "react";
import { ValidatorForm } from "react-form-validator-core";
import TextValidator from "./FormValidation";
import WithoutMsgValidation from "./WithoutMsgValidation";

import PageContainer from "../../UIElements/Containers";
import PageBreadcrumb from "../../UIElements/Breadcrumb";
import Copyright from "../../ui/Footer/Copyright";
import InputWithLabel from "../Elements/InputWithLabel";

const content = ({ path }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [projectUrl, setProjectUrl] = useState("");
  const [projectName, setProjectName] = useState("");
  const [startingDate, setStartingDate] = useState("");
  const [website, setWebsite] = useState("");

  const [project, setProject] = useState("");
  const [investor, setInvestor] = useState("");
  const [deadline, setDeadline] = useState("");

  const [url, setURL] = useState("");

  let changeFirstName = (input) => {
    setFirstName(input);
  };
  let changeLastName = (input) => {
    setLastName(input);
  };
  let changeUserName = (input) => {
    setUserName(input);
  };
  let changePassword = (input) => {
    setPassword(input);
  };
  let changeEmail = (input) => {
    setEmail(input);
  };
  let changeURL = (input) => {
    setURL(input);
  };

  let handleFormSubmit = () => {
    //Call this function on form submit with no errors
  };

  return (
    <div className="page-content-wrapper ">
      {/* START PAGE CONTENT */}
      <div className="content ">
        <PageContainer
          className={
            path.includes("/executive") || path.includes("/casual")
              ? "container p-l-10 p-r-10"
              : " "
          }
        >
          <PageBreadcrumb>
            <li className="breadcrumb-item">
              <a href="javascript:void(0);">Home</a>
            </li>
            <li className="breadcrumb-item active">Form layouts</li>
          </PageBreadcrumb>
          <div className="row">
            <div className="col-xl-6 col-lg-6 ">
              <div className="card card-transparent">
                <div className="card-header">
                  <div className="card-title">Validation</div>
                </div>
                <div className="card-body">
                  <h3>
                    Showcase and guide users with a<br />
                    better User Interface &amp; Experience.
                  </h3>
                  <p>
                    Forms are one of the most important components
                    <br /> when it comes to a dashboard. Recognizing that fact,
                    users are
                    <br /> able work in a maximum content width.
                  </p>
                  <br />
                  <p className="small hint-text m-t-5">
                    VIA senior product manager
                    <br /> for UI/UX at REVOX
                  </p>
                  <button className="btn btn-primary btn-cons">More</button>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 ">
              <div className="card">
                <div className="card-header ">
                  <div className="card-title">Modern Layout.</div>
                </div>
                <div className="card-body">
                  <h2 className="mw-80">Get started with your account.</h2>
                  <p className="fs-16 mw-80 m-b-40">
                    Find your people. Engage your customers. Build your brand.
                    Do it all with Page's UI Framework Platform. Already have an
                    account? <a href="javascript:void(0);">Log in</a>
                  </p>
                  <ValidatorForm
                    instantValidate={true}
                    onSubmit={handleFormSubmit}
                  >
                    <div className="row clearfix">
                      <div className="col-xl-6">
                        <TextValidator
                          onChange={(e) => changeFirstName(e.target.value)}
                          name="firstName"
                          value={firstName}
                          validators={["required"]}
                          errorMessages={["This field is required"]}
                          className={"form-control"}
                          label={"First name"}
                          require="true"
                        />
                      </div>
                      <div className="col-xl-6">
                        <TextValidator
                          onChange={(e) => changeLastName(e.target.value)}
                          name="lastName"
                          value={lastName}
                          validators={["required"]}
                          errorMessages={["This field is required"]}
                          className={"form-control"}
                          label={"Last name"}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-10 ">
                        <TextValidator
                          onChange={(e) => changeUserName(e.target.value)}
                          name="website"
                          value={userName}
                          type="text"
                          validators={["required"]}
                          errorMessages={["This field is required"]}
                          className={"form-control error"}
                          label={"Pages username"}
                          placeholder="http://pages-ui.com/projectname"
                          suffixText={"@pages.com"}
                        />
                      </div>

                      {/* <div className="input-pages-text col-md-2">
                        <span className="">@pages.com</span>
                      </div> */}
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <TextValidator
                          onChange={(e) => changePassword(e.target.value)}
                          name="password"
                          value={password}
                          type="password"
                          validators={["required"]}
                          errorMessages={["This field is required"]}
                          className={"form-control"}
                          label={"Password"}
                          placeholder="Minimum of 4 characters."
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <TextValidator
                          onChange={(e) => changeEmail(e.target.value)}
                          name="email"
                          value={email}
                          type="email"
                          validators={["required"]}
                          errorMessages={["This field is required"]}
                          className={"form-control"}
                          label={"Email"}
                          placeholder="example@address.com"
                        />
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="row m-t-25">
                      <div className="col-xl-6 p-b-10">
                        <p className="small-text hint-text">
                          By clicking the "Get Started!" button, you are
                          creating a Pages account, and you agree to Pages's
                          <a href="javascript:void(0);">
                            Terms of Use
                          </a> and{" "}
                          <a href="javascript:void(0);">Privacy Policy</a>.
                        </p>
                      </div>
                      <div className="col-xl-6">
                        <button
                          aria-label=""
                          className="btn btn-primary pull-right btn-lg btn-block"
                          type="submit"
                        >
                          Get Started
                        </button>
                      </div>
                    </div>
                  </ValidatorForm>
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
          <div className="row m-t-10">
            <div className="col-xl-6 col-lg-6">
              <div className="card">
                <div className="card-header ">
                  <div className="card-title">Separated form layouts</div>
                </div>
                <div className="card-body">
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
                    <p>Basic Information</p>
                    <div className="form-group-attached">
                      <WithoutMsgValidation
                        onChange={(e) => setProjectUrl(e.target.value)}
                        name="projectUrl"
                        value={projectUrl}
                        validators={[
                          "required",
                          // "matchRegexp:^((https?|ftp|smtp):)?(www.)?[a-z0-9]+[a-z]+([a-zA-Z0-9#]+?)*$",
                        ]}
                        errorMessages={["This field is required"]}
                        className={"form-control"}
                        label={"Project Url"}
                        require="true"
                      />
                      <div className="row clearfix">
                        <div className="col-md-6">
                          <WithoutMsgValidation
                            onChange={(e) => setProjectName(e.target.value)}
                            name="projectName"
                            value={projectName}
                            validators={["required"]}
                            errorMessages={["This field is required"]}
                            className={"form-control"}
                            label={"Project name"}
                            require="true"
                          />
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-group-default">
                            <InputWithLabel
                              label="Project Code"
                              onChange={(e) => setProject(e.target.value)}
                              value={project}
                              type="text"
                              className="form-control "
                              placeholder="6 digit code"
                              required=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="m-t-10">Advanced Information</p>
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
            <div className="col-md-6 col-xlg-6">
              <div className="card">
                <div className="card-header ">
                  <div className="card-title">Separated form layouts</div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <h3 className="mw-80">
                        Simple but not simpler, create a separate form layout.
                        Best for settings pages.
                      </h3>
                      <p className="mw-80">
                        Want it to be more Descriptive and User-Friendly, We
                        Made it possible, Use Separated Form Layouts Structure
                        to Presentation your Form Fields.
                      </p>
                      <br />
                      <ValidatorForm
                        instantValidate={true}
                        onSubmit={handleFormSubmit}
                      >
                        <div className="form-group row">
                          <label
                            htmlFor="fname"
                            className="required col-md-5 control-label"
                            aria-required="true"
                          >
                            Metadata URL
                          </label>
                          <div className="col-md-7">
                            <TextValidator
                              onChange={(e) => changeURL(e.target.value)}
                              name="name"
                              value={url}
                              type="text"
                              validators={[
                                "required",
                                "matchRegexp:^((https?|ftp|smtp):)?(www.)?[a-z0-9]+[a-z]+([a-zA-Z0-9#]+?)*$",
                              ]}
                              errorMessages={["This field is required"]}
                              className={"form-control"}
                              placeholder="https://..."
                            />
                            <span className="help">
                              The URL to your SAML Metadata XML file. It must be
                              publicly accessible for Pages Framework to
                              download and process.
                            </span>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-md-5 control-label">
                            Formation
                          </label>
                          <div className="col-md-7">
                            <div className="form-check form-check-inline success">
                              <input
                                type="radio"
                                value="male"
                                name="optionyes"
                                id="male"
                              />
                              <label htmlFor="male">Clustered</label>
                            </div>
                            <div className="form-check form-check-inline success">
                              <input
                                type="radio"
                                checked="checked"
                                value="female"
                                onChange={() => {}}
                                name="optionyes"
                                id="female"
                              />
                              <label htmlFor="female">Stacked</label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            className="col-md-5 control-label required"
                            aria-required="true"
                          >
                            Referral
                          </label>
                          <div className="col-md-7">
                            <div className="row">
                              <div className="col-md-8">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="fname"
                                  placeholder="http://kepler.app/?ref=companyname"
                                  name="name"
                                  required=""
                                  aria-required="true"
                                />
                                <span className="help">
                                  Look for the referral person name in your
                                  account xm
                                  <code>Entity_ref=""</code> and paste it above
                                </span>
                              </div>
                              <div className="col-md-4 sm-m-t-10">
                                <input
                                  type="text"
                                  placeholder="XXXX-XX"
                                  className="form-control"
                                />
                                <span className="help">
                                  6 digit referral code provided
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            htmlFor="position"
                            className="col-md-5 control-label"
                          >
                            Test Configuration
                          </label>
                          <div className="col-md-7">
                            <button
                              aria-label=""
                              className="btn btn-default m-b-10 m-t-5"
                            >
                              Test with my project
                            </button>
                            <span className="help">
                              Test if your pages UI framework works with your
                              backend project correctly and adaptively
                            </span>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            htmlFor="name"
                            className="col-md-5 control-label"
                          >
                            Project SSL Scope
                          </label>
                          <div className="col-md-7">
                            <textarea
                              className="form-control"
                              rows="4"
                              id="name"
                              placeholder="Briefly Describe your reports"
                            ></textarea>
                            <span className="help">
                              Add report descriptions and analysis data report
                              to provide a SSL certificate function clearer
                            </span>
                          </div>
                        </div>
                        <br />
                        <div className="row">
                          <div className="col-md-6">
                            <p className="small-text hint-text">
                              Note: changes may take some time to apply. Wait a
                              day and then try to verify again{" "}
                            </p>
                          </div>
                          <div className="col-md-6">
                            <button
                              aria-label=""
                              className="btn btn-success pull-right"
                              type="submit"
                            >
                              Save Changes
                            </button>
                          </div>
                        </div>
                      </ValidatorForm>
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
