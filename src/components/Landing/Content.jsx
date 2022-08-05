import React, { useState, useRef } from "react";
import { ValidatorForm } from "react-form-validator-core";
// import WithoutMsgValidation from "./WithoutMsgValidation";
// import InputWithLabel from './InputWithLabel'
import LandingImg from './logo_black.png'
import TextValidator from "./FormValidation";
import "../../pages/scss/themes/simpleTheme/simple.scss";
import './landing.css';
import BgImg from './images/hero_4.jpeg';


const content = () => {
  const form_login = useRef();
  const form_register = useRef();
  const [username, setUsername] = useState('');
  const [note, setNote] = useState("Don't");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");




  let handleFormSubmit = () => {
    //Call this function on form submit with no errors
  };
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

    // <div className="landing_container">

    //   <section className="section_one" style={{
    //     backgroundImage: `url("./hero_4.jpeg")`
    //   }}>
    //     <div className="row">
    //       <div className="col-xl-8 col-lg-8">
    //       </div>
    //       <div className="col-xl-4 col-lg-4 p-4 ">
    //         <div className="card" style={{ height: '95%' }}
    //         >
    //           <div className="card-header ">
    //             <div className="card-title">Modern Layout.</div>
    //           </div>
    //           <div className="card-body">
    //             <h2 className="mw-80 get-h2">Get started with your account.</h2>
    //             <p className="fs-8 get-p mw-80 ">{` Find your people. Engage your customers. Build your brand.
    //               Do it all with Page's UI Framework Platform. ${note} have an
    //               account?`}
    //               {note === 'Already' ? <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => showLoginForm()}> Login</span>
    //                 : <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => showRegisterForm()}> Register</span>}

    //             </p>
    //             {/* ref={form_register} style={{display:'none'}} */}
    //             <div ref={form_register} style={{ display: 'none' }}>
    //               <ValidatorForm
    //                 instantValidate={true}
    //                 onSubmit={handleFormSubmit}

    //               >
    //                 <div className="row" >
    //                   <div className="col-md-12">
    //                     <TextValidator
    //                       onChange={(e) => setUsername(e.target.value)}
    //                       name="password"
    //                       value={username}
    //                       type="text"
    //                       validators={["required"]}
    //                       errorMessages={["This field is required"]}
    //                       className={"form-control"}
    //                       label={"Username"}
    //                       placeholder="Minimum of 4 characters."
    //                     />
    //                   </div>
    //                 </div>
    //                 <div className="row">
    //                   <div className="col-md-6">
    //                     <TextValidator
    //                       onChange={(e) => setEmail(e.target.value)}
    //                       name="email"
    //                       value={email}
    //                       type="email"
    //                       validators={["required"]}
    //                       errorMessages={["This field is required"]}
    //                       className={"form-control"}
    //                       label={"Email"}
    //                       placeholder="example@address.com"
    //                     />
    //                   </div>
    //                   <div className="col-md-6">
    //                     <TextValidator
    //                       onChange={(e) => setPassword(e.target.value)}
    //                       name="password"
    //                       value={password}
    //                       type="password"
    //                       validators={["required"]}
    //                       errorMessages={["This field is required"]}
    //                       className={"form-control"}
    //                       label={"Password"}
    //                       placeholder="Minimum of 4 characters."
    //                     />
    //                   </div>
    //                 </div>


    //                 <div className="row">
    //                   <div className="col-md-12">
    //                     <TextValidator
    //                       onChange={(e) => setPassword(e.target.value)}
    //                       name="password"
    //                       value={password}
    //                       type="password"
    //                       validators={["required"]}
    //                       errorMessages={["This field is required"]}
    //                       className={"form-control"}
    //                       label={"Confirm Password"}
    //                     // placeholder="Minimum of 4 characters."
    //                     />
    //                   </div>
    //                 </div>


    //                 <div className="clearfix"></div>
    //                 <div className="row m-t-25">
    //                   <div className="col-xl-6 p-b-10">
    //                     {/* <p className="small-text hint-text">
    //                     By clicking the "Get Started!" button, you are
    //                     creating a Pages account, and you agree to Pages's
    //                     <a href="javascript:void(0);">
    //                       Terms of Use
    //                     </a> and{" "}
    //                     <a href="javascript:void(0);">Privacy Policy</a>.
    //                   </p> */}
    //                   </div>
    //                   <div className="col-xl-6">
    //                     <button
    //                       aria-label=""
    //                       className="btn btn-primary pull-right btn-lg btn-block"
    //                       type="submit"
    //                     >
    //                       Register
    //                     </button>

    //                   </div>
    //                 </div>
    //               </ValidatorForm>
    //             </div>
    //             <div ref={form_login} style={{ display: '' }}>
    //               <ValidatorForm
    //                 instantValidate={true}
    //                 onSubmit={() => {
    //                   location.href = '/simple/dashboard'
    //                 }}

    //               >

    //                 <div className="row">
    //                   <div className="col-md-12">
    //                     <TextValidator
    //                       onChange={(e) => setEmail(e.target.value)}
    //                       name="email"
    //                       value={email}
    //                       type="email"
    //                       validators={["required"]}
    //                       errorMessages={["This field is required"]}
    //                       className={"form-control"}
    //                       label={"Email"}
    //                       placeholder="example@address.com"
    //                     />
    //                   </div>
    //                 </div>

    //                 <div className="row">
    //                   <div className="col-md-12">
    //                     <TextValidator
    //                       onChange={(e) => setPassword(e.target.value)}
    //                       name="password"
    //                       value={password}
    //                       type="password"
    //                       validators={["required"]}
    //                       errorMessages={["This field is required"]}
    //                       className={"form-control"}
    //                       label={"Password"}
    //                       placeholder="Minimum of 4 characters."
    //                     />
    //                   </div>
    //                 </div>
    //                 <div className="clearfix"></div>
    //                 <div className="row m-t-25">
    //                   <div className="col-xl-6 p-b-10">
    //                     {/* <p className="small-text hint-text">
    //                     By clicking the "Get Started!" button, you are
    //                     creating a Pages account, and you agree to Pages's
    //                     <a href="javascript:void(0);">
    //                       Terms of Use
    //                     </a> and{" "}
    //                     <a href="javascript:void(0);">Privacy Policy</a>.
    //                   </p> */}
    //                   </div>
    //                   <div className="col-xl-6">
    //                     <button
    //                       aria-label=""
    //                       className="btn btn-primary pull-right btn-lg btn-block"
    //                       type="submit"
    //                     >
    //                       Login
    //                     </button>

    //                   </div>
    //                 </div>
    //               </ValidatorForm>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   <img src=".../" alt="" />
    //   <section className="pb-2 pt-2 section_two" >
    //     <div className="container-fluid">
    //       <div className="row">
    //         <div className="col-sm-6">
    //           <img src={LandingImg} width="152" height="21"
    //             data-src-retina="assets/images/logo_black_2x.png" className="logo inline m-r-50" alt="" />
    //           <div className="m-t-10 ">
    //             <ul className="no-style fs-11 no-padding font-arial">
    //               <li className="inline no-padding"><a href="#" className=" text-master p-r-10 b-r b-grey">Home</a></li>
    //               <li className="inline no-padding"><a href="#" className="hint-text text-master p-l-10 p-r-10 b-r b-grey">Themeforest Profile</a></li>
    //               <li className="inline no-padding"><a href="#" className="hint-text text-master p-l-10 p-r-10 b-r b-grey">Support</a></li>
    //               <li className="inline no-padding"><a href="#" className="hint-text text-master p-l-10 p-r-10 xs-no-padding xs-m-t-10">Made with Pages</a></li>
    //             </ul>
    //           </div>
    //         </div>
    //         <div className="col-sm-6 text-right font-arial sm-text-left">
    //           <p className="fs-11 no-margin small-text"><span className="hint-text">Exclusive only at</span> Envato Marketplace,Themeforest <span className="hint-text">See</span> Standard licenses &amp; Extended licenses
    //           </p>
    //           <p className="fs-11 muted">Copyright &copy; 2014 REVOX. All Rights Reserved.</p>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    // </div>
<div>

    <section className="jumbotron demo-custom-height xs-full-height" style={{backgroundImage: "url(./hero_4.jpeg)"}}><div className="container-xs-height full-height">
    <div className="col-xs-height col-middle text-left">
        <div className="container-fluid">
      <div className="col-xl-4 col-lg-4 p-4 pull-right"><div className="card"><div className="card-header ">
      <div className="card-title">Modern Layout.</div></div><div className="card-body">
        <h2 className="mw-80">Get started with your account.</h2>
        <p className="fs-16 mw-80 m-b-40" style={{marginBottom:'40px'}}> Find your people. Engage your customers. Build your brand.
                   {` ${note}`} have an
                  Account?
                  {note === 'Already' ? <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => showLoginForm()}> Login</span>
                    : <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => showRegisterForm()}> Register</span>}
                  </p>
                  {/* <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => showRegisterForm()}> Register</span> */}
                  {/* <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => showLoginForm()}> Login</span> */}
                  {/* <div ref={form_register} style={{display: "none"}}>
                    <form>
                    <div className="row"><div className="col-md-12"><div className="form-group form-group-default d-flex justify-content-between " aria-required="true">
                      <div><label className="">Username</label><input name="password" type="text" className="form-control" label="Username" placeholder="Minimum of 4 characters." value=""/></div>
                      </div></div></div><div className="row"><div className="col-md-6"><div className="form-group form-group-default d-flex justify-content-between " aria-required="true"><div>
                        <label className="">Email</label><input name="email" type="email" className="form-control" label="Email" placeholder="example@address.com" value=""/></div>
                      </div></div><div className="col-md-6"><div className="form-group form-group-default d-flex justify-content-between " aria-required="true"><div><label className="">Password</label>
                      <input name="password" type="password" className="form-control" label="Password" placeholder="Minimum of 4 characters." value=""/></div></div></div></div><div className="row">
                        <div className="col-md-12"><div className="form-group form-group-default d-flex justify-content-between " aria-required="true"><div><label className="">Confirm Password</label>
                        <input name="password" type="password" className="form-control" label="Confirm Password" value=""/></div></div>
                      </div></div><div className="clearfix"></div><div className="row m-t-25"><div className="col-xl-6 p-b-10"></div><div className="col-xl-6">
                        <button aria-label="" className="btn btn-primary pull-right btn-lg btn-block" type="submit">Register</button></div>
                        </div></form></div><div>
                          <form><div className="row"><div className="col-md-12"><div className="form-group form-group-default d-flex justify-content-between " aria-required="true">
                            <div><label className="">Email</label><input name="email" type="email" className="form-control" label="Email" placeholder="example@address.com" value=""/></div>
                            </div></div></div><div className="row"><div className="col-md-12"><div className="form-group form-group-default d-flex justify-content-between " aria-required="true">
                              <div><label className="">Password</label><input name="password" type="password" className="form-control" label="Password" placeholder="Minimum of 4 characters." value=""/>
                              </div></div></div></div><div className="clearfix"></div><div className="row m-t-25"><div className="col-xl-6 p-b-10"></div><div className="col-xl-6"><button aria-label="" className="btn btn-primary pull-right btn-lg btn-block" type="submit">Login</button>
                              </div></div>
                      </form>
                      </div> */}
                       <div ref={form_register} style={{ display: 'none' }}>
                  <ValidatorForm
                    instantValidate={true}
                    onSubmit={handleFormSubmit}

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
                          placeholder="Minimum of 4 characters."
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
                          label={"Confirm Password"}
                        // placeholder="Minimum of 4 characters."
                        />
                      </div>
                    </div>


                    <div className="clearfix"></div>
                    <div className="row m-t-25">
                      <div className="col-xl-6 p-b-10">
                        {/* <p className="small-text hint-text">
                        By clicking the "Get Started!" button, you are
                        creating a Pages account, and you agree to Pages's
                        <a href="javascript:void(0);">
                          Terms of Use
                        </a> and{" "}
                        <a href="javascript:void(0);">Privacy Policy</a>.
                      </p> */}
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
                    onSubmit={() => {
                      location.href = '/simple/dashboard'
                    }}

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
                    <div className="clearfix"></div>
                    <div className="row m-t-25">
                      <div className="col-xl-6 p-b-10">
                        {/* <p className="small-text hint-text">
                        By clicking the "Get Started!" button, you are
                        creating a Pages account, and you agree to Pages's
                        <a href="javascript:void(0);">
                          Terms of Use
                        </a> and{" "}
                        <a href="javascript:void(0);">Privacy Policy</a>.
                      </p> */}
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
            <img src={LandingImg} width="152" height="21" data-src-retina="assets/images/logo_black_2x.png" className="inline m-r-50" alt=""/>
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
