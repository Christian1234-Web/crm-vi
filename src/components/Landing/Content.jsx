import React, { useState, useRef } from "react";
import { ValidatorForm } from "react-form-validator-core";
// import { useHistory } from "react-router-dom";
// import WithoutMsgValidation from "./WithoutMsgValidation";
// import InputWithLabel from './InputWithLabel'
import LandingImg from './pat_logo.png';
import TextValidator from "./FormValidation";
import "../../pages/scss/themes/simpleTheme/simple.scss";
import './landing.css';
// import '../../pages/css/pages.css'
import { ProgressOne } from "../UIElements/ProgressAndActivity/Content";
import Alert from '../UIElements/Alert'
import { TOKEN_COOKIE } from "../../services/constants";
import SSRStorage from '../../services/storage';
const storage = new SSRStorage();



const content = () => {
  const form_login = useRef();
  const form_register = useRef();
  const [username, setUsername] = useState('');
  const [note, setNote] = useState("Don't");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState();
  const [error_login, setError_login] = useState();
  const [loading, setLoading] = useState(false);

  const container_height = '135px';

  const handleRegister = async () => {
    setLoading(true);
    const data = { userName: username, email, password };
    console.log(data);
    const url = `https://deda-crm-backend.herokuapp.com/accounts/register`;
    fetch(url, {
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    }).then(res => res.json())
      .then(res => {
        console.log(res);
        if (res.success === true) {
          setLoading(false);
          setError(false);
          showLoginForm()
        } else {
          setLoading(false);
          setError(true);
        }
      })

  };

  const handleLogin = () => {
    setLoading(true);
    const data = { email, password };
    const url = `https://deda-crm-backend.herokuapp.com/accounts/login`;
    fetch(url, {
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    }).then(res => res.json())
      .then(res => {
        console.log(res);
        if (res.success === true) {
          storage.setItem(TOKEN_COOKIE, res.accessToken);
          location.href = '/simple/dashboard';
        } else {
          setLoading(false);
          setError_login(true);
        }
      })
  }
  const showLoginForm = () => {
    form_register.current.style.display = 'none'
    setNote("Don't");
    form_login.current.style.display = '';
  }
  const showRegisterForm = () => {
    form_login.current.style.display = 'none';
    setNote("Already");
    form_register.current.style.display = ''
  }

  return (


    <div style={{ height: '100%', overflow: 'hidden' }}>

      <section className="jumbotron demo-custom-height xs-full-height" style={{ backgroundImage: "url(./hero_4.jpeg)" }}><div className="container-xs-height full-height">
        <div className="col-xs-height col-middle text-left">
          <div className="container-fluid">
            <div className="col-xl-4 col-lg-4 p-4 pull-right">
              <div className="card">
                <div className="card-header ">
                  <div className="card-title">CENTIO INC.</div>
                  {loading ? <div className="pull-right">
                    <ProgressOne />
                  </div> : ''}
                </div>
                <div className="card-body">
                  <h2 className="mw-80">Get started with your account.</h2>
                  <p className="fs-16 mw-80 m-b-40" style={{ marginBottom: '40px' }}> Find your people. Engage your customers. Build your brand.
                    {` ${note}`} have an
                    Account?
                    {note === 'Already' ? <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => showLoginForm()}> Login</span>
                      : <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => showRegisterForm()}> Register</span>}
                  </p>
                  {/* <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => showRegisterForm()}> Register</span> */}
                  {/* <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => showLoginForm()}> Login</span> */}

                  <div ref={form_register} style={{ display: 'none' }}>
                    <ValidatorForm
                      instantValidate={true}
                      onSubmit={handleRegister}

                    >
                      <div className="row" >
                        <div className="col-md-12">
                          <TextValidator
                            onChange={(e) => setUsername(e.target.value)}
                            name="password"
                            value={username}
                            type="text"
                            validators={["required"]}
                            errorMessages={["This field is required"]}
                            className={"form-control"}
                            label={"Username"}
                            placeholder="Minimum of 4 characters."
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <TextValidator
                            onChange={(e) => setPassword(e.target.value)}
                            name="password"
                            value={password}
                            type="password"
                            validators={["required"]}
                            errorMessages={["This field is required"]}
                            className={"form-control"}
                            label={"Password"}
                            placeholder="Minimum of 4 characters"
                          />
                        </div>
                        <div className="col-md-6">
                          <TextValidator
                            onChange={(e) => setPassword(e.target.value)}
                            name="password"
                            value={password}
                            type="password"
                            validators={["required"]}
                            errorMessages={["This field is required"]}
                            className={"form-control"}
                            label={"Confirm Password"}
                            placeholder="Confirm password."
                          />
                        </div>
                      </div>


                      <div className="row">
                        <div className="col-md-12">
                          <TextValidator
                            onChange={(e) => setEmail(e.target.value)}
                            name="email"
                            value={email}
                            type="email"
                            validators={["required"]}
                            errorMessages={["This field is required"]}
                            className={"form-control"}
                            label={"Email"}
                          // placeholder="Minimum of 4 characters."
                          />
                        </div>
                      </div>
                      {/* <AlertGroupItem
                 mainText={'wow'}
                 textRightWarning={'hello'}
                 textRightMaster={'sorry'}
                    /> */}
                      {error === true ? <Alert type="danger">
                        <strong>Error: </strong>Failed to register please try  again later
                        <button
                          aria-label=""
                          className="close"
                          data-dismiss="alert"
                        ></button>
                      </Alert> : error === false ? <Alert type="success">
                        <strong>Success: </strong>Register successfully
                        <button
                          aria-label=""
                          className="close"
                          data-dismiss="alert"
                        ></button>
                      </Alert> : ''}
                      <div className="clearfix"></div>
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="form-check primary m-t-0">
                            <input
                              type="checkbox"
                              value="1"
                              id="checkbox-agree"
                            />
                            <label htmlFor="checkbox-agree">
                              I am registering as an organization
                            </label>
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <button
                            aria-label=""
                            className="btn btn-primary pull-right btn-lg btn-block"
                            type="submit"
                          >
                            Register

                          </button>

                        </div>
                      </div>

                    </ValidatorForm>
                  </div>
                  <div ref={form_login} style={{ display: '' }}>
                    <ValidatorForm
                      instantValidate={true}
                      onSubmit={() => handleLogin()}

                    >

                      <div className="row">
                        <div className="col-md-12">
                          <TextValidator
                            onChange={(e) => setEmail(e.target.value)}
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

                      <div className="row">
                        <div className="col-md-12">
                          <TextValidator
                            onChange={(e) => setPassword(e.target.value)}
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
                      {error_login === true ? <Alert type="danger">
                        <strong>Wrong Details: </strong>Wrong email or password
                        <button
                          aria-label=""
                          className="close"
                          data-dismiss="alert"
                        ></button>
                      </Alert> : error_login === false ? <Alert type="success">
                        <strong>Success: </strong>Login successfully
                        <button
                          aria-label=""
                          className="close"
                          data-dismiss="alert"
                        ></button>
                      </Alert> : ''}
                      <div className="clearfix"></div>
                      <div className="row m-t-25">
                        <div className="col-xl-6 p-b-10">

                        </div>
                        <div className="col-xl-6">
                          <button
                            aria-label=""
                            className="btn btn-primary pull-right btn-lg btn-block"
                            type="submit"
                          >
                            Login

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
      </div>
      </section>
      <section className="p-b-30 p-t-40">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <svg xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                // xmlns:xodm="http://www.corel.com/coreldraw/odm/2003"
                // xml:space="preserve" 
                width="195.127px" height="30.008px" version="1.1"
                style={{ width: '45%', height: '45%' }}
                // style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision;
                //  image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                viewBox="0 0 20543.68 3175.47">
                <defs>
                  {/* <![CDATA[
    .str0 {stroke:black;stroke-width:64.5;stroke-miterlimit:22.9256}
    .str1 {stroke:#FEFEFE;stroke-width:24.38;stroke-miterlimit:22.9256}
    .fil0 {fill:none}
    .fil2 {fill:black}
    .fil3 {fill:#FEFEFE;fill-rule:nonzero}
    .fil1 {fill:black;fill-rule:nonzero}
   ]]> */}

                </defs>
                <g id="Layer_x0020_1">
                  <metadata id="CorelCorpID_0Corel-Layer" />
                  <g id="_2126303656032">
                    <line class="fil0 str0" x1="2312.69" y1="172.41" x2="2312.69" y2="2949.64" />
                    <path class="fil1" d="M14384.81 1834.59l-207.06 357.03 -209.12 -357.03 -41.96 0 0 481.54 48.85 0 0 -383.17 189.17 321.95 24.07 0 189.18 -324.01 0 385.23 48.84 0 0 -481.54 -41.96 0zm373.54 484.98c19.95,0 37.15,-16.5 37.15,-37.83 0,-21.33 -17.2,-37.15 -37.15,-37.15 -19.95,0 -36.47,15.82 -36.47,37.15 0,21.33 16.51,37.83 36.47,37.83zm691.35 -3.44l53.65 0 -220.13 -481.54 -50.21 0 -220.13 481.54 52.97 0 57.78 -128.63 268.28 0 57.78 128.63zm-307.49 -169.91l115.57 -258.66 115.57 258.66 -231.14 0zm615.68 173.35c19.95,0 37.15,-16.5 37.15,-37.83 0,-21.33 -17.2,-37.15 -37.15,-37.15 -19.95,0 -36.47,15.82 -36.47,37.15 0,21.33 16.51,37.83 36.47,37.83zm683.78 -484.98l0 390.74 -310.25 -390.74 -41.96 0 0 481.54 50.91 0 0 -390.73 309.55 390.73 41.96 0 0 -481.54 -50.21 0zm381.8 484.98c19.95,0 37.15,-16.5 37.15,-37.83 0,-21.33 -17.2,-37.15 -37.15,-37.15 -19.95,0 -36.47,15.82 -36.47,37.15 0,21.33 16.51,37.83 36.47,37.83zm691.35 -3.44l53.65 0 -220.13 -481.54 -50.21 0 -220.13 481.54 52.97 0 57.78 -128.63 268.28 0 57.78 128.63zm-307.49 -169.91l115.57 -258.66 115.57 258.66 -231.14 0zm615.68 173.35c19.95,0 37.15,-16.5 37.15,-37.83 0,-21.33 -17.2,-37.15 -37.15,-37.15 -19.95,0 -36.47,15.82 -36.47,37.15 0,21.33 16.51,37.83 36.47,37.83zm670.71 -81.86c-37.15,26.83 -79.8,37.15 -125.89,37.15 -118.32,0 -205.69,-85.3 -205.69,-199.49 0,-114.89 87.36,-199.49 206.37,-199.49 56.42,0 104.56,16.5 145.15,56.41l31.65 -32.34c-42.66,-46.08 -105.94,-69.47 -178.86,-69.47 -147.21,0 -254.52,103.87 -254.52,244.9 0,141.02 107.32,244.9 253.84,244.9 66.72,0 131.39,-20.65 176.79,-61.23l0 -183.66 -48.84 0 0 162.35zm367.35 81.86c19.95,0 37.15,-16.5 37.15,-37.83 0,-21.33 -17.2,-37.15 -37.15,-37.15 -19.95,0 -36.47,15.82 -36.47,37.15 0,21.33 16.51,37.83 36.47,37.83zm382.47 -47.46l0 -178.86 249.03 0 0 -43.34 -249.03 0 0 -171.28 279.29 0 0 -44.04 -330.2 0 0 481.54 340.52 0 0 -44.02 -289.61 0zm584.04 47.46c19.95,0 37.15,-16.5 37.15,-37.83 0,-21.33 -17.2,-37.15 -37.15,-37.15 -19.95,0 -36.47,15.82 -36.47,37.15 0,21.33 16.51,37.83 36.47,37.83zm716.11 -3.44l-117.64 -165.1c70.17,-22.69 110.07,-75.66 110.07,-151.34 0,-103.18 -74.3,-165.1 -196.74,-165.1l-180.24 0 0 481.54 50.91 0 0 -152.72 129.33 0c13.76,0 26.14,-0.68 38.53,-2.06l110.06 154.78 55.72 0zm-205.69 -196.06l-127.95 0 0 -241.45 127.95 0c96.31,0 147.21,44.02 147.21,121.06 0,75.68 -50.9,120.38 -147.21,120.38z" />
                    <path class="fil1" d="M14363.38 1601.89l-133.59 -187.5c79.69,-25.79 125,-85.94 125,-171.88 0,-117.2 -84.38,-187.51 -223.44,-187.51l-204.69 0 0 546.89 57.81 0 0 -173.44 146.88 0c15.63,0 29.69,-0.79 43.76,-2.35l125 175.79 63.28 0zm-233.6 -222.66l-145.32 0 0 -274.22 145.32 0c109.38,0 167.18,50 167.18,137.51 0,85.94 -57.81,136.71 -167.18,136.71zm489.13 172.67l0 -203.14 282.82 0 0 -49.22 -282.82 0 0 -194.53 317.2 0 0 -50.01 -375 0 0 546.89 386.73 0 0 -50 -328.92 0zm534.46 50l364.07 0 0 -50 -306.26 0 0 -496.9 -57.81 0 0 546.89zm939.92 0l60.94 0 -250 -546.89 -57.03 0 -250.01 546.89 60.16 0 65.62 -146.1 304.7 0 65.62 146.1zm-349.23 -192.97l131.25 -293.76 131.25 293.76 -262.51 0zm649.3 192.97l57.82 0 0 -496.88 192.19 0 0 -50.01 -442.21 0 0 50.01 192.19 0 0 496.88zm411.8 0l57.81 0 0 -546.89 -57.81 0 0 546.89zm544.6 4.69c164.08,0 286.73,-117.98 286.73,-278.13 0,-160.16 -122.65,-278.13 -286.73,-278.13 -165.62,0 -287.51,118.75 -287.51,278.13 0,159.37 121.88,278.13 287.51,278.13zm0 -51.57c-132.03,0 -230.46,-96.09 -230.46,-226.56 0,-130.47 98.43,-226.58 230.46,-226.58 131.25,0 228.92,96.1 228.92,226.58 0,130.47 -97.66,226.56 -228.92,226.56zm886.03 -500.02l0 443.77 -352.35 -443.77 -47.66 0 0 546.89 57.81 0 0 -443.76 351.57 443.76 47.67 0 0 -546.89 -57.04 0zm455.54 551.58c139.85,0 203.91,-68.75 203.91,-149.23 0,-199.21 -336.72,-108.6 -336.72,-258.59 0,-54.69 44.54,-99.22 144.54,-99.22 48.44,0 103.12,14.85 150,45.32l19.53 -46.1c-43.74,-30.47 -107.8,-48.44 -169.52,-48.44 -139.07,0 -201.58,69.53 -201.58,150 0,202.35 336.73,110.16 336.73,260.17 0,53.91 -44.54,96.87 -146.88,96.87 -71.87,0 -141.41,-28.12 -180.47,-66.4l-22.66 44.52c40.62,42.2 121.09,71.11 203.13,71.11zm799.3 -551.58l0 243.76 -342.19 0 0 -243.76 -57.81 0 0 546.89 57.81 0 0 -252.35 342.19 0 0 252.35 57.04 0 0 -546.89 -57.04 0zm304.76 546.89l57.81 0 0 -546.89 -57.81 0 0 546.89zm510.23 -546.89l-204.69 0 0 546.89 57.81 0 0 -172.66 146.88 0c139.07,0 223.44,-70.31 223.44,-186.72 0,-117.2 -84.38,-187.51 -223.44,-187.51zm-1.56 323.45l-145.32 0 0 -273.44 145.32 0c109.38,0 167.18,50 167.18,137.51 0,85.94 -57.81,135.93 -167.18,135.93z" />
                    <polygon class="fil2 str1" points="12.19,12.19 1988.29,12.19 1988.29,3163.29 12.19,3163.29 " />
                    <path class="fil1" d="M3451.11 855.43l-671.7 0 0 1632.61 303.19 0 0 -471.12 368.51 0c429.14,0 695.01,-221.57 695.01,-580.74 0,-361.51 -265.87,-580.75 -695.01,-580.75zm-13.99 904.93l-354.52 0 0 -648.37 354.52 0c265.87,0 403.49,118.94 403.49,324.19 0,205.24 -137.62,324.18 -403.49,324.18zm2152.7 727.68l317.2 0 -737 -1632.61 -298.54 0 -734.67 1632.61 312.53 0 160.93 -377.83 816.3 0 163.26 377.83zm-876.93 -615.73l305.53 -713.67 307.86 713.67 -613.39 0zm1651.26 615.73l303.2 0 0 -1376.05 541.09 0 0 -256.56 -1385.38 0 0 256.56 541.09 0 0 1376.05zm2467.58 0l-375.5 -536.42c221.57,-86.3 347.51,-268.22 347.51,-515.43 0,-361.51 -265.87,-580.75 -695.01,-580.75l-671.7 0 0 1632.61 303.19 0 0 -475.79 368.51 0c20.99,0 41.98,0 62.96,-2.33l333.53 478.11 326.52 0zm-333.52 -1051.86c0,205.24 -137.62,326.52 -403.49,326.52l-354.52 0 0 -650.71 354.52 0c265.87,0 403.49,118.94 403.49,324.19zm946.91 797.64l0 -450.13 788.31 0 0 -249.55 -788.31 0 0 -424.49 888.61 0 0 -254.22 -1191.8 0 0 1632.61 1224.45 0 0 -254.22 -921.26 0zm1259.44 254.22l1156.81 0 0 -256.55 -853.62 0 0 -1376.06 -303.19 0 0 1632.61zm2630.81 0l317.2 0 -737 -1632.61 -298.54 0 -734.67 1632.61 312.53 0 160.93 -377.83 816.3 0 163.26 377.83zm-876.93 -615.73l305.53 -713.67 307.86 713.67 -613.39 0z" />
                    <path class="fil3" d="M1047.45 1815.04l-551.82 0 0 1341.21 249.09 0 0 -387.03 302.73 0c352.54,0 570.98,-182.03 570.98,-477.09 0,-296.99 -218.44,-477.09 -570.98,-477.09zm-11.49 743.41l-291.23 0 0 -532.64 291.23 0c218.42,0 331.47,97.71 331.47,266.32 0,168.61 -113.04,266.32 -331.47,266.32zm850.7 611.21c86.22,0 157.12,-67.06 157.12,-159.03 0,-95.8 -70.9,-159.02 -157.12,-159.02 -86.22,0 -157.12,63.22 -157.12,159.02 0,91.97 70.9,159.03 157.12,159.03z" />
                  </g>
                </g>
              </svg>
              <div className="m-t-10 ">
                <ul className="no-style fs-11 no-padding font-arial">
                  <li className="inline no-padding"><a href="#" className=" text-master p-r-10 b-r b-grey">Home</a></li>
                  <li className="inline no-padding"><a href="#" className="hint-text text-master p-l-10 p-r-10 b-r b-grey">Themeforest Profile</a></li>
                  <li className="inline no-padding"><a href="#" className="hint-text text-master p-l-10 p-r-10 b-r b-grey">Support</a></li>
                  <li className="inline no-padding"><a href="#" className="hint-text text-master p-l-10 p-r-10 xs-no-padding xs-m-t-10">Made with Pages</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 text-right font-arial sm-text-left">
              <p className="fs-11 no-margin small-text"><span className="hint-text">Exclusive only at</span> Envato Marketplace,Themeforest <span className="hint-text">See</span> Standard licenses &amp; Extended licenses
              </p>
              <p className="fs-11 muted">Copyright © 2014 REVOX. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
};

export default content;
