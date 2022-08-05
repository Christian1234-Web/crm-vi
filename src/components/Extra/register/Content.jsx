import React, { Fragment, useState } from "react";
import { ValidatorForm } from "react-form-validator-core";
import WithoutMsgValidation from "../../Forms/FormLayouts/WithoutMsgValidation";
import "../style.css";

const content = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  let handleFormSubmit = () => {
    //Call this function on form submit with no errors
  };

  return (
    <Fragment>
      <div className="register-container full-height sm-p-t-30">
        <div className="d-flex justify-content-center flex-column full-height-extra ">
          <img
            src={process.env.PUBLIC_URL + "/assets/img/logo.png"}
            alt="logo"
            data-src={process.env.PUBLIC_URL + "/assets/img/logo.png"}
            data-src-retina="/assets/img/logo_2x.png"
            width="78"
            height="22"
          />
          <h3>
            Pages makes it easy to enjoy what matters the most in your life
          </h3>
          <p>
            Create a pages account. If you have a facebook account, log into it
            for this process. Sign in with{" "}
            <a href="javascript:void(0);" className="text-info">
              Facebook
            </a>{" "}
            or{" "}
            <a href="javascript:void(0);" className="text-info">
              Google
            </a>
          </p>
          <ValidatorForm
            instantValidate={true}
            onSubmit={handleFormSubmit}
            className="p-t-15"
          >
            <div className="row">
              <div className="col-md-6">
                <WithoutMsgValidation
                  onChange={(e) => setFirstName(e.target.value)}
                  name="firstName"
                  placeholder="John"
                  value={firstName}
                  validators={["required"]}
                  errorMessages={["Required field"]}
                  className={"form-control"}
                  label={"First Name"}
                  require="true"
                />
              </div>
              <div className="col-md-6">
                <WithoutMsgValidation
                  onChange={(e) => setLastName(e.target.value)}
                  name="lname"
                  placeholder="Smith"
                  value={lastName}
                  validators={["required"]}
                  errorMessages={["Required field"]}
                  className={"form-control"}
                  label={"Last Name"}
                  require="true"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <WithoutMsgValidation
                  onChange={(e) => setUserName(e.target.value)}
                  name="userName"
                  placeholder="yourname.pages.com (this can be changed later)"
                  value={userName}
                  validators={["required", "isEmail"]}
                  errorMessages={["Required field"]}
                  className={"form-control"}
                  label={"Pages User name"}
                  require="true"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <WithoutMsgValidation
                  onChange={(e) => setPassword(e.target.value)}
                  name="Password"
                  placeholder="Minimun of 4 characters"
                  value={password}
                  validators={["required"]}
                  errorMessages={["Required field"]}
                  className={"form-control"}
                  label={"Password"}
                  require="true"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <WithoutMsgValidation
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  value={email}
                  placeholder="We will sendn login details to you"
                  validators={["required", "isEmail"]}
                  errorMessages={["Required field"]}
                  className={"form-control"}
                  label={"Email"}
                  require="true"
                />
              </div>
            </div>
            <div className="row m-t-10">
              <div className="col-lg-6">
                <p>
                  <small>
                    I agree to the{" "}
                    <a href="javascript:void(0);" className="text-info">
                      Pages Terms
                    </a>{" "}
                    and{" "}
                    <a href="javascript:void(0);" className="text-info">
                      Privacy
                    </a>
                    .
                  </small>
                </p>
              </div>
              <div className="col-lg-6 text-right">
                <a href="javascript:void(0);" className="text-info small">
                  Help? Contact Support
                </a>
              </div>
            </div>
            <button
              aria-label=""
              className="btn btn-primary btn-cons m-t-10"
              type="submit"
            >
              Create a new account
            </button>
          </ValidatorForm>
        </div>
      </div>
      <div className=" full-width">
        <div className="register-container m-b-10 clearfix">
          <div className="m-b-30 sm-m-t-20 sm-p-r-15 sm-p-b-20 clearfix d-flex-md-up">
            <div className="col-md-2 no-padding d-flex align-items-center">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/demo/pages_icon.png"}
                alt=""
                className=""
                data-src={
                  process.env.PUBLIC_URL + "/assets/img/demo/pages_icon.png"
                }
                data-src-retina="/assets/img/demo/pages_icon_2x.png"
                width="60"
                height="60"
              />
            </div>
            <div className="col-md-9 no-padding d-flex align-items-center">
              <p className="hinted-text small inline sm-p-t-10">
                No part of this website or any of its contents may be
                reproduced, copied, modified or adapted, without the prior
                written consent of the author, unless otherwise indicated for
                stand-alone materials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default content;
